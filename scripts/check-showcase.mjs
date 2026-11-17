import { readFileSync } from "node:fs"

const data = JSON.parse(readFileSync(new URL("../data/showcase/collection.json", import.meta.url), "utf8"))
const errors = []
const fail = (message) => errors.push(message)

const works = data.works
const reserve = data.reserve
if (works.length !== 108) fail(`expected 108 scheduled works, got ${works.length}`)
if (reserve.length !== 36) fail(`expected 36 reserve works, got ${reserve.length}`)
if (data.timezone !== "UTC") fail("timezone must be UTC")
if (data.marketplaceUrl !== "https://nft.asknights.org") fail("marketplace placeholder changed")

const wallets = [
  "0x13ff77c9315dde5ac9cfdb7258f99d7d70011803",
  "tz1zagjdbcwc9r9qqauu27g1e2qsd5fwwdsh",
  "gy91rysmu4frxf4fcmmqm8oqrvvsjv4r9cejjgebkhj",
  "crzfh6ltm55tnfanh5exsmcfk2hetppsg8ndlejwm4e",
]
const blob = JSON.stringify(data).toLowerCase()
for (const wallet of wallets) {
  if (blob.includes(wallet)) fail(`wallet leaked: ${wallet}`)
}
for (const phrase of ["wallet-selection", "transfer received", "likely spam", "source selection"]) {
  if (blob.includes(phrase)) fail(`internal note leaked: ${phrase}`)
}

const slugs = new Set()
for (const work of [...works, ...reserve]) {
  for (const field of ["title", "artist", "curatorNote", "mediaUrl", "provenanceUrl", "chain"]) {
    if (!work[field]) fail(`missing ${field} on ${work.ref}`)
  }
  if (work.wallet) fail(`wallet field present on ${work.ref}`)
  if (!work.mediaUrl.startsWith("https://")) fail(`media url is not https on ${work.ref}`)
  if (slugs.has(work.slug)) fail(`duplicate slug ${work.slug}`)
  slugs.add(work.slug)
}

for (const work of reserve) {
  if (work.releaseDate || work.month) fail(`reserve work scheduled: ${work.ref}`)
}

const byMonth = new Map()
for (const work of works) {
  if (!work.releaseDate || !work.month) fail(`scheduled work missing date: ${work.ref}`)
  if (!work.releaseDate.startsWith(work.month)) fail(`${work.ref} date ${work.releaseDate} not in ${work.month}`)
  const list = byMonth.get(work.month) ?? []
  list.push(work)
  byMonth.set(work.month, list)
}

const expected = [
  ["2026-11", 16, "2026-11-05"],
  ["2026-12", 29, "2026-12-03"],
  ["2027-01", 33, "2027-01-01"],
  ["2027-02", 30, "2027-02-01"],
]
if ([...byMonth.keys()].join() !== expected.map(([id]) => id).join()) {
  fail(`months ${[...byMonth.keys()].join()} != ${expected.map(([id]) => id).join()}`)
}
for (const [id, count, opens] of expected) {
  const list = byMonth.get(id) ?? []
  if (list.length !== count) fail(`${id} has ${list.length}, expected ${count}`)
  const dates = list.map((work) => work.releaseDate).sort()
  if (dates[0] !== opens) fail(`${id} opens ${dates[0]}, expected ${opens}`)
  const tally = new Map()
  for (const date of dates) tally.set(date, (tally.get(date) ?? 0) + 1)
  const doubles = [...tally.values()].filter((value) => value === 2).length
  const overflow = [...tally.values()].filter((value) => value > 2).length
  if (overflow) fail(`${id} has a day with more than two works`)
  const extras = count - tally.size
  if (doubles !== extras) fail(`${id} double days ${doubles} != extras ${extras}`)
}

const phygital = works.filter((work) => work.phygital).map((work) => work.title).sort()
const expectedPhygital = ["Van Gogh Blue"]
if (phygital.join("|") !== expectedPhygital.join("|")) {
  fail(`phygital set changed: ${phygital.join(", ")}`)
}

if (works[0].releaseDate !== "2026-11-05") fail("first release is not 5 Nov 2026")
if (works.some((work) => work.releaseDate < "2026-11-05")) fail("a work is scheduled before launch")
if (works.some((work) => work.releaseDate >= "2026-11-18" && work.releaseDate <= "2026-12-02")) {
  fail("a work is scheduled in the 18 Nov–2 Dec gap")
}

const carried = [
  ["lumina-662", "2026-11-05"],
  ["van-gogh-blue", "2026-11-06"],
  ["antlered-ascension", "2026-11-07"],
  ["such-a-lovely-time-303", "2026-11-08"],
  ["lady-greatness", "2026-11-08"],
  ["dd166", "2026-11-09"],
  ["cps2-firebird-s-wing-42", "2026-11-10"],
  ["the-leos-115", "2026-11-11"],
  ["souvenir-study-26", "2026-11-11"],
  ["a-smile-is-more-than-a-thought", "2026-11-12"],
  ["srt-21-glitching-torus", "2026-11-13"],
  ["highway-to-hell", "2026-11-14"],
  ["untitled-sketch", "2026-11-15"],
  ["yellow-lashes-and-no-hint-of-care", "2026-11-15"],
  ["leaving-with-grace", "2026-11-16"],
  ["streetfronts-in-watercolor", "2026-11-17"],
]
for (const [slug, date] of carried) {
  const work = works.find((item) => item.slug === slug)
  if (!work) fail(`missing carried work ${slug}`)
  else if (work.releaseDate !== date) fail(`${slug} is dated ${work.releaseDate}, expected ${date}`)
}

const scheduledTokens = new Set()
for (const work of works) {
  const token = `${(work.contract || "").toLowerCase()}::${String(work.tokenId || "").toLowerCase()}`
  if (scheduledTokens.has(token)) fail(`duplicate contract and token on ${work.ref} ${work.title}`)
  scheduledTokens.add(token)
}
for (const work of reserve) {
  const token = `${(work.contract || "").toLowerCase()}::${String(work.tokenId || "").toLowerCase()}`
  if (scheduledTokens.has(token)) fail(`reserve repeats a scheduled token on ${work.ref} ${work.title}`)
}

if (errors.length) {
  console.error(errors.join("\n"))
  process.exit(1)
}
console.log("showcase data ok", works.length, "scheduled,", reserve.length, "reserve")
