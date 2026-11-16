import React from 'react'
import Link from 'next/link'
import Projects from '@/components/redesign/Projects'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from './useScene'
import css from '@/style/home.module.css'

/**
 * Scene 8: Recent work. Each project tile is uncovered by a curtain wipe
 * (top→bottom) while its photo settles from a slight zoom.
 */
export default function ProjectsScene() {
  const root = useScene(({ gsap, root: el }) => {
    reveal({ gsap, root: el })
    el.querySelectorAll('[data-curtain] a').forEach((a, i) => {
      const trigger = { trigger: a, start: 'top 88%', once: true }
      gsap.fromTo(
        a,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut', delay: (i % 3) * 0.08, scrollTrigger: trigger }
      )
      const img = a.querySelector('img')
      img && gsap.fromTo(img, { scale: 1.2 }, { scale: 1, duration: 1.6, ease: 'power3.out', scrollTrigger: trigger })
    })
  })

  return (
    <section ref={root} className={css.work}>
      <div className={css.container}>
        <div className={css.head_row} data-reveal>
          <div>
            <span className={css.eyebrow}>Recent Work</span>
            <h2 className={css.title}>Projects We&apos;ve Completed</h2>
            <p className={css.intro_p}>
              A selection of recent renovation, interior and maintenance work delivered across
              Dubai.
            </p>
          </div>
          <Link href="/portfolio" className={css.link_arrow}>
            View Portfolio <Arrow className={css.arrow} />
          </Link>
        </div>
        <div data-curtain>
          <Projects />
        </div>
      </div>
    </section>
  )
}
