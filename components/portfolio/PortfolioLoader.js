import React from 'react';
import styles from '@/style/portfolio.module.css';

/**
 * PortfolioLoader Component
 * Loading state indicator for portfolio data fetching
 */
const PortfolioLoader = () => {
  return (
    <div className={styles.portfolioLoader}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading portfolio...</p>
    </div>
  );
};

export default PortfolioLoader;
