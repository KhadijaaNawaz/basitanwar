import React from "react";
import Head from "next/head";

import css from "@/style/home.module.css";
import BeforeAfter from "@/components/services/BeforeAfter";
import ToolDefs from "@/components/home/ToolDefs";
import Opening from "@/components/home/Opening";
import ServicesScene from "@/components/home/ServicesScene";
import ProcessScene from "@/components/home/ProcessScene";
import WhyScene from "@/components/home/WhyScene";
import EmergencyScene from "@/components/home/EmergencyScene";
import ProjectsScene from "@/components/home/ProjectsScene";
import CtaScene from "@/components/home/CtaScene";
import Lottie from "@/components/home/Lottie";
import { LOTTIE } from "@/components/home/content";

import ReviewSlider from "@/components/Reviews/reviewSlider";
import FAQscompo from "@/components/updated-components/faqscompo";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

/**
 * Home page: the scroll-journey version (one "scene" per section, components/home/).
 * The editorial redesign is kept in components/editorial/ + style/editorial.module.css;
 * a copy of its page file is saved as pages/index.editorial.example.js.txt to switch back.
 */
function Index() {
  return (
    <div className={css.home}>
      <Head>
        <title>Home-BA Tech L.L.C-Dubai</title>
        <meta property="og:title" content="Home-BA Tech L.L.C-Dubai" key="title" />
      </Head>

      <ToolDefs />
      <Opening />
      <ServicesScene />
      <ProcessScene />
      <WhyScene />
      <EmergencyScene />
      <ProjectsScene />
      <BeforeAfter />

      <section className={`${css.band} ${css.band_tint}`}>
        <div className={css.container}>
          <Lottie src={LOTTIE.support} className={css.support_lottie} label="Customer support" />
          <ReviewSlider />
        </div>
      </section>

      <section className={css.band}>
        <div className={css.container}>
          <div className={css.center}>
            <span className={css.eyebrow}>Do You Have</span>
            <h2 className={css.title}>Any Questions?</h2>
            <p className={css.intro_p}>The things customers ask us most often, answered plainly.</p>
          </div>
          <div className={css.faq_narrow}>
            <FAQscompo />
          </div>
        </div>
      </section>

      <CtaScene />

      <BottomSection footerheading={"Renovation Services and AC Solutions"} />
    </div>
  );
}

export default Index;
