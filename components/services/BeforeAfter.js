import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useScene from '@/components/home/useScene'
import home from '@/style/home.module.css'
import css from '@/style/before-after.module.css'

const pad = (n) => String(n + 1).padStart(2, '0')

const FK = (id, by) => ({ by, url: `https://www.flickr.com/photos/${id}` })
const W = (n) => [`/images/work/${n}-before.webp`, `/images/work/${n}-after.webp`]
const D = (n) => [`/images/work/dubai-${n}-before.jpg`, `/images/work/dubai-${n}-after.jpg`]

// Pair 1 is two frames from the same fixed shot of one renovation (our own film).
// The "dubai-*" pairs are our own Dubai jobs — no credit line needed.
// The rest are older stock placeholders (Creative Commons, credited below) kept for the gallery page only.
export const PAIRS = [
  { title: 'Bare site to finished room', before: '/images/work/room-site.webp', after: '/images/work/room-finished.webp', note: 'Dust sheets and bare plaster, handed over furnished and ready.' },
  { title: 'Kitchen, Dubai Marina', before: D('kitchen')[0], after: D('kitchen')[1], note: 'Gutted kitchen rebuilt with a marble waterfall island.' },
  { title: 'Bedroom, JBR', before: D('bedroom')[0], after: D('bedroom')[1], note: 'Bare walls and exposed sockets, finished as a styled suite.' },
  { title: 'Living room, Dubai Marina', before: D('livingroom')[0], after: D('livingroom')[1], note: 'Construction dust and bare concrete to a furnished skyline view.' },
  { title: 'False ceiling', before: D('ceiling')[0], after: D('ceiling')[1], note: 'Exposed slab and conduit boxed into a lit cove ceiling.' },
  { title: 'Villa dining room', before: D('dining')[0], after: D('dining')[1], note: 'A renovation site styled into a finished dining room.' },
  { title: 'Entryway tiling', before: D('hallway')[0], after: D('hallway')[1], note: 'Cracked tiles replaced with level, polished marble.' },
  { title: 'Fitted wardrobe', before: D('wardrobe')[0], after: D('wardrobe')[1], note: 'Raw MDF carcass finished in walnut veneer with brass handles.' },
  { title: 'Wall & paint', before: D('wall')[0], after: D('wall')[1], note: 'Damaged plaster made good and painted to a clean finish.' },
  { title: 'AC unit service', before: D('ac')[0], after: D('ac')[1], note: 'A neglected, dust-caked unit serviced and tested like new.' },
  { title: 'Electrical panel', before: D('electrical')[0], after: D('electrical')[1], note: 'A rewired, labelled board passed on inspection.' },
  { title: 'Plumbing under sink', before: D('plumbing')[0], after: D('plumbing')[1], note: 'A corroded, leaking joint replaced — clean and dry.' },
  { title: 'Door painting', before: W('door')[0], after: W('door')[1], note: 'A tired door given a bold, clean finish.', credit: FK('37996646802@N01/14910162996', 'cogdogblog') },
  { title: 'Bathroom', before: W('bath')[0], after: W('bath')[1], note: 'Dark and dated to bright and clean.', credit: FK('12670507@N02/13875890294', 'gamene') },
  { title: 'Garage floor', before: W('floor')[0], after: W('floor')[1], note: 'Stained concrete sealed with a smooth coating.', credit: FK('38041294@N05/7854510982', 'Decorative Concrete Kingdom') },
]

// One large stage, drag (or tap-and-slide) to compare. Resets with a gentle
// auto-sweep every time a different project is selected from the thumbnails.
// Exported so project case-study pages can embed the same stage for their own pair.
export function Stage({ pair }) {
  const box = useRef(null)
  const [pos, setPos] = useState(50)
  const [touched, setTouched] = useState(false)

  // Switching projects resets the stage to centre — the handle's own pulse
  // ring (CSS) invites the drag instead of sweeping the photo back and forth.
  useEffect(() => {
    setTouched(false)
    setPos(50)
  }, [pair.title])

  const move = (clientX) => {
    const r = box.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }
  const down = (e) => {
    setTouched(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    move(e.clientX)
  }

  return (
    <div
      ref={box}
      className={css.stage}
      data-frame
      style={{ '--p': `${pos}%` }}
      onPointerDown={down}
      onPointerMove={(e) => e.buttons && move(e.clientX)}
    >
      <Image src={pair.after} alt={`${pair.title}: handed over`} fill sizes="(max-width: 900px) 94vw, 62rem" priority />
      <div className={css.stage_before}>
        <Image src={pair.before} alt={`${pair.title}: as found`} fill sizes="(max-width: 900px) 94vw, 62rem" priority />
      </div>
      <span className={`${css.tag} ${css.tag_b}`}>As found</span>
      <span className={`${css.tag} ${css.tag_a}`}>Handed over</span>
      <span className={css.handle} data-pulse={!touched} aria-hidden="true">
        <i />
      </span>
      <input
        className={css.range}
        type="range"
        min="0"
        max="100"
        value={Math.round(pos)}
        onChange={(e) => {
          setTouched(true)
          setPos(+e.target.value)
        }}
        aria-label={`${pair.title}: drag to compare before and after`}
      />
      {!touched && <span className={css.hint}>Drag to compare</span>}
    </div>
  )
}

// Each pair is its own slab that sticks under the header as the next one
// slides over it and dims — the exact mechanic the services list uses.
export default function BeforeAfter({
  title = 'Same space, new life',
  eyebrow = 'The transformation',
  intro = 'Scroll to move through the transformations — drag any photo to compare.',
  pairs = PAIRS,
}) {
  const credits = pairs.filter((p) => p.credit)

  const root = useScene(({ gsap, root: el, full }) => {
    const head = el.querySelector('[data-head]')
    gsap.from(head, { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: head, start: 'top 88%', once: true } })
    if (!full) return

    const slabs = [...el.querySelectorAll('[data-slab]')]
    slabs.forEach((slab, i) => {
      const next = slabs[i + 1]
      const body = slab.firstElementChild
      // card rises into place
      gsap.from(body, { y: 90, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: slab, start: 'top 92%', once: true } })
      if (!next) return
      // when the next slab arrives, this one steps back
      gsap.fromTo(body, { scale: 1, filter: 'brightness(1)', transformOrigin: '50% 0%' }, {
        scale: 0.93,
        filter: 'brightness(0.9)',
        transformOrigin: '50% 0%',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 14%', scrub: true },
      })
    })
  })

  return (
    <section ref={root} className={css.sec}>
      <div className={home.container}>
        <div className={css.stack_head} data-head>
          <span className={home.eyebrow}>{eyebrow}</span>
          <h2 className={home.title}>{title}</h2>
          <p className={home.intro_p}>{intro}</p>
        </div>

        <div className={css.slabs}>
          {pairs.map((p, i) => (
            <article key={p.title} className={css.slab} style={{ '--i': i }} data-slab>
              <div className={css.slab_body}>
                <div className={css.slab_text}>
                  <span className={css.slab_num}>{pad(i)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.note}</p>
                  <Link href="/portfolio" className={home.btn}>
                    View Portfolio
                  </Link>
                </div>
                <div className={css.slab_stage}>
                  <Stage pair={p} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {credits.length > 0 && (
          <p className={css.fine}>
            First pair: frames from our own renovation film. Others: photos under Creative Commons BY 2.0 —{' '}
            {credits.map((c, i) => (
              <span key={c.by + i}>
                <a href={c.credit.url} target="_blank" rel="noopener noreferrer">{c.credit.by}</a>
                {i < credits.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  )
}
