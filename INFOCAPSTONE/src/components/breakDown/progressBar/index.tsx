import React from 'react';
import { Progress } from 'antd';
import styles from '../index.css';

const ProgressBar = (props: any) => {
  const { value, size = 10, text = 'test' } = props;

  function calculate(rate: number): number {
    return Math.floor((rate / 5) * 100);
  }

  return (
    <div className={styles.barContainer}>
      <p
        style={{ margin: '0 1vw 0', fontSize: 'medium', width: '30vw' }}
      >{`${text}: `}</p>
      <Progress
        type="line"
        strokeWidth={size}
        percent={calculate(value)}
        showInfo={false}
        strokeColor="#755ebf"
      />
      <p style={{ margin: '0 1vw 0', fontSize: 'xx-small', fontWeight: 'lighter' }}>{`${value}/5`}</p>
    </div>
  );
};

export default ProgressBar;
