import React from 'react'
import Link from 'next/link'
import LoopVideo from '@/components/redesign/LoopVideo'
import Lottie from './Lottie'
import useScene from './useScene'
import { EMERGENCY, PHONE, LOTTIE } from './content'
import css from '@/style/home.module.css'

/**
 * Scene 7: Emergency. The one dark room on the page. As it scrolls into view
 * the 24-hour clock runs, the copy comes up with it, and the video's dim
 * overlay lifts: "someone turned the lights on". Works on every viewport.
 */
export default function EmergencyScene() {
  const root = useScene(({ gsap, root: el }) => {
    const lines = el.querySelectorAll('[data-line]')
    const dim = el.querySelector('[data-dim]')

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: el, start: 'top 70%', end: 'center 45%', scrub: 0.6 },
    })
    gsap.set(lines, { opacity: 0.18 })
    gsap.set(dim, { opacity: 0.85 })
    tl.to(lines, { opacity: 1, stagger: 0.12, duration: 0.3 }, 0.3)
      .to(dim, { opacity: 0, duration: 0.6 }, 0.3)
  })

  return (
    <section ref={root} className={css.emerg}>
      <div className={css.container}>
        <div className={css.emerg_card}>
          <div className={css.emerg_copy}>
            <Lottie src={LOTTIE.clock} className={css.emerg_clock} label="Available 24 hours" />
            <span className={css.eyebrow_light} data-line>
              {EMERGENCY.eyebrow}
            </span>
            <h2 data-line>{EMERGENCY.title}</h2>
            <p data-line>{EMERGENCY.desc}</p>
            <a href={PHONE.href} className={css.emerg_phone} data-line>
              <small>Call us directly</small>
              {PHONE.label}
            </a>
            <div data-line>
              <Link href="/contact-us" className={css.btn_light}>
                Or request a quote
              </Link>
            </div>
          </div>
          <div className={css.emerg_media}>
            <LoopVideo src={EMERGENCY.video} label={EMERGENCY.videoLabel} />
            <div className={css.emerg_dim} data-dim />
          </div>
        </div>
      </div>
    </section>
  )
}
