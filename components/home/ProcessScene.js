import React from 'react'
import { Tool } from './Tools'
import Lottie from './Lottie'
import useScene, { reveal } from './useScene'
import { PROCESS, LOTTIE } from './content'
import css from '@/style/home.module.css'

const { steps } = PROCESS
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

/**
 * Scene 5: How it works.
 *
 * Desktop: the scene pins and scroll progress drives the steps: a rail fills
 * and the active step lights, while the Lottie on the stage loops on its own.
 * Phones / reduced motion: a stacked list with a small tool beside each step.
 */
export default function ProcessScene() {
  const root = useScene(({ gsap, ScrollTrigger, root: el, full }) => {
    if (!full) {
      reveal({ gsap, root: el })
      return
    }

    const pin = el.querySelector('[data-pin]')
    const fill = el.querySelector('[data-fill]')
    const items = [...el.querySelectorAll('[data-step]')]
    const n = steps.length

    el.classList.add(css.proc_pinned)

    const st = ScrollTrigger.create({
      trigger: pin,
      start: 'top top',
      end: () => '+=' + window.innerHeight * 3,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => apply(self.progress),
      onRefresh: (self) => apply(self.progress),
    })

    function apply(p) {
      fill.style.transform = `scaleY(${clamp(p * 1.04)})`
      const idx = Math.min(n - 1, Math.floor(p * n))
      items.forEach((it, i) => (it.dataset.active = i === idx ? 'true' : i < idx ? 'done' : 'false'))
    }

    return () => {
      el.classList.remove(css.proc_pinned)
      fill.removeAttribute('style')
      items.forEach((it) => delete it.dataset.active)
      st.kill()
    }
  })

  return (
    <section ref={root} className={css.proc}>
      <div className={css.proc_pin} data-pin>
        <div className={css.container}>
          <div className={css.head_stack} data-reveal>
            <span className={css.eyebrow}>{PROCESS.eyebrow}</span>
            <h2 className={css.title}>{PROCESS.title}</h2>
            <p className={css.intro_p}>{PROCESS.intro}</p>
          </div>

          <div className={css.proc_grid}>
            <div className={css.proc_stage} data-stage>
              <Lottie src={LOTTIE.steps} className={css.proc_svg} label="Our process, step by step" />
            </div>

            <ol className={css.proc_steps}>
              <span className={css.rail} aria-hidden="true">
                <i data-fill />
              </span>
              {steps.map((s) => (
                <li key={s.num} className={css.step} data-step data-reveal>
                  <Tool name={s.tool} className={css.step_tool} />
                  <span className={css.step_num}>{s.num}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
