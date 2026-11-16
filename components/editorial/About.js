import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoopVideo from '@/components/redesign/LoopVideo'
import useReveal from './Reveal'
import { INTRO } from '@/components/home/content'
import { ABOUT_IMAGES } from './images'
import s from '@/style/editorial.module.css'

/**
 * Two columns: a large headline with the existing copy on the left; on the
 * right a tall frame playing the welcome video with a smaller photo inset.
 */
export default function About() {
  const ref = useReveal()
  return (
    <section ref={ref} className={`${s.ed} ${s.about}`} id="about">
      <div className={`${s.wrap} ${s.about_grid}`}>
        <div className={s.about_text}>
          <span className={s.eyebrow} data-r>{INTRO.eyebrow}</span>
          <h2 className={s.display} data-r="80">
            One team of engineers and skilled technicians keeping <em>Dubai homes</em> comfortable,
            safe and running.
          </h2>
          <div className={s.about_cols}>
            <p className={s.body} data-r="160">{INTRO.copy}</p>
            <div className={s.about_side} data-r="220">
              <div className={s.row}>
                <Link href="/contact-us" className={s.btn_ink}>Schedule Now</Link>
                <Link href="/about-us" className={s.link_line}>About Us</Link>
              </div>
              <div className={s.founder}>
                <Image src={INTRO.founder.img} alt={INTRO.founder.name} width={52} height={52} />
                <div>
                  <strong>{INTRO.founder.name}</strong>
                  <span>{INTRO.founder.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.about_media} data-r="120">
          <div className={s.about_main}>
            <LoopVideo src="/vedios/welcome.mp4" label="Technicians reviewing a villa floor plan in Dubai" />
            <div className={s.about_tag}>
              <strong>10+</strong>
              <span>Years in Dubai</span>
            </div>
          </div>
          <div className={s.about_inset}>
            <Image
              src={ABOUT_IMAGES.inset.src}
              alt="Technician fitting an electrical socket"
              fill
              sizes="(max-width: 900px) 40vw, 20vw"
              style={{ objectPosition: ABOUT_IMAGES.inset.pos }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
