import React from 'react'
import LoopVideo from '@/components/redesign/LoopVideo'
import { Arrow } from '@/components/redesign/Section'
import useScene, { reveal } from './useScene'
import { PROCESS } from './content'
import css from '@/style/home.module.css'

/**
 * Scene 5: How it works. A real clip of the crew at work beside the four
 * steps, each marked with a circled arrow and divided by a hairline.
 */
export default function ProcessScene() {
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }))

  return (
    <section ref={root} className={css.proc}>
      <div className={css.container}>
        <div className={css.head_stack} data-reveal>
          <span className={css.eyebrow}>{PROCESS.eyebrow}</span>
          <h2 className={css.title}>{PROCESS.title}</h2>
          <p className={css.intro_p}>{PROCESS.intro}</p>
        </div>

        <div className={css.split}>
          <div className={css.split_media} data-reveal>
            <LoopVideo src="/vedios/penthouse-finish-crew.mp4" className={css.split_video} label="Our crew giving a finishing clean to a Dubai penthouse" lazy />
          </div>
          <ol className={css.split_list}>
            {PROCESS.steps.map((s) => (
              <li key={s.num} className={css.split_item} data-reveal>
                <span className={css.split_icon}>
                  <Arrow className={css.split_arrow} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
