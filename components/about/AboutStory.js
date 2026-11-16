import React from 'react'
import Link from 'next/link'
import LoopVideo from '@/components/redesign/LoopVideo'
import useScene, { reveal } from '@/components/home/useScene'
import { STORY, ABOUT_STATS } from './content'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

/**
 * Scene 1: our story. A tall portrait video stays pinned in view (sticky)
 * while the copy scrolls past on the right; the portrait unrolls from the
 * bottom, the paragraphs draw in with a rule, and the figures count up.
 */
export default function AboutStory() {
  const root = useScene(({ gsap, root: el, full }) => {
    reveal({ gsap, root: el })

    const frame = el.querySelector('[data-portrait]')
    gsap.fromTo(frame, { clipPath: 'inset(100% 0% 0% 0% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.2, ease: 'power3.inOut', scrollTrigger: { trigger: frame, start: 'top 85%', once: true } })
    if (full) gsap.fromTo(frame.querySelector('video'), { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })

    el.querySelectorAll('[data-rule]').forEach((rule) =>
      gsap.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: rule, start: 'top 90%', once: true } })
    )

    // numbers count up once
    el.querySelectorAll('[data-count]').forEach((n) => {
      const end = parseFloat(n.dataset.count)
      const suffix = n.dataset.suffix || ''
      const o = { v: 0 }
      gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => (n.textContent = Math.round(o.v) + suffix), scrollTrigger: { trigger: n, start: 'top 92%', once: true } })
    })
  })

  return (
    <section ref={root} className={css.story}>
      <div className={home.container}>
        <div className={css.story_grid}>
          <div className={css.story_media}>
            <div className={css.portrait} data-portrait>
              <LoopVideo src="/vedios/welcome.mp4" label="Technicians reviewing a villa floor plan in Dubai" poster="/vedios/posters/welcome.jpg" lazy />
              <div className={home.wipe_badge}>
                <strong>{STORY.badge.value}</strong>
                <span>{STORY.badge.label}</span>
              </div>
            </div>
          </div>

          <div className={css.story_copy}>
            <span className={home.eyebrow} data-reveal>{STORY.eyebrow}</span>
            <h2 className={css.story_title} data-reveal>{STORY.title}</h2>
            {STORY.paras.map((t) => (
              <div key={t} className={css.para}>
                <i className={css.rule} data-rule />
                <p data-reveal>{t}</p>
              </div>
            ))}
            <div className={css.facts}>
              {ABOUT_STATS.map((s) => {
                const m = s.value.match(/^(\d+)(.*)$/)
                return (
                  <div key={s.label} className={css.fact} data-reveal>
                    <strong {...(m ? { 'data-count': m[1], 'data-suffix': m[2] } : {})}>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                )
              })}
            </div>
            <div className={home.row} data-reveal>
              <Link href="/contact-us" className={home.btn_dark}>Schedule Now</Link>
              <Link href="/services" className={home.btn_outline}>Our Services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
