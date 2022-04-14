import React from 'react';
import ReactDOM from 'react-dom';
import RGL, { Responsive, WidthProvider } from 'react-grid-layout';
import { Row, Col } from 'antd';

import './style.css';

const ReactGridLayout = WidthProvider(Responsive);

class MinMaxLayout extends React.PureComponent {
  render() {
    return (
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
    );
  }
}

export default MinMaxLayout;
