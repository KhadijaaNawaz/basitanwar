import React from 'react'
import styles from '@/style/redesign.module.css'

/**
 * The four steps the site already described as Book / Assign / Completion /
 * Review, rebuilt as the reference site's numbered journey: a hairline rule
 * threading numbered markers, with a sentence under each so the step means
 * something to a visitor who has not bought from you before.
 */
const STEPS = [
  {
    num: '01',
    title: 'Book',
    desc: 'Tell us what needs doing by phone, WhatsApp or the contact form. We confirm scope and a time that suits you.',
  },
  {
    num: '02',
    title: 'Assign',
    desc: 'We match the job to the right specialist from our team and give you a clear, itemised price before work starts.',
  },
  {
    num: '03',
    title: 'Completion',
    desc: 'Our technicians carry out the work to schedule, keep the site clean, and walk you through the result.',
  },
  {
    num: '04',
    title: 'Review',
    desc: 'We check the finish with you and stay available afterwards — the relationship does not end at the invoice.',
  },
]

const Journey = () => (
  <div className={styles.journey}>
    {STEPS.map((step) => (
      <div key={step.num} className={styles.step}>
        <span className={styles.step_num}>{step.num}</span>
        <h3 className={styles.step_title}>{step.title}</h3>
        <p className={styles.step_desc}>{step.desc}</p>
      </div>
    ))}
  </div>
)

export default Journey
