import './index.less';
import React from 'react';
import {ChartFooter} from '../../components';

function Chart({children, location}) {
  console.log('location is ', location);
  return (
    <div className="chart-container">
      <div className="chart-inner-container">
        {children}
      </div>
      <ChartFooter/>
    </div>
  )
}

export default Chart;
