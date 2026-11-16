import React, { useEffect, useRef } from 'react'

/**
 * Lottie player (lottie-web SVG build, loaded lazily).
 *
 * - Plays only while on screen, pauses when off screen.
 * - prefers-reduced-motion: shows one still frame, never plays.
 * - Scroll-scrubbing: a scene calls scrubLottie(container, 0..1); that marks
 *   the container `data-scrub` and the player stops autoplaying until
 *   releaseLottie() is called.
 *
 * `viewBox="x y w h"` crops the canvas when the artwork is small inside it.
 * Files live in public/json. `src` may contain spaces; they are encoded here.
 */
export default function Lottie({ src, className, loop = true, still = 0.5, label, viewBox }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let anim
    let io
    let dead = false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    import('lottie-web/build/player/lottie_svg').then((mod) => {
      if (dead) return
      const lottie = mod.default || mod
      anim = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop,
        autoplay: false,
        path: encodeURI(src),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: true,
          ...(viewBox ? { viewBoxSize: viewBox } : {}), // "x y w h": crop to the artwork
        },
      })
      el.__lottie = anim
      anim.addEventListener('DOMLoaded', () => {
        if (reduced) return anim.goToAndStop(Math.floor(anim.totalFrames * still), true)
        io = new IntersectionObserver(([e]) => {
          if (el.dataset.scrub) return
          e.isIntersecting ? anim.play() : anim.pause()
        })
        io.observe(el)
      })
    })

    return () => {
      dead = true
      io && io.disconnect()
      anim && anim.destroy()
      el.__lottie = null
    }
  }, [src, loop, still, viewBox])

  return <div ref={ref} className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'} />
}

export const scrubLottie = (container, p) => {
  const a = container && container.__lottie
  if (!a || !a.totalFrames) return
  container.dataset.scrub = '1'
  a.goToAndStop(Math.min(1, Math.max(0, p)) * (a.totalFrames - 1), true)
}

export const releaseLottie = (container) => {
  if (!container) return
  delete container.dataset.scrub
  container.__lottie && container.__lottie.play()
}
