import React from 'react';
import styles from '@/style/portfolio.module.css';

/**
 * MediaToggle Component
 * Toggle buttons for switching between Images and Videos
 *
 * @param {Object} props
 * @param {string} props.activeType - Currently active media type ('images' or 'videos')
 * @param {Function} props.onToggle - Callback function when toggle is clicked
 */
const MediaToggle = ({ activeType, onToggle }) => {
  const handleToggle = (type) => {
    if (type !== activeType) {
      onToggle(type);
    }
  };

  return (
    <div className={styles.toggleButtons}>
      <button
        className={`${styles.toggleButton} ${activeType === 'images' ? styles.active : ''}`}
        onClick={() => handleToggle('images')}
        aria-label="Show images"
        aria-pressed={activeType === 'images'}
        type="button"
      >
        {/* <span className={styles.buttonIcon}>🖼️</span> */}
        Images
      </button>
      <button
        className={`${styles.toggleButton} ${activeType === 'videos' ? styles.active : ''}`}
        onClick={() => handleToggle('videos')}
        aria-label="Show videos"
        aria-pressed={activeType === 'videos'}
        type="button"
      >
        {/* <span className={styles.buttonIcon}>🎥</span> */}
        Videos
      </button>
    </div>
  );
};

export default MediaToggle;
