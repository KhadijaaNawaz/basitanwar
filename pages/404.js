import React from "react";
import Head from "next/head";
import Link from "next/link";
import ToolDefs from "@/components/home/ToolDefs";
import { Tool } from "@/components/home/Tools";
import useScene from "@/components/home/useScene";
import home from "@/style/home.module.css";
import css from "@/style/not-found.module.css";

const QUICK = [
  ["/services", "Our services"],
  ["/gallery", "Recent projects"],
  ["/faqs", "FAQs"],
  ["/contact-us", "Contact us"],
];

/** 404: the wrench is "lost" and wobbles; points the way back. */
function NotFound() {
  const root = useScene(({ gsap, root: el }) => {
    gsap.from(el.querySelectorAll("[data-in]"), { y: 28, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" });
    gsap.from(el.querySelector("[data-tool]"), { rotation: -120, scale: 0.4, opacity: 0, duration: 1.4, ease: "elastic.out(1, 0.5)" });
  });
  return (
    <>
      <Head>
        <title>Page not found-BA Tech L.L.C-Dubai</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={home.home}>
        <ToolDefs />
        <section ref={root} className={css.sec}>
          <div className={home.container}>
            <div className={css.grid}>
              <div>
                <span className={home.eyebrow} data-in>Error 404</span>
                <h1 className={css.title} data-in>This page needs a repair.</h1>
                <p className={css.lead} data-in>
                  The page you were looking for has moved or does not exist. Our team can fix most things, but not a missing link: here is the way back.
                </p>
                <div className={home.row} data-in>
                  <Link href="/" className={home.btn_dark}>Back to home</Link>
                  <Link href="/contact-us" className={home.btn_outline}>Tell us about it</Link>
                </div>
                <ul className={css.quick} data-in>
                  {QUICK.map(([href, label]) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css.art} aria-hidden="true">
                <span className={css.num}>404</span>
                <div className={css.tool} data-tool>
                  <Tool name="wrench" className={css.wrench} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NotFound;
