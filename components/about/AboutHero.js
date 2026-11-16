import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LoopVideo from '@/components/redesign/LoopVideo'
import useScene from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/about-scenes.module.css'

const TITLE = 'About Us'

/**
 * About page hero. Light, editorial: the title rises letter by letter out of
 * a mask while the photo opens from the bottom and settles from a slight
 * zoom; scrolling then drifts the photo up (parallax). Static when motion is
 * reduced. Only used on this page (the shared inner-page hero is untouched).
 */
const CHIPS = [
  { value: '10+', label: 'Years in Dubai' },
  { value: '24/7', label: 'Emergency callout' },
  { value: '10', label: 'Specialist trades' },
]

/**
 * About page hero. The engineers video takes the whole right half of the
 * screen, edge to edge, and fades into the dark on its left side. The title
 * rises letter by letter out of a mask, the video wipes in from the right,
 * glass stat chips pop up on it, and scrolling drifts the video (parallax)
 * while the title fades back. Static when motion is reduced. Only used on
 * this page (the shared inner-page hero is untouched).
 */
export default function AboutHero() {
  const root = useScene(({ gsap, root: el, full }) => {
    const media = el.querySelector('[data-photo]')
    const video = media.querySelector('video')
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl.from(el.querySelectorAll('[data-in]'), { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 })
      .from(el.querySelectorAll('[data-char]'), { yPercent: 115, duration: 1, stagger: 0.05 }, 0.1)
      .fromTo(media, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power3.inOut' }, 0.1)
      .from(video, { scale: 1.3, duration: 2, ease: 'power3.out' }, 0.1)
      .from(el.querySelectorAll('[data-chip]'), { y: 30, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)' }, 1.0)

    if (full) {
      const st = { trigger: el, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to(video, { yPercent: 8, ease: 'none', scrollTrigger: st })
      gsap.to(el.querySelector('[data-copy]'), { y: -60, opacity: 0.15, ease: 'none', scrollTrigger: { ...st, start: 'center top' } })
    }
  })

  return (
    <>
      <Head>
        <title>{TITLE}-BA Tech L.L.C-Dubai</title>
        <meta property="og:title" content={`${TITLE}-BA Tech L.L.C-Dubai`} key="title" />
      </Head>
      <section ref={root} className={css.ahero}>
        <div className={css.ahero_media} data-photo>
          <LoopVideo src="/vedios/Engineers_working_on_home_trades_94706f3f_1080p.mp4" label="Our engineers and technicians working on home trades" />
          <div className={css.ahero_fade} />
          <div className={css.chips}>
            {CHIPS.map((c) => (
              <div key={c.label} className={css.chip} data-chip>
                <strong>{c.value}</strong>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={home.container}>
          <div className={css.ahero_copy} data-copy>
            <nav className={css.crumbs} aria-label="Breadcrumb" data-in>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <span className={home.eyebrow} data-in>Discover</span>
            <h1 className={css.ahero_title} aria-label={TITLE}>
              {TITLE.split(' ').map((w, wi) => (
                <span key={wi} className={css.ahero_word} aria-hidden="true">
                  {w.split('').map((c, i) => (
                    <span key={i} className={css.ahero_mask}>
                      <span data-char className={css.ahero_char}>{c}</span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className={css.ahero_sub} data-in>
              Air conditioning, electrical, plumbing and every other trade your Dubai home needs: one accountable team of engineers and skilled technicians.
            </p>
            <div className={home.row} data-in>
              <Link href="/contact-us" className={home.btn}>Request a Quote</Link>
              <Link href="/services" className={css.ahero_ghost}>Our Services</Link>
            </div>
          </div>
        </div>
        <span className={css.scroll_cue} aria-hidden="true" data-in>Scroll</span>
      </section>
    </>
  )
}
