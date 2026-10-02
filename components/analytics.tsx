"use client"

/**
 * Privacy-friendly analytics hook.
 * Disabled unless NEXT_PUBLIC_ANALYTICS_ID is set at build time.
 * TODO: forward `track` to the chosen cookieless provider.
 * Do not add a marketing script here before that decision.
 */
export function analyticsId() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim()
  return id ? id : null
}

export function useAnalytics() {
  const id = analyticsId()

  return {
    enabled: Boolean(id),
    track(event: string) {
      if (!id) return
      // TODO: send `event` to the configured privacy-friendly provider.
      void event
    },
  }
}

export function Analytics() {
  const id = analyticsId()
  if (!id) return null

  return (
    <script
      id="asknights-analytics"
      dangerouslySetInnerHTML={{
        __html: `window.__asknightsAnalytics=${JSON.stringify({ id })};`,
      }}
    />
  )
}
