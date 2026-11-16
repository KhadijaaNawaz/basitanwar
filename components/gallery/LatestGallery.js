"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cards from "@/data/gallery.json";
import useScene, { reveal } from "@/components/home/useScene";
import home from "@/style/home.module.css";
import css from "@/style/gallery-index.module.css";

const FILTERS = [
  ["all", "All"],
  ["Home Maintenance", "Home Maintenance"],
  ["Drywall Insulation", "Drywall Insulation"],
  ["Design & Home Maintenance", "Design & Home Maintenance"],
  ["AC(Air Condition) & Repairing", "AC(Air Condition) & Repairing"],
];

/** Projects gallery: same filters, data and links as before, in the site's editorial style. */
export default function LatestGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, "[data-head]"));
  const shown = cards.filter((c) => selectedCategory === "all" || c.status === selectedCategory);

  return (
    <section ref={root} className={css.sec}>
      <div className={home.container}>
        <div className={css.head} data-head>
          <div>
            <span className={home.eyebrow}>Selected work</span>
            <h2 className={css.title}>Our Gallery</h2>
          </div>
          <div className={css.filters} role="group" aria-label="Filter projects">
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={selectedCategory === key}
                data-on={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className={css.grid}>
          {shown.map((card, i) => (
            <Link href={`/gallery/${card.slug}`} className={css.card} key={`${card.slug}-${i}`}>
              <span className={css.photo}>
                <Image src={card.img} alt={card.name} fill sizes="(max-width: 767px) 92vw, (max-width: 1100px) 46vw, 380px" />
              </span>
              <span className={css.num}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{card.name}</h3>
              <small>{card.status}</small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
