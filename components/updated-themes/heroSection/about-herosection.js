import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LoopVideo from "@/components/redesign/LoopVideo";
import useScene from "@/components/home/useScene";
import styles from "@/style/inner-hero.module.css";

/**
 * Hero for every inner page (services, projects, blogs, contact, legal).
 * Dark, quiet and typographic: breadcrumb, a small label, the page title and
 * a piece of media on the right (a video or a photo that fits the page).
 * The title rises word by word and the media opens from the bottom; the
 * media then drifts a little as you scroll. Static when motion is reduced.
 *
 * Props are unchanged from the old hero: head_title, heading, imageurl
 * (imageurl is no longer shown). Media is picked from the route below.
 */
const MEDIA = {
  "/services/ac-services": { still: "/images/work/dubai-ac-after.jpg", alt: "Technician servicing a ceiling AC unit" },
  "/services/electrician-services": { still: "/images/work/dubai-electrical-after.jpg", alt: "Electrician testing a distribution board" },
  "/services/plumbing-services": { still: "/images/work/dubai-plumbing-after.jpg", alt: "Plumber fixing pipework under a sink" },
  "/services/painting-services": { still: "/images/painting_service.jpg", alt: "Painter rolling a wall" },
  "/services/carpentry-services": { still: "/images/carpentary_service.jpg", alt: "Carpenter at work" },
  "/services/false-ceiling-services": { still: "/images/ceiling_service.jpg", alt: "Finished false ceiling" },
  "/services/floor-wall-tiling": { still: "/images/floor_tiling.webp", alt: "Tiled floor and wall" },
  "/services/building-cleaning-services": { still: "/images/cleaning_service.jpg", alt: "Cleaner at work" },
  "/services/home-appliance-services": { still: "/images/appliance_service.jpg", alt: "Appliance repair" },
  "/services/renovation-services": { still: "/images/renovation.webp", alt: "Renovated living room" },
  "/gallery": { video: "/vedios/mission.mp4", alt: "Living room renovation" },
  "/portfolio": { video: "/vedios/mission.mp4", alt: "Living room renovation" },
  "/contact-us": { video: "/vedios/welcome.mp4", alt: "Technicians reviewing a villa floor plan" },
  "/faqs": { video: "/vedios/faq.mp4", alt: "Our team answering questions" },
  "/blogs": { video: "/vedios/welcome.mp4", alt: "Technicians reviewing a villa floor plan" },
};

const LABELS = {
  services: "Services",
  gallery: "Projects",
  portfolio: "Portfolio",
  blogs: "Blogs",
  "blog-categories": "Blogs",
  "contact-us": "Contact",
  "privacy-policy": "Privacy Policy",
  faqs: "FAQs",
};

const pick = (path) => {
  if (MEDIA[path]) return MEDIA[path];
  const root = "/" + path.split("/")[1];
  return MEDIA[root] || null; // e.g. /gallery/[slug], /blogs/[slug]
};

const AboutHeroSection = ({ head_title, heading }) => {
  const router = useRouter();
  const path = router.pathname.startsWith("/gallery/") || router.pathname.startsWith("/blogs/") || router.pathname.startsWith("/blog-categories/")
    ? "/" + router.pathname.split("/")[1]
    : router.asPath.split(/[?#]/)[0];
  const media = pick(path);
  const section = LABELS[path.split("/")[1]];
  const long = (head_title || "").length > 34;

  const root = useScene(({ gsap, root: el, full }) => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(el.querySelectorAll("[data-in]"), { y: 22, opacity: 0, duration: 0.8, stagger: 0.09 })
      .from(el.querySelectorAll("[data-word]"), { yPercent: 110, duration: 0.9, stagger: 0.05 }, 0.1);
    const m = el.querySelector("[data-media]");
    if (m) {
      tl.fromTo(m, { clipPath: "inset(100% 0% 0% 0% round 24px)" }, { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.2, ease: "power3.inOut" }, 0.15);
      if (full) gsap.to(m.querySelector("video, img"), { yPercent: 7, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
    }
  });

  return (
    <>
      <Head>
        <title>{head_title}-BA Tech L.L.C-Dubai</title>
        <meta property="og:title" content={`${head_title}-BA Tech L.L.C-Dubai`} key="title" />
      </Head>
      <section ref={root} className={`${styles.hero} ${media ? "" : styles.plain}`}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <nav className={styles.crumbs} aria-label="Breadcrumb" data-in>
              <Link href="/">Home</Link>
              {section && (
                <>
                  <span aria-hidden="true">/</span>
                  <Link href={"/" + path.split("/")[1] === "/blog-categories" ? "/blogs" : "/" + path.split("/")[1]}>{section}</Link>
                </>
              )}
              <span aria-hidden="true">/</span>
              <span aria-current="page">{head_title}</span>
            </nav>
            {heading && <span className={styles.label} data-in>{heading}</span>}
            <h1 className={`${styles.title} ${long ? styles.long : ""}`} aria-label={head_title}>
              {(head_title || "").split(" ").map((w, i) => (
                <span key={i} className={styles.mask} aria-hidden="true">
                  <span data-word>{w}&nbsp;</span>
                </span>
              ))}
            </h1>
          </div>

          {media && (
            <div className={styles.media} data-media>
              {media.video ? (
                <LoopVideo src={media.video} label={media.alt} poster={media.video.replace("/vedios/", "/vedios/posters/").replace(".mp4", ".jpg")} />
              ) : (
                <Image src={media.still} alt={media.alt} fill priority sizes="(max-width: 1023px) 92vw, 520px" />
              )}
              <i className={styles.shade} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
