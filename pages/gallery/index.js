import React from "react";
import LatestGallery from "@/components/gallery/LatestGallery";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import BottomSection from "@/components/updated-themes/layout/bottomSection";


export default function index() {
  return (
    <>
      <AboutHeroSection  head_title={"Projects"} heading={"Recent Work"} imageurl={"/updated-images/idea.png"}/>
      <LatestGallery />
      <BottomSection footerheading={'Our Recently Done Projects'}/>
    </>
  );
}
