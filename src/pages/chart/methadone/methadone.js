import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';


function ViewRow({children, style}) {
  return (
    <div className="methadone-viewrow" style={style ? style : {}}>
      {children}
    </div>
  )
}

function ChartMethadone() {
  return (
    <div className="methadone-container">
      <ViewRow style={{ minHeight: '6rem' }}>
        <FloatingLabelInput placeholder="Name" />
        <FloatingLabelInput placeholder="Rx#" />
      </ViewRow>
      <ViewRow>
        panel 2
      </ViewRow>
      <ViewRow>
        panel 3
      </ViewRow>
      <ViewRow>
        panel 4
      </ViewRow>
    </div>
  )
}

export default ChartMethadone;
