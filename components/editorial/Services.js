import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useReveal from './Reveal'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import { SERVICE_IMAGE } from './images'
import s from '@/style/editorial.module.css'

const pad = (n) => String(n + 1).padStart(2, '0')

/**
 * Ten services on a 12-column editorial grid: the first is a wide feature,
 * the rest are portrait cards, and the last slot is a quiet prompt for visitors
 * who are not sure which trade they need. Each whole card is the link.
 */
export default function Services() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.services}`} id="services">
      <div className={s.wrap}>
        <header className={s.head}>
          <div>
            <span className={s.eyebrow} data-r>All-Inclusive Solutions</span>
            <h2 className={s.display} data-r="80">Our Services</h2>
          </div>
          <div className={s.head_side} data-r="140">
            <p className={s.body}>Every trade your home needs, under one roof.</p>
            <Link href="/services" className={s.link_line}>
              All Services <Arrow className={s.arrow} />
            </Link>
          </div>
        </header>

        <ul className={s.svc_grid}>
          {SERVICES.map((svc, i) => {
            const img = SERVICE_IMAGE[svc.link] || { src: svc.image, pos: '50% 50%' }
            return (
              <li key={svc.link} className={`${s.svc} ${i === 0 ? s.svc_feature : ''}`} data-r={(i % 3) * 80}>
                <Link href={svc.link} className={s.svc_card}>
                  <div className={s.svc_media}>
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes={i === 0 ? '(max-width: 900px) 100vw, 66vw' : '(max-width: 900px) 100vw, 33vw'}
                      style={{ objectPosition: img.pos }}
                    />
                  </div>
                  <div className={s.svc_body}>
                    <div className={s.svc_top}>
                      <span className={s.svc_num}>{pad(i)}</span>
                      <h3>{svc.title}</h3>
                    </div>
                    <p>{svc.desc}</p>
                    <span className={s.svc_more}>
                      View service <Arrow className={s.arrow} />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}

          <li className={`${s.svc} ${s.svc_note}`} data-r="160">
            <div className={s.note}>
              <span className={s.eyebrow_light}>Not sure?</span>
              <p>Not sure which service you need? Tell us the problem and we will point you to the right specialist.</p>
              <Link href="/contact-us" className={s.btn_accent}>Tell us the problem</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
