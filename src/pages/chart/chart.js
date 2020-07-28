import './index.less';
import React from 'react';
import { ChartFooter } from '../../connected';
import {isExpired} from '../../constants/constants';


function Chart({children}) {
  function handleKeyDown(e) {
    if (isExpired()) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  return (
    <div className="chart-container"
      onKeyDown={handleKeyDown}>
      <div className="chart-inner-container">
        {children}
      </div>
      {isExpired() && <div className="trial-expired"></div>}
      <ChartFooter/>
    </div>
  )
}

export default Chart;
