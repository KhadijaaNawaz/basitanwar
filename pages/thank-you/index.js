import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Lottie from "@/components/home/Lottie";
import useScene, { reveal } from "@/components/home/useScene";
import { LOTTIE, PHONE } from "@/components/home/content";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import home from "@/style/home.module.css";
import css from "@/style/thank-you.module.css";

const STEPS = [
  ["01", "We read your request", "A member of the team reads the details you sent."],
  ["02", "A specialist calls you", "Usually the same day, to confirm the scope and the visit."],
  ["03", "You get a clear price", "Itemised, before any work starts. No obligation."],
];
const SOCIAL = [
  ["https://www.facebook.com/basatanwertech", faFacebookF, "Facebook"],
  ["https://www.tiktok.com/@basat.anwer.tech?is_from_webapp=1&sender_device=pc", faTiktok, "TikTok"],
  ["https://instagram.com/basatanwertech?igshid=ZDdkNTZiNTM=", faInstagram, "Instagram"],
  ["https://www.linkedin.com/company/basat-anwer-technical-services-llc/", faLinkedin, "LinkedIn"],
];

/** Shown after the contact form is sent: confirmation, what happens next, and a way to reach us sooner. */
function ThankYou() {
  const root = useScene(({ gsap, root: el }) => {
    gsap.from(el.querySelectorAll("[data-in]"), { y: 26, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" });
    reveal({ gsap, root: el }, "[data-step]");
  });
  return (
    <>
      <Head>
        <title>Thank You-BA Tech L.L.C-Dubai</title>
      </Head>
      <div className={home.home}>
        <section ref={root} className={css.sec}>
          <div className={home.container}>
            <div className={css.top}>
              <div className={css.art} data-in>
                <Lottie src={LOTTIE.support} className={css.lottie} label="Our team has your message" />
              </div>
              <div>
                <span className={home.eyebrow} data-in>Message received</span>
                <h1 className={css.title} data-in>Thank you. We will be in touch soon.</h1>
                <p className={css.lead} data-in>
                  Your message has reached our team. If it is urgent, you do not have to wait: call us any time.
                </p>
                <div className={home.row} data-in>
                  <a href={PHONE.href} className={home.btn_dark}>Call {PHONE.label}</a>
                  <Link href="/services" className={home.btn_outline}>Browse services</Link>
                </div>
              </div>
            </div>

            <ol className={css.steps}>
              {STEPS.map(([n, t, d]) => (
                <li key={n} data-step>
                  <span>{n}</span>
                  <h2>{t}</h2>
                  <p>{d}</p>
                </li>
              ))}
            </ol>

            <div className={css.follow} data-in>
              <small>Follow us</small>
              {SOCIAL.map(([href, icon, label]) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <BottomSection footerheading={"We Appreciate Your Contact!"} />
    </>
  );
}

export default ThankYou;
