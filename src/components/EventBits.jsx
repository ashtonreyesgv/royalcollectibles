import Marquee from './Marquee'
import { guests } from '../data/events'

const typeStyles = {
  signing: { label: 'Signing', classes: 'bg-royal-600 text-white' },
  sale: { label: 'Sale', classes: 'bg-bam text-white' },
  community: { label: 'Community', classes: 'bg-pow text-ink' },
}

export function TypeChip({ type, className = '' }) {
  const { label, classes } = typeStyles[type]
  return (
    <span
      className={`inline-block border-2 border-ink px-2 py-1 font-head text-[0.7rem] leading-none font-extrabold tracking-wider uppercase ${classes} ${className}`}
    >
      {label}
    </span>
  )
}

// Flyer card. Pass onOpen to make the flyer clickable (opens the lightbox).
export function EventPoster({ event, onOpen, compact = false }) {
  const Wrapper = onOpen ? 'button' : 'div'
  return (
    <article className="panel lift group flex h-full flex-col bg-white">
      <Wrapper
        {...(onOpen ? { type: 'button', onClick: onOpen, 'aria-label': `View flyer: ${event.title}` } : {})}
        className="relative block aspect-[4/5] w-full overflow-hidden border-b-[3px] border-ink bg-royal-700"
      >
        <img
          src={event.image}
          alt={`${event.title} flyer`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Wrapper>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <TypeChip type={event.type} />
          <p className="font-head text-xs font-bold tracking-widest text-royal-600 uppercase">{event.when}</p>
        </div>
        <h3 className="mt-2.5 font-display text-3xl leading-none tracking-wide">{event.title}</h3>
        {event.subtitle && <p className="mt-1 font-marker text-sm text-ink/70">{event.subtitle}</p>}
        {!compact && <p className="mt-2 text-sm text-ink/70">{event.summary}</p>}
      </div>
    </article>
  )
}

// Everyone who has signed at the counter, as a scrolling roll call
export function GuestMarquee({ className = '' }) {
  const half = Math.ceil(guests.length / 2)
  const rows = [guests.slice(0, half), guests.slice(half)]
  return (
    <div className={`space-y-2 ${className}`}>
      {rows.map((row, rowIndex) => (
        <Marquee key={rowIndex} reverse={rowIndex === 1} duration="70s">
          {row.map((name, i) => (
            <span key={name} className="flex items-center font-display text-4xl tracking-wide uppercase sm:text-6xl">
              <span
                className={`px-5 ${
                  (i + rowIndex) % 2 === 0
                    ? 'text-white'
                    : 'text-transparent [-webkit-text-stroke:2px_var(--color-pow)]'
                }`}
              >
                {name}
              </span>
              <span aria-hidden="true" className="text-2xl text-bam sm:text-4xl">
                ★
              </span>
            </span>
          ))}
        </Marquee>
      ))}
    </div>
  )
}
