import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gallery from '@/data/gallery.json'
import useReveal from './Reveal'
import { Arrow } from '@/components/redesign/Section'
import { PORTFOLIO_POS } from './images'
import s from '@/style/editorial.module.css'

// Desktop composition: columns spanned (of 12) and image ratio, per tile.
const LAYOUT = [
  { c: 7, r: '16 / 11' },
  { c: 5, r: '4 / 5' },
  { c: 4, r: '3 / 4' },
  { c: 4, r: '3 / 4', drop: true },
  { c: 4, r: '3 / 4' },
  { c: 5, r: '1 / 1' },
  { c: 7, r: '16 / 10' },
]

/**
 * Recent work as an uneven gallery. Only fields that are real in
 * data/gallery.json are shown (name and category); its location/client
 * fields are still placeholder text, so they are deliberately not displayed.
 */
export default function Portfolio() {
  const ref = useReveal()
  const items = gallery.slice(0, LAYOUT.length)
  return (
    <section ref={ref} className={`${s.ed} ${s.portfolio}`}>
      <div className={s.wrap}>
        <header className={s.head}>
          <div>
            <span className={s.eyebrow} data-r>Recent Work</span>
            <h2 className={s.display} data-r="80">Projects We&apos;ve Completed</h2>
          </div>
          <div className={s.head_side} data-r="140">
            <p className={s.body}>
              A selection of recent renovation, interior and maintenance work delivered across Dubai.
            </p>
            <Link href="/portfolio" className={s.link_line}>
              View Portfolio <Arrow className={s.arrow} />
            </Link>
          </div>
        </header>

        <div className={s.pf}>
          {items.map((item, i) => (
            <figure
              key={`${item.slug}-${i}`}
              className={`${s.pf_item} ${LAYOUT[i].drop ? s.pf_drop : ''}`}
              style={{ '--c': LAYOUT[i].c, '--r': LAYOUT[i].r }}
              data-r={(i % 3) * 90}
            >
              <Link href={`/gallery/${item.slug}`} className={s.pf_link}>
                <div className={s.pf_media}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 55vw"
                    style={{ objectPosition: PORTFOLIO_POS[i] }}
                  />
                </div>
                <figcaption className={s.pf_cap}>
                  <span className={s.pf_idx}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={s.pf_title}>{item.name}</span>
                  <span className={s.pf_cat}>{item.status}</span>
                  <Arrow className={s.arrow} />
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
