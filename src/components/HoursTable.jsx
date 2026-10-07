import { hours } from '../data/site'
import { useStoreStatus } from '../hooks/useStoreStatus'
import { formatRange } from '../lib/hours'

// `compact` drops the day notes, for narrow columns like the footer
export default function HoursTable({ light = false, compact = false, className = '' }) {
  const { today } = useStoreStatus()

  return (
    <dl className={`divide-y-2 ${light ? 'divide-white/15' : 'divide-ink/10'} ${className}`}>
      {hours.map((entry) => {
        const isToday = entry.day === today.day
        return (
          <div
            key={entry.day}
            className={`flex items-baseline justify-between gap-4 px-3 py-2.5 ${
              isToday ? 'bg-pow text-ink' : ''
            }`}
          >
            <dt className="font-head font-bold uppercase tracking-wide">
              {entry.day}
              {entry.note && !compact && (
                <span
                  className={`ml-2 hidden font-marker text-xs normal-case tracking-normal sm:inline ${
                    isToday ? 'text-royal-700' : light ? 'text-pow' : 'text-royal-600'
                  }`}
                >
                  {entry.note}!
                </span>
              )}
            </dt>
            <dd className={`font-head whitespace-nowrap tabular-nums ${entry.open ? 'font-semibold' : 'font-medium opacity-60'}`}>
              {formatRange(entry)}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
