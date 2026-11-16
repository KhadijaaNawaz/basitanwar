import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useReveal from './Reveal'
import { CTA, PHONE } from '@/components/home/content'
import { CTA_IMAGE } from './images'
import s from '@/style/editorial.module.css'

// All three are claims the site already makes elsewhere on this page.
const PROMISES = ['Itemised price before work starts', 'No obligation, no hidden fees', '24/7 emergency callout']

/** Closing frame: one photograph, one headline, one action. */
export default function FinalCta() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.cta}`}>
      <div className={s.wrap}>
        <div className={s.cta_frame} data-r>
          <Image
            src={CTA_IMAGE.src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: CTA_IMAGE.pos }}
            className={s.cta_img}
          />
          <div className={s.cta_scrim} />
          <div className={s.cta_inner}>
            <span className={s.eyebrow_light}>Start a project</span>
            <h2>{CTA.title}</h2>
            <p>{CTA.desc}</p>
            <div className={s.row}>
              <Link href="/contact-us" className={s.btn_accent}>Request a Quote</Link>
              <a href={PHONE.href} className={s.cta_phone}>
                <small>Call us directly</small>
                <strong>{PHONE.label}</strong>
              </a>
            </div>
          </div>
          <ul className={s.cta_promises}>
            {PROMISES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
