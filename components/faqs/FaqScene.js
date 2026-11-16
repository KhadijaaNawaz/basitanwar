import React from 'react'
import Link from 'next/link'
import { FAQS } from './faq-data'
import FaqList from './FaqList'
import Lottie from '@/components/home/Lottie'
import useScene, { reveal } from '@/components/home/useScene'
import { LOTTIE, PHONE } from '@/components/home/content'
import home from '@/style/home.module.css'
import css from '@/style/faq-page.module.css'

/**
 * FAQ page body. Left: a card that stays in view with the support Lottie and
 * a direct way to reach us. Right: the questions as large numbered rows; one
 * opens at a time (rows slide open with a grid-rows transition, so no height
 * measuring), the plus turns into a cross, and rows rise in as you scroll.
 */
export default function FaqScene() {
  const root = useScene(({ gsap, root: el }) => {
    reveal({ gsap, root: el }, '[data-row]')
    reveal({ gsap, root: el }, '[data-side]')
  })

  return (
    <section ref={root} className={css.sec}>
      <div className={home.container}>
        <div className={css.grid}>
          <aside className={css.side} data-side>
            <span className={home.eyebrow}>Questions</span>
            <h2 className={css.title}>Answers, before you ask.</h2>
            <p>
              The things people ask us most. If yours is not here, call or message us and a person will answer.
            </p>
            <Lottie src={LOTTIE.support} className={css.lottie} label="Our team is ready to help" />
            <div className={home.row}>
              <Link href="/contact-us" className={home.btn_dark}>Ask a Question</Link>
              <a href={PHONE.href} className={home.cta_phone}>
                <small>Call us directly</small>
                <strong>{PHONE.label}</strong>
              </a>
            </div>
          </aside>

          <FaqList items={FAQS} reveal />
        </div>
      </div>
    </section>
  )
}
