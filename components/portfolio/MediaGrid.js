import RecentWork from '@/components/common/RecentWork';
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
      // the portfolio wrapper has no side padding of its own, so inset it to the site container
      <div style={{ paddingInline: 'max(1.5rem, calc((100vw - var(--container)) / 2 + 1.5rem))' }}>
        <RecentWork
          title="Our portfolio is being updated"
          text="The full portfolio is not available right now. In the meantime, here is some of our recent work."
        />
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
