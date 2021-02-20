import './index.less';
import React from 'react';
import { ChartFooter } from '../../connected';

function Chart({children}) {
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
