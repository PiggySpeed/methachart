import './index.less';
import React from 'react';

function ViewRow({children, style}) {
  return (
    <div className="viewrow-container" style={style ? style : {}}>
      {children}
    </div>
  )
}

export default ViewRow;
