import { useEffect, useState } from 'react'
import { getStoreStatus } from '../lib/hours'

// Live open/closed state, refreshed every minute
export function useStoreStatus() {
  const [status, setStatus] = useState(getStoreStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(getStoreStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}
