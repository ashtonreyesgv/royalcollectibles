import { ArrowRight, BookOpen, Check, ExternalLink, HandCoins, Mail, MessageSquareText, Package, Phone, ShieldCheck } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import RequestForm from '../components/RequestForm'
import Reveal from '../components/Reveal'
import { Caption, SectionHeading, Tape } from '../components/Typography'
import { site } from '../data/site'
import { mailto } from '../lib/mailto'

const { grading } = site.contacts

const gradingSteps = [
  { title: 'Bring in your books', text: 'Any comic you want sent out to CGC. One key or a whole stack.' },
  { title: 'Get our honest opinion', text: 'We’ll give you our professional opinion on the grade you can expect.' },
  { title: 'We submit them for you', text: 'We handle the submission to CGC from start to finish.' },
  { title: 'Pick up your slabs', text: 'Your graded books come back to the shop, ready to collect.' },
]

const sellTips = [
  'A rough list of what you have: titles, issue numbers, eras',
  'A few photos, especially of your best books',
  'Anything you know about condition and how they were stored',
  'Toys, statues and other collectibles too. Tell us what’s in the box',
]

const sellFields = [
  { name: 'name', label: 'Your name', required: true, half: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  {
    name: 'kind',
    label: 'What are you selling?',
    type: 'select',
    half: true,
    options: ['Comic books', 'Graded comics', 'Toys & action figures', 'Statues', 'Funko Pops', 'A mix of things'],
  },
  {
    name: 'details',
    label: 'Tell us about it',
    type: 'textarea',
    required: true,
    rows: 5,
    placeholder: 'Roughly how many items, standout books, era, condition…',
    hint: 'After your email opens, attach a few photos before you hit send.',
  },
]

const extras = [
  {
    Icon: MessageSquareText,
    title: 'Special orders',
    text: `Don’t see it on the shelf? Ask us about a special order. Text JOIN to ${site.phone.plain} to get updates on your special order.`,
    to: '/text-updates',
    cta: 'About text updates',
  },
  {
    Icon: Package,
    title: 'Supplies',
    text: 'Bags, boards, comic bins, showcases and everything else you need to store and care for your collection.',
    to: '/gallery',
    cta: 'See the shop',
  },
  {
    Icon: BookOpen,
    title: 'Recommendations',
    text: 'New to comics, or looking for your next series? Advice comes free with every visit.',
    to: '/visit',
    cta: 'Come say hi',
  },
]

function ServiceNav() {
  const links = [
    { href: '#pull-list', label: 'Pull lists' },
    { href: '#cgc', label: 'CGC grading' },
    { href: '#sell', label: 'Sell to us' },
  ]
  return (
    <>
      {links.map(({ href, label }, i) => (
        <Button key={href} href={href} size="lg" variant={i === 0 ? 'pow' : 'white'}>
          {label}
        </Button>
      ))}
    </>
  )
}

export default function Services() {
  const gradingEmail = mailto({
    to: grading.email,
    subject: 'CGC submission question',
    lines: [`Hi ${grading.name},`, '', 'I have some books I’d like to get graded:', ''],
  })

  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Services offered"
        title="Buy. Sell. Trade."
        accent="Grade."
        intro="Pull lists for weekly readers, CGC submissions for your keys, and free appraisals when it’s time to sell. Here’s everything we do beyond the shelves."
        aside={
          <div className="relative">
            <div className="panel rotate-2 bg-white p-2.5 shadow-comic-lg">
              <Tape className="-top-3.5 left-1/2 -translate-x-1/2 rotate-2" />
              <img
                src="/images/shop/graded-slabs.webp"
                alt="CGC graded comics at Royal Collectibles"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <Burst tone="bam" points={16} className="animate-wiggle absolute -bottom-10 -left-4 w-36 sm:-left-8 sm:w-40">
              <span className="block font-display text-3xl leading-[0.9] tracking-wide sm:text-4xl">
                Free
                <br />
                appraisals
              </span>
            </Burst>
          </div>
        }
      >
        <ServiceNav />
      </PageHero>

      {/* Pull lists */}
      <section id="pull-list" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="panel grid overflow-hidden bg-white lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-10">
            <Caption>For weekly readers</Caption>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">Pull lists</h2>
            <p className="mt-4 text-lg text-ink/75">
              Set up a pull list at our shop for your weekly comics. Your books will be set aside and waiting for you
              every Wednesday. All you have to do is pick them up at least every two weeks, and you save 10% off cover
              price.
            </p>
            <ul className="mt-5 space-y-2 font-head font-semibold">
              {['Free to join', '10% off cover price', 'Trades, graphic novels and some toys & statues too', 'Online ordering portal for subscribers'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center border-2 border-ink bg-pow">
                      <Check className="h-4 w-4" strokeWidth={3.5} />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <Button to="/pull-list" variant="royal" size="lg" className="mt-8">
              Start a pull list <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="relative min-h-64 border-t-[3px] border-ink lg:border-t-0 lg:border-l-[3px]">
            <img
              src="/images/shop/new-comics-rack.webp"
              alt="New comics racked at the shop"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* CGC */}
      <section id="cgc" className="relative border-y-[3px] border-ink bg-royal-600 text-white">
        <div aria-hidden="true" className="halftone absolute inset-0 text-royal-950/25" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <Reveal>
            <SectionHeading light eyebrow="Official CGC submission site" title="Get your books graded">
              Royal Collectibles is an official CGC submission center. Bring us any comic books you want graded and
              we’ll submit them for you. We can also offer our professional opinion on the grade you can expect to
              receive.
            </SectionHeading>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gradingSteps.map(({ title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="panel relative bg-white p-5 pt-9 text-ink">
                <span className="absolute -top-5 -left-3 grid h-12 w-12 -rotate-6 place-items-center border-[3px] border-ink bg-pow font-display text-3xl shadow-comic-sm">
                  {i + 1}
                </span>
                <h3 className="font-display text-3xl leading-none tracking-wide">{title}</h3>
                <p className="mt-2 text-ink/75">{text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
            <div className="flex flex-wrap gap-4">
              <Button href={gradingEmail} size="lg">
                <Mail className="h-5 w-5" /> Email {grading.name} about grading
              </Button>
              <Button href={site.links.cgc} variant="white" size="lg">
                About CGC <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <p className="flex items-center gap-2 font-head font-semibold text-white/85">
              <ShieldCheck className="h-5 w-5 text-pow" /> {grading.email}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selling */}
      <section id="sell" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading eyebrow="Free appraisals" title="Sell us your collection">
              Looking to sell your comic books or other collectibles? We’re licensed by New York State as second-hand
              dealers. Contact us to find out if we’re interested in purchasing your items.
            </SectionHeading>

            <div className="mt-8 border-[3px] border-ink bg-pow p-5 shadow-comic-sm">
              <h3 className="flex items-center gap-2 font-display text-3xl tracking-wide">
                <HandCoins className="h-7 w-7" /> Helpful to include
              </h3>
              <ul className="mt-3 space-y-2">
                {sellTips.map((tip) => (
                  <li key={tip} className="flex gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0" strokeWidth={3.5} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-ink/70">
              E-mail is preferred, but you can also call us at{' '}
              <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-1 font-bold text-royal-600 underline">
                <Phone className="h-4 w-4" />
                {site.phone.display}
              </a>{' '}
              (option {site.phone.option}).
            </p>
          </Reveal>

          <Reveal delay={100}>
            <RequestForm to={site.email} subject="Selling a collection" fields={sellFields} submitLabel="Request an appraisal" />
          </Reveal>
        </div>
      </section>

      {/* Extras */}
      <section className="relative border-t-[3px] border-ink bg-newsprint">
        <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.06]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHeading align="center" eyebrow="And while you’re here" title="The personal touch" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {extras.map(({ Icon, title, text, to, cta }, i) => (
              <Reveal key={title} delay={i * 80} className="panel flex flex-col bg-white p-6">
                <span className="grid h-12 w-12 place-items-center border-[3px] border-ink bg-royal-600 text-white shadow-comic-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-3xl tracking-wide">{title}</h3>
                <p className="mt-1 flex-1 text-ink/75">{text}</p>
                <Button to={to} variant="white" size="sm" className="mt-5 self-start">
                  {cta}
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
