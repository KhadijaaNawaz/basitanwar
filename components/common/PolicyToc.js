import React, { useEffect, useRef, useState } from 'react'
import css from '@/style/policy-toc.module.css'

/**
 * "On this page" list for long legal text. It reads the section headings that are already on the
 * page (so the policy text itself is untouched), gives them ids, links to them, and marks the one
 * being read.
 */
export default function PolicyToc() {
  const ref = useRef(null)
  const [items, setItems] = useState([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const scope = ref.current?.closest('[class*="main_container"]')
    if (!scope) return
    const heads = [...scope.querySelectorAll('[class*="cont1"] h2')]
    const list = heads.map((h, i) => {
      h.id = h.id || `policy-${i + 1}`
      h.style.scrollMarginTop = '7rem'
      return { id: h.id, label: h.textContent.replace(/:\s*$/, '').trim() }
    })
    setItems(list)
    const io = new IntersectionObserver(
      (es) => {
        const vis = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (vis) setActive(vis.target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' }
    )
    heads.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [])

  return (
    <nav ref={ref} className={css.toc} aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        {items.map((it) => (
          <li key={it.id} data-on={active === it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
