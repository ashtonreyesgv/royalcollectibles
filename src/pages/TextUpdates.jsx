import { MessageSquareText } from 'lucide-react'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

// The wording in the policy sections below is the shop's SMS opt-in disclosure, carried over from the old site.
// Mobile carriers require it to stay published, so check with the shop before rewording any of it.
export default function TextUpdates() {
  return (
    <>
      <PageHero
        eyebrow="Stay updated"
        title="Text updates"
        accent="& privacy"
        intro={`Text “Join” to ${site.phone.plain} to get updates on your special order with us.`}
      >
        <Button href={`sms:${site.phone.tel}?&body=Join`} size="lg">
          <MessageSquareText className="h-5 w-5" /> Text JOIN to {site.phone.plain}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6 lg:py-20">
        <div className="panel bg-white p-6 sm:p-8">
          <h2 className="font-display text-4xl tracking-wide">How it works</h2>
          <ul className="mt-4 space-y-3 text-lg text-ink/80">
            <li>By texting us you agree to receive text messages at the number provided.</li>
            <li>Standard message and data rates may apply.</li>
            <li>
              Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for help.
            </li>
          </ul>
        </div>

        <div className="panel bg-white p-6 sm:p-8">
          <h2 className="font-display text-4xl tracking-wide">Privacy policy</h2>
          <p className="mt-4 text-lg text-ink/80">
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All
            the above categories exclude text messaging originator opt-in data and consent; this information will not
            be shared with any third parties.
          </p>
        </div>

        <div className="panel bg-white p-6 sm:p-8">
          <h2 className="font-display text-4xl tracking-wide">Your consent</h2>
          <p className="mt-4 text-lg text-ink/80">
            By submitting your phone number, you are authorizing {site.name} to send you text messages. Messaging
            frequency will vary. Message &amp; data rates apply. Reply STOP to unsubscribe to messages sent from us or
            reply HELP for more information.
          </p>
        </div>

        <p className="text-center text-ink/65">
          Questions? Call{' '}
          <a href={`tel:${site.phone.tel}`} className="font-bold text-royal-600 underline">
            {site.phone.display}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${site.email}`} className="font-bold text-royal-600 underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  )
}
