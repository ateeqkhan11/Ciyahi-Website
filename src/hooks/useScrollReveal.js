import { useEffect } from 'react'

/**
 * Adds .reveal → .is-revealed on scroll. Respects prefers-reduced-motion.
 * @param {string} selector - CSS selector for elements to animate
 * @param {object} opts - { stagger?: number, threshold?: number }
 */
export default function useScrollReveal(selector, opts = {}) {
  const { stagger = 70, threshold = 0.08 } = opts

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll(selector)
    if (!els.length) return undefined

    if (reduced) {
      els.forEach(el => el.classList.add('is-revealed'))
      return undefined
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const delay = Number(e.target.dataset.revealDelay) || 0
        setTimeout(() => e.target.classList.add('is-revealed'), delay)
        obs.unobserve(e.target)
      })
    }, { threshold, rootMargin: '0px 0px -48px 0px' })

    els.forEach((el, i) => {
      el.classList.add('reveal')
      if (!el.dataset.revealDelay) el.dataset.revealDelay = String((i % 8) * stagger)
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [selector, stagger, threshold])
}
