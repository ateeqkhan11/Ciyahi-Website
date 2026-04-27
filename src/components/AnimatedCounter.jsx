import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '' }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const isNumeric = !isNaN(parseFloat(value))
        if (!isNumeric) { setDisplay(value); return }
        const end = parseFloat(value)
        const decimals = value.toString().includes('.') ? 1 : 0
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const elapsed = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - elapsed, 3)
          setDisplay((end * ease).toFixed(decimals))
          if (elapsed < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}{suffix}</span>
}
