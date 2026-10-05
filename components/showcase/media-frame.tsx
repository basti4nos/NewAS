"use client"

import { useEffect, useMemo, useState } from "react"
import { mediaCandidates, type MediaKind } from "@/lib/showcase-shared"

type MediaFrameProps = {
  url: string
  mime: string
  kind: MediaKind
  alt: string
  fit?: "cover" | "contain"
  priority?: boolean
  mode?: "viewer" | "thumb"
}

export function MediaFrame({ url, mime, kind, alt, fit = "contain", priority = false, mode = "viewer" }: MediaFrameProps) {
  const candidates = useMemo(() => mediaCandidates(url), [url])
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [playMotion, setPlayMotion] = useState(true)

  useEffect(() => {
    setIndex(0)
    setFailed(false)
    setLoaded(false)
  }, [url])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => {
      setReducedMotion(media.matches)
      if (media.matches) setPlayMotion(false)
    }
    apply()
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [])

  function failOver() {
    setIndex((current) => {
      if (current < candidates.length - 1) return current + 1
      setFailed(true)
      return current
    })
  }

  const src = candidates[index]
  const loading = priority ? "eager" : "lazy"

  if (mode === "thumb" && (kind === "video" || kind === "html" || kind === "file")) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-white/[0.04] text-white/70">
        <span aria-hidden className="text-lg">
          {kind === "video" ? "▶" : kind === "html" ? "⌘" : "▦"}
        </span>
        <span className="px-1 text-center text-[10px] uppercase tracking-wider">
          {kind === "video" ? "Moving image" : kind === "html" ? "Interactive" : "File"}
        </span>
      </div>
    )
  }

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/70">
        This file did not load from the available gateways.
      </div>
    )
  }

  if (kind === "html") {
    return (
      <iframe
        title={alt}
        src={src}
        className="h-full w-full border-0 bg-black"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        referrerPolicy="no-referrer"
        loading={priority ? "eager" : "lazy"}
      />
    )
  }

  if (kind === "video") {
    return (
      <video
        key={src}
        className="max-h-full max-w-full"
        controls
        playsInline
        preload="metadata"
        onError={failOver}
      >
        <source src={src} type={mime.startsWith("video/") ? mime : undefined} />
      </video>
    )
  }

  if (kind === "gif" && reducedMotion && !playMotion) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-sm text-white/70">Animated GIF. Motion is paused.</p>
        <button
          type="button"
          className="rounded-full border border-white/30 px-4 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
          onClick={() => setPlayMotion(true)}
        >
          Play animation
        </button>
      </div>
    )
  }

  const imageClass =
    fit === "cover" ? "h-full w-full object-cover" : "max-h-full max-w-full object-contain"

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/[0.04]" aria-hidden />}
      {/* Native img so a failed IPFS gateway can fall through to the next one. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={imageClass}
        loading={loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={failOver}
      />
    </div>
  )
}
