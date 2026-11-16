import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gallery from '@/data/gallery.json'
import styles from '@/style/redesign.module.css'

/**
 * Recent work, taken from the existing gallery data and laid out on an
 * uneven grid so the block does not read as another rectangle of equal
 * boxes. The first tile runs 2x2 and the fourth runs full height, which
 * is the arrangement the reference site uses for its projects strip.
 *
 * Each tile links to the gallery entry that already exists, so this adds
 * internal links to pages that were previously two clicks away.
 */
const SPANS = [styles.project_wide, '', '', styles.project_tall, '']

const Projects = () => {
  const items = gallery.slice(0, 5)

  return (
    <div className={styles.projects}>
      {items.map((item, index) => (
        <Link
          key={`${item.slug}-${index}`}
          href={`/gallery/${item.slug}`}
          className={`${styles.project} ${SPANS[index] || ''}`}
        >
          <Image
            src={item.img}
            alt={item.name}
            width={800}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          <span className={styles.project_label}>
            {item.name}
            <small>{item.status}</small>
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Projects
