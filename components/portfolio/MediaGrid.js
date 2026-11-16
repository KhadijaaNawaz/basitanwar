import React from 'react';
import MediaCard from './MediaCard';
import PortfolioLoader from './PortfolioLoader';
import styles from '@/style/portfolio.module.css';

/**
 * MediaGrid Component
 * Grid layout for portfolio media items
 *
 * @param {Object} props
 * @param {Array} props.items - Portfolio items array
 * @param {boolean} props.loading - Loading state
 * @param {string|null} props.error - Error message
 * @param {string} props.mediaType - Type of media ('images' or 'videos')
 * @param {Function} props.onItemClick - Callback when item is clicked
 */
const MediaGrid = ({ items, loading, error, mediaType, onItemClick }) => {
  // Loading state
  if (loading) {
    return <PortfolioLoader />;
  }

  // Error state
  if (error) {
    return (
      <div className={styles.errorState}>
        <div className={styles.errorIcon}>⚠️</div>
        <h3>Our portfolio is being updated</h3>
        <p>We could not load the portfolio just now.</p>
        <p className={styles.errorHint}>Please check back soon, or see our <a href="/gallery" style={{ textDecoration: "underline" }}>recent projects</a>.</p>
      </div>
    );
  }

  // Empty state
  if (!items || items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          {mediaType === 'images' ? '🖼️' : '🎥'}
        </div>
        <h3>No {mediaType === 'images' ? 'Images' : 'Videos'} Available</h3>
        <p>
          {mediaType === 'images'
            ? 'We haven\'t uploaded any project images yet.'
            : 'We haven\'t uploaded any project videos yet.'}
        </p>
        <p className={styles.emptyHint}>Check back soon for new projects!</p>
      </div>
    );
  }

  // Render grid
  return (
    <div className={styles.mediaGrid}>
      {items.map((item, index) => (
        <MediaCard
          key={item.id}
          item={item}
          mediaType={mediaType === 'images' ? 'image' : 'video'}
          onClick={() => onItemClick && onItemClick(index)}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
