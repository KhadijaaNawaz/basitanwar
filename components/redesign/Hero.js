import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import LoopVideo from '@/components/redesign/LoopVideo'
import Data from '@/data/homeherosection.json'
import styles from '@/style/redesign.module.css'

/**
 * Full-bleed hero. Content sits bottom-left rather than centred, which is
 * what gives the reference site its editorial feel and leaves the upper
 * two thirds of the photograph visible.
 *
 * The first slide's title is the page h1 — the homepage previously had no
 * h1 at all.
 */
const Hero = () => (
  <div className={styles.hero}>
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={900}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={Data.length > 1}
      a11y={{ enabled: true }}
    >
      {Data.map((slide, index) => (
        <SwiperSlide key={slide.id ?? index}>
          <div className={styles.hero_slide}>
            <LoopVideo src={slide.videoUrl} poster={slide.poster || '/vedios/posters/mission.jpg'} className={styles.hero_img} />
            <div className={styles.hero_scrim} />

            <div className={styles.hero_inner}>
              <div className={styles.hero_content}>
                <span className={styles.hero_eyebrow}>{slide.type}</span>

                {index === 0 ? (
                  <h1 className={styles.hero_title}>{slide.title}</h1>
                ) : (
                  <p className={styles.hero_title}>{slide.title}</p>
                )}

                <p className={styles.hero_sub}>
                  Expert technicians across Dubai for air conditioning, renovation,
                  electrical, plumbing and finishing work &mdash; booked when it suits
                  you, priced with no surprises.
                </p>

                <div className={styles.hero_actions}>
                  <Link href="/contact-us" className={styles.btn}>
                    Request a Quote
                  </Link>
                  <Link href="/services" className={styles.btn_ghost}>
                    Browse Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default Hero
