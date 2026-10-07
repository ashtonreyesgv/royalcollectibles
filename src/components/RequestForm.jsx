import { useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import Button from './Button'
import { mailto } from '../lib/mailto'

const inputClasses =
  'w-full border-[3px] border-ink bg-white px-3.5 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus:bg-royal-50 focus:outline-none focus:ring-4 focus:ring-pow'

function Field({ field }) {
  const { name, label, type = 'text', required, options, hint, half, ...rest } = field
  const id = `field-${name}`

  let control
  if (type === 'textarea') {
    control = <textarea id={id} name={name} required={required} rows={4} className={inputClasses} {...rest} />
  } else if (type === 'select') {
    control = (
      <select id={id} name={name} required={required} className={inputClasses} defaultValue="" {...rest}>
        <option value="" disabled>
          Choose one…
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    )
  } else {
    control = <input id={id} name={name} type={type} required={required} className={inputClasses} {...rest} />
  }

  return (
    <div className={half ? '' : 'sm:col-span-2'}>
      <label htmlFor={id} className="mb-1.5 block font-head text-sm font-bold uppercase tracking-wide">
        {label}
        {required && <span className="ml-1 text-bam">*</span>}
      </label>
      {control}
      {hint && <p className="mt-1.5 text-sm text-ink/60">{hint}</p>}
    </div>
  )
}

// Builds an email from the fields and opens it in the visitor's mail app (see lib/mailto.js).
export default function RequestForm({ to, subject, fields, submitLabel = 'Send request', contactName }) {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = fields
      .map(({ name, label }) => [label, String(data.get(name) ?? '').trim()])
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
    window.location.href = mailto({ to, subject, lines })
    setSent(true)
  }

  const copyAddress = async () => {
    await navigator.clipboard?.writeText(to)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="panel bg-white p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <Field key={field.name} field={field} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="royal" size="lg">
          <Send className="h-5 w-5" />
          {submitLabel}
        </Button>
        <p className="max-w-xs text-sm text-ink/60">
          This opens your email app with everything filled in{contactName ? `, addressed to ${contactName}` : ''}. Just
          hit send.
        </p>
      </div>

      {sent && (
        <div role="status" className="animate-pop mt-6 border-[3px] border-ink bg-pow p-4">
          <p className="font-head font-extrabold uppercase tracking-wide">Check your email app!</p>
          <p className="mt-1 text-sm">
            Your message should be waiting there, ready to send. Nothing opened? Email us directly at{' '}
            <a href={`mailto:${to}`} className="font-bold underline">
              {to}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={copyAddress}
            className="mt-3 inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-1.5 font-head text-sm font-bold uppercase"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy address'}
          </button>
        </div>
      )}
    </form>
  )
}
