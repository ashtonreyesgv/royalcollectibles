import { useStoreStatus } from '../hooks/useStoreStatus'

// "Open now · Until 7pm" pill, driven by the hours in src/data/site.js
export default function StoreStatus({ variant = 'plain', className = '' }) {
  const status = useStoreStatus()

  const dot = (
    <span className="relative flex h-2.5 w-2.5">
      {status.isOpen && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      )}
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-bam'}`} />
    </span>
  )

  if (variant === 'chip') {
    return (
      <span
        className={`inline-flex items-center gap-2.5 border-[3px] border-ink bg-white px-3 py-2 font-head text-sm font-bold leading-none text-ink shadow-comic-sm ${className}`}
      >
        {dot}
        <span className="uppercase tracking-wide">{status.label}</span>
        {status.detail && <span className="font-medium text-ink/65">{status.detail}</span>}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {dot}
      <span className="font-bold uppercase tracking-wide">{status.label}</span>
      {status.detail && <span className="opacity-75">· {status.detail}</span>}
    </span>
  )
}
