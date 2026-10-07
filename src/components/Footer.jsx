import { Link } from 'react-router'
import { Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import HoursTable from './HoursTable'
import Logo from './Logo'
import Marquee from './Marquee'
import SocialLinks from './SocialIcons'
import { nav, site, ticker } from '../data/site'

function FooterHeading({ children }) {
  return <h3 className="font-display text-2xl tracking-wide text-pow">{children}</h3>
}

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-royal-950 text-white">
      <Marquee className="border-b-[3px] border-ink bg-pow py-2.5 text-ink" duration="60s">
        {ticker.map((item) => (
          <span key={item} className="flex items-center font-display text-xl tracking-wider uppercase">
            <span className="px-6">{item}</span>
            <span aria-hidden="true" className="text-royal-600">
              ★
            </span>
          </span>
        ))}
      </Marquee>

      <div className="relative">
        <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-white/[0.04]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" aria-label="Royal Collectibles home" className="inline-block">
              <Logo className="text-[1.5rem]" cut="text-royal-950" />
            </Link>
            <p className="mt-5 max-w-xs text-white/75">
              {site.tagline}. Family owned and operated in Forest Hills, Queens since {site.founded}.
            </p>
            <SocialLinks
              className="mt-5"
              itemClassName="border-2 border-white/30 hover:border-pow hover:text-pow !h-11 !w-11"
            />
          </div>

          <div>
            <FooterHeading>Visit</FooterHeading>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>
                <a href={site.links.directions} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-pow">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pow" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.tel}`} className="flex gap-3 hover:text-pow">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pow" />
                  <span>
                    {site.phone.display} <span className="text-white/55">(option {site.phone.option})</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-pow">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pow" />
                  {site.email}
                </a>
              </li>
              <li>
                <Link to="/text-updates" className="flex gap-3 hover:text-pow">
                  <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-pow" />
                  <span>
                    Text <strong>JOIN</strong> to {site.phone.plain} for
                    special order updates
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 font-head font-semibold md:grid-cols-1">
              {nav.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/85 hover:text-pow">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Hours</FooterHeading>
            <HoursTable light compact className="mt-3 text-sm" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Looking for cards and sports memorabilia?{' '}
            <a href={site.sister.instagram} target="_blank" rel="noreferrer" className="text-white underline hover:text-pow">
              {site.sister.name}
            </a>{' '}
            is right down the block at {site.sister.address}.
          </p>
          <Link to="/text-updates" className="shrink-0 underline hover:text-pow">
            Text updates &amp; privacy
          </Link>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-6 text-xs text-white/40 sm:px-6">
          All characters, titles and logos shown are trademarks of their respective owners. Vintage cover art is in the
          public domain, via Wikimedia Commons.
        </p>
      </div>
    </footer>
  )
}
