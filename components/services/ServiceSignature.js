import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Tool } from '@/components/home/Tools'
import ToolDefs from '@/components/home/ToolDefs'
import useScene from '@/components/home/useScene'
import { PHONE } from '@/components/home/content'
import home from '@/style/home.module.css'
import css from '@/style/service-signature.module.css'

/**
 * One signature block per service page, under the hero: its own colour, tagline, tool and
 * "what we handle" list, and its own entrance for the tool (swing, spin, drop or slide),
 * so the ten service pages stop looking like the same page with different text.
 * The capabilities are taken from each page's own copy; nothing new is claimed.
 */
const SERVICES = {
  '/services/ac-services': {
    n: 4, tool: 'ac', color: '#7a6a55', motion: 'slide',
    tag: 'Cool, clean air through a Dubai summer.',
    items: ['New AC installation', 'Regular maintenance plans', 'Filter and coil cleaning', 'Refrigerant level checks'],
  },
  '/services/electrician-services': {
    n: 3, tool: 'bulb', color: '#a5802f', motion: 'drop',
    tag: 'Safe, tidy electrical work, done right.',
    items: ['Fittings and fixtures', 'Fault-finding and repair', 'Rewiring', 'Ongoing maintenance'],
  },
  '/services/plumbing-services': {
    n: 5, tool: 'pipe', color: '#5f5646', motion: 'swing',
    tag: 'Leaks fixed, pipes flowing, no mess left behind.',
    items: ['Leaks and blockages', 'New installations', 'Bathroom pipework', 'Sanitary fittings'],
  },
  '/services/painting-services': {
    n: 2, tool: 'roller', color: '#9a7448', motion: 'slide',
    tag: 'Proper preparation and a finish that lasts.',
    items: ['Interior painting', 'Exterior painting', 'Surface preparation', 'Clean edges and finish'],
  },
  '/services/carpentry-services': {
    n: 7, tool: 'hammer', color: '#6b4f2e', motion: 'swing',
    tag: 'Joinery made and fitted by skilled hands.',
    items: ['Custom furniture', 'Wardrobes', 'Doors and joinery', 'Wood flooring'],
  },
  '/services/false-ceiling-services': {
    n: 6, tool: 'drill', color: '#6e6558', motion: 'drop',
    tag: 'Ceilings with level lines and sharp finish.',
    items: ['Gypsum ceilings', 'Designer ceilings', 'Integrated lighting', 'Partitions'],
  },
  '/services/floor-wall-tiling': {
    n: 8, tool: 'trowel', color: '#85785f', motion: 'spin',
    tag: 'Floors and walls, level, aligned and durable.',
    items: ['Floor tiling', 'Wall tiling', 'Regrouting', 'Repair and replacement'],
  },
  '/services/building-cleaning-services': {
    n: 9, tool: 'brush', color: '#8f8068', motion: 'spin',
    tag: 'Spotless homes and offices, eco-friendly products.',
    items: ['Deep cleaning', 'Routine cleaning', 'Homes and offices', 'Eco-friendly products'],
  },
  '/services/home-appliance-services': {
    n: 10, tool: 'wrench', color: '#5a4d3c', motion: 'swing',
    tag: 'Prompt repair, so the household keeps running.',
    items: ['Refrigerators', 'Washing machines', 'Servicing and repair', 'Prompt visits'],
  },
  '/services/renovation-services': {
    n: 1, tool: 'toolbox', color: '#8a6a24', motion: 'drop',
    tag: 'From planning to final finish, managed end to end.',
    items: ['Bathroom renovation', 'House and villa renovation', 'Kitchen upgrades', 'Flat renovation'],
  },
}
export const SERVICE_COLOR = Object.fromEntries(Object.entries(SERVICES).map(([k, v]) => [k, v.color]))

const ENTRANCE = {
  swing: { rotation: -70, transformOrigin: '50% 100%', y: 30 },
  spin: { rotation: -200, scale: 0.4 },
  drop: { y: -160, scale: 0.8 },
  slide: { x: 160, rotation: 12 },
}

export default function ServiceSignature() {
  const { asPath } = useRouter()
  const key = asPath.split(/[?#]/)[0]
  const svc = SERVICES[key]

  const root = useScene(({ gsap, root: el }) => {
    if (!svc) return
    const tool = el.querySelector('[data-tool]')
    gsap.from(tool, { ...ENTRANCE[svc.motion], opacity: 0, duration: 1.4, ease: 'elastic.out(1, 0.55)', scrollTrigger: { trigger: el, start: 'top 80%', once: true } })
    gsap.from(el.querySelectorAll('[data-i]'), { y: 24, opacity: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%', once: true } })
  })

  if (!svc) return null
  return (
    <section ref={root} className={css.sig} style={{ '--svc': svc.color }}>
      <ToolDefs />
      <div className={`${home.container} ${home.home}`}>
        <div className={css.grid}>
          <div>
            <span className={css.kicker} data-i>Service {String(svc.n).padStart(2, '0')} / 10</span>
            <h2 className={css.tag} data-i>{svc.tag}</h2>
            <ul className={css.items}>
              {svc.items.map((t, i) => (
                <li key={t} data-i>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className={css.row} data-i>
              <Link href="/contact-us" className={css.btn}>Request a Quote</Link>
              <a href={PHONE.href} className={css.call}>{PHONE.label}</a>
            </div>
          </div>
          <div className={css.art} aria-hidden="true">
            <i className={css.halo} />
            <i className={css.ring} />
            <div className={css.tool} data-tool>
              <Tool name={svc.tool} className={css.toolsvg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
