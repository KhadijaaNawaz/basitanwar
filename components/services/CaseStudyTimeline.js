import React from 'react'
import Image from 'next/image'
import LoopVideo from '@/components/redesign/LoopVideo'
import css from '@/style/gallery-detail.module.css'

/**
 * A 4-stage timeline for a project case study. Only the bookend stages use
 * this project's own photos (what we actually have); the middle stage uses
 * real footage of our crew at work generally, not staged for this job —
 * labelled honestly rather than implying it is this exact site.
 */
const steps = (before, after) => [
  { label: 'As Found', desc: 'The condition on our first site visit.', type: 'image', src: before, alt: 'As found' },
  { label: 'Scoped & Booked', desc: 'Clear scope and an itemised price agreed before work started.', type: 'text' },
  { label: 'Work Underway', desc: 'Our crew on site — the same team from start to finish.', type: 'video', src: '/vedios/workers-renovating.mp4' },
  { label: 'Handed Over', desc: 'Walked through and signed off, ready to use.', type: 'image', src: after, alt: 'Handed over' },
]

export default function CaseStudyTimeline({ before, after }) {
  return (
    <div className={css.timeline} data-r>
      {steps(before, after).map((s, i) => (
        <div key={s.label} className={css.tl_step}>
          <div className={css.tl_media}>
            {s.type === 'image' && <Image src={s.src} alt={s.alt} fill sizes="(max-width: 767px) 44vw, 22vw" />}
            {s.type === 'video' && <LoopVideo src={s.src} className={css.tl_video} label="Our crew at work" lazy />}
            {s.type === 'text' && <span className={css.tl_num}>{i + 1}</span>}
          </div>
          <b>{s.label}</b>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
