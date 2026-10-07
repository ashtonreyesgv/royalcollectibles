import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { MapPin, Menu, Phone, X } from 'lucide-react'
import Button from './Button'
import Footer from './Footer'
import Logo from './Logo'
import SocialLinks from './SocialIcons'
import StoreStatus from './StoreStatus'
import { nav, site } from '../data/site'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 font-head text-[0.7rem] min-[400px]:text-[0.8rem] sm:px-6">
        <Link to="/visit" className="whitespace-nowrap hover:text-pow">
          <StoreStatus />
        </Link>
        <a
          href={site.links.directions}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 whitespace-nowrap hover:text-pow lg:inline-flex"
        >
          <MapPin className="h-3.5 w-3.5" />
          {site.address.street}, {site.address.city}, Queens
        </a>
        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-1.5 font-bold whitespace-nowrap hover:text-pow">
            <Phone className="h-3.5 w-3.5" />
            {site.phone.display}
          </a>
          <SocialLinks className="hidden sm:flex" itemClassName="!h-7 !w-7 hover:text-pow" />
        </div>
      </div>
    </div>
  )
}

const linkClasses = ({ isActive }) =>
  `relative px-2.5 py-2 font-head text-[0.95rem] font-bold uppercase tracking-wide transition-colors xl:px-3 ${
    isActive
      ? 'text-pow after:absolute after:inset-x-2 after:-bottom-0.5 after:h-1 after:-rotate-1 after:bg-pow'
      : 'text-white hover:text-pow'
  }`

function MobileMenu({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-royal-700 text-white lg:hidden">
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-royal-950/30" />
      <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" onClick={onClose} aria-label="Royal Collectibles home">
          <Logo className="text-[1.05rem]" cut="text-royal-700" />
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-pow text-ink shadow-comic-sm"
        >
          <X />
        </button>
      </div>

      <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6 py-6">
        {nav.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            style={{ animationDelay: `${i * 40}ms` }}
            className={({ isActive }) =>
              `animate-pop comic-shadow font-display text-5xl tracking-wide ${isActive ? 'text-pow' : 'text-white'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="relative space-y-4 border-t-[3px] border-ink bg-royal-900 px-6 py-6">
        <StoreStatus className="font-head text-sm" />
        <div className="flex flex-wrap gap-3">
          <Button href={`tel:${site.phone.tel}`} variant="pow" size="sm">
            <Phone className="h-4 w-4" /> Call the shop
          </Button>
          <Button href={site.links.directions} variant="white" size="sm">
            <MapPin className="h-4 w-4" /> Directions
          </Button>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-royal-600">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Royal Collectibles home" className="shrink-0 transition-transform hover:-rotate-1">
          <Logo className="text-[1.05rem] sm:text-[1.2rem]" />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClasses}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/pull-list" size="sm" className="whitespace-nowrap">
            <span className="min-[400px]:hidden">Pull list</span>
            <span className="hidden min-[400px]:inline">Start a pull list</span>
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-white text-ink shadow-comic-sm lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </div>
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-pow focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to content
      </a>
      <ScrollManager />
      <TopBar />
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
