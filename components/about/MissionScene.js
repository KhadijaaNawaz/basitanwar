import React from 'react'
import Link from 'next/link'
import LoopVideo from '@/components/redesign/LoopVideo'
import useScene from '@/components/home/useScene'
import { MISSION } from './content'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

/**
 * Scene 3: mission. Desktop: the section pins and the video opens like an
 * aperture, a circle widening from the centre until it fills the screen.
 * The film starts from 0:00 once fully open and stops when you leave.
 * Phones: a plain block whose video plays while visible.
 */
export default function MissionScene() {
  const root = useScene(({ gsap, ScrollTrigger, root: el, full }) => {
    const frame = el.querySelector('[data-frame]')
    const video = frame.querySelector('video')
    const caption = el.querySelector('[data-caption]')

    if (!full) {
      const io = new IntersectionObserver(([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause()), { threshold: 0.3 })
      io.observe(frame)
      return () => {
        io.disconnect()
        video.pause()
      }
    }

    el.classList.add(css.mission_pinned)
    let playing = false
    let visible = true
    let last = 0

    const apply = (p) => {
      last = p
      const e = 1 - Math.pow(1 - p, 3)
      const r = 5 + 80 * e // % of the reference radius
      frame.style.clipPath = `circle(${r}% at 50% 50%)`
      video.style.transform = `scale(${1.3 - 0.3 * e})`
      const c = clamp((p - 0.7) / 0.3)
      caption.style.opacity = c
      caption.style.transform = `translateY(${(1 - c) * 30}px)`
      const live = p > 0.96 && visible
      if (live !== playing) {
        playing = live
        if (live) {
          video.currentTime = 0
          video.play().catch(() => {})
        } else video.pause()
      }
    }

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      apply(last)
    })
    io.observe(el)

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: () => '+=' + window.innerHeight * 1.1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (self) => apply(self.progress),
      onUpdate: (self) => apply(self.progress),
    })

    return () => {
      el.classList.remove(css.mission_pinned)
      ;[frame, video, caption].forEach((n) => n.removeAttribute('style'))
      io.disconnect()
      video.pause()
      st.kill()
    }
  })

  return (
    <section ref={root} className={css.mission}>
      <div className={css.mission_inner}>
        <div className={css.mission_frame} data-frame>
          <LoopVideo src="/vedios/mission.mp4" label="Living room renovation transformation" manual lazy poster="/vedios/posters/mission.jpg" />
          <div className={css.mission_caption} data-caption>
            <span className={home.eyebrow_light}>{MISSION.eyebrow}</span>
            <h2>{MISSION.title}</h2>
            <p>{MISSION.desc}</p>
            <Link href="/portfolio" className={home.btn}>View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
