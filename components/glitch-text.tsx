type GlitchTextProps = {
  text: string
  className?: string
  onDark?: boolean
  as?: "span" | "h1" | "h2" | "p"
}

export function GlitchText({ text, className = "", onDark = false, as: Tag = "span" }: GlitchTextProps) {
  return (
    <Tag
      data-text={text}
      className={`glitch-text ${onDark ? "glitch-text--on-dark" : ""} ${className}`.trim()}
    >
      {text}
    </Tag>
  )
}
