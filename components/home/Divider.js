import React from 'react'
import useScene from './useScene'
import css from '@/style/home.module.css'

/**
 * A small decorative divider between sections: a hairline draws outward from
 * a centre mark as it scrolls into view. Used between every major section on
 * the home page so each transition gets a deliberate, consistent beat
 * instead of one section just ending and the next starting.
 */
export default function Divider() {
  const root = useScene(({ gsap, root: el }) => {
    gsap.fromTo(
      el.querySelector('[data-line]'),
      { scaleX: 0 },
      { scaleX: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
    )
    gsap.fromTo(
      el.querySelector('[data-mark]'),
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2.4)', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
    )
  })

  return (
    <div ref={root} className={css.divider} aria-hidden="true">
      <span className={css.divider_line} data-line />
      <span className={css.divider_mark} data-mark />
    </div>
  )
}
