import React from "react";
import ToolDefs from "@/components/home/ToolDefs";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceStack from "@/components/services/ServiceStack";
import VideoJourney from "@/components/services/VideoJourney";
import CtaScene from "@/components/home/CtaScene";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import home from "@/style/home.module.css";

/**
 * Services: rolling-word hero with a tilting 3D tool → ten service slabs that
 * stack as you scroll → scroll-scrubbed engineers film → closing CTA.
 */
function Index() {
  return (
    <>
      <div className={home.home}>
        <ToolDefs />
        <ServicesHero />
        <ServiceStack />
        <VideoJourney />
        <CtaScene />
      </div>
      <BottomSection footerheading={"What We Do (Our Services)"} />
    </>
  );
}

export default Index;
