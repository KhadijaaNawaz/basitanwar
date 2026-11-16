import React, { useEffect, useRef, useState } from 'react'

/**
 * Muted, looping, inline background video.
 *
 * `poster` is shown until the first frame decodes, and stays as the only
 * visual when the visitor prefers reduced motion (playback is paused).
 * Sizing/cropping is left to the parent's CSS (`object-fit: cover`).
 *
 * `manual`  the parent decides when to play (no autoplay).
 * `lazy`    off-screen videos do not download anything until the visitor is about
 *           800px from them. Without it a video starts fetching on page load even if
 *           it sits far below the fold (several MB each). Default off, so existing
 *           users of this component (the hero, the emergency block) behave as before.
 */
const LoopVideo = ({ src, poster, className, label = '', manual = false, lazy = false }) => {
  const ref = useRef(null)
  const [near, setNear] = useState(!lazy)

  useEffect(() => {
    if (!lazy || near) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return setNear(true)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin: '800px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [lazy, near])

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined' || manual || !near) return // manual: parent decides when to play
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => (mq.matches ? el.pause() : el.play().catch(() => {}))
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [manual, near])

  return (
    <video
      ref={ref}
      className={className}
      src={near ? src : undefined}
      poster={poster}
      autoPlay={!manual && near}
      muted
      loop
      playsInline
      preload={!near ? 'none' : manual ? 'auto' : 'metadata'}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : 'true'}
    />
  )
}

export default LoopVideo
