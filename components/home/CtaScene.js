import React from 'react'
import Link from 'next/link'
import Lottie from './Lottie'
import useScene from './useScene'
import { CTA, PHONE, LOTTIE } from './content'
import css from '@/style/home.module.css'

/**
 * Scene 9: closing call to action. The toolbox from the "Book" step comes
 * back: as the section arrives its lid lifts and the tools inside rise out.
 */
export default function CtaScene() {
  const root = useScene(({ gsap, root: el }) => {
    const box = el.querySelector('[data-box]')
    gsap.fromTo(
      box,
      { scale: 0.88, y: 30, opacity: 0.4 },
      { scale: 1, y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'center 55%', scrub: 0.7 } }
    )
  })

  return (
    <section ref={root} className={css.cta}>
      <div className={css.container}>
        <div className={css.cta_grid}>
          <div>
            <h2 className={css.cta_title}>{CTA.title}</h2>
            <p className={css.lead}>{CTA.desc}</p>
            <div className={css.row}>
              <Link href="/contact-us" className={css.btn_dark}>
                Request a Quote
              </Link>
              <a href={PHONE.href} className={css.cta_phone}>
                <small>Call us directly</small>
                <strong>{PHONE.label}</strong>
              </a>
            </div>
          </div>
          <div className={css.cta_box} data-box>
            <div className={css.cta_clock_card}>
              <Lottie src={LOTTIE.clockGold} className={css.cta_clock_big} label="Available 24 hours, 7 days a week" />
              <strong>24/7</strong>
              <small>Emergency support, every day</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
