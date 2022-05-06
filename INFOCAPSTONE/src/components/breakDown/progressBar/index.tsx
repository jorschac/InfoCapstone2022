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
        style={{ margin: '0 3vw 0', color: 'rgb(89, 88, 87)', fontSize: 'medium', width: '40vw' }}
      >{`${text}: `}</p>
      <Progress
        type="line"
        strokeWidth={size}
        // style = {{margin:"0px"}}
        percent={calculate(value)}
        showInfo={false}
        strokeColor="#755ebf"
      />
      <p style={{ margin: '0 10px 0', fontSize: 'xx-small', fontWeight: 'lighter' }}>{`${value}/5`}</p>
    </div>
  );
};

export default ProgressBar;
