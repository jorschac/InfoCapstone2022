import React from 'react';
import styles from './index.css';
import SearchBar from '../components/searchBar';
import MinMaxLayout from '../components/recommendationView/recommendationView';

/**
 * 主页面page
 * @param props
 */
function homePage(props: any) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.logo}>
        <img
          src={require('../assets/logo.jpeg')}
          alt="logo icon"
          width="42px"
          height="42px"
        />
        <p style={{ margin: 0, color: '#1890FF', fontSize: '32pt' }}>
          Course Expert
        </p>
      </div>
      <div className={styles.barWrapper}>
        <SearchBar width="100%" />
      </div>
      <div className={styles.recommendationView}>
        <MinMaxLayout />
      </div>
    </div>
  );
}

export default homePage;
