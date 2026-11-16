import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import { Tool } from '@/components/home/Tools'
import useScene from '@/components/home/useScene'
import { SERVICE_TOOL } from '@/components/home/content'
import home from '@/style/home.module.css'
import css from '@/style/services-page.module.css'

const pad = (n) => String(n + 1).padStart(2, '0')
const TINTS = ['#ffffff', '#fff3dc', '#f1ece2'] // slabs alternate so each one reads against the last

/**
 * The ten services as large slabs that pile up as you scroll: each one sticks
 * under the header and the next slides over it while the one beneath shrinks
 * and dims. Phones/reduced motion: a plain stack.
 */
export default function ServiceStack() {
  const root = useScene(({ gsap, root: el, full }) => {
    const head = el.querySelector('[data-head]')
    gsap.from(head, { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: head, start: 'top 88%', once: true } })
    if (!full) return

    const slabs = [...el.querySelectorAll('[data-slab]')]
    slabs.forEach((slab, i) => {
      const next = slabs[i + 1]
      const body = slab.firstElementChild
      // card rises into place
      gsap.from(body, { y: 90, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: slab, start: 'top 92%', once: true } })
      // the photo drifts slower than the page
      gsap.fromTo(slab.querySelector('[data-photo] img'), { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: slab, start: 'top bottom', end: 'bottom top', scrub: true } })
      if (!next) return
      // when the next slab arrives, this one steps back
      gsap.fromTo(body, { scale: 1, filter: 'brightness(1)', transformOrigin: '50% 0%' }, {
        scale: 0.93,
        filter: 'brightness(0.9)',
        transformOrigin: '50% 0%',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 14%', scrub: true },
      })
    })
  })

  return (
    <section ref={root} className={css.stack}>
      <div className={home.container}>
        <div className={css.stack_head} data-head>
          <span className={home.eyebrow}>The Full List</span>
          <h2 className={home.title}>Ten ways we look after your home</h2>
        </div>

        <div className={css.slabs}>
          {SERVICES.map((s, i) => (
            <article key={s.link} className={css.slab} style={{ '--i': i, '--tint': TINTS[i % 3] }} data-slab>
              <div className={css.slab_body}>
                <div className={css.slab_text}>
                  <span className={css.big} aria-hidden="true">{pad(i)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.link} className={css.slab_link}>
                    View service <Arrow className={home.arrow} />
                  </Link>
                  <Tool name={SERVICE_TOOL[s.link]} className={css.slab_tool} />
                </div>
                <div className={css.slab_photo} data-photo>
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 1023px) 92vw, 600px" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
