import './index.less';
import React from 'react';

function ViewRow({children}) {
  return (
    <div className="methadone-viewrow">
      {children}
    </div>
  )
}

function ChartMethadone() {
  return (
    <div className="methadone-container">
      This is the methadone panel
    </div>
  )
}

export default ChartMethadone;
