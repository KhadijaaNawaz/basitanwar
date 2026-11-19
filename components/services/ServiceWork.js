import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useGrow from '@/components/services/useGrow'
import home from '@/style/home.module.css'
import css from '@/style/service-work.module.css'

const P = (f) => `/images/${f}`

/** Real photos of the work, per service (all already in /public/images). */
export const WORK = {
  'ac-services': ['work/pipe-wrench.webp', 'AC-4.jpg', 'AC-5.jpg', 'ac-maintenance-2.webp', 'AC-repair1.jpg', 'hvac1.webp', '08.jpg', '09.jpg', 'AC-7.jpg'],
  'electrician-services': ['work/electrical-panel.webp', 'elec1.jpg', 'electric2.jpg', 'elect.webp', 'elec-fix.webp', '04.jpg', 'update1.jpg', 'elec_fixure.jpg', 'hes.webp'],
  'plumbing-services': ['work/plumbing-pipes.webp', 'work/pipe-wrench.webp', '03.jpg', '02.jpg', 'plumb1.webp', 'plumbing1.jpg', 'plumbing2.jpg', 'plumbing_service.webp', 'washroom.webp', 'home-repairs.png'],
  'painting-services': ['work/painting-ladder.webp', 'work/painting-rollers.webp', 'work/painting-team.webp', 'work/paint-roller-yellow.webp', 'painting03.jpg', 'painting1.jpg', 'painting11.jpg', 'painting8.jpg', 'painting4.jpg', 'wall-paint.jpg', 'update7.jpg', 'wallpaint4.jpg'],
  'carpentry-services': ['work/carpenter-bench.webp', 'work/drilling-wood.webp', 'work/drilling-bench.webp', 'work/workshop.webp', 'work/timber-stack.webp', '01.jpg', 'countup-bg.jpg', 'carpentary_service.jpg', 'bg-hero2.webp', 'flooring.webp', 'row-bgimage-10.jpg', '07.jpg', 'kitchen.jpg'],
  'false-ceiling-services': ['work/living-room.webp', 'ceiling_service.jpg', 'ceilingblog.jpg', 'ceilingblog1.jpg', 'ceilingblog2.jpg', 'false_ceiling.jpg', 'falseciel.webp', 'ceiling.jpg', 'image17.jpg'],
  'floor-wall-tiling': ['work/bathroom-marble.webp', 'tile12 (1).jpg', 'tile12 (2).jpg', 'tile2.jpg', 'tile1.webp', 'tiles.webp', 'floor_tiling.webp', 'flor-tile.jpg', 'washroom.webp'],
  'home-appliance-services': ['work/pipe-wrench.webp', '05.jpg', 'appliance_service.jpg', 'homeAppliance.webp', 'hvac12.webp', 'home-maintenance.webp', 'hep.webp', 'step-four.jpg', 'home-repairs.png'],
  'building-cleaning-services': ['cleaning.jpg', 'cleaning_service.jpg', 'update3.jpg', 'update4.jpg', 'update5.jpg', 'image18.jpg'],
  'renovation-services': ['work/living-room.webp', 'work/painting-team.webp', 'work/bathroom-marble.webp', 'work/hammer.webp', 'renovation.webp', 'home2.jpg', 'home-main-1.webp', 'slider1.webp', 'in-des2.jpg', 'floor1.webp', 'drywall.jpg', 'slider3.jpg'],
}

/** Mosaic of photos. `items` = file names inside /public/images. */
export function PhotoWall({ items, eyebrow = 'On site', title = 'The work, in pictures', note }) {
  const root = useGrow('[data-shot]', { from: 0.72, y: 50 })
  return (
    <section ref={root} className={css.sec}>
      <div className={home.container}>
        <div className={css.head}>
          <span className={home.eyebrow}>{eyebrow}</span>
          <h2 className={css.title}>{title}</h2>
          {note ? <p className={css.note}>{note}</p> : null}
        </div>
        <div className={css.wall}>
          {items.map((f, i) => (
            <figure key={f} className={`${css.shot} ${css[`s${i % 8}`]}`} data-shot>
              <Image src={P(f)} alt="" fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 28vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServiceWork() {
  const { asPath } = useRouter()
  const slug = asPath.split(/[?#]/)[0].split('/').filter(Boolean).pop()
  const items = WORK[slug]
  if (!items) return null
  return <PhotoWall items={items} note="Our technicians at work on jobs like yours across Dubai." />
}
