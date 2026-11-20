import React from 'react'
import CountUp from 'react-countup'
import styles from '@/style/redesign.module.css'

const STATS = [
  { end: 10, suffix: '+', label: 'Years serving Dubai' },
  { end: 10, suffix: '', label: 'Specialist services' },
  { text: '24/7', label: 'Emergency callout' },
  { end: 100, suffix: '%', label: 'Transparent pricing' },
]

/**
 * Four figures inside a single card that overlaps the bottom of the hero.
 * Numbers count up once the card scrolls into view, so the stats band
 * reads as alive rather than a flat row of labels.
 */
const Stats = () => (
  <div className={styles.stats_wrap}>
    <div className={styles.stats}>
      {STATS.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <span className={styles.stat_value}>
            {stat.text ?? (
              <CountUp end={stat.end} suffix={stat.suffix} duration={2.2} enableScrollSpy scrollSpyOnce />
            )}
          </span>
          <span className={styles.stat_label}>{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Stats
