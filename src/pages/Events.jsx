import { useState } from 'react'
import { CalendarDays, MessageSquareText } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import { EventPoster, GuestMarquee, TypeChip } from '../components/EventBits'
import FeaturedRelease from '../components/FeaturedRelease'
import Lightbox from '../components/Lightbox'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons'
import { SectionHeading } from '../components/Typography'
import { events, eventTypes, royalYear } from '../data/events'
import { site } from '../data/site'

const todayIso = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function UpcomingCard({ event }) {
  return (
    <article className="panel grid overflow-hidden bg-white sm:grid-cols-[auto_1fr]">
      {event.image ? (
        <img
          src={event.image}
          alt={`${event.title} flyer`}
          className="h-full w-full border-b-[3px] border-ink bg-royal-700 object-contain sm:w-56 sm:border-r-[3px] sm:border-b-0"
        />
      ) : (
        <div className="relative grid place-items-center overflow-hidden border-b-[3px] border-ink bg-royal-600 p-8 sm:w-56 sm:border-r-[3px] sm:border-b-0">
          <div aria-hidden="true" className="sunburst absolute -inset-1/2 text-white/10" />
          <CalendarDays className="relative h-16 w-16 text-white drop-shadow-[4px_4px_0_var(--color-ink)]" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <TypeChip type={event.type} />
          {event.status === 'postponed' && (
            <span className="-rotate-2 border-2 border-bam px-2 py-0.5 font-marker text-sm text-bam">Postponed</span>
          )}
        </div>
        <h3 className="mt-3 font-display text-4xl leading-none tracking-wide">{event.title}</h3>
        {event.subtitle && <p className="font-marker text-ink/70">{event.subtitle}</p>}
        <p className="mt-2 font-head text-sm font-bold tracking-widest text-royal-600 uppercase">{event.when}</p>
        <p className="mt-2 text-ink/75">{event.summary}</p>
      </div>
    </article>
  )
}

export default function Events() {
  const [filter, setFilter] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  // Anything dated today or later (or still waiting on a date) counts as upcoming
  const today = todayIso()
  const upcoming = events.filter((event) => !event.date || event.date >= today)
  const past = events.filter((event) => event.date && event.date < today)

  const shown = past.filter((event) => filter === 'all' || event.type === filter)
  const lightboxItems = shown.map((event) => ({
    src: event.image,
    title: event.title,
    caption: `${event.when}, ${event.date.slice(0, 4)}`,
  }))

  return (
    <>
      <PageHero
        eyebrow="Signings, sales & community days"
        title="Something’s always"
        accent="happening"
        intro="Creator signings, Free Comic Book Day, parking-lot comic cons and storewide sales. This is where the neighborhood shows up."
        aside={
          <div className="relative mx-auto max-w-xs lg:max-w-sm">
            <img
              src="/images/events/frank-miller-2026.webp"
              alt="Frank Miller in-store signing flyer"
              className="rotate-3 border-[3px] border-ink shadow-comic-lg"
            />
            <Burst tone="pow" points={16} className="animate-wiggle absolute -top-8 -left-8 w-32 sm:w-36">
              <span className="block font-display text-3xl leading-[0.9] tracking-wide">
                In-store
                <br />
                signings
              </span>
            </Burst>
          </div>
        }
      >
        <Button href={site.social.instagram} size="lg">
          <InstagramIcon /> Get announcements first
        </Button>
        <Button href="#archive" variant="white" size="lg">
          Past events
        </Button>
      </PageHero>

      {/* Upcoming */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Next issue" title="On the horizon">
            New signings are announced a few weeks out. Follow us and you’ll hear the moment a date is locked in.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {upcoming.length > 0 ? (
              upcoming.map((event) => (
                <Reveal key={event.id}>
                  <UpcomingCard event={event} />
                </Reveal>
              ))
            ) : (
              <Reveal className="panel bg-white p-8 text-center">
                <p className="font-display text-4xl tracking-wide">The next guest is still under wraps</p>
                <p className="mt-2 text-ink/70">Check back soon, or follow along on Instagram for the announcement.</p>
              </Reveal>
            )}
          </div>

          <Reveal delay={100} className="panel relative self-start overflow-hidden bg-royal-600 p-6 text-white sm:p-7">
            <div aria-hidden="true" className="halftone absolute inset-0 text-royal-950/30" />
            <div className="relative">
              <h3 className="comic-shadow font-display text-4xl tracking-wide">Be first in line</h3>
              <p className="mt-2 text-white/85">
                Ticketed signings can sell out (Frank Miller was capped at 100 tickets). Announcements go out here
                first:
              </p>
              <div className="mt-5 flex flex-col items-start gap-3">
                <Button href={site.social.instagram}>
                  <InstagramIcon /> Instagram
                </Button>
                <Button href={site.social.facebook} variant="white">
                  <FacebookIcon /> Facebook
                </Button>
                <Button href={`mailto:${site.email}?subject=${encodeURIComponent('Event question')}`} variant="white">
                  <MessageSquareText className="h-4 w-4" /> Ask about an event
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturedRelease />

      {/* Annual calendar */}
      <section className="relative border-b-[3px] border-ink bg-newsprint">
        <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.06]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <Reveal>
            <SectionHeading eyebrow="Mark your calendar" title="The Royal year">
              Some things come around every year. Exact dates and deals are posted as each one gets close.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {royalYear.map(({ month, title, detail }, i) => (
              <Reveal key={title} delay={(i % 4) * 70} className="panel flex flex-col bg-white">
                <p
                  className={`border-b-[3px] border-ink px-4 py-2 font-head text-sm font-extrabold tracking-[0.18em] uppercase ${
                    i % 3 === 0 ? 'bg-royal-600 text-white' : i % 3 === 1 ? 'bg-pow' : 'bg-bam text-white'
                  }`}
                >
                  {month}
                </p>
                <div className="p-4">
                  <h3 className="font-display text-3xl leading-none tracking-wide">{title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Previously, at Royal Collectibles" title="The flyer wall" />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Filter events">
          {eventTypes.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={`border-[3px] border-ink px-4 py-2 font-head text-sm font-extrabold tracking-wide uppercase transition-all ${
                filter === id ? 'translate-x-[3px] translate-y-[3px] bg-ink text-white' : 'bg-white shadow-comic-sm hover:bg-pow'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((event, index) => (
            <EventPoster key={event.id} event={event} onOpen={() => setOpenIndex(index)} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-t-[3px] border-ink bg-ink py-14 text-white">
        <p className="mb-8 text-center font-head text-sm font-extrabold tracking-[0.25em] text-pow uppercase">
          Some of the guests who’ve signed at our counter
        </p>
        <GuestMarquee />
      </section>

      <Lightbox items={lightboxItems} index={openIndex} onChange={setOpenIndex} />
    </>
  )
}
