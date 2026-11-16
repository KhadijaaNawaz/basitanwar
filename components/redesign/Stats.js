import React from 'react'
import styles from '@/style/redesign.module.css'

const STATS = [
  { value: '10+', label: 'Years serving Dubai' },
  { value: '10', label: 'Specialist services' },
  { value: '24/7', label: 'Emergency callout' },
  { value: '100%', label: 'Transparent pricing' },
]

/**
 * Four figures inside a single card that overlaps the bottom of the hero.
 * The reference site uses the same device to tie the hero to the first
 * content band instead of leaving a hard edge between them.
 */
const Stats = () => (
  <div className={styles.stats_wrap}>
    <div className={styles.stats}>
      {STATS.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <span className={styles.stat_value}>{stat.value}</span>
          <span className={styles.stat_label}>{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Stats
