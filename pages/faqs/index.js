import React from "react";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import FaqScene from "@/components/faqs/FaqScene";
import home from "@/style/home.module.css";

/** FAQs: shared hero (with the faq film) → numbered, sliding questions beside a support card. */
function FAQs() {
  return (
    <>
      <AboutHeroSection head_title={"Frequently Asked Questions"} heading={"FAQs"} />
      <div className={home.home}>
        <FaqScene />
      </div>
    </>
  );
}

export default FAQs;
