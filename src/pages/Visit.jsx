import { Link } from 'react-router'
import { Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import RequestForm from '../components/RequestForm'
import Reveal from '../components/Reveal'
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons'
import { SectionHeading } from '../components/Typography'
import VisitBlock from '../components/VisitBlock'
import { site } from '../data/site'

const { contacts, sister } = site

const channels = [
  {
    Icon: Phone,
    title: 'Call the shop',
    value: site.phone.display,
    note: `Press ${site.phone.option} for Royal Collectibles`,
    href: `tel:${site.phone.tel}`,
  },
  {
    Icon: Mail,
    title: 'General questions',
    value: site.email,
    note: 'Pull lists, special orders, selling a collection',
    href: `mailto:${site.email}`,
  },
  {
    Icon: Mail,
    title: 'CGC grading',
    value: contacts.grading.email,
    note: `Ask for ${contacts.grading.name}`,
    href: `mailto:${contacts.grading.email}`,
  },
  {
    Icon: InstagramIcon,
    title: 'Instagram',
    value: site.social.instagramHandle,
    note: 'New arrivals and the Tuesday sneak peek',
    href: site.social.instagram,
  },
  {
    Icon: FacebookIcon,
    title: 'Facebook',
    value: 'Royal Collectibles',
    note: 'Message us on Messenger',
    href: site.social.facebook,
  },
  {
    Icon: MessageSquareText,
    title: 'Text updates',
    value: `Text JOIN to ${site.phone.plain}`,
    note: 'Updates on your special order',
    href: '/text-updates',
    internal: true,
  },
]

const fields = [
  { name: 'name', label: 'Your name', required: true, half: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  {
    name: 'topic',
    label: 'What’s it about?',
    type: 'select',
    options: ['A general question', 'Is something in stock?', 'A special order', 'Pull lists', 'Selling a collection', 'Events & signings'],
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 5 },
]

export default function Visit() {
  return (
    <>
      <PageHero
        tone="bam"
        eyebrow="Visit & contact"
        title="Swing by"
        accent="the shop"
        intro="We’re in Spider-Man’s own hometown: Forest Hills, Queens, on the corner of Metropolitan Avenue and Selfridge Street. Look for the blue awning."
        aside={
          <div className="relative mx-auto max-w-sm">
            <Burst tone="pow" points={20} inner={0.82} className="animate-wiggle w-full">
              <span className="block font-head text-sm font-extrabold tracking-[0.2em] uppercase">Find us at</span>
              <span className="mt-1 block font-display text-6xl leading-[0.85] tracking-wide sm:text-7xl">96-01</span>
              <span className="block font-display text-3xl leading-none tracking-wide sm:text-4xl">Metropolitan Ave</span>
              <span className="mt-1 block font-marker text-lg">Forest Hills, Queens</span>
            </Burst>
          </div>
        }
      >
        <Button href={site.links.directions} size="lg">
          <MapPin className="h-5 w-5" /> Get directions
        </Button>
        <Button href={`tel:${site.phone.tel}`} variant="white" size="lg">
          <Phone className="h-5 w-5" /> {site.phone.display}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <VisitBlock />
      </section>

      {/* Ways to reach us */}
      <section className="relative border-y-[3px] border-ink bg-newsprint">
        <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.06]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHeading eyebrow="Get in touch" title="Six ways to reach us" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ Icon, title, value, note, href, internal }, i) => {
              const Wrapper = internal ? Link : 'a'
              const linkProps = internal
                ? { to: href }
                : { href, ...(/^https?:/.test(href) ? { target: '_blank', rel: 'noreferrer' } : {}) }
              return (
                <Reveal key={title} delay={(i % 3) * 70}>
                  <Wrapper {...linkProps} className="panel lift flex h-full items-start gap-4 bg-white p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border-[3px] border-ink bg-royal-600 text-white shadow-comic-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-head text-xs font-extrabold tracking-widest text-royal-600 uppercase">
                        {title}
                      </span>
                      <span className="block font-head text-lg leading-tight font-extrabold break-words">{value}</span>
                      <span className="mt-1 block text-sm text-ink/65">{note}</span>
                    </span>
                  </Wrapper>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Message form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Drop us a line" title="Send a message">
            Looking for a specific book? Wondering if we’d buy your collection? Ask away. E-mail is the best way to
            reach us.
          </SectionHeading>

          <div className="mt-10 border-[3px] border-ink bg-pow p-5 shadow-comic-sm">
            <h3 className="font-display text-3xl tracking-wide">Looking for {sister.name}?</h3>
            <p className="mt-1">
              Our second store is at {sister.address}, a few doors down. They specialize in sports memorabilia,
              autographs, Hollywood memorabilia, and Pokémon, Yu-Gi-Oh! and Magic: The Gathering cards.
            </p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-head font-bold">
              <a href={`tel:${sister.phone.tel}`} className="underline">
                {sister.phone.display}
              </a>
              <a href={`mailto:${sister.email}`} className="underline">
                {sister.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <RequestForm to={site.email} subject="Message from the website" fields={fields} submitLabel="Send message" />
        </Reveal>
      </section>
    </>
  )
}
