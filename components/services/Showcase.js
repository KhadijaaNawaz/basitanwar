import React from 'react'
import Image from 'next/image'
import home from '@/style/home.module.css'
import css from '@/style/showcase.module.css'

const I = (f) => `/images/${f}`

// Real photographs only. /images/work/* are free-licence stock (Pexels); the rest are the company's own library.
export const ROW_A = [
  'work/painting-ladder.webp', 'ac-maintenance-2.webp', 'work/electrical-panel.webp', 'carpentary_service.jpg', 'work/living-room.webp',
  'cleaning_service.jpg', 'work/painting-rollers.webp', 'AC-4.jpg', 'work/plumbing-pipes.webp', 'ceilingblog1.jpg',
]
export const ROW_B = [
  'work/bathroom-marble.webp', 'tile12 (1).jpg', 'work/carpenter-bench.webp', 'plumbing1.jpg', 'work/drilling-wood.webp',
  'elec1.jpg', 'work/paint-roller-yellow.webp', 'update4.jpg', 'work/workshop.webp', 'falseciel.webp',
]

function Row({ items, reverse }) {
  const list = [...items, ...items] // duplicated so the loop is seamless
  return (
    <div className={`${css.row} ${reverse ? css.rev : ''}`} aria-hidden="true">
      <div className={css.track}>
        {list.map((f, i) => (
          <span className={css.tile} key={`${f}-${i}`}>
            <Image src={I(f)} alt="" fill sizes="(max-width: 700px) 60vw, 22vw" loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Two slow, opposite-moving rows of job photos. Static (scrollable) for reduced motion. */
export function PhotoMarquee({ eyebrow = 'Across Dubai', title = 'Every trade, one crew' }) {
  return (
    <section className={css.marquee} aria-label={title}>
      <div className={home.container}>
        <span className={home.eyebrow}>{eyebrow}</span>
        <h2 className={css.title}>{title}</h2>
      </div>
      <Row items={ROW_A} />
      <Row items={ROW_B} reverse />
    </section>
  )
}

const STEPS = [
  ['01', 'Measure twice', 'We walk the space, take measurements and agree a clear, itemised price.', 'work/carpenter-bench.webp'],
  ['02', 'Prepare properly', 'Surfaces, power and water are made ready, and your furniture is protected.', 'work/painting-ladder.webp'],
  ['03', 'Do the work', 'Skilled technicians finish the job with the right tools and materials.', 'work/drilling-bench.webp'],
  ['04', 'Hand over clean', 'We tidy up and walk you through the finished result before we leave.', 'work/living-room.webp'],
]

/** Four-step "how a job goes" strip with a real photograph for each step. */
export function CraftSteps({ title = 'How a job goes' }) {
  return (
    <section className={css.steps}>
      <div className={home.container}>
        <span className={home.eyebrow}>Our process</span>
        <h2 className={css.title}>{title}</h2>
        <ol className={css.stepgrid}>
          {STEPS.map(([n, h, p, img]) => (
            <li key={n} className={css.step}>
              <span className={css.stepimg}>
                <Image src={I(img)} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 22vw" loading="lazy" />
                <b>{n}</b>
              </span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
