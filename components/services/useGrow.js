import useScene from '@/components/home/useScene'

/**
 * Scroll-scrubbed "small to full size": each matching element starts shrunken
 * and eases up to full size as it travels into view. Static with reduced motion
 * (useScene never runs the setup then).
 */
export default function useGrow(selector, { from = 0.78, y = 40, start = 'top 98%', end = 'top 50%' } = {}) {
  return useScene(({ gsap, root }) => {
    root.querySelectorAll(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { scale: from, y, opacity: 0.35 },
        { scale: 1, y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: el, start, end, scrub: 0.6 } }
      )
    })
  })
}
