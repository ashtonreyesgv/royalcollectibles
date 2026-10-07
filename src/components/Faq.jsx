import { Plus } from 'lucide-react'

export default function Faq({ items, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map(({ question, answer }) => (
        <details key={question} className="group border-[3px] border-ink bg-white shadow-comic-sm open:shadow-comic">
          <summary className="flex list-none items-center justify-between gap-4 p-4 font-head text-lg font-extrabold sm:p-5 [&::-webkit-details-marker]:hidden">
            {question}
            <span className="grid h-9 w-9 shrink-0 place-items-center border-[3px] border-ink bg-pow transition-transform duration-200 group-open:rotate-45">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </span>
          </summary>
          <div className="border-t-[3px] border-dashed border-ink/20 px-4 py-4 text-ink/80 sm:px-5">{answer}</div>
        </details>
      ))}
    </div>
  )
}
