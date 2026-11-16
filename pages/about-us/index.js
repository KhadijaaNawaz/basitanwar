import React from "react";
import AboutHero from "@/components/about/AboutHero";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import ToolDefs from "@/components/home/ToolDefs";
import AboutStory from "@/components/about/AboutStory";
import MissionScene from "@/components/about/MissionScene";
import TeamScene from "@/components/about/TeamScene";
import TradesIndex from "@/components/about/TradesIndex";
import ValuesRibbon from "@/components/about/ValuesRibbon";
import AboutClose from "@/components/about/AboutClose";
import home from "@/style/home.module.css";

/**
 * About Us: same design language as the home page, its own scenes.
 * story (sticky portrait video, counting figures) → trades index → mission (aperture video) → what we stand for (ribbon) → team → close.
 */
function Index() {
  return (
    <>
      <AboutHero />
      <div className={home.home}>
        <ToolDefs />
        <AboutStory />
        <TradesIndex />
        <MissionScene />
        <ValuesRibbon />
        <TeamScene />
        <AboutClose />
      </div>
      <BottomSection footerheading={"Know More About Us and Our Work"} />
    </>
  );
}

export default Index;
