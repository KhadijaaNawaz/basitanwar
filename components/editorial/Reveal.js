import { useEffect, useRef } from 'react'

/**
 * Gentle scroll reveal, no animation library: anything marked data-r fades
 * and lifts 18px once as it enters. `data-r="120"` adds a 120ms delay.
 * Content is fully visible until JS runs, and always with reduced motion.
 */
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = [...root.querySelectorAll('[data-r]')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return
    root.dataset.js = '1'
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.dataset.in = '1'
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )
    items.forEach((el) => {
      el.style.setProperty('--d', `${el.dataset.r || 0}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return ref
}
