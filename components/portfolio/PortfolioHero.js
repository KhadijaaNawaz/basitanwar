import React from 'react';
import AboutHeroSection from '@/components/updated-themes/heroSection/about-herosection';

/**
 * PortfolioHero Component
 * Hero section for the Portfolio page
 * Reuses the existing AboutHeroSection component
 */
const PortfolioHero = () => {
  return (
    <AboutHeroSection
      head_title="Portfolio"
      heading="Our Work"
      imageurl="/updated-images/idea.png"
    />
  );
};

export default PortfolioHero;
