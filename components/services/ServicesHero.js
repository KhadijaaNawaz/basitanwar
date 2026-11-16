import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Tool } from '@/components/home/Tools'
import useScene from '@/components/home/useScene'
import { PHONE } from '@/components/home/content'
import home from '@/style/home.module.css'
import css from '@/style/services-page.module.css'

// each word finishes the sentence "Your home, ___." and brings its tool with it
const TRADES = [
  { word: 'plumbed', tool: 'pipe' },
  { word: 'wired', tool: 'bulb' },
  { word: 'painted', tool: 'roller' },
  { word: 'cooled', tool: 'ac' },
  { word: 'fitted', tool: 'hammer' },
  { word: 'tiled', tool: 'trowel' },
  { word: 'cleaned', tool: 'brush' },
  { word: 'drilled', tool: 'drill' },
  { word: 'renovated', tool: 'toolbox' },
]
const N = TRADES.length

/**
 * Services hero. The last word of the headline rolls through the trades
 * like a counter while the matching 3D tool swings in beside it; pointing
 * around the stage tilts the tool in 3D. Reduced motion: one fixed word.
 */
export default function ServicesHero() {
  const [idx, setIdx] = useState(0) // N is a copy of 0, so the roll can loop without rewinding
  const [snap, setSnap] = useState(false)
  const stage = useRef(null)

  const root = useScene(({ gsap, root: el }) => {
    gsap.from(el.querySelectorAll('[data-in]'), { y: 26, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' })
  })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => !document.hidden && setIdx((i) => i + 1), 2300)
    return () => clearInterval(id)
  }, [])

  // after rolling onto the copy of the first word, jump back to it without animating
  useEffect(() => {
    if (idx !== N) return
    const t = setTimeout(() => {
      setSnap(true)
      setIdx(0)
      requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)))
    }, 750)
    return () => clearTimeout(t)
  }, [idx])

  const tilt = (e) => {
    const el = stage.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${x * 22}deg`)
    el.style.setProperty('--rx', `${-y * 18}deg`)
  }
  const level = () => {
    stage.current?.style.setProperty('--ry', '0deg')
    stage.current?.style.setProperty('--rx', '0deg')
  }

  const on = idx % N
  const words = [...TRADES, TRADES[0]]

  return (
    <>
      <Head>
        <title>Our Services-BA Tech L.L.C-Dubai</title>
        <meta property="og:title" content="Our Services-BA Tech L.L.C-Dubai" key="title" />
      </Head>
      <section ref={root} className={css.hero}>
        <div className={home.container}>
          <div className={css.hero_grid}>
            <div>
              <nav className={css.crumbs} aria-label="Breadcrumb" data-in>
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Our Services</span>
              </nav>
              <span className={home.eyebrow} data-in>What We Do</span>
              <h1 className={css.headline} data-in aria-label={`Your home, ${TRADES[on].word}.`}>
                <span aria-hidden="true">Your home,</span>
                <span className={css.roll} aria-hidden="true">
                  <span
                    className={css.roll_track}
                    style={{ transform: `translateY(${-idx * 1.3}em)`, transition: snap ? 'none' : undefined }}
                  >
                    {words.map((t, i) => (
                      <span key={i}>{t.word}.</span>
                    ))}
                  </span>
                </span>
              </h1>
              <p className={css.sub} data-in>
                Ten trades, one team of engineers and skilled technicians, and a clear price before any work starts.
              </p>
              <div className={home.row} data-in>
                <Link href="/contact-us" className={home.btn_dark}>Request a Quote</Link>
                <a href={PHONE.href} className={home.cta_phone}>
                  <small>Call us directly</small>
                  <strong>{PHONE.label}</strong>
                </a>
              </div>
            </div>

            <div className={css.stage_wrap} data-in>
              <div ref={stage} className={css.stage} onPointerMove={tilt} onPointerLeave={level}>
                <i className={css.halo} />
                <i className={css.ring} />
                {TRADES.map((t, i) => (
                  <span key={t.tool} className={css.slot} data-on={on === i}>
                    <Tool name={t.tool} className={css.hero_tool} />
                  </span>
                ))}
                <span className={css.stage_tag}>{TRADES[on].word}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
