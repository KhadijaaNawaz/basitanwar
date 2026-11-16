import React, { useState } from 'react'
import Link from 'next/link'
import useReveal from './Reveal'
import { FAQ_ITEMS } from '@/components/updated-components/faqscompo'
import s from '@/style/editorial.module.css'

/**
 * Accordion: one item open at a time. The panel animates with a grid-rows
 * transition (0fr → 1fr), so no height measuring and no layout jank.
 */
export default function Faq() {
  const ref = useReveal()
  const [open, setOpen] = useState(0)
  return (
    <section ref={ref} className={`${s.ed} ${s.faq}`}>
      <div className={`${s.wrap} ${s.faq_grid}`}>
        <div className={s.faq_intro}>
          <span className={s.eyebrow} data-r>Do You Have</span>
          <h2 className={s.display} data-r="80">Any Questions?</h2>
          <p className={s.body} data-r="140">The things customers ask us most often, answered plainly.</p>
          <Link href="/contact-us" className={s.link_line} data-r="180">Ask us directly</Link>
        </div>

        <div className={s.faq_list} data-r="100">
          {FAQ_ITEMS.map((item, i) => {
            const on = open === i
            return (
              <div key={item.id} className={`${s.qa} ${on ? s.qa_on : ''}`}>
                <h3>
                  <button
                    type="button"
                    className={s.q}
                    aria-expanded={on}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(on ? -1 : i)}
                  >
                    <span>{item.question}</span>
                    <i className={s.q_icon} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={s.a}>
                  <div className={s.a_inner}>
                    <p>{item.answer.trim()}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
