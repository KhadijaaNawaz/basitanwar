import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoopVideo from '@/components/redesign/LoopVideo'
import Hero from '@/components/redesign/Hero'
import Stats from '@/components/redesign/Stats'
import Lottie from './Lottie'
import useScene, { reveal } from './useScene'
import { INTRO, LOTTIE } from './content'
import css from '@/style/home.module.css'

const WORDS = INTRO.statement.split(' ')

/**
 * Scenes 1 + 2.
 *
 *  Hero   — the original hero + stats card (components/redesign), unchanged.
 *  Intro  — the statement lights up word by word while the gears Lottie loops;
 *           the welcome video wipes open.
 */
export default function Opening() {
  const root = useScene(({ gsap, root: el, full }) => {
    reveal({ gsap, root: el })

    // ---- welcome video wipe (all viewports) ----
    const frame = el.querySelector('[data-wipe]')
    const st = { trigger: frame, start: 'top 90%', end: 'top 30%', scrub: true }
    gsap.fromTo(
      frame,
      { clipPath: 'inset(0% 30% 0% 30% round 28px)' },
      { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: st }
    )
    gsap.fromTo(frame.querySelector('video'), { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: st })

    if (!full) return

    // ---- intro: words light up with the scroll (the gears just loop) ----
    const intro = el.querySelector('[data-intro]')
    const words = el.querySelectorAll('[data-word]')
    gsap.set(words, { opacity: 0.14 })
    gsap.to(words, {
      opacity: 1,
      stagger: 0.12,
      ease: 'none',
      scrollTrigger: { trigger: intro, start: 'top 55%', end: 'center 35%', scrub: true },
    })
  })

  return (
    <div ref={root} className={css.opening}>
      <Hero />
      <Stats />

      <section className={css.intro} data-intro>
        <div className={css.container}>
          <div className={css.intro_grid}>
            <div>
              <span className={css.eyebrow} data-reveal>
                {INTRO.eyebrow}
              </span>
              <h2 className={css.statement}>
                {WORDS.map((w, i) => (
                  <span key={i} data-word>
                    {w}{' '}
                  </span>
                ))}
              </h2>
              <p className={css.lead} data-reveal>
                {INTRO.copy}
              </p>
              <div className={css.row} data-reveal>
                <Link href="/contact-us" className={css.btn_dark}>
                  Schedule Now
                </Link>
                <Link href="/about-us" className={css.btn_outline}>
                  About Us
                </Link>
              </div>
              <div className={css.founder} data-reveal>
                <Image src={INTRO.founder.img} alt={INTRO.founder.name} width={56} height={56} />
                <div>
                  <strong>{INTRO.founder.name}</strong>
                  <span>{INTRO.founder.role}</span>
                </div>
              </div>
            </div>

            <div className={css.bolt_slot} data-bolt aria-hidden="true">
              <Lottie src={LOTTIE.gears} className={css.bolt_svg} viewBox="170 170 260 260" />
            </div>
          </div>

          <div className={css.wipe} data-wipe>
            <LoopVideo src="/vedios/welcome.mp4" label="Technicians reviewing a villa floor plan in Dubai" poster="/vedios/posters/welcome.jpg" lazy />
            <div className={css.wipe_badge}>
              <strong>10+</strong>
              <span>Years in Dubai</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
