// Wordmark drawn to echo the shop's sign: crown on the O, skyline cut into ROYAL.
// `cut` must match the colour the logo sits on, since the skyline is knocked out of the letters.
export function Crown({ className = '' }) {
  return (
    <svg viewBox="0 0 60 36" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="5" cy="13" r="4" />
      <circle cx="17" cy="6" r="4" />
      <circle cx="30" cy="4.5" r="4.5" />
      <circle cx="43" cy="6" r="4" />
      <circle cx="55" cy="13" r="4" />
      <path d="M3 18l12 7 3-14 9 11 3-12 3 12 9-11 3 14 12-7-5 18H8z" />
    </svg>
  )
}

function Skyline({ className = '' }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 12V8h5V5h4v4h6V3h3v5h5V6h6v4h5V2h2v3h4v5h6V7h5v3h4V4h5v5h7V6h4V1h3v6h5v3h6V5h4v4h5V7h6V3h3v6h6V6h5v4h4V2h4v6h6V5h5v5h4V7h6V4h3v5h5V8h4v4z" />
    </svg>
  )
}

export default function Logo({ className = '', cut = 'text-royal-600' }) {
  return (
    <span
      className={`inline-flex flex-col items-stretch font-head font-black uppercase leading-none text-white ${className}`}
    >
      <span className="relative block text-[2em] leading-[0.74] tracking-[-0.01em]">
        R
        <span className="relative inline-block">
          O
          <Crown className="absolute -top-[0.36em] left-1/2 w-[0.74em] -translate-x-1/2" />
        </span>
        YAL
        <Skyline className={`absolute inset-x-0 -bottom-[0.02em] h-[0.2em] w-full ${cut}`} />
      </span>
      <span className="mt-[0.16em] block text-[0.86em] leading-none tracking-[0.045em]">Collectibles</span>
    </span>
  )
}
