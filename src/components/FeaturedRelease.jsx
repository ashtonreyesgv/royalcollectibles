import { ArrowRight } from 'lucide-react'
import Burst from './Burst'
import Button from './Button'
import Reveal from './Reveal'
import { Caption } from './Typography'
import { featuredRelease } from '../data/events'
import { site } from '../data/site'
import { mailto } from '../lib/mailto'

const parseDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function daysUntil(iso) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.round((parseDate(iso) - today) / 86_400_000)
}

// The "reserve your copy" spotlight. Content comes from featuredRelease in src/data/events.js.
export default function FeaturedRelease() {
  const release = featuredRelease
  if (!release) return null

  const days = daysUntil(release.onSale)
  const isOut = days <= 0
  const dateLabel = parseDate(release.onSale).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const reserveLink = mailto({
    to: site.email,
    subject: `Reserve: ${release.title}`,
    lines: [
      `Hi! I'd like to reserve ${release.title}.`,
      '',
      'Cover(s) I want:',
      '',
      'Name:',
      'Phone:',
      'I have a pull list with you: yes / no',
    ],
  })

  return (
    <section className="relative overflow-hidden border-y-[3px] border-ink bg-ink text-white">
      <div
        aria-hidden="true"
        className="halftone-lg absolute inset-0 text-bam/25 [mask-image:linear-gradient(120deg,black,transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src={release.image}
            alt={`${release.title} cover guide from Royal Collectibles`}
            loading="lazy"
            className="w-full -rotate-2 border-[3px] border-white shadow-[10px_10px_0_0_var(--color-bam)]"
          />
          <Burst tone="bam" className="animate-wiggle absolute -top-8 -right-4 w-32 sm:-right-8 sm:w-36" points={16}>
            {isOut ? (
              <span className="font-display text-3xl tracking-wide">Out now!</span>
            ) : (
              <>
                <span className="block font-display text-5xl">{days}</span>
                <span className="block font-head text-xs font-extrabold uppercase tracking-wider">
                  {days === 1 ? 'day to go' : 'days to go'}
                </span>
              </>
            )}
          </Burst>
        </Reveal>

        <Reveal delay={100}>
          <Caption>{isOut ? 'On the wall now' : 'Reserve yours now'}</Caption>
          <h2 className="comic-stroke mt-5 font-display text-6xl leading-[0.9] tracking-wide text-pow sm:text-7xl">
            {release.title}
          </h2>
          <p className="mt-4 font-head text-lg font-bold uppercase tracking-wide text-white/80">
            {isOut ? 'Released' : 'On sale'} {dateLabel} · {release.publisher}
          </p>
          <p className="mt-3 max-w-xl text-lg text-white/80">{release.blurb}</p>

          <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
            {release.variants.map(({ name, price }) => (
              <li
                key={name}
                className="flex items-baseline justify-between gap-3 border-b-2 border-dashed border-white/20 py-2"
              >
                <span className="font-head font-semibold">{name}</span>
                <span className="font-head font-extrabold tabular-nums text-pow">${price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={reserveLink} size="lg">
              Reserve your copy <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pull-list" variant="white" size="lg">
              Add it to a pull list
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
