#!/usr/bin/env python3
"""Build data/showcase/collection.json from the curator shortlist CSVs.

The `no` column is kept as `ref` (a spreadsheet row id, not a rank).
Wallet addresses and source-selection notes are omitted on purpose.
"""

from __future__ import annotations

import csv
import io
import json
import re
import sys
import unicodedata
from collections import defaultdict, deque
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "showcase" / "collection.json"

WALLETS = {
    "0x13ff77c9315dde5ac9cfdb7258f99d7d70011803",
    "tz1zagjdbcwc9r9qqauu27g1e2qsd5fwwdsh",
    "gy91rysmu4frxf4fcmmqm8oqrvvsjv4r9cejjgebkhj",
    "crzfh6ltm55tnfanh5exsmcfk2hetppsg8ndlejwm4e",
}


def parse_mime(check: str) -> str:
    match = re.search(r"(image|video|text|application)/[a-z0-9.+-]+", check or "", re.I)
    return match.group(0).lower() if match else "application/octet-stream"


def slugify(title: str) -> str:
    text = title.replace("’", "'").replace("‘", "'").replace("“", "").replace("”", "")
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text


def flags_for(row: dict) -> tuple[bool, str | None, bool]:
    flags = row.get("join / flags") or ""
    note = row.get("curator note") or ""
    blob = f"{flags}\n{note}".lower()
    phygital = "join:" in flags.lower()
    ai = None
    if "ai-generated" in blob or "ai generated" in blob:
        ai = "generated"
    elif "ai-assisted" in blob or "ai assisted" in blob:
        ai = "assisted"
    preview_still = (
        "preview image" in blob
        or "shown here by its preview" in blob
        or "contact sheet shows the still" in blob
    )
    return phygital, ai, preview_still


def read_rows(path: Path) -> list[dict]:
    # utf-8-sig strips the BOM that otherwise breaks the first quoted header.
    text = path.read_text(encoding="utf-8-sig")
    return list(csv.DictReader(io.StringIO(text)))


def work_from_row(row: dict, slug: str) -> dict:
    phygital, ai, preview_still = flags_for(row)
    artist = (row.get("artist") or "").strip()
    title = (row.get("title") or "").strip()
    note = (row.get("curator note") or "").strip()
    if not title or not artist or not note:
        raise SystemExit(f"Missing title, artist, or note on ref {row.get('no (reference only, unranked)')}")
    work = {
        "ref": (row.get("no (reference only, unranked)") or "").strip(),
        "slug": slug,
        "title": title,
        "artist": artist,
        "curatorNote": note,
        "chain": (row.get("chain") or "").strip(),
        "provenanceUrl": (row.get("marketplace/explorer link") or "").strip(),
        "mediaUrl": (row.get("media link") or "").strip(),
        "mediaMime": parse_mime(row.get("media check") or ""),
        "contract": (row.get("contract") or "").strip(),
        "tokenId": (row.get("token_id") or "").strip(),
    }
    if phygital:
        work["phygital"] = True
    if ai:
        work["ai"] = ai
    if preview_still:
        work["previewStill"] = True
    # A few media URLs embed the holding wallet as a query param. Drop it.
    for key, value in list(work.items()):
        if isinstance(value, str):
            work[key] = redact_wallets(value)
    return work


def redact_wallets(value: str) -> str:
    redacted = value
    for wallet in WALLETS:
        redacted = re.sub(re.escape(wallet), "", redacted, flags=re.I)
    return redacted


def unique_slugs(rows: list[dict]) -> list[str]:
    seen: dict[str, int] = {}
    slugs: list[str] = []
    for row in rows:
        base = slugify(row["title"]) or "work"
        slug = base
        if slug in seen:
            seen[base] += 1
            chain = re.sub(r"[^a-z0-9]+", "-", row["chain"].lower()).strip("-")
            slug = f"{base}-{chain}"
            if slug in seen:
                seen[slug] += 1
                slug = f"{slug}-{seen[slug]}"
        seen[slug] = seen.get(slug, 0) + 1
        slugs.append(slug)
    if len(set(slugs)) != len(slugs):
        raise SystemExit("Slug collision remained after disambiguation")
    return slugs


CHAIN_ORDER = ["Tezos", "Solana", "Base", "Ethereum", "Optimism", "Zora", "Polygon"]


def interleave(works: list[dict], rotate: int = 0) -> list[dict]:
    groups: dict[str, deque] = defaultdict(deque)
    for work in works:
        groups[work["chain"]].append(work)
    unknown = [chain for chain in groups if chain not in CHAIN_ORDER]
    if unknown:
        raise SystemExit(f"Unexpected chains: {unknown}")
    order = CHAIN_ORDER[rotate:] + CHAIN_ORDER[:rotate]
    mixed: list[dict] = []
    while any(groups.values()):
        for chain in order:
            if groups[chain]:
                mixed.append(groups[chain].popleft())
    return mixed


def deal_months(works: list[dict], caps: list[int]) -> list[list[dict]]:
    """Spread each chain across months, then stop a month once it is full."""
    groups: dict[str, deque] = defaultdict(deque)
    for work in works:
        groups[work["chain"]].append(work)
    months: list[list[dict]] = [[] for _ in caps]
    cursor = 0
    for chain in CHAIN_ORDER:
        for work in groups[chain]:
            placed = False
            for _ in range(len(months)):
                if len(months[cursor]) < caps[cursor]:
                    months[cursor].append(work)
                    cursor = (cursor + 1) % len(months)
                    placed = True
                    break
                cursor = (cursor + 1) % len(months)
            if not placed:
                raise SystemExit(f"No room left for {work['title']}")
    if [len(month) for month in months] != caps:
        raise SystemExit(f"Month sizes {[len(month) for month in months]} != {caps}")
    return [interleave(month, rotate=index) for index, month in enumerate(months)]


def double_indexes(day_count: int, extras: int) -> list[int]:
    """Spread extra works across the month. Index 0 stays a single work."""
    if extras <= 0:
        return []
    picked: list[int] = []
    for i in range(extras):
        pos = round((i + 1) * day_count / (extras + 1))
        pos = min(max(pos, 1), day_count - 1)
        while pos in picked:
            pos = min(pos + 1, day_count - 1)
        picked.append(pos)
    if len(set(picked)) != extras:
        raise SystemExit(f"Could not place {extras} double days across {day_count} days")
    return picked


def assign_month(works: list[dict], year: int, month: int, first_day: int | None = None) -> None:
    import calendar

    last = calendar.monthrange(year, month)[1]
    start = first_day or 1
    days = [date(year, month, day) for day in range(start, last + 1)]
    extras = len(works) - len(days)
    if extras < 0:
        raise SystemExit(f"{year}-{month:02d} has {len(days)} days for {len(works)} works")
    doubles = set(double_indexes(len(days), extras))
    slots: list[date] = []
    for index, day in enumerate(days):
        slots.append(day)
        if index in doubles:
            slots.append(day)
    if len(slots) != len(works):
        raise SystemExit("Slot count does not match works")
    month_id = f"{year}-{month:02d}"
    for work, slot in zip(works, slots):
        work["releaseDate"] = slot.isoformat()
        work["month"] = month_id


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: python3 scripts/build-showcase-data.py top100.csv reserve.csv")
    top_rows = read_rows(Path(sys.argv[1]))
    reserve_rows = read_rows(Path(sys.argv[2]))
    if len(top_rows) != 100 or len(reserve_rows) != 44:
        raise SystemExit(f"Expected 100 + 44 rows, got {len(top_rows)} + {len(reserve_rows)}")

    all_rows = top_rows + reserve_rows
    slugs = unique_slugs(all_rows)
    top = [work_from_row(row, slug) for row, slug in zip(top_rows, slugs[:100])]
    reserve = [work_from_row(row, slug) for row, slug in zip(reserve_rows, slugs[100:])]

    cycles = deal_months(top, [33, 33, 34])
    assign_month(cycles[0], 2026, 11, first_day=5)
    assign_month(cycles[1], 2026, 12)
    assign_month(cycles[2], 2027, 1)
    mixed = [work for cycle in cycles for work in cycle]

    payload = {
        "notes": (
            "Curator schedule for the ASKNIGHTS Showcase. Edit releaseDate (YYYY-MM-DD) "
            "to move a work; each date is the UTC day it becomes visible. "
            "November 2026 starts on 5 November (proposed launch). "
            "Days may list two works. Reserve entries have no releaseDate and are not shown. "
            "ref is the shortlist row id, not a rank — do not display it. "
            "Do not add prices or wallet addresses. "
            "exhibitionUrl may be added per work when a Metaverse exhibition link exists. "
            "marketplaceUrl is a placeholder for nft.asknights.org, not a live integration. "
            "Works are spread across the three months by chain, then rotated within the month "
            "so the daily sequence stays varied. That order is not a ranking."
        ),
        "timezone": "UTC",
        "marketplaceUrl": "https://nft.asknights.org",
        "works": mixed,
        "reserve": reserve,
    }

    blob = json.dumps(payload)
    lowered = blob.lower()
    for wallet in WALLETS:
        if wallet in lowered:
            raise SystemExit(f"Wallet leaked into collection file: {wallet}")
    if "source selection" in lowered or "wallet-selection" in lowered:
        raise SystemExit("Curation-method notes leaked into collection file")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Wrote {OUT}")
    for cycle in cycles:
        dates = sorted({work["releaseDate"] for work in cycle})
        doubles = {}
        for work in cycle:
            doubles[work["releaseDate"]] = doubles.get(work["releaseDate"], 0) + 1
        extra_days = [day for day, count in doubles.items() if count > 1]
        chains: dict[str, int] = defaultdict(int)
        kinds: dict[str, int] = defaultdict(int)
        for work in cycle:
            chains[work["chain"]] += 1
            kinds[work["mediaMime"]] += 1
        print(
            cycle[0]["month"],
            "works",
            len(cycle),
            "range",
            dates[0],
            dates[-1],
            "doubles",
            extra_days,
            "chains",
            dict(chains),
            "mime",
            dict(kinds),
        )
    phygital = [work["title"] for work in mixed if work.get("phygital")]
    ai = [(work["title"], work["ai"]) for work in mixed if work.get("ai")]
    print("phygital", len(phygital), phygital)
    print("ai", ai)
    print("preview stills", [work["title"] for work in mixed if work.get("previewStill")])


if __name__ == "__main__":
    main()
