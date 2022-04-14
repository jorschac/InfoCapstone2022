import React from 'react';
import styles from '../index.css';
import { Row, Col, Popover } from 'antd';

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
            <p
              style={{
                textAlign: 'center',
                fontSize: 'x-small',
                color: '#3A0085',
                marginRight: '0',
              }}
            >
              {val[0]}
              {val[0] == 'Overall Rating' ? (
                <Popover
                  content={
                    <p>
                      Overall rating: average rating from quarterly course
                      evaluations. See all breakdown ratings below
                    </p>
                  }
                >
                  <img
                    src={require('@/assets/information-sign.png')}
                    style={{ marginLeft: '3px' }}
                    alt="logo icon"
                    width="10px"
                    height="10px"
                  />
                </Popover>
              ) : (
                <a></a>
              )}
            </p>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'large',
                transform: 'translateY(-25%)',
                color: '#3A0085',
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
