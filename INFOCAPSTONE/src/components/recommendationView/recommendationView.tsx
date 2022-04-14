import React from 'react';
import ReactDOM from 'react-dom';
import RGL, { Responsive, WidthProvider } from 'react-grid-layout';

import './style.css';

const ReactGridLayout = WidthProvider(Responsive);

class MinMaxLayout extends React.PureComponent {
  render() {
    return (
      <ReactGridLayout {...this.props}>
        <div key="1" data-grid={{ x: 0, y: 0, w: 3, h: 3, static: true }}>
          <span>GRID 1</span>
        </div>
        {/* <div key="2" data-grid={{ x: 3, y: 0, w: 3, h: 3, static: true }}>
          <span>GRID 2</span>
        </div>
        <div key="3" data-grid={{ x: 6, y: 0, w: 3, h: 3, static: true }}>
          <span>GRID 3</span>
        </div> */}
      </ReactGridLayout>
    );
  }
}

export default MinMaxLayout;
