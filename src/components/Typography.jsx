// Narration box, the yellow caption in the corner of a comic panel
export function Caption({ className = '', children }) {
  return (
    <span
      className={`inline-block -rotate-1 border-[3px] border-ink bg-pow px-3 py-1.5 font-head text-xs font-extrabold uppercase leading-none tracking-[0.14em] text-ink shadow-comic-sm ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, children, align = 'left', light = false, className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Caption>{eyebrow}</Caption>}
      <h2
        className={`mt-4 font-display text-5xl leading-[0.95] tracking-wide text-balance sm:text-6xl lg:text-7xl ${
          light ? 'comic-shadow text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg text-pretty ${light ? 'text-white/85' : 'text-ink/75'} ${centered ? 'mx-auto' : ''}`}>
          {children}
        </p>
      )}
    </div>
  )
}

// Strip of masking tape for pinned-up photos
export function Tape({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 h-7 w-24 border border-ink/15 bg-pow/85 shadow-sm ${className}`}
    />
  )
}
