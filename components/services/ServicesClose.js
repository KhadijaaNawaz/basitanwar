import React from 'react'
import Link from 'next/link'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from '@/components/home/useScene'
import { PHONE } from '@/components/home/content'
import home from '@/style/home.module.css'
import css from '@/style/services-page.module.css'

const WHATSAPP = 'https://wa.me/971524052485'

/**
 * Closing section of the Services page: instead of repeating the Home clock card, three direct
 * ways to reach a person, as hairline rows (call, WhatsApp, quote).
 */
export default function ServicesClose() {
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, '[data-r]'))
  return (
    <section ref={root} className={css.close}>
      <div className={home.container}>
        <div className={css.close_grid}>
          <div data-r>
            <span className={home.eyebrow}>Not sure where to start?</span>
            <h2 className={css.close_title}>Tell us what is wrong and we will send the right specialist.</h2>
            <p className={home.intro_p}>A clear price before any work starts. No obligation.</p>
          </div>
          <ul className={css.reach}>
            <li data-r>
              <a href={PHONE.href}>
                <small>Call, 24 hours</small>
                <strong>{PHONE.label}</strong>
                <Arrow className={css.reach_arrow} />
              </a>
            </li>
            <li data-r>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <small>WhatsApp</small>
                <strong>Message us</strong>
                <Arrow className={css.reach_arrow} />
              </a>
            </li>
            <li data-r>
              <Link href="/contact-us">
                <small>Online</small>
                <strong>Request a quote</strong>
                <Arrow className={css.reach_arrow} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
