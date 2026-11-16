import React from 'react'
import Link from 'next/link'
import styles from '@/style/redesign.module.css'

/**
 * Section shell. `tone` picks the band background so sections can be
 * alternated down the page: 'light' (white), 'tint' (off-white) or
 * 'ink' (dark blue).
 */
export const Section = ({ tone = 'light', children, className = '', id }) => {
  const tones = {
    light: '',
    tint: styles.section_tint,
    ink: styles.section_ink,
  }

  return (
    <section id={id} className={`${styles.section} ${tones[tone] || ''} ${className}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

/**
 * Eyebrow + heading + optional intro, with an optional action link
 * pushed to the right. Set `center` for the centred variant.
 */
export const SectionHead = ({ eyebrow, title, intro, actionLabel, actionHref, center = false }) => (
  <div className={`${styles.head} ${center ? styles.head_center : ''}`}>
    <div className={styles.head_text}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
    {actionLabel && actionHref && (
      <Link href={actionHref} className={styles.action}>
        {actionLabel}
        <Arrow />
      </Link>
    )}
  </div>
)

export const Arrow = ({ className }) => (
  <svg
    className={className || styles.svc_arrow}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="4" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
)

export default Section
