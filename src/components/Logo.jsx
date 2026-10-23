import { useId } from 'react'

export function LogoMark({ size = 40, className = '', title }) {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const gradId = `lg-${id}`
  const shineId = `ls-${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id={gradId} x1="4" y1="3" x2="44" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="0.5" stopColor="#2563eb" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${gradId})`} />
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${shineId})`} />
      <rect x="2.75" y="2.75" width="42.5" height="42.5" rx="13.25" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M24 35.2c-.42 0-8.5-5.05-8.5-11.6a5.1 5.1 0 0 1 8.5-3.5 5.1 5.1 0 0 1 8.5 3.5c0 6.55-8.08 11.6-8.5 11.6Z"
        fill="#ffffff"
        fillOpacity="0.96"
      />
      <path
        d="M17.2 24.4h3.3l1.7-3.3 2.7 6.8 2.1-3.5h3.8"
        stroke={`url(#${gradId})`}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="37.6" cy="10.4" r="3.4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.6" />
    </svg>
  )
}

export default function Logo({ tone = 'dark', tagline = true, className = '', markClassName = '' }) {
  const onLight = tone === 'dark'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark
        size={42}
        className={`shrink-0 drop-shadow-[0_8px_18px_rgba(13,148,136,0.28)] ${markClassName}`}
      />
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.22rem] font-bold leading-none tracking-tight lg:text-[1.38rem] ${
            onLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Dr. Ananya{' '}
          <span
            className={
              onLight
                ? 'bg-gradient-to-r from-teal via-blue-600 to-violet bg-clip-text text-transparent'
                : 'text-white/90'
            }
          >
            Menon
          </span>
        </span>
        {tagline && (
          <span
            className={`mt-1.5 text-[0.56rem] font-bold uppercase tracking-[0.28em] lg:text-[0.6rem] ${
              onLight ? 'text-slate-500' : 'text-white/60'
            }`}
          >
            Cardiologist
          </span>
        )}
      </span>
    </span>
  )
}
