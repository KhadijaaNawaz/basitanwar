import React from 'react'
import Link from 'next/link'
import LoopVideo from '@/components/redesign/LoopVideo'
import useReveal from './Reveal'
import { TRANSFORMATION } from '@/components/home/content'
import s from '@/style/editorial.module.css'

/** The mission video, shown as a wide frame with its caption. */
export default function Transformation() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.transform}`}>
      <div className={s.wrap}>
        <div className={s.film} data-r>
          <LoopVideo src="/vedios/mission.mp4" label="Living room renovation transformation" />
          <div className={s.film_cap}>
            <span className={s.eyebrow_light}>{TRANSFORMATION.eyebrow}</span>
            <h2>{TRANSFORMATION.title}</h2>
            <p>{TRANSFORMATION.desc}</p>
            <Link href="/portfolio" className={s.btn_accent}>View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
