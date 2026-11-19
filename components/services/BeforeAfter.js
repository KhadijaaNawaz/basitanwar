import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useGrow from '@/components/services/useGrow'
import home from '@/style/home.module.css'
import css from '@/style/before-after.module.css'

const FK = (id, by) => ({ by, url: `https://www.flickr.com/photos/${id}` })
const W = (n) => [`/images/work/${n}-before.webp`, `/images/work/${n}-after.webp`]

// Pair 1 is two frames from the same fixed shot of one renovation (our own film).
// The rest are separate real jobs, each pair shot from the same spot (Creative Commons, credited below).
export const PAIRS = [
  { title: 'Bare site to finished room', before: '/images/work/room-site.webp', after: '/images/work/room-finished.webp', note: 'Dust sheets and bare plaster, handed over furnished and ready.', wide: true },
  { title: 'Door painting', before: W('door')[0], after: W('door')[1], note: 'A tired door given a bold, clean finish.', credit: FK('37996646802@N01/14910162996', 'cogdogblog') },
  { title: 'Bedroom', before: W('bedroom')[0], after: W('bedroom')[1], note: 'An empty room made ready to live in.', credit: FK('12670507@N02/13893726342', 'gamene') },
  { title: 'Bathroom', before: W('bath')[0], after: W('bath')[1], note: 'Dark and dated to bright and clean.', credit: FK('12670507@N02/13875890294', 'gamene') },
  { title: 'Kitchen cabinets', before: W('kitchen')[0], after: W('kitchen')[1], note: 'Cabinets, tiles and floor refreshed.', credit: FK('9470149@N08/3477701849', 'brad_holt') },
  { title: 'Dining room', before: W('table')[0], after: W('table')[1], note: 'New colour, lighting and styling.', credit: FK('9470149@N08/3477701133', 'brad_holt') },
  { title: 'Garage floor', before: W('floor')[0], after: W('floor')[1], note: 'Stained concrete sealed with a smooth coating.', credit: FK('38041294@N05/7854510982', 'Decorative Concrete Kingdom') },
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
    <figure className={`${css.item} ${pair.wide ? css.wide : ''}`} data-shown={shown}>
      <div
        ref={box}
        className={css.frame}
        data-frame
        style={{ '--p': `${pos}%` }}
        onPointerDown={down}
        onPointerMove={(e) => e.buttons && move(e.clientX)}
      >
        <Image src={pair.after} alt={`${pair.title}: after`} fill sizes="(max-width: 800px) 92vw, 60vw" loading="lazy" />
        <div className={css.before}>
          <Image src={pair.before} alt={`${pair.title}: before`} fill sizes="(max-width: 800px) 92vw, 60vw" loading="lazy" />
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
  const root = useGrow('[data-frame]', { from: 0.7, y: 40, end: 'top 45%' })
  const credits = pairs.filter((p) => p.credit)
  return (
    <section ref={root} className={css.sec}>
      <div className={home.container}>
        <span className={home.eyebrow}>{eyebrow}</span>
        <h2 className={css.title}>{title}</h2>
        <div className={css.grid}>
          {pairs.map((p) => <Slider key={p.title} pair={p} />)}
        </div>
        <p className={css.fine}>
          First pair: frames from our own renovation film. Others: photos under Creative Commons BY 2.0 —{' '}
          {credits.map((c, i) => (
            <span key={c.by + i}>
              <a href={c.credit.url} target="_blank" rel="noopener noreferrer">{c.credit.by}</a>
              {i < credits.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
