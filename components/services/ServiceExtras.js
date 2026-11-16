import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from '@/components/home/useScene'
import ValuesRibbon from '@/components/about/ValuesRibbon'
import home from '@/style/home.module.css'
import css from '@/style/service-extras.module.css'

/**
 * Closing sections shared by every service page: three other services to
 * look at next, then the "What we stand for" ribbon.
 */
export default function ServiceExtras() {
  const { asPath } = useRouter()
  const here = asPath.split(/[?#]/)[0]
  const at = Math.max(0, SERVICES.findIndex((s) => s.link === here))
  const next = [1, 2, 3].map((k) => SERVICES[(at + k) % SERVICES.length])

  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, '[data-card]'))

  return (
    <>
      <section ref={root} className={css.more}>
        <div className={home.container}>
          <div className={css.head}>
            <div>
              <span className={home.eyebrow}>Keep Looking</span>
              <h2 className={css.title}>More ways we can help</h2>
            </div>
            <Link href="/services" className={home.link_arrow}>
              All Services <Arrow className={home.arrow} />
            </Link>
          </div>
          <div className={css.grid}>
            {next.map((s) => (
              <Link key={s.link} href={s.link} className={css.card} data-card>
                <span className={css.photo}>
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 767px) 92vw, 380px" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={css.go}>
                  View service <Arrow className={home.arrow} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ValuesRibbon />
    </>
  )
}
