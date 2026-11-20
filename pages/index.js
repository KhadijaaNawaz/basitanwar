import React from "react";
import Head from "next/head";

import css from "@/style/home.module.css";
import BeforeAfter, { PAIRS } from "@/components/services/BeforeAfter";
import ToolDefs from "@/components/home/ToolDefs";
import Opening from "@/components/home/Opening";
import ServicesScene from "@/components/home/ServicesScene";
import ProcessScene from "@/components/home/ProcessScene";
import EmergencyScene from "@/components/home/EmergencyScene";
import ValuesRibbon from "@/components/about/ValuesRibbon";
import Divider from "@/components/home/Divider";
import FaqScene from "@/components/home/FaqScene";
import CtaScene from "@/components/home/CtaScene";
import Lottie from "@/components/home/Lottie";
import { LOTTIE } from "@/components/home/content";

import ReviewSlider from "@/components/Reviews/reviewSlider";
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
      <Divider />
      <BeforeAfter
        pairs={PAIRS.filter((p) =>
          ["Bare site to finished room", "Kitchen, Dubai Marina", "Bedroom, JBR", "Living room, Dubai Marina", "False ceiling", "Villa dining room"].includes(p.title)
        )}
      />
      <Divider />
      <ServicesScene />
      <Divider />
      <ProcessScene />
      <Divider />
      <EmergencyScene />
      <Divider />
      <ValuesRibbon />
      <Divider />

      <section className={`${css.band} ${css.band_tint}`}>
        <div className={css.container}>
          <Lottie src={LOTTIE.support} className={css.support_lottie} label="Customer support" />
          <ReviewSlider />
        </div>
      </section>

      <Divider />

      <FaqScene />

      <Divider />

      <CtaScene />

      <BottomSection footerheading={"Renovation Services and AC Solutions"} />
    </div>
  );
}

export default Index;
