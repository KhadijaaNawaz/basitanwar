import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import useScene from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/service-journey.module.css'

/**
 * Pinned service list beside a photo that crossfades with the active item.
 * Was previously a scroll-scrubbed canvas playing baked video frames
 * (public/frames/trades, see tools/extract-frames.mjs) — pulled because
 * every frame of that clip carried a third-party company's logo and a
 * closing title card for a different business. This uses the same clean
 * per-service photos as the homepage grid (components/redesign/ServicesGrid).
 */
const FIRST = ['/services/ac-services', '/services/electrician-services', '/services/plumbing-services']
const LIST = [...FIRST.map((l) => SERVICES.find((s) => s.link === l)), ...SERVICES.filter((s) => !FIRST.includes(s.link))]
const N = LIST.length
const pad = (n) => String(n + 1).padStart(2, '0')

export default function VideoJourney() {
  const [active, setActive] = useState(0)

  const root = useScene(({ ScrollTrigger, root: el, full }) => {
    const bar = el.querySelector('[data-bar]')

    if (!full) {
      // phones: no pin, just cycle the photo gently while the section is visible
      let i = 0
      let id = null
      const io = new IntersectionObserver(([e]) => {
        clearInterval(id)
        if (e.isIntersecting) id = setInterval(() => setActive((i = (i + 1) % N)), 2200)
      })
      io.observe(el)
      return () => {
        io.disconnect()
        clearInterval(id)
      }
    }

    el.classList.add(css.pinned)
    const apply = (p) => {
      bar.style.transform = `scaleY(${p})`
      const idx = Math.min(N - 1, Math.floor(p * N))
      setActive((a) => (a === idx ? a : idx))
    }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: () => '+=' + window.innerHeight * N * 0.5,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (self) => apply(self.progress),
      onUpdate: (self) => apply(self.progress),
    })
    return () => {
      el.classList.remove(css.pinned)
      bar.removeAttribute('style')
      st.kill()
    }
  })

  return (
    <section ref={root} className={css.journey} aria-label="Our services, shown as you scroll">
      <div className={home.container}>
        <div className={css.grid}>
          <div className={css.list_col}>
            <span className={home.eyebrow}>Our Services</span>
            <h2 className={css.title}>Every trade, one team</h2>
            <ol className={css.list}>
              {LIST.map((s, i) => (
                <li key={s.link} className={css.item} data-on={active === i}>
                  <Link href={s.link}>
                    <span className={css.num}>{pad(i)}</span>
                    <span className={css.body}>
                      <strong>{s.title}</strong>
                      <span className={css.desc}>{s.desc}</span>
                      <span className={css.more}>
                        View service <Arrow className={home.arrow} />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className={css.frame_col}>
            <div className={css.frame}>
              {LIST.map((s, i) => (
                <Image
                  key={s.link}
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1023px) 20rem, 24rem"
                  priority={i === 0}
                  className={css.frame_img}
                  data-on={active === i}
                />
              ))}
              <div className={css.shade} />
              <div className={css.tag}>
                <small>
                  {pad(active)} / {pad(N - 1)}
                </small>
                <strong>{LIST[active].title}</strong>
              </div>
              <i className={css.rail}>
                <b data-bar />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
