import { hours } from '../data/site'

const TIME_ZONE = 'America/New_York'
const DAY_NAMES = hours.map((h) => h.day)

const toMinutes = (time) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

// '19:00' -> '7pm', '10:30' -> '10:30am'
export function formatTime(time) {
  const [h, m] = time.split(':').map(Number)
  const hour = h % 12 || 12
  return `${hour}${m ? `:${String(m).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`
}

export const formatRange = (entry) => (entry.open ? `${formatTime(entry.open)} – ${formatTime(entry.close)}` : 'Closed')

// The shop's wall-clock time, whatever time zone the visitor is in
function shopNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type).value
  return { dayIndex: DAY_NAMES.indexOf(get('weekday')), minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export function getStoreStatus(date = new Date()) {
  const { dayIndex, minutes } = shopNow(date)
  const today = hours[dayIndex]

  if (today.open && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    const left = toMinutes(today.close) - minutes
    return {
      isOpen: true,
      today,
      label: 'Open now',
      detail: left <= 60 ? `Closing soon, at ${formatTime(today.close)}` : `Until ${formatTime(today.close)}`,
    }
  }

  if (today.open && minutes < toMinutes(today.open)) {
    return { isOpen: false, today, label: 'Closed', detail: `Opens today at ${formatTime(today.open)}` }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = hours[(dayIndex + offset) % 7]
    if (next.open) {
      const when = offset === 1 ? 'tomorrow' : next.short
      return { isOpen: false, today, label: 'Closed', detail: `Opens ${when} at ${formatTime(next.open)}` }
    }
  }
  return { isOpen: false, today, label: 'Closed', detail: '' }
}
