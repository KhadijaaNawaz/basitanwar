import React from "react";
import LatestGallery from "@/components/gallery/LatestGallery";
import { PhotoWall, WORK } from "@/components/services/ServiceWork";
import { PhotoMarquee, CraftSteps } from "@/components/services/Showcase";
import BeforeAfter, { PAIRS } from "@/components/services/BeforeAfter";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

// a mix from every trade
const MIX = [
  WORK["painting-services"][0], WORK["ac-services"][0], WORK["electrician-services"][0], WORK["plumbing-services"][0],
  WORK["carpentry-services"][0], WORK["false-ceiling-services"][1], WORK["floor-wall-tiling"][1], WORK["building-cleaning-services"][3],
  WORK["renovation-services"][1], WORK["home-appliance-services"][0], WORK["ac-services"][2], WORK["painting-services"][4],
];

export default function index() {
  return (
    <>
      <AboutHeroSection  head_title={"Projects"} heading={"Recent Work"} imageurl={"/updated-images/idea.png"}/>
      <LatestGallery />
      <BeforeAfter title="Before & after: more jobs" pairs={PAIRS.filter((p) => ["Door painting", "Bedroom", "Bathroom", "Garage floor"].includes(p.title))} />
      <PhotoWall items={MIX} eyebrow="On site" title="Our crews, at work" note="Painting, cooling, wiring, plumbing, joinery, ceilings, tiles and cleaning across Dubai." />
      <PhotoMarquee eyebrow="More of our work" title="From first coat to final clean" />
      <BottomSection footerheading={'Our Recently Done Projects'}/>
    </>
  );
}
