import { useEffect, useRef } from 'react'

/**
 * Runs a scene's scroll animation with GSAP + ScrollTrigger, loaded lazily
 * so neither library is in the initial bundle or blocks first paint.
 *
 * `setup(ctx)` receives { gsap, ScrollTrigger, root, full }:
 *   full === true   → desktop (>=1024px), motion allowed: pins, travels, 3D
 *   full === false  → phones/tablets, motion allowed: keep it light
 *
 * With prefers-reduced-motion, `setup` is never called. Every scene's base
 * CSS is therefore its finished, static layout; the animation is layered on.
 * Anything `setup` changes on the DOM (classes, styles) must be undone by
 * the function it returns, which runs on resize/unmount.
 */
export const DESKTOP = '(min-width: 1024px)'
const MOTION = '(prefers-reduced-motion: no-preference)'

export default function useScene(setup) {
  const root = useRef(null)
  const setupRef = useRef(setup)
  setupRef.current = setup

  useEffect(() => {
    let mm
    let dead = false

    ;(async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (dead || !root.current) return
      gsap.registerPlugin(ScrollTrigger)

      mm = gsap.matchMedia(root.current)
      mm.add({ full: `${DESKTOP} and ${MOTION}`, lite: `(max-width: 1023.98px) and ${MOTION}` }, (c) =>
        setupRef.current({
          gsap,
          ScrollTrigger,
          root: root.current,
          full: !!c.conditions.full,
        })
      )
    })()

    return () => {
      dead = true
      mm && mm.revert()
    }
  }, [])

  return root
}

/**
 * Fade/lift/scale anything marked data-reveal as it enters — used on every
 * viewport, so this one animation is what most of the site's section
 * transitions actually look like. Each element keeps its own trigger (safe
 * for tall sections), but a small index-based delay makes elements that
 * cross the threshold together (a row of cards, a grid) settle in as a
 * gentle cascade rather than popping in all at once.
 */
export function reveal({ gsap, root }, selector = '[data-reveal]') {
  root.querySelectorAll(selector).forEach((el, i) => {
    gsap.from(el, {
      y: 42,
      opacity: 0,
      scale: 0.97,
      duration: 1,
      delay: Math.min(i * 0.05, 0.25),
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })
}
