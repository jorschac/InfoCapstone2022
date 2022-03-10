import React from 'react';
import styles from '../index.css';
import { Row, Col } from 'antd';

/**
 * rating部分左侧那三个气泡
 * @param props 
 */
const ThreeBubbles = (props: any) => {
  const { renderData } = props;
  let content = renderData.map((val: any) => {
    return (
      <Row
        gutter={[16, { xs: 16, sm: 24, md: 32, lg: 56 }]}
        align="middle"
        justify="center"
      >
        <Col>
          <div className={styles.ratingItem}>
            <p style={{ textAlign: 'center', fontSize: 'x-small', color: '#3A0085' }}>{val[0]}</p>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'large',
                transform: 'translateY(-25%)',
                color: '#3A0085'
              }}
            >
              {val[1]}
            </p>
          </div>
        </Col>
      </Row>
    );
  });
  return <div style={{}}>{content}</div>;
};

export default ThreeBubbles;
