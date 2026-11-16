import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FaqList from '@/components/faqs/FaqList'
import useScene, { reveal } from '@/components/home/useScene'
import { PHONE } from '@/components/home/content'
import { SERVICE_COLOR } from './ServiceSignature'
import home from '@/style/home.module.css'
import css from '@/style/service-faq.module.css'

/**
 * A service page's questions, moved out of the narrow sidebar card into their own full-width
 * section, in the page's own colour, with the same numbered sliding list as the rest of the site.
 */
export default function ServiceFaq({ title = 'Questions people ask us', items }) {
  const { asPath } = useRouter()
  const color = SERVICE_COLOR[asPath.split(/[?#]/)[0]]
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, '[data-r]'))
  if (!items?.length) return null
  return (
    <section ref={root} className={css.sec} style={color ? { '--svc': color } : undefined}>
      <div className={home.container}>
        <div className={css.grid}>
          <div className={css.side} data-r>
            <span className={css.kicker}>FAQ</span>
            <h2>{title}</h2>
            <p>Still unsure? Call or message us and a person will answer.</p>
            <div className={css.row}>
              <Link href="/contact-us" className={css.btn}>Ask a question</Link>
              <a href={PHONE.href} className={css.call}>{PHONE.label}</a>
            </div>
          </div>
          <div data-r>
            <FaqList items={items.map((x, i) => ({ id: i, ...x }))} idPrefix="svc-faq" />
          </div>
        </div>
      </div>
    </section>
  )
}
