import { ExternalLink, Mail } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import Faq from '../components/Faq'
import PageHero from '../components/PageHero'
import RequestForm from '../components/RequestForm'
import Reveal from '../components/Reveal'
import { SectionHeading, Tape } from '../components/Typography'
import { site } from '../data/site'
import { mailto } from '../lib/mailto'

const { pullList } = site.contacts

const steps = [
  {
    title: 'Send us your list',
    text: 'Tell us the series you follow. Not sure where to start? Tell us what you like and we’ll recommend something.',
  },
  {
    title: 'We order ahead',
    text: 'Comics are ordered two months in advance, so your copy is reserved long before it ships.',
  },
  {
    title: 'We pull every Wednesday',
    text: 'On New Comic Book Day your books come off the truck and go straight into your box.',
  },
  {
    title: 'Pick up and save',
    text: 'Stop in at least every two weeks and take 10% off cover price. That’s the whole deal.',
  },
]

const faqs = [
  {
    question: 'What does it cost?',
    answer: (
      <p>
        Nothing. It is absolutely free to join, and you’ll receive <strong>10% off</strong> by subscribing. All we ask
        is that you pick up your comics regularly and let us know if for any reason you won’t be able to.
      </p>
    ),
  },
  {
    question: 'How often do I need to pick up?',
    answer: (
      <>
        <p>At least every two weeks is ideal.</p>
        <p className="mt-3">
          If comics are not picked up after 30 days, you’ll receive a call and/or e-mail from us. If we don’t hear back
          or no pick-up attempts are made, we’ll put the account on hold until the held comics are picked up.
        </p>
        <p className="mt-3">
          Communication is key. We’re happy to work with you if your schedule doesn’t allow for frequent pick-ups. We
          just ask that you don’t leave us hanging on to books you don’t intend to purchase.
        </p>
      </>
    ),
  },
  {
    question: 'How far ahead should I add or drop a title?',
    answer: (
      <p>
        As early as you can. We order comics two months in advance, so the sooner you tell us, the easier it is to
        adjust our orders and accommodate everyone’s requests.
      </p>
    ),
  },
  {
    question: 'Is it only for single issues?',
    answer: (
      <p>No. You can add trade paperbacks, graphic novels, and certain toys and statues to your pull list too.</p>
    ),
  },
  {
    question: 'Why did a series I didn’t ask for show up in my box?',
    answer: (
      <p>
        Sometimes we’ll automatically add you to a series if it restarts, or if it’s very similar to one you collect.
        For example, if you collect Deadpool we might add a new mini-series like Deadpool Kills the Marvel Universe.
        You’re never obligated to purchase it. It’s just a recommendation based on what you read, and you can tell us
        to drop it at any time.
      </p>
    ),
  },
  {
    question: 'Can I manage my list online?',
    answer: (
      <p>
        Yes. Subscribers get access to our online ordering portal, where you can view your subscriptions, add or drop
        titles, make special requests and place pre-orders.
      </p>
    ),
  },
  {
    question: 'How do I cancel?',
    answer: <p>Just let us know. You can cancel your subscription account at any time.</p>,
  },
]

const fields = [
  { name: 'name', label: 'Your name', required: true, half: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  {
    name: 'pickup',
    label: 'How often can you pick up?',
    type: 'select',
    half: true,
    options: ['Every Wednesday', 'Every two weeks', 'About once a month, let’s talk'],
  },
  {
    name: 'titles',
    label: 'Series to pull',
    type: 'textarea',
    required: true,
    placeholder: 'Absolute Batman\nUltimate Spider-Man\nAnything by Hickman…',
    hint: 'One per line is perfect. Characters and creators work too.',
  },
  {
    name: 'notes',
    label: 'Anything else?',
    type: 'textarea',
    rows: 3,
    placeholder: 'Variant covers, trades, statues, questions…',
  },
]

export default function PullList() {
  const portalRequest = mailto({
    to: pullList.email,
    subject: 'Ordering portal access',
    lines: ['Hi! I have a pull list with you and would like access to the online ordering portal.', '', 'Name:'],
  })

  return (
    <>
      <PageHero
        eyebrow="Free pull list service"
        title="Never miss"
        accent="an issue"
        intro="If you shop on New Comic Book Wednesdays and you’re tired of missing issues because they sold out or you missed them on the shelf, set up a pull list with us."
        aside={
          <div className="relative">
            <div className="panel rotate-2 bg-white p-2.5 shadow-comic-lg">
              <Tape className="-top-3.5 left-1/2 -translate-x-1/2 rotate-2" />
              <img
                src="/images/shop/new-comics-shelf.webp"
                alt="New releases on the wall at Royal Collectibles"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <Burst tone="pow" points={18} className="animate-wiggle absolute -bottom-10 -left-4 w-36 sm:-left-8 sm:w-44">
              <span className="block font-display text-5xl sm:text-6xl">10%</span>
              <span className="block font-head text-xs font-extrabold tracking-wider uppercase sm:text-sm">
                off cover price
              </span>
            </Burst>
          </div>
        }
      >
        <Button href="#start" size="lg">
          Start my pull list
        </Button>
        <Button href="#faq" variant="white" size="lg">
          Things to know
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Four panels, start to finish" />
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="panel relative bg-white p-5 pt-9">
              <span className="absolute -top-5 -left-3 grid h-12 w-12 -rotate-6 place-items-center border-[3px] border-ink bg-pow font-display text-3xl shadow-comic-sm">
                {i + 1}
              </span>
              <h3 className="font-display text-3xl leading-none tracking-wide">{title}</h3>
              <p className="mt-2 text-ink/75">{text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="start" className="relative border-y-[3px] border-ink bg-royal-600">
        <div aria-hidden="true" className="halftone absolute inset-0 text-royal-950/25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          <Reveal>
            <SectionHeading light eyebrow="Sign me up" title="Start your pull list">
              Fill this in and it goes straight to {pullList.name}, who runs our pull lists. We’ll confirm your titles
              and get your box started.
            </SectionHeading>

            <div className="bubble mt-10 max-w-sm px-5 py-4 shadow-comic-sm">
              <p className="font-marker text-lg leading-snug">
                Prefer to just email? Write to {pullList.name} at{' '}
                <a href={`mailto:${pullList.email}`} className="text-royal-600 underline">
                  {pullList.email}
                </a>
              </p>
            </div>

            <div className="mt-12 border-[3px] border-ink bg-royal-900 p-5 text-white shadow-comic-sm">
              <h3 className="font-display text-3xl tracking-wide text-pow">Already a subscriber?</h3>
              <p className="mt-1 text-white/85">
                Use our online ordering portal to view your subscriptions, add or drop titles, make special requests
                and place pre-orders.
              </p>
              {site.social.portal ? (
                <Button href={site.social.portal} size="sm" className="mt-4">
                  Open the portal <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <Button href={portalRequest} size="sm" className="mt-4">
                  <Mail className="h-4 w-4" /> Ask for portal access
                </Button>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <RequestForm
              to={pullList.email}
              subject="New pull list request"
              fields={fields}
              submitLabel="Send my pull list"
              contactName={pullList.name}
            />
          </Reveal>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading align="center" eyebrow="Some things to know" title="The fine print, in plain English" />
        </Reveal>
        <Reveal>
          <Faq items={faqs} className="mt-10" />
        </Reveal>
        <p className="mt-10 text-center text-ink/70">
          Still have questions? Call us at{' '}
          <a href={`tel:${site.phone.tel}`} className="font-bold text-royal-600 underline">
            {site.phone.display}
          </a>{' '}
          (option {site.phone.option}) or just ask at the counter.
        </p>
      </section>
    </>
  )
}
