import React from 'react'
import useReveal from './Reveal'
import { PROCESS } from '@/components/home/content'
import s from '@/style/editorial.module.css'

/**
 * Four steps joined by a hairline that draws itself as the row enters.
 * Large serif numerals carry the sequence; no illustrations.
 */
export default function Process() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.process}`}>
      <div className={s.wrap}>
        <header className={s.head}>
          <div>
            <span className={s.eyebrow} data-r>{PROCESS.eyebrow}</span>
            <h2 className={s.display} data-r="80">{PROCESS.title}</h2>
          </div>
          <p className={`${s.body} ${s.head_side}`} data-r="140">{PROCESS.intro}</p>
        </header>

        <ol className={s.steps}>
          {PROCESS.steps.map((st, i) => (
            <li key={st.num} className={s.step} data-r={i * 110}>
              <div className={s.step_rail} aria-hidden="true">
                <i className={s.step_dot} />
                <i className={s.step_line} />
              </div>
              <span className={s.step_num}>{st.num}</span>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
