import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import css from '@/style/blog-card.module.css'

const FALLBACK_IMAGE = '/updated-images/blog-placeholder.png'

/** One blog card: same data and click behaviour as before, in the site's editorial style. */
const BlogsCard = ({ post }) => {
  const router = useRouter()
  const go = () => router.replace(`/blogs/${post.slug}`)
  const imageSrc = post.image || FALLBACK_IMAGE // guard against null/undefined

  return (
    <article
      className={css.card}
      onClick={go}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), go())}
      role="link"
      tabIndex={0}
    >
      <span className={css.photo}>
        <Image src={imageSrc} alt={post.title || 'Blog image'} fill sizes="(max-width: 767px) 92vw, 380px" />
      </span>
      {post.category_name && <span className={css.cat}>{post.category_name}</span>}
      <h3>{post.title}</h3>
    </article>
  )
}

export default BlogsCard
