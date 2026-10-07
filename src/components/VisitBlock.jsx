import { MapPin, Navigation, Phone } from 'lucide-react'
import Button from './Button'
import HoursTable from './HoursTable'
import Reveal from './Reveal'
import StoreStatus from './StoreStatus'
import { site } from '../data/site'

// Map on one side, address and hours on the other
export default function VisitBlock() {
  const { address } = site
  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
      <Reveal className="panel relative min-h-[22rem] overflow-hidden bg-royal-100">
        <iframe
          title="Map to Royal Collectibles"
          src={site.links.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </Reveal>

      <Reveal delay={100} className="panel bg-white p-6 sm:p-8">
        <StoreStatus variant="chip" />
        <h3 className="mt-5 font-display text-4xl tracking-wide">Come say hi</h3>
        <a
          href={site.links.directions}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex gap-3 text-lg font-semibold hover:text-royal-600"
        >
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-royal-600" />
          <span>
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
            <span className="mt-1 block text-sm font-normal text-ink/60">{address.corner}</span>
          </span>
        </a>

        <HoursTable className="mt-5 border-y-2 border-ink/10" />

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={site.links.directions} variant="royal">
            <Navigation className="h-4 w-4" /> Get directions
          </Button>
          <Button href={`tel:${site.phone.tel}`} variant="white">
            <Phone className="h-4 w-4" /> {site.phone.display}
          </Button>
        </div>
        <p className="mt-3 text-sm text-ink/60">When you call, press {site.phone.option} for Royal Collectibles.</p>
      </Reveal>
    </div>
  )
}
