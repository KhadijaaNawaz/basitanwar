import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoopVideo from '@/components/redesign/LoopVideo'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from './useScene'
import { TRANSFORMATION } from './content'
import css from '@/style/home.module.css'

const N = SERVICES.length
const pad = (n) => String(n + 1).padStart(2, '0')
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

/**
 * Scenes 3 + 4: Services → Transformation.
 *
 * Desktop: the section pins. Scrolling slides a track of tool cards sideways
 * (the counter follows, hovering a card lifts its tool). The last "card" is a
 * window onto mission.mp4; once it reaches the end it GROWS to fill the
 * screen and that video becomes the next section (clip-path, no layout work).
 *
 * Phones / reduced motion: a swipe track / grid, then the video as a normal block.
 */
export default function ServicesScene() {
  const [active, setActive] = useState(0)

  const root = useScene(({ gsap, ScrollTrigger, root: el, full }) => {
    reveal({ gsap, root: el })
    if (!full) return

    const head = el.querySelector('[data-head]')
    const track = el.querySelector('[data-track]')
    const viewport = el.querySelector('[data-viewport]')
    const finalCard = el.querySelector('[data-final]')
    const layer = el.querySelector('[data-expand]')
    const caption = layer.querySelector('[data-caption]')
    const label = layer.querySelector('[data-label]')
    const video = layer.querySelector('video')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let playing = false
    // The film starts from its first frame only once the window has grown to full screen.
    const toggleVideo = (on) => {
      if (!video || on === playing || reduced) return
      playing = on
      if (on) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else video.pause()
    }

    el.classList.add(css.svc_pinned)

    let dist = 0
    let frac = 0.7
    let m = { fx: 0, fy: 0, fw: 0, fh: 0, W: 0 }

    const measure = () => {
      const vh = window.innerHeight
      m = {
        fx: finalCard.offsetLeft,
        fy: viewport.offsetTop + finalCard.offsetTop,
        fw: finalCard.offsetWidth,
        fh: finalCard.offsetHeight,
        W: el.clientWidth,
      }
      dist = Math.max(0, track.scrollWidth - el.clientWidth)
      const grow = vh * 0.9
      frac = dist / (dist + grow)
      return dist + grow
    }

    const apply = (progress) => {
      const tp = clamp(progress / frac)
      const p = clamp((progress - frac) / (1 - frac))
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2

      track.style.transform = `translate3d(${-dist * tp}px,0,0)`

      const L = m.fx - dist * tp
      const k = 1 - eased
      const H = el.clientHeight
      const top = Math.max(0, m.fy) * k
      const left = Math.max(0, L) * k
      const right = Math.max(0, m.W - (L + m.fw)) * k
      const bottom = Math.max(0, H - (m.fy + m.fh)) * k
      layer.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round ${28 * k}px)`
      layer.style.visibility = L >= m.W && p === 0 ? 'hidden' : 'visible'
      layer.dataset.live = eased > 0.92 ? 'true' : 'false'
      toggleVideo(eased > 0.92)

      caption.style.opacity = clamp((eased - 0.65) / 0.35)
      caption.style.transform = `translateY(${(1 - clamp((eased - 0.65) / 0.35)) * 30}px)`
      label.style.opacity = 1 - clamp(eased * 4)
      label.style.transform = `translate3d(${Math.max(0, L) + 20}px, ${m.fy + m.fh - 76}px, 0)`

      head.style.opacity = 1 - clamp(eased * 1.6)
      head.style.transform = `translateY(${-eased * 40}px)`

      const idx = Math.round(tp * (N - 1))
      setActive((a) => (a === idx ? a : idx))
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: () => '+=' + measure(),
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (self) => apply(self.progress),
      onUpdate: (self) => apply(self.progress),
    })

    return () => {
      el.classList.remove(css.svc_pinned)
      ;[track, layer, head, caption, label].forEach((n) => n && n.removeAttribute('style'))
      video && video.pause()
      st.kill()
    }
  })

  return (
    <section ref={root} className={css.svc} id="services">
      <div className={css.svc_head} data-head>
        <div className={css.container}>
          <div className={css.head_row}>
            <div>
              <span className={css.eyebrow}>All-Inclusive Solutions</span>
              <h2 className={css.title}>Our Services</h2>
              <p className={css.intro_p}>
                Every trade your home needs, under one roof. Scroll across to see each service.
              </p>
            </div>
            <div className={css.svc_meta}>
              <div className={css.counter} aria-live="off">
                <b>{pad(active)}</b>
                <span>/ {pad(N - 1)}</span>
                <em>{SERVICES[active].title}</em>
              </div>
              <Link href="/services" className={css.link_arrow}>
                All Services <Arrow className={css.arrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={css.svc_viewport} data-viewport>
        <ul className={css.svc_track} data-track>
          {SERVICES.map((s, i) => (
            <li
              key={s.link}
              className={css.card}
              data-on={active === i}
              onPointerEnter={() => setActive(i)}
            >
              <Link href={s.link} className={css.card_link}>
                <span className={css.card_num}>{pad(i)}</span>
                <span className={css.card_stage}>
                  <Image className={css.card_photo} src={s.image} alt="" fill sizes="320px" loading="lazy" />
                </span>
                <h3 className={css.card_title}>{s.title}</h3>
                <p className={css.card_desc}>{s.desc}</p>
                <span className={css.card_more}>
                  View service <Arrow className={css.arrow} />
                </span>
              </Link>
            </li>
          ))}
          <li className={css.svc_final} data-final aria-hidden="true" />
        </ul>
      </div>

      <div className={css.expand} data-expand>
        <LoopVideo src="/vedios/mission.mp4" label="Living room renovation transformation" manual lazy poster="/vedios/posters/mission.jpg" />
        <div className={css.expand_label} data-label>
          {TRANSFORMATION.label}
        </div>
        <div className={css.expand_caption} data-caption>
          <span className={css.eyebrow_light}>{TRANSFORMATION.eyebrow}</span>
          <h2 className={css.expand_title}>{TRANSFORMATION.title}</h2>
          <p>{TRANSFORMATION.desc}</p>
          <Link href="/portfolio" className={css.btn}>
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
