import React from 'react'
import Link from 'next/link'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

const pad = (n) => String(n + 1).padStart(2, '0')

/**
 * Under the story: the ten trades as a quiet numbered index (hairline rows, each linking to its
 * service page). Replaces the scrolling name band. Nothing moves except a soft reveal and a small
 * shift on hover.
 */
export default function TradesIndex() {
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, '[data-r]'))
  return (
    <section ref={root} className={css.tindex} aria-label="Trades we cover">
      <div className={home.container}>
        <div className={css.tindex_grid}>
          <div className={css.tindex_head} data-r>
            <span className={home.eyebrow}>What we cover</span>
            <h2 className={home.title}>Every trade your home needs</h2>
            <p className={home.intro_p}>One team, ten specialisms. Choose one to see how we work.</p>
            <Link href="/services" className={home.btn_outline}>
              All services
            </Link>
          </div>
          <ol className={css.tlist}>
            {SERVICES.map((s, i) => (
              <li key={s.link} data-r>
                <Link href={s.link}>
                  <span className={css.tnum}>{pad(i)}</span>
                  <span className={css.tname}>{s.title}</span>
                  <Arrow className={css.tarrow} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
