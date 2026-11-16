import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import useScene from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/service-journey.module.css'

/**
 * Scroll-scrubbed video. The engineers clip was exported to FRAMES stills
 * (public/frames/trades, see tools/extract-frames.mjs) and is drawn on a
 * canvas: scrolling moves the film forward and back with no seek lag, and
 * the highlighted service changes as the film moves. Phones: the same
 * frames play on a loop while visible (no pinning). Reduced motion: the
 * first frame and a plain list.
 */
export const FRAMES = 87
const src = (i) => `/frames/trades/f_${String(i + 1).padStart(3, '0')}.webp`
// the clip shows AC, then electrical, then plumbing, then the whole team: list in that order
const FIRST = ['/services/ac-services', '/services/electrician-services', '/services/plumbing-services']
const LIST = [...FIRST.map((l) => SERVICES.find((s) => s.link === l)), ...SERVICES.filter((s) => !FIRST.includes(s.link))]
const N = LIST.length
// where (0..1 of the film) each of those three scenes ends; the remaining services share the team shot
const CUTS = [0.17, 0.36, 0.53]
const indexAt = (p) => {
  const c = CUTS.findIndex((x) => p < x)
  if (c !== -1) return c
  return Math.min(N - 1, CUTS.length + Math.floor(((p - CUTS[2]) / (1 - CUTS[2])) * (N - CUTS.length)))
}
const pad = (n) => String(n + 1).padStart(2, '0')

export default function VideoJourney() {
  const [active, setActive] = useState(0)
  const canvas = useRef(null)
  const api = useRef({ draw: () => {} })

  // frame loader + drawing (independent of the scroll scene)
  useEffect(() => {
    const el = canvas.current
    const ctx = el.getContext('2d')
    const imgs = new Array(FRAMES)
    const ready = new Array(FRAMES).fill(false)
    let current = 0
    let dead = false

    const load = (i) => {
      if (imgs[i]) return
      const im = new Image()
      im.decoding = 'async'
      im.onload = () => {
        ready[i] = true
        if (i === 0) {
          el.width = im.naturalWidth
          el.height = im.naturalHeight
        }
        if (Math.abs(i - current) < 2) paint()
      }
      im.src = src(i)
      imgs[i] = im
    }
    const paint = () => {
      // nearest frame that has arrived, so scrubbing never shows a blank canvas
      for (let d = 0; d < FRAMES; d++) {
        for (const k of [current - d, current + d]) {
          if (k >= 0 && k < FRAMES && ready[k]) {
            if (el.width) ctx.drawImage(imgs[k], 0, 0, el.width, el.height)
            return
          }
        }
      }
    }
    api.current.draw = (i) => {
      current = Math.max(0, Math.min(FRAMES - 1, i))
      paint()
    }

    load(0)
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || dead) return
        io.disconnect()
        let i = 1
        const next = () => {
          if (dead || i >= FRAMES) return
          for (let n = 0; n < 6 && i < FRAMES; n++) load(i++)
          setTimeout(next, 60)
        }
        next()
      },
      { rootMargin: '800px 0px' }
    )
    io.observe(el)
    return () => {
      dead = true
      io.disconnect()
    }
  }, [])

  const root = useScene(({ ScrollTrigger, root: el, full }) => {
    const bar = el.querySelector('[data-bar]')

    if (!full) {
      // phones: loop the frames while the clip is on screen
      let raf
      let last = 0
      let f = 0
      const tick = (t) => {
        if (t - last > 1000 / 14) {
          last = t
          f = (f + 1) % FRAMES
          api.current.draw(f)
        }
        raf = requestAnimationFrame(tick)
      }
      const io = new IntersectionObserver(([e]) => {
        cancelAnimationFrame(raf)
        if (e.isIntersecting) raf = requestAnimationFrame(tick)
      })
      io.observe(canvas.current)
      return () => {
        io.disconnect()
        cancelAnimationFrame(raf)
        api.current.draw(0)
      }
    }

    el.classList.add(css.pinned)
    const apply = (p) => {
      api.current.draw(Math.round(p * (FRAMES - 1)))
      bar.style.transform = `scaleY(${p})`
      const idx = indexAt(p)
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
              <canvas ref={canvas} className={css.canvas} role="img" aria-label="Our engineers at work on different home trades" />
              <div className={css.shade} />
              <div className={css.tag}>
                <small>{pad(active)} / {pad(N - 1)}</small>
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
