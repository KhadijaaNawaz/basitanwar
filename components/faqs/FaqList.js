import React, { useState } from 'react'
import css from '@/style/faq-page.module.css'

const pad = (n) => String(n + 1).padStart(2, '0')

/**
 * The shared question list: numbered rows, one open at a time, the plus turns into a cross,
 * answers slide open with a grid-rows transition (no height measuring). Used by the FAQ page,
 * the home FAQ band and every service page. The accent colour comes from --svc if a parent sets it.
 */
export default function FaqList({ items, startOpen = 0, idPrefix = 'faq', reveal = false }) {
  const [open, setOpen] = useState(startOpen)
  return (
    <ol className={css.list}>
      {items.map((f, i) => {
        const on = open === i
        const id = `${idPrefix}-${f.id ?? i}`
        return (
          <li key={id} className={css.row} data-on={on} {...(reveal ? { 'data-row': true } : {})}>
            <h3>
              <button type="button" aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? -1 : i)}>
                <span className={css.num}>{pad(i)}</span>
                <span className={css.q}>{f.question}</span>
                <span className={css.plus} aria-hidden="true" />
              </button>
            </h3>
            <div id={id} className={css.a} role="region">
              <div>
                <p>{typeof f.answer === 'string' ? f.answer.trim() : f.answer}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
