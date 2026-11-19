import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import home from '@/style/home.module.css'
import css from '@/style/before-after.module.css'

// Illustrative pairs from the photo library. Swap for real project photos when available.
export const PAIRS = [
  { title: 'Paint & finish', before: '/images/painting_pic.jpg', after: '/images/hm6.webp', note: 'Bare room to a finished, lived-in space.' },
  { title: 'Flooring', before: '/images/floor1.webp', after: '/images/flor-tile.jpg', note: 'Open sub-floor to a clean, level finish.' },
  { title: 'Renovation', before: '/images/home-maintenance.webp', after: '/images/hm4.webp', note: 'A gutted room, handed back ready to use.' },
]

function Slider({ pair }) {
  const box = useRef(null)
  const [pos, setPos] = useState(50)
  const [shown, setShown] = useState(false)
  const [touched, setTouched] = useState(false)

  // one gentle sweep when it first scrolls into view, so people see it can be moved
  useEffect(() => {
    const el = box.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      setShown(true)
      if (reduce) return
      let t0
      const run = (t) => {
        t0 = t0 || t
        const k = Math.min(1, (t - t0) / 1800)
        setPos(50 + Math.sin(k * Math.PI * 2) * 32 * (1 - k * 0.3))
        if (k < 1) requestAnimationFrame(run)
        else setPos(50)
      }
      requestAnimationFrame(run)
    }, { threshold: 0.45 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const move = (clientX) => {
    const r = box.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }
  const down = (e) => {
    setTouched(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    move(e.clientX)
  }

  return (
    <figure className={css.item} data-shown={shown}>
      <div
        ref={box}
        className={css.frame}
        style={{ '--p': `${pos}%` }}
        onPointerDown={down}
        onPointerMove={(e) => e.buttons && move(e.clientX)}
      >
        <Image src={pair.after} alt={`${pair.title}: after`} fill sizes="(max-width: 800px) 92vw, 30vw" loading="lazy" />
        <div className={css.before}>
          <Image src={pair.before} alt={`${pair.title}: before`} fill sizes="(max-width: 800px) 92vw, 30vw" loading="lazy" />
        </div>
        <span className={`${css.tag} ${css.tag_b}`}>Before</span>
        <span className={`${css.tag} ${css.tag_a}`}>After</span>
        <span className={css.handle} aria-hidden="true"><i /></span>
        <input
          className={css.range}
          type="range"
          min="0"
          max="100"
          value={Math.round(pos)}
          onChange={(e) => { setTouched(true); setPos(+e.target.value) }}
          aria-label={`${pair.title}: drag to compare before and after`}
        />
        {!touched && <span className={css.hint}>Drag to compare</span>}
      </div>
      <figcaption>
        <b>{pair.title}</b>
        <span>{pair.note}</span>
      </figcaption>
    </figure>
  )
}

export default function BeforeAfter({ title = 'Before & after', eyebrow = 'The difference', pairs = PAIRS }) {
  return (
    <section className={css.sec}>
      <div className={home.container}>
        <span className={home.eyebrow}>{eyebrow}</span>
        <h2 className={css.title}>{title}</h2>
        <div className={css.grid}>
          {pairs.map((p) => <Slider key={p.title} pair={p} />)}
        </div>
        <p className={css.fine}>Illustrative examples.</p>
      </div>
    </section>
  )
}
