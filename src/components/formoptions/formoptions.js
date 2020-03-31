import './index.less';
import React from 'react';
import {IconChartMain, IconChartTemp} from '..';


function IconButtonMain() {
  return (
    <button className="formoptions-icon-button-container">
      <IconChartMain fill="#c3c3c3"/>
    </button>
  )
}

function IconButtonTemp() {
  return (
    <button className="formoptions-icon-button-container">
      <IconChartTemp fill="#c3c3c3"/>
    </button>
  )
}


function FormOptions() {
  return(
    <div className="formoptions-container">
      <IconButtonMain />
      <IconButtonTemp />
    </div>
  )
}

export default FormOptions;
