import React from 'react'
import useScene, { reveal } from './useScene'
import { PHONE } from './content'
import FAQscompo from '@/components/updated-components/faqscompo'
import css from '@/style/home.module.css'

const PROMISES = ['Response within the hour', 'Licensed, insured technicians', 'Upfront pricing, no surprises']

/**
 * Scene: FAQ. A dark contact panel beside the question list instead of a
 * plain centred block — no photo here, just the number and what to expect.
 */
export default function FaqScene() {
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }))

  return (
    <section ref={root} className={css.faq_band}>
      <div className={css.container}>
        <div className={css.faq_split}>
          <div className={css.faq_panel} data-reveal>
            <span className={css.eyebrow}>Need Help Fast?</span>
            <a href={PHONE.href} className={css.faq_panel_num}>
              {PHONE.label}
            </a>
            <span className={css.faq_panel_sub}>Call or WhatsApp — a person answers</span>
            <ul className={css.faq_panel_list}>
              {PROMISES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className={css.faq_body} data-reveal>
            <span className={css.eyebrow}>Do You Have</span>
            <h2 className={css.title}>Any Questions?</h2>
            <p className={css.intro_p}>The things customers ask us most often, answered plainly.</p>
            <FAQscompo />
          </div>
        </div>
      </div>
    </section>
  )
}
