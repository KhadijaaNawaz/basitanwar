import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import team from '@/data/professionalTeam.json'
import useScene, { reveal } from '@/components/home/useScene'
import { TEAM } from './content'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

const SOCIAL = [
  { key: 'fbLink', icon: faFacebookF, label: 'Facebook' },
  { key: 'instaLink', icon: faInstagram, label: 'Instagram' },
  { key: 'linkedLink', icon: faLinkedin, label: 'LinkedIn' },
]

/**
 * Scene 4: the team. Each portrait is revealed by a curtain wipe as it
 * scrolls in (photo settles from a slight zoom); phones get the light reveal.
 */
export default function TeamScene() {
  const root = useScene(({ gsap, root: el, full }) => {
    reveal({ gsap, root: el }, '[data-head]')
    if (!full) return reveal({ gsap, root: el }, '[data-card]')

    el.querySelectorAll('[data-card]').forEach((card, i) => {
      const photo = card.querySelector('[data-photo]')
      const trigger = { trigger: card, start: 'top 85%', once: true }
      gsap.fromTo(photo, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut', delay: i * 0.08, scrollTrigger: trigger })
      gsap.fromTo(photo.querySelector('img'), { scale: 1.3 }, { scale: 1, duration: 1.4, ease: 'power3.out', delay: i * 0.08, scrollTrigger: trigger })
      gsap.from(card.querySelectorAll('[data-meta]'), { y: 24, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.5 + i * 0.08, ease: 'power3.out', scrollTrigger: trigger })
    })
  })

  return (
    <section ref={root} className={css.team}>
      <div className={home.container}>
        <div className={css.team_head} data-head>
          <span className={home.eyebrow}>{TEAM.eyebrow}</span>
          <h2 className={home.title}>{TEAM.title}</h2>
          <p className={home.intro_p}>{TEAM.desc}</p>
        </div>
        <div className={css.team_grid}>
          {team.map((m) => (
            <article key={m.name} className={css.member} data-card>
              <div className={css.member_photo} data-photo>
                <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 90vw, 360px" />
              </div>
              <h3 data-meta>{m.name}</h3>
              <p data-meta>{m.status}</p>
              <div className={css.member_social} data-meta>
                {SOCIAL.map((s) => (
                  <Link key={s.key} href={m[s.key]} aria-label={`${m.name} on ${s.label}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={s.icon} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
