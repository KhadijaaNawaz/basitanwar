import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '@/style/portfolio.module.css';

/**
 * MediaCard Component
 * Individual portfolio item card with hover overlay animation
 *
 * @param {Object} props
 * @param {Object} props.item - Portfolio item data
 * @param {string} props.mediaType - Type of media ('image' or 'video')
 * @param {Function} props.onClick - Optional click handler for opening modal
 */
const MediaCard = ({ item, mediaType, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
    }
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleVideoEnded = () => setIsPlaying(false);

  // Get poster URL - use thumbnail if provided, otherwise fall back to CSS gradient
  const getPosterUrl = () => {
    return item.thumbnail_url || '';
  };

  const handleCardClick = () => {
    // Only open modal for images, not videos
    // Videos use native browser fullscreen functionality
    if (onClick && mediaType === 'image') {
      onClick();
    }
  };

  return (
    <div
      className={`${styles.mediaCard} ${mediaType === 'video' ? styles.mediaCardVideo : ''}`}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.title || 'portfolio item'}`}
      onKeyDown={handleKeyDown}
    >
      {!isLoaded && (
        <div className={styles.cardSkeleton}>
          <div className={styles.skeletonAnimation}></div>
        </div>
      )}

      {mediaType === 'image' ? (
        hasError ? (
          <div className={styles.errorPlaceholder}>
            <span>Image not available</span>
          </div>
        ) : (
          <Image
            src={item.media_file_url}
            alt={item.title || 'Portfolio image'}
            width={400}
            height={300}
            className={styles.mediaImage}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )
      ) : (
        <div className={styles.videoContainer}>
          {hasError ? (
            <div className={styles.errorPlaceholder}>
              <span>Video not available</span>
            </div>
          ) : (
            <>
              <div
                className={styles.videoThumbnail}
                style={
                  !getPosterUrl()
                    ? {
                        background:
                          'linear-gradient(135deg, #234982 0%, #678FD5 50%, #0A2540 100%)',
                      }
                    : undefined
                }
              >
                <video
                  ref={videoRef}
                  className={styles.mediaVideo}
                  preload="metadata"
                  poster={getPosterUrl()}
                  muted
                  controls
                  controlsList="nodownload"
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onEnded={handleVideoEnded}
                  onLoadStart={handleImageLoad}
                  onError={handleImageError}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src={item.media_file_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                  <button
                    className={styles.playButton}
                    onClick={handlePlayClick}
                    aria-label="Play video"
                    type="button"
                  >
                    ▶
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* Title Overlay */}
      {item.title && (
        <div className={styles.mediaOverlay} aria-hidden="true">
          <h3 className={styles.mediaTitle}>{item.title}</h3>
          {item.description && (
            <p className={styles.mediaDescription}>{item.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaCard;