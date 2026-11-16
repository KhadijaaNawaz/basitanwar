import React from 'react'
import Link from 'next/link'
import Lottie from '@/components/home/Lottie'
import useScene, { reveal } from '@/components/home/useScene'
import { LOTTIE, PHONE } from '@/components/home/content'
import { CLOSE } from './content'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

/** Scene 6: closing. The support agent Lottie loops beside a short invitation. */
export default function AboutClose() {
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }))
  return (
    <section ref={root} className={css.close}>
      <div className={home.container}>
        <div className={css.close_grid}>
          <div className={css.close_art} data-reveal>
            <Lottie src={LOTTIE.support} className={css.close_lottie} label="Our team is ready to help" />
          </div>
          <div>
            <span className={home.eyebrow} data-reveal>{CLOSE.eyebrow}</span>
            <h2 className={home.cta_title} data-reveal>{CLOSE.title}</h2>
            <p className={home.lead} data-reveal>{CLOSE.desc}</p>
            <div className={home.row} data-reveal>
              <Link href="/contact-us" className={home.btn_dark}>Request a Quote</Link>
              <a href={PHONE.href} className={home.cta_phone}>
                <small>Call us directly</small>
                <strong>{PHONE.label}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
