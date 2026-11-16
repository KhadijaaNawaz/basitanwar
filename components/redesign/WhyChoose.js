import React from 'react'
import styles from '@/style/redesign.module.css'

/* Small line icons, drawn inline so the cards carry no extra image requests. */
const Icon = ({ paths }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {paths}
  </svg>
)

const icons = {
  craft: <><path d="M14 7l3 3" /><path d="M5 19l9-9-3-3-9 9v3h3z" /><path d="M16 3l5 5" /></>,
  hvac: <><rect x="2" y="5" width="20" height="9" rx="2" /><path d="M6 18v2M12 18v2M18 18v2" /><path d="M6 10h12" /></>,
  renovation: <><path d="M3 10l9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
  plumbing: <><path d="M12 3v5" /><path d="M8 8h8l-1 10a3 3 0 01-6 0z" /><path d="M10 13h4" /></>,
  carpentry: <><path d="M4 20l6-6" /><path d="M9 11l4-4 4 4-4 4z" /><path d="M14 6l4-4 4 4-4 4" /></>,
  electrical: <><path d="M13 2L5 14h6l-1 8 8-12h-6z" /></>,
  cleaning: <><path d="M9 3h6v6H9z" /><path d="M8 9h8l1 12H7z" /><path d="M12 13v4" /></>,
  tiling: <><rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" /><rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" /></>,
  appliance: <><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M8 6h2" /></>,
}

/**
 * The nine reasons the site already listed, kept word for word so the page
 * loses none of its existing keyword coverage, but presented as icon cards
 * rather than a flat list.
 */
const REASONS = [
  {
    icon: icons.craft,
    title: 'Skilled Craftsmanship',
    desc: 'From painting to false ceiling installations, rely on our skilled craftsmen for precision and quality, transforming your space with attention to detail',
  },
  {
    icon: icons.hvac,
    title: 'Expert HVAC Maintenance',
    desc: "Trust our experienced technicians for reliable HVAC solutions, ensuring optimal comfort and peace of mind for your home's climate control needs",
  },
  {
    icon: icons.renovation,
    title: 'Comprehensive Renovation Solutions',
    desc: 'Enjoy stress-free renovations tailored to your vision and budget, from planning to construction, with stunning results that exceed expectations',
  },
  {
    icon: icons.plumbing,
    title: 'Professional Plumbing Services',
    desc: 'Experience prompt and efficient plumbing solutions from our skilled plumbers, ensuring reliable service and lasting results for all your needs',
  },
  {
    icon: icons.carpentry,
    title: 'Quality Carpentry Work',
    desc: 'Elevate your space with premium carpentry services, delivering exceptional quality and craftsmanship for custom furniture and intricate woodwork',
  },
  {
    icon: icons.electrical,
    title: 'Reliable Electrical Services',
    desc: 'Count on our certified electricians for all your electrical requirements, prioritizing safety and efficiency to keep your home powered and protected',
  },
  {
    icon: icons.cleaning,
    title: 'Professional Cleaning',
    desc: 'Spotless, hygienic spaces. Eco-friendly products. From regular to deep cleaning, we make your home inviting',
  },
  {
    icon: icons.tiling,
    title: 'Expert Tiling',
    desc: 'Transform floors and walls. Skilled craftsmen for installation, repair, and replacement. Durable, beautiful results',
  },
  {
    icon: icons.appliance,
    title: 'Appliance Repair',
    desc: 'Prompt, reliable service. From refrigerators to washing machines, we keep your household running smoothly',
  },
]

const WhyChoose = () => (
  <div className={styles.grid_3}>
    {REASONS.map((reason) => (
      <div key={reason.title} className={styles.feature}>
        <span className={styles.feature_icon}>
          <Icon paths={reason.icon} />
        </span>
        <h3 className={styles.feature_title}>{reason.title}</h3>
        <p className={styles.feature_desc}>{reason.desc}</p>
      </div>
    ))}
  </div>
)

export default WhyChoose
