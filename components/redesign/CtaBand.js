import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/style/redesign.module.css'

const PHONE = '+971524052485'

/**
 * Full-bleed closing call to action. The phone number is a real tel: link
 * and, with the site-wide `user-select: none` lock now removed, visitors
 * can also select and copy it.
 */
const CtaBand = ({
  title = 'Ready to start your project?',
  desc = 'Tell us what needs doing and we will come back with a clear scope and an itemised price — no obligation, no hidden fees.',
  image = '/updated-images/img.webp',
}) => (
  <section className={styles.cta}>
    <Image src={image} alt="" fill sizes="100vw" className={styles.cta_img} aria-hidden="true" />

    <div className={styles.cta_inner}>
      <div>
        <h2 className={styles.cta_title}>{title}</h2>
        <p className={styles.cta_desc}>{desc}</p>
      </div>

      <div className={styles.cta_actions}>
        <Link href="/contact-us" className={styles.btn}>
          Request a Quote
        </Link>
        <a href={`tel:${PHONE}`} className={styles.cta_phone}>
          <small>Call us directly</small>
          <strong>+971 52 405 2485</strong>
        </a>
      </div>
    </div>
  </section>
)

export default CtaBand
