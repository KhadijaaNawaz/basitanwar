import React from 'react'
import useReveal from './Reveal'
import { STATS } from '@/components/home/content'
import s from '@/style/editorial.module.css'

/** '10+' → ['10', '+'] so the symbol can be set smaller, in the accent colour. */
const split = (v) => {
  const m = String(v).match(/^(\d+)(.*)$/)
  return m ? [m[1], m[2]] : [v, '']
}

export default function Stats() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.stats}`} aria-label="BA Tech at a glance">
      <div className={s.wrap}>
        <dl className={s.stats_row}>
          {STATS.map((st, i) => {
            const [n, suffix] = split(st.value)
            return (
              <div key={st.label} className={s.stat} data-r={i * 90}>
                <dt>
                  {n}
                  {suffix && <sup>{suffix}</sup>}
                </dt>
                <dd>{st.label}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
