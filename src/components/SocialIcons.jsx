import { site } from '../data/site'

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96H13.5V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46a21 21 0 0 0-2.29-.12c-2.27 0-3.82 1.38-3.82 3.92v2.18H7.87v2.96h2.56V21z" />
    </svg>
  )
}

export default function SocialLinks({ className = '', itemClassName = '' }) {
  const links = [
    { href: site.social.instagram, label: 'Royal Collectibles on Instagram', Icon: InstagramIcon },
    { href: site.social.facebook, label: 'Royal Collectibles on Facebook', Icon: FacebookIcon },
  ]
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`grid h-9 w-9 place-items-center transition-transform hover:-translate-y-0.5 ${itemClassName}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}
