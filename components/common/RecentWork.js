import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import projects from '@/data/gallery.json'
import css from '@/style/recent-work.module.css'

// one card per distinct project (the sample data repeats a slug)
const UNIQUE = projects.filter((p, i, a) => a.findIndex((x) => x.slug === p.slug) === i).slice(0, 3)

/**
 * Shown while a page that depends on the content API (portfolio, blog) has nothing to display:
 * a calm message plus some of our recent projects, so the page never looks empty or broken.
 */
export default function RecentWork({ title, text }) {
  return (
    <div className={css.wrap}>
      <div className={css.msg}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={css.grid}>
        {UNIQUE.map((p) => (
          <Link key={p.slug} href={`/gallery/${p.slug}`} className={css.card}>
            <span className={css.photo}>
              <Image src={p.img} alt={p.name} fill sizes="(max-width: 767px) 92vw, 360px" />
            </span>
            <strong>{p.name}</strong>
            <small>{p.status}</small>
          </Link>
        ))}
      </div>
      <div className={css.row}>
        <Link href="/gallery" className={css.btn}>See all projects</Link>
        <Link href="/contact-us" className={css.ghost}>Talk to us</Link>
      </div>
    </div>
  )
}
