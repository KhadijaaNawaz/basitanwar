import React from "react";
import ToolDefs from "@/components/home/ToolDefs";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceStack from "@/components/services/ServiceStack";
import VideoJourney from "@/components/services/VideoJourney";
import ServicesClose from "@/components/services/ServicesClose";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import { PhotoMarquee, CraftSteps } from "@/components/services/Showcase";
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
        <PhotoMarquee eyebrow="Our work" title="Real jobs, real finish" />
        <ServicesClose />
      </div>
      <BottomSection footerheading={"What We Do (Our Services)"} />
    </>
  );
}

export default Index;
