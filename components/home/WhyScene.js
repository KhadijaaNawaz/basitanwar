import React from 'react'
import { Tool } from './Tools'
import useScene, { reveal } from './useScene'
import { WHY } from './content'
import css from '@/style/home.module.css'

// where each card starts from before it snaps into the 2×2 grid
const ORIGINS = [
  { x: -260, y: -170, rotation: -12, rotationY: 40 },
  { x: 260, y: -170, rotation: 12, rotationY: -40 },
  { x: -260, y: 170, rotation: 10, rotationY: 40 },
  { x: 260, y: 170, rotation: -10, rotationY: -40 },
]

/**
 * Scene 6: Why choose us. The four cards fly in from four corners, tilting
 * in 3D, and assemble into one grid as you scroll (scrubbed, so scrolling
 * back takes them apart). Phones: simple staggered reveal.
 */
export default function WhyScene({ content = WHY }) {
  const root = useScene(({ gsap, root: el, full }) => {
    if (!full) {
      reveal({ gsap, root: el })
      return
    }
    reveal({ gsap, root: el }, '[data-head-reveal]')

    const grid = el.querySelector('[data-grid]')
    el.querySelectorAll('[data-piece]').forEach((card, i) => {
      const o = ORIGINS[i % 4]
      const tool = card.querySelector('svg')
      const trigger = { trigger: grid, start: 'top 88%', end: 'top 25%', scrub: 0.8 }
      gsap.fromTo(
        card,
        { ...o, opacity: 0, scale: 0.85, transformPerspective: 900 },
        { x: 0, y: 0, rotation: 0, rotationY: 0, opacity: 1, scale: 1, ease: 'power3.out', scrollTrigger: trigger }
      )
      gsap.fromTo(
        tool,
        { rotation: i % 2 ? 120 : -120, scale: 0.6 },
        { rotation: 0, scale: 1, ease: 'power3.out', scrollTrigger: trigger }
      )
    })
  })

  return (
    <section ref={root} className={css.why}>
      <div className={css.container}>
        <div className={css.head_stack} data-head-reveal data-reveal>
          <span className={css.eyebrow}>{content.eyebrow}</span>
          <h2 className={css.title}>{content.title}</h2>
        </div>
        <div className={css.why_grid} data-grid>
          {content.items.map((it) => (
            <article key={it.title} className={css.why_card} data-piece data-reveal>
              <Tool name={it.tool} className={css.why_tool} />
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
