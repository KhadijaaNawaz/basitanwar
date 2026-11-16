import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/components/redesign/ServicesGrid'
import { Arrow } from '@/components/redesign/Section'
import styles from '@/style/sections.module.css'

/**
 * Services as three group tabs, one large "stage" for the selected service,
 * and a thumbnail picker for the rest of that group.
 *
 * `SCOPE` chips come straight from each service's existing description, so
 * a visitor sees what is covered without opening the page.
 */
const GROUPS = [
  {
    label: 'Cooling & Power',
    links: ['/services/ac-services', '/services/electrician-services', '/services/plumbing-services'],
  },
  {
    label: 'Build & Finish',
    links: [
      '/services/renovation-services',
      '/services/false-ceiling-services',
      '/services/painting-services',
      '/services/floor-wall-tiling',
      '/services/carpentry-services',
    ],
  },
  {
    label: 'Care',
    links: ['/services/building-cleaning-services', '/services/home-appliance-services'],
  },
]

const SCOPE = {
  '/services/ac-services': ['Installation', 'Servicing', 'Repair'],
  '/services/electrician-services': ['Fitting', 'Fault-finding', 'Rewiring', 'Maintenance'],
  '/services/plumbing-services': ['Leaks', 'Blockages', 'Installations', 'Bathroom pipework'],
  '/services/renovation-services': ['Planning', 'Permits', 'Final finish'],
  '/services/false-ceiling-services': ['Gypsum', 'Designer ceilings', 'Integrated lighting'],
  '/services/painting-services': ['Interior', 'Exterior'],
  '/services/floor-wall-tiling': ['Tiling', 'Regrouting', 'Replacement'],
  '/services/carpentry-services': ['Furniture', 'Wardrobes', 'Doors', 'Joinery'],
  '/services/building-cleaning-services': ['Deep clean', 'Routine clean'],
  '/services/home-appliance-services': ['Refrigerators', 'Washing machines'],
}

const byLink = Object.fromEntries(SERVICES.map((s) => [s.link, s]))
const ALL = GROUPS.flatMap((g) => g.links).filter((l) => byLink[l])

const ServicesList = () => {
  const [group, setGroup] = useState(0)
  const [active, setActive] = useState(GROUPS[0].links[0])

  const current = byLink[active]
  const number = String(ALL.indexOf(active) + 1).padStart(2, '0')

  const chooseGroup = (i) => {
    setGroup(i)
    setActive(GROUPS[i].links[0])
  }

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Service groups">
        {GROUPS.map((g, i) => (
          <button
            key={g.label}
            type="button"
            role="tab"
            id={`svc-tab-${i}`}
            aria-selected={group === i}
            aria-controls="svc-stage"
            className={`${styles.tab} ${group === i ? styles.tab_on : ''}`}
            onClick={() => chooseGroup(i)}
          >
            {g.label}
            <small>{g.links.length}</small>
          </button>
        ))}
      </div>

      <div
        className={styles.stage}
        id="svc-stage"
        role="tabpanel"
        aria-labelledby={`svc-tab-${group}`}
      >
        {ALL.map((link) => (
          <Image
            key={link}
            src={byLink[link].image}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={`${styles.stage_img} ${active === link ? styles.stage_img_on : ''}`}
            aria-hidden="true"
          />
        ))}

        <div className={styles.stage_body}>
          <div className={styles.stage_text}>
            <span className={styles.stage_num}>{number}</span>
            <h3 className={styles.stage_title}>{current.title}</h3>
            <p className={styles.stage_desc}>{current.desc}</p>
            <ul className={styles.chips}>
              {(SCOPE[active] || []).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <Link href={current.link} className={styles.stage_btn}>
            View service
            <Arrow className={styles.stage_arrow} />
          </Link>
        </div>
      </div>

      <div className={styles.picks}>
        {GROUPS[group].links.map((link) => {
          const s = byLink[link]
          return (
            <button
              key={link}
              type="button"
              className={`${styles.pick} ${active === link ? styles.pick_on : ''}`}
              onClick={() => setActive(link)}
              aria-pressed={active === link}
            >
              <Image src={s.image} alt="" fill sizes="(max-width: 900px) 136px, 20vw" />
              <span>{s.title}</span>
            </button>
          )
        })}
      </div>

      <p className={styles.svcs_note}>
        Not sure which service you need? <Link href="/contact-us">Tell us the problem</Link> and we
        will point you to the right specialist.
      </p>
    </div>
  )
}

export default ServicesList
