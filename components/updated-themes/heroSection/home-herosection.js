import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Data from "../../../data/homeherosection.json";
import Image from 'next/image';
import styles from "../../../style/herosection.module.css";
import animations from "../../../style/animation.module.css"; // Import the animations CSS module
import Link from 'next/link';

const HomeHeroSection = () => {
  const swiperRef = useRef(null);

  const addAnimationClass = () => {
    const activeSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
    const perDetails = activeSlide.querySelectorAll(`.${styles.per_detail}`);
    const titleHeading = activeSlide.querySelector(`.${styles.title_heading}`);
    
    // Apply animation to perDetail elements
    if (perDetails) {
      perDetails.forEach((element) => {
        element.classList.add(animations.flip);
        element.addEventListener('animationend', () => {
          element.classList.remove(animations.flip);
        });
      });
    }
  
    // Apply animation to titleHeading element
    if (titleHeading) {
      titleHeading.classList.add(animations.flip);
      titleHeading.addEventListener('animationend', () => {
        titleHeading.classList.remove(animations.flip);
      });
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on('slideChange', () => {
        addAnimationClass();
      });

      // Trigger the animation for the initial slide
      addAnimationClass();
    }
  }, []);

  return (
    <div className={styles.main_hero_Container}>
      <Swiper
        ref={swiperRef}
        modules={[ Navigation, Autoplay]}
        cssMode={true}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true} // Enable circular mode
        effect="fade"
        className={styles.myswiper}
      >
        {Data.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.data_container}>
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fetchPriority='high'
                priority
                fill
                className={styles.heroImage}
              />
              <div className={styles.overlay} />
              <div className={styles.content_part}>
                <span className={styles.type_data}>{slide.type}</span>
                <h2 className={styles.title_heading}>{slide.title}</h2>
                <h3 className={styles.simple_heading}>Expert Technicians at Your Service</h3>
                <Link href={"/contact-us"}>
                <button className={styles.hero_btn} >Contact Us</button>
                </Link>
              </div>
              <div className={styles.experience_detail}>
                <div className={styles.per_detail}>
                  <div className={styles.imageDiv}>
                    <Image src="/updated-images/engineer.png" alt="Technician" width={50} height={50} />
                  </div>
                  <div className={styles.data_part}>
                    <span>Professional Expertise</span>
                    <p>Depend on our skilled team for quality services</p>
                  </div>
                </div>
                <div className={styles.per_detail}>
                  <div className={styles.imageDiv}>
                    <Image src="/updated-images/schedule.png" alt="Scheduling" width={50} height={50} />
                  </div>
                  <div className={styles.data_part}>
                    <span>Easy Booking</span>
                    <p>Schedule services at your convenience with our flexible options</p>
                  </div>
                </div>
                <div className={styles.per_detail}>
                  <div className={styles.imageDiv}>
                    <Image src="/updated-images/best-price.png" alt="Pricing" width={50} height={50} />
                  </div>
                  <div className={styles.data_part}>
                    <span>Pricing Transparency</span>
                    <p>Enjoy transparent pricing with no hidden fees for all our services</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSection;
