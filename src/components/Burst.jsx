// Starburst badge, like the hand-cut signs in the shop's front window.
// The star and its label share one grid cell, so callers are free to position the badge themselves.
const tones = {
  pow: { fill: 'var(--color-pow)', text: 'text-ink' },
  bam: { fill: 'var(--color-bam)', text: 'text-white' },
  royal: { fill: 'var(--color-royal-600)', text: 'text-white' },
  white: { fill: '#fff', text: 'text-ink' },
  zap: { fill: 'var(--color-zap)', text: 'text-ink' },
}

function starPoints(points, inner) {
  const coords = []
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? 50 : 50 * inner
    const angle = (Math.PI * i) / points - Math.PI / 2
    coords.push(`${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`)
  }
  return coords.join(' ')
}

export default function Burst({ tone = 'pow', points = 14, inner = 0.74, className = '', children }) {
  const { fill, text } = tones[tone]
  return (
    <div className={`grid aspect-square place-items-center ${text} ${className}`}>
      <svg
        viewBox="-4 -4 108 108"
        aria-hidden="true"
        className="col-start-1 row-start-1 h-full w-full overflow-visible drop-shadow-[4px_4px_0_var(--color-ink)]"
      >
        <polygon
          points={starPoints(points, inner)}
          fill={fill}
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative col-start-1 row-start-1 px-[18%] text-center leading-none">{children}</div>
    </div>
  )
}
