import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useScene from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/ribbon.module.css'

const VALUES = ['Quality workmanship.', 'Clear communication.', 'Attention to detail.']

// our own service photos; depth drives scroll parallax, pointer parallax and float height
const PHOTOS = [
  { src: '/images/plumbing_service.webp', alt: 'Plumber fitting a yellow pipe', depth: 0.9, tilt: -6 },
  { src: '/images/painting_service.jpg', alt: 'Painter rolling a wall', depth: 0.5, tilt: 4 },
  { src: '/images/floor_tiling.webp', alt: 'Tiled floor and wall', depth: 1.2, tilt: -8 },
  { src: '/images/electrician_service.jpg', alt: 'Electrician at work on a pole', depth: 1, tilt: 7 },
  { src: '/images/ac_service.jpg', alt: 'AC unit being serviced', depth: 0.6, tilt: -4 },
  { src: '/images/ceiling_service.jpg', alt: 'Finished false ceiling', depth: 0.8, tilt: 6 },
]

/**
 * "What we stand for" (adapted from the Aureon Prime site). Three values
 * rise out of word masks and then ink in as you scroll through them; below,
 * a card pops up and our service photos burst out from behind it, float on
 * their own rhythm, drift with the scroll, and follow the pointer by depth.
 * Phones: the photos become a tidy row under the card.
 */
export default function ValuesRibbon() {
  const root = useScene(({ gsap, root: el, full }) => {
    const words = gsap.utils.toArray('[data-w]', el)
    const photos = gsap.utils.toArray('[data-ph]', el).filter((p) => p.offsetParent !== null)
    const tile = el.querySelector('[data-tile]')
    const rib = el.querySelector('[data-rib]')

    gsap.from(words, { yPercent: 110, duration: 0.9, stagger: 0.06, ease: 'power4.out', scrollTrigger: { trigger: el.querySelector('[data-vals]'), start: 'top 85%', once: true } })
    gsap.fromTo(
      words,
      { color: '#cfc9bd' },
      {
        color: (_i, w) => getComputedStyle(w.closest('li')).color,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: el.querySelector('[data-vals]'), start: 'top 75%', end: 'bottom 40%', scrub: 0.5 },
      }
    )

    const entry = gsap.timeline({ scrollTrigger: { trigger: rib, start: 'top 80%', once: true } })
    entry.from(tile, { opacity: 0, y: 40, scale: 0.92, duration: 0.8, ease: 'back.out(1.4)' })
    const cleanups = []
    photos.forEach((ph, i) => {
      const d = PHOTOS[i % PHOTOS.length]
      const inner = ph.querySelector('[data-in]')
      const t = tile.getBoundingClientRect()
      const r = ph.getBoundingClientRect()
      entry.from(
        inner,
        {
          x: (t.left + t.width / 2 - (r.left + r.width / 2)) * 0.7,
          y: (t.top + t.height / 2 - (r.top + r.height / 2)) * 0.7,
          scale: 0.4,
          rotation: d.tilt,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          onComplete: () =>
            gsap.to(inner, { y: -8 * d.depth, rotation: d.tilt * 0.15, duration: 2.6 + i * 0.35, ease: 'sine.inOut', yoyo: true, repeat: -1 }),
        },
        0.25 + i * 0.07
      )
    })

    if (!full) return
    photos.forEach((ph, i) => {
      const dist = 60 * PHOTOS[i % PHOTOS.length].depth
      gsap.fromTo(ph, { y: dist }, { y: -dist, ease: 'none', scrollTrigger: { trigger: rib, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const movers = photos.map((p, i) => ({ x: gsap.quickTo(p, 'x', { duration: 1.1, ease: 'power3.out' }), d: PHOTOS[i % PHOTOS.length].depth }))
      const move = (e) => {
        const b = rib.getBoundingClientRect()
        const dx = (e.clientX - b.left) / b.width - 0.5
        movers.forEach((m) => m.x(dx * -40 * m.d))
      }
      const leave = () => movers.forEach((m) => m.x(0))
      rib.addEventListener('pointermove', move)
      rib.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        rib.removeEventListener('pointermove', move)
        rib.removeEventListener('pointerleave', leave)
      })
    }
    return () => cleanups.forEach((c) => c())
  })

  return (
    <section ref={root} className={css.sec} aria-labelledby="stand-title">
      <div className={home.container}>
        <p className={css.label}>What we stand for</p>
        <ul className={css.vals} data-vals aria-label="Company values">
          {VALUES.map((v) => (
            <li key={v} className={css.val}>
              {v.split(' ').map((w, i) => (
                <span key={i}>
                  {i > 0 && ' '}
                  <span className={css.mask}>
                    <span data-w>{w}</span>
                  </span>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.rib} data-rib>
        {PHOTOS.map((p, i) => (
          <figure key={p.src} className={`${css.ph} ${css['ph' + i]}`} data-ph>
            <div className={css.in} data-in>
              <Image src={p.src} alt={p.alt} width={480} height={520} sizes="(max-width: 767px) 33vw, 22vw" />
            </div>
          </figure>
        ))}
        <div className={css.tile} data-tile>
          <h2 id="stand-title">Tell us what your home needs.</h2>
          <p>Share the space, the service and what you would like to change.</p>
          <Link href="/contact-us" className={home.btn}>Request a Quote</Link>
        </div>
      </div>
    </section>
  )
}
