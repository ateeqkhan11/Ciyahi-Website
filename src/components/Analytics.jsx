/**
 * Privacy-friendly analytics (Plausible).
 * No cookies, no personal data stored by the tracker — visitors, countries,
 * referrers, and pages only. Loads only when VITE_PLAUSIBLE_DOMAIN is set.
 */
import { useEffect } from 'react'

const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN
const SCRIPT_SRC = import.meta.env.VITE_PLAUSIBLE_SCRIPT_SRC || 'https://plausible.io/js/script.js'

export default function Analytics() {
  useEffect(() => {
    if (!DOMAIN || typeof document === 'undefined') return undefined
    if (document.querySelector(`script[data-domain="${DOMAIN}"]`)) return undefined

    const script = document.createElement('script')
    script.defer = true
    script.dataset.domain = DOMAIN
    script.src = SCRIPT_SRC
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
