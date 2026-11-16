import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/style/service-side.module.css'

const SERVICES = [
  { href: '/services/ac-services', label: 'Air Conditioner Service' },
  { href: '/services/painting-services', label: 'Painting Service' },
  { href: '/services/carpentry-services', label: 'Carpentry Service' },
  { href: '/services/electrician-services', label: 'Electrician Service' },
  { href: '/services/plumbing-services', label: 'Plumbing Service' },
  { href: '/services/home-appliance-services', label: 'Home Appliance Service' },
  { href: '/services/false-ceiling-services', label: 'False Ceiling Service' },
  { href: '/services/building-cleaning-services', label: 'Building Cleaning Service' },
  { href: '/services/floor-wall-tiling', label: 'Floor & Wall Tiling Service' },
  { href: '/services/renovation-services', label: 'Renovation Service' },
]

/** Sidebar on every service page: all services (current one marked) and a direct line to us. */
const ServiceComponent = () => {
  const { asPath } = useRouter()
  const here = asPath.split(/[?#]/)[0]
  return (
    <aside className={styles.side} aria-label="All services">
      <h2>All services</h2>
      <ul>
        {SERVICES.map((s, i) => (
          <li key={s.href} data-on={here === s.href}>
            <Link href={s.href}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.ask}>
        <Image src="/images/contact_me.jpg" alt="" width={380} height={220} />
        <h3>Have a question?</h3>
        <p>Tell us what needs doing and we will reply with a clear price.</p>
        <Link href="/contact-us">Get in touch</Link>
        <a href="tel:+971524052485">+971 52 405 2485</a>
      </div>
    </aside>
  )
}

export default ServiceComponent
