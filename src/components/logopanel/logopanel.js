import './index.less';
import React from 'react';
import MethaChartLogo from '../../assets/methachart_logo.png';

function LogoPanel() {
  return (
    <div className="logopanel-container">
      <img src={MethaChartLogo} width={30} alt="logo" />
    </div>
  )
}

export default LogoPanel;
