import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from '@/style/portfolio.module.css';

/**
 * MediaViewerModal Component
 * Full-screen carousel-style modal for viewing portfolio images and videos
 *
 * @param {Object} props
 * @param {Array} props.items - Array of media items
 * @param {number} props.currentIndex - Index of currently displayed item
 * @param {Function} props.onClose - Callback when modal is closed
 * @param {string} props.mediaType - Type of media ('images' or 'videos')
 */
const MediaViewerModal = ({ items, currentIndex, onClose, mediaType }) => {
  const [currentIndexInternal, setCurrentIndexInternal] = useState(currentIndex);
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);
  const videoRefs = useRef({});

  // Update internal index when currentIndex prop changes
  useEffect(() => {
    setCurrentIndexInternal(currentIndex);
  }, [currentIndex]);

  // Reset image loaded state when index changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndexInternal]);

  const currentItem = items[currentIndexInternal];
  const hasNext = currentIndexInternal < items.length - 1;
  const hasPrev = currentIndexInternal > 0;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) goToPrevious();
          break;
        case 'ArrowRight':
          if (hasNext) goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [hasNext, hasPrev, currentIndexInternal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const goToNext = useCallback(() => {
    if (hasNext) {
      setCurrentIndexInternal((prev) => prev + 1);
      // Pause current video if playing
      pauseCurrentVideo();
    }
  }, [hasNext]);

  const goToPrevious = useCallback(() => {
    if (hasPrev) {
      setCurrentIndexInternal((prev) => prev - 1);
      // Pause current video if playing
      pauseCurrentVideo();
    }
  }, [hasPrev]);

  const pauseCurrentVideo = () => {
    const currentVideoRef = videoRefs.current[currentIndexInternal];
    if (currentVideoRef && !currentVideoRef.paused) {
      currentVideoRef.pause();
    }
  };

  const setVideoRef = (index, ref) => {
    if (ref) {
      videoRefs.current[index] = ref;
    }
  };

  if (!currentItem) return null;

  return (
    <div
      className={styles.mediaViewerOverlay}
      onClick={handleBackdropClick}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Media viewer - ${currentItem.title || 'Item'} ${currentIndexInternal + 1} of ${items.length}`}
    >
      {/* Close Button */}
      <button
        className={styles.mediaViewerClose}
        onClick={onClose}
        aria-label="Close media viewer"
        type="button"
      >
        ✕
      </button>

      {/* Previous Button */}
      <button
        className={`${styles.mediaViewerNav} ${styles.mediaViewerPrev} ${
          !hasPrev ? styles.mediaViewerNavDisabled : ''
        }`}
        onClick={goToPrevious}
        disabled={!hasPrev}
        aria-label="Previous item"
        type="button"
      >
        ‹
      </button>

      {/* Media Container */}
      <div className={styles.mediaViewerContent}>
        {mediaType === 'images' ? (
          <div className={styles.mediaViewerImageWrapper}>
            <Image
              src={currentItem.media_file_url}
              alt={currentItem.title || `Portfolio image ${currentIndexInternal + 1}`}
              fill
              className={styles.mediaViewerImage}
              onLoad={() => setImageLoaded(true)}
              priority
              sizes="100vw"
            />
            {!imageLoaded && (
              <div className={styles.mediaViewerLoader}>
                <div className={styles.spinner}></div>
              </div>
            )}
            {currentItem.title && (
              <div className={styles.mediaViewerCaption}>
                <h3>{currentItem.title}</h3>
                {currentItem.description && (
                  <p>{currentItem.description}</p>
                )}
                <div className={styles.mediaViewerCounter}>
                  {currentIndexInternal + 1} / {items.length}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.mediaViewerVideoWrapper}>
            <video
              ref={(ref) => setVideoRef(currentIndexInternal, ref)}
              className={styles.mediaViewerVideo}
              controls
              muted
              controlsList="nodownload"
              poster={currentItem.thumbnail_url || ''}
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={currentItem.media_file_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {currentItem.title && (
              <div className={styles.mediaViewerCaption}>
                <h3>{currentItem.title}</h3>
                {currentItem.description && (
                  <p>{currentItem.description}</p>
                )}
                <div className={styles.mediaViewerCounter}>
                  {currentIndexInternal + 1} / {items.length}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Next Button */}
      <button
        className={`${styles.mediaViewerNav} ${styles.mediaViewerNext} ${
          !hasNext ? styles.mediaViewerNavDisabled : ''
        }`}
        onClick={goToNext}
        disabled={!hasNext}
        aria-label="Next item"
        type="button"
      >
        ›
      </button>

      {/* Thumbnail Strip (Desktop Only) */}
      {items.length > 1 && (
        <div className={styles.mediaViewerThumbnails}>
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`${styles.mediaViewerThumbnail} ${
                index === currentIndexInternal ? styles.mediaViewerThumbnailActive : ''
              }`}
              onClick={() => {
                pauseCurrentVideo();
                setCurrentIndexInternal(index);
              }}
              aria-label={`Go to item ${index + 1}`}
              type="button"
            >
              {mediaType === 'images' ? (
                <Image
                  src={item.media_file_url}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                />
              ) : (
                <div
                  className={styles.mediaViewerThumbnailPlaceholder}
                  style={{
                    background: item.thumbnail_url
                      ? `url(${item.thumbnail_url}) center/cover`
                      : 'linear-gradient(135deg, #234982 0%, #678FD5 50%, #0A2540 100%)',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaViewerModal;
