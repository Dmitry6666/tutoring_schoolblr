interface LogoProps {
  onClick?: () => void
}

export function Logo({ onClick }: LogoProps) {
  return (
    <a className="logo" href="#top" aria-label="Орбита — на главную" onClick={onClick}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none">
          <ellipse
            cx="24"
            cy="24"
            rx="17"
            ry="8.5"
            transform="rotate(-30 24 24)"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="24" cy="24" r="6.2" fill="var(--lime)" />
          <circle cx="37" cy="13.5" r="3" fill="var(--lime)" />
        </svg>
      </span>
      <span className="logo__word">орбита</span>
    </a>
  )
}
