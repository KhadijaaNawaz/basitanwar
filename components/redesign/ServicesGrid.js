import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/style/redesign.module.css'
import { Arrow } from './Section'

/**
 * Every service the site has a page for. The reference site leads with a
 * nine-card grid, which is the clearest signal of range a homepage can
 * give — and it links each existing service URL, so the internal linking
 * that already ranks is preserved rather than reduced to three cards.
 */
export const SERVICES = [
  {
    title: 'Renovation',
    desc: 'Full home and villa renovation managed end to end, from planning and permits through to the final finish.',
    image: '/images/renovation.webp',
    link: '/services/renovation-services',
  },
  {
    title: 'AC Installation & Maintenance',
    desc: 'Installation, servicing and repair that keeps your cooling efficient through a Dubai summer.',
    image: '/images/ac_service.jpg',
    link: '/services/ac-services',
  },
  {
    title: 'Electrical Work',
    desc: 'Certified electricians for fitting, fault-finding, rewiring and maintenance — safety first, always.',
    image: '/images/electrician_service.jpg',
    link: '/services/electrician-services',
  },
  {
    title: 'Plumbing',
    desc: 'Prompt, clean plumbing work: leaks, blockages, installations and full bathroom pipework.',
    image: '/images/plumbing_service.webp',
    link: '/services/plumbing-services',
  },
  {
    title: 'Painting',
    desc: 'Interior and exterior painting with proper preparation, clean edges and a finish that lasts.',
    image: '/images/painting_service.jpg',
    link: '/services/painting-services',
  },
  {
    title: 'False Ceiling',
    desc: 'Gypsum and designer ceilings with integrated lighting, built level and finished sharp.',
    image: '/images/ceiling_service.jpg',
    link: '/services/false-ceiling-services',
  },
  {
    title: 'Carpentry',
    desc: 'Custom furniture, wardrobes, doors and joinery made and fitted by skilled carpenters.',
    image: '/images/carpentary_service.jpg',
    link: '/services/carpentry-services',
  },
  {
    title: 'Floor & Wall Tiling',
    desc: 'Tiling, regrouting and replacement across floors and walls — level, aligned and durable.',
    image: '/images/floor_tiling.webp',
    link: '/services/floor-wall-tiling',
  },
  {
    title: 'Building Cleaning',
    desc: 'Deep and routine cleaning for homes and offices using eco-friendly products.',
    image: '/images/cleaning_service.jpg',
    link: '/services/building-cleaning-services',
  },
  {
    title: 'Home Appliances',
    desc: 'Prompt, reliable repair and servicing, from refrigerators to washing machines, to keep your household running smoothly.',
    image: '/images/appliance_service.jpg',
    link: '/services/home-appliance-services',
  },
]

const ServicesGrid = ({ services = SERVICES }) => (
  <div className={styles.grid_3}>
    {services.map((service) => (
      <Link key={service.link} href={service.link} className={styles.svc}>
        <div className={styles.svc_media}>
          <Image
            src={service.image}
            alt={service.title}
            width={470}
            height={353}
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
          <h3 className={styles.svc_title}>{service.title}</h3>
        </div>
        <div className={styles.svc_body}>
          <p className={styles.svc_desc}>{service.desc}</p>
          <span className={styles.svc_link}>
            View Service
            <Arrow />
          </span>
        </div>
      </Link>
    ))}
  </div>
)

export default ServicesGrid
