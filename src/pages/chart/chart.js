import './index.less';
import React, {useState} from 'react';
import { ChartFooter } from '../../components';

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
