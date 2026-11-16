import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AboutHeroSection from '@/components/updated-themes/heroSection/about-herosection';
import MediaToggle from '@/components/portfolio/MediaToggle';
import MediaGrid from '@/components/portfolio/MediaGrid';
import MediaViewerModal from '@/components/portfolio/MediaViewerModal';
import BottomSection from '@/components/updated-themes/layout/bottomSection';
import portfolioApiService from '@/services/portfolioApi.service';

/**
 * Portfolio Page
 * Main portfolio page with image/video toggle functionality
 */
function PortfolioPage() {
  const router = useRouter();
  // Initialize mediaType from URL query parameter on first render
  const getInitialMediaType = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const typeParam = urlParams.get('type');
      if (typeParam === 'image' || typeParam === 'video') {
        return typeParam === 'image' ? 'images' : 'videos';
      }
    }
    return 'images';
  };

  const [mediaType, setMediaType] = useState(getInitialMediaType);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedTypeRef = useRef(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    // Skip if router not ready or already fetched this type
    if (!router.isReady || fetchedTypeRef.current === mediaType) {
      return;
    }

    const fetchPortfolio = async () => {
      setLoading(true);
      setError(null);
      fetchedTypeRef.current = mediaType;

      try {
        let data;
        if (mediaType === 'images') {
          data = await portfolioApiService.getImages();
        } else {
          data = await portfolioApiService.getVideos();
        }

        // Sort by display order
        const sortedData = portfolioApiService.sortByDisplayOrder(data);
        setItems(sortedData);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError('Failed to load portfolio items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [mediaType, router.isReady]);

  // Handle URL query parameter changes
  useEffect(() => {
    if (router.isReady && router.query.type) {
      const typeParam = router.query.type;
      if (typeParam === 'image' || typeParam === 'video') {
        const newType = typeParam === 'image' ? 'images' : 'videos';
        if (newType !== mediaType) {
          setMediaType(newType);
        }
      }
    }
  }, [router.isReady, router.query.type]);

  const handleToggle = (type) => {
    setMediaType(type);
    // Update URL query parameter without page refresh
    const queryType = type === 'images' ? 'image' : 'video';
    router.replace(
      { pathname: router.pathname, query: { type: queryType } },
      undefined,
      { shallow: true }
    );
    // Close modal when switching types
    setIsModalOpen(false);
  };

  const handleItemClick = (index) => {
    setCurrentItemIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Portfolio - BA Tech L.L.C - Dubai</title>
        <meta
          name="description"
          content="Explore our portfolio of completed projects. Browse through images and videos of our quality work in AC services, painting, carpentry, plumbing, and more."
        />
        <meta
          property="og:title"
          content="Portfolio - BA Tech L.L.C - Dubai"
        />
        <meta
          property="og:description"
          content="View our portfolio of completed home maintenance and technical services projects in Dubai."
        />
      </Head>

      <div className="portfolioPage">
        <AboutHeroSection head_title="Portfolio" heading="Our Work" />

        <section className="portfolioContent">
          <div className="section_wrapper">
            <p style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto 1.75rem", color: "var(--ink-body)" }}>Explore our collection of completed projects showcasing our expertise in home maintenance and technical services across Dubai.</p>

            <MediaToggle activeType={mediaType} onToggle={handleToggle} />

            <MediaGrid
              items={items}
              loading={loading}
              error={error}
              mediaType={mediaType}
              onItemClick={handleItemClick}
            />
          </div>
        </section>

        <BottomSection footerheading="Our Portfolio Projects" />
      </div>

      {/* Media Viewer Modal - Only for images, videos use native fullscreen */}
      {isModalOpen && items.length > 0 && mediaType === 'images' && (
        <MediaViewerModal
          items={items}
          currentIndex={currentItemIndex}
          onClose={handleCloseModal}
          mediaType={mediaType}
        />
      )}
    </>
  );
}

// Disable SSR for this component
export default PortfolioPage;
