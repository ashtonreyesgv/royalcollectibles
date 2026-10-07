import { Dumbbell, Mail, MapPin, PenLine, Phone, Sparkles, Swords, Trophy, Zap } from 'lucide-react'
import Button from './Button'
import Reveal from './Reveal'
import { InstagramIcon } from './SocialIcons'
import { SectionHeading } from './Typography'
import { site } from '../data/site'

const cards = [
  { name: 'Pokémon', kind: 'Trading cards', Icon: Zap, colors: 'from-yellow-300 via-amber-400 to-orange-500' },
  { name: 'Yu-Gi-Oh!', kind: 'Trading cards', Icon: Swords, colors: 'from-fuchsia-400 via-purple-500 to-indigo-700' },
  { name: 'Magic', kind: 'The Gathering', Icon: Sparkles, colors: 'from-emerald-300 via-teal-500 to-cyan-700' },
  { name: 'Sports', kind: 'Memorabilia', Icon: Trophy, colors: 'from-sky-300 via-royal-500 to-royal-800' },
  { name: 'Autographs', kind: 'Sports & Hollywood', Icon: PenLine, colors: 'from-rose-300 via-bam to-red-800' },
  { name: 'Wrestling', kind: 'Toys & collectibles', Icon: Dumbbell, colors: 'from-zinc-300 via-zinc-500 to-zinc-800' },
]

function TradingCard({ card, index, total }) {
  const spread = index - (total - 1) / 2
  return (
    <div
      style={{ '--tilt': `${spread * 6}deg`, '--drop': `${Math.abs(spread) * 9}px` }}
      className={`foil relative -ml-[6.4%] aspect-[5/7] w-[22%] shrink-0 [transform:rotate(var(--tilt))_translateY(var(--drop))] rounded-lg border-[3px] border-ink bg-gradient-to-br p-1 shadow-comic transition-transform duration-200 first:ml-0 hover:z-10 hover:[transform:rotate(0deg)_translateY(-1.25rem)] sm:rounded-xl sm:p-1.5 ${card.colors}`}
    >
      <div className="flex h-full flex-col rounded-md border-2 border-ink bg-white/90 p-1 sm:p-1.5">
        <span className="truncate font-head text-[0.5rem] leading-tight font-black uppercase sm:text-[0.72rem]">
          {card.name}
        </span>
        <div
          className={`relative mt-1 grid flex-1 place-items-center overflow-hidden rounded border-2 border-ink bg-gradient-to-br ${card.colors}`}
        >
          <div aria-hidden="true" className="halftone absolute inset-0 text-white/35" />
          <card.Icon className="relative h-2/5 w-2/5 text-white drop-shadow-[3px_3px_0_var(--color-ink)]" strokeWidth={2.4} />
        </div>
        <p className="mt-1 truncate text-center font-head text-[0.45rem] leading-tight font-bold tracking-wide text-ink/70 uppercase sm:text-[0.65rem]">
          {card.kind}
        </p>
      </div>
    </div>
  )
}

// The card and sports shop down the block
export default function SisterStore() {
  const { sister } = site
  return (
    <section id="trading-cards" className="relative overflow-hidden border-y-[3px] border-ink bg-pow">
      <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.08]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Two shops. One block." title="Cards, sports & more at Royal Sports">
            Our sister store, {sister.name}, is a few doors down at {sister.address}. It’s home to Pokémon, Yu-Gi-Oh! and
            Magic: The Gathering cards, sports memorabilia, autographs, Hollywood memorabilia, wrestling toys and
            collectibles.
          </SectionHeading>

          <ul className="mt-7 space-y-2.5 font-head font-semibold">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0" /> {sister.address}, {site.address.city}
            </li>
            <li>
              <a href={`tel:${sister.phone.tel}`} className="flex items-center gap-3 hover:underline">
                <Phone className="h-5 w-5 shrink-0" /> {sister.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${sister.email}`} className="flex items-center gap-3 hover:underline">
                <Mail className="h-5 w-5 shrink-0" /> {sister.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={sister.instagram} variant="ink">
              <InstagramIcon /> Follow @royalsportsnyc
            </Button>
            <Button href={sister.facebook} variant="white">
              Royal Sports on Facebook
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto flex w-full max-w-xl justify-center py-6">
          {cards.map((card, index) => (
            <TradingCard key={card.name} card={card} index={index} total={cards.length} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
