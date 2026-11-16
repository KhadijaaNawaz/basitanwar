import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "@/style/footer.module.css";

const PHONE = { label: "+971 52 405 2485", href: "tel:+971524052485", wa: "https://wa.me/971524052485" };

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact" },
];

const SERVICES = [
  { href: "/services/ac-services", label: "AC Maintenance" },
  { href: "/services/electrician-services", label: "Electrician" },
  { href: "/services/plumbing-services", label: "Plumbing" },
  { href: "/services/painting-services", label: "Painting" },
  { href: "/services/carpentry-services", label: "Carpentry" },
  { href: "/services/false-ceiling-services", label: "False Ceiling" },
  { href: "/services/floor-wall-tiling", label: "Floor & Wall Tiling" },
  { href: "/services/home-appliance-services", label: "Home Appliances" },
  { href: "/services/building-cleaning-services", label: "Building Cleaning" },
  { href: "/services/renovation-services", label: "Renovation" },
];

const SOCIAL = [
  { href: "https://www.facebook.com/basatanwertech", icon: faFacebookF, label: "Facebook" },
  { href: "https://instagram.com/basatanwertech?igshid=ZDdkNTZiNTM=", icon: faInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/basat-anwer-technical-services-llc/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://www.tiktok.com/@basat.anwer.tech?is_from_webapp=1&sender_device=pc", icon: faTiktok, label: "TikTok" },
];

const WORD = "BASAT ANWER";

/**
 * Site footer. A big wordmark runs across the bottom (its letters rise out of
 * a mask as the footer arrives), above the link columns and contact details.
 * Decorative text is hidden from screen readers; the logo carries the name.
 */
function Footer() {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx;
    let dead = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (dead || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from("[data-ch]", {
          yPercent: 115,
          rotate: 5,
          duration: 0.9,
          stagger: 0.04,
          ease: "power4.out",
          scrollTrigger: { trigger: "[data-word]", start: "top 95%", once: true },
        });
        gsap.from("[data-col]", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        });
      }, root);
    })();
    return () => {
      dead = true;
      ctx && ctx.revert();
    };
  }, []);

  return (
    <footer ref={root} className={styles.foot}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.brand} data-col>
            <Link href="/" className={styles.logo} aria-label="Basat Anwer Technical Services, home">
              <Image width={60} height={70} src="/updated-images/company-logo.png" alt="Basat Anwer Technical Services LLC" />
            </Link>
            <p>
              One accountable team of engineers and skilled technicians for every trade your Dubai home needs, with a clear price before work starts.
            </p>
            <ul className={styles.social}>
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.col} aria-label="Footer" data-col>
            <h4>Explore</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="Services" data-col>
            <h4>Services</h4>
            <ul className={styles.two}>
              {SERVICES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className={styles.contact} data-col>
            <h4>24 Hours &amp; Emergencies</h4>
            <a className={styles.phone} href={PHONE.href}>
              <FontAwesomeIcon icon={faPhone} /> {PHONE.label}
            </a>
            <a className={styles.wa} href={PHONE.wa} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp us
              <span className={styles.sr}> (opens in a new tab)</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.ext} />
            </a>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Office No G/010 Al Fahad Building, Hor Al Anz, Deira, Dubai, United Arab Emirates
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:info@basatanwertech.com">info@basatanwertech.com</a>
              <br />
              <a href="mailto:basatanwertech@gmail.com" className={styles.indent}>
                basatanwertech@gmail.com
              </a>
            </p>
          </address>
        </div>

        <p className={styles.word} data-word aria-hidden="true">
          <span className={styles.word_line}>
            {[...WORD].map((c, i) => (
              <span key={i} className={styles.mask}>
                <span data-ch className={styles.ch}>
                  {c === " " ? " " : c}
                </span>
              </span>
            ))}
          </span>
          <small>Technical Services LLC</small>
        </p>

        <div className={styles.base}>
          <p>© {new Date().getFullYear()} Basat Anwer Technical Services LLC. All rights reserved.</p>
          <ul>
            <li>
              <Link href="/privacy-policy">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default dynamic(() => Promise.resolve(Footer), { ssr: false });
