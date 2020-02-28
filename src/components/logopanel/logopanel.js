import './index.less';
import React from 'react';
import MethaChartLogo from '../../assets/methachart_logo.png';
import {navigate} from '../../utils/history';

function LogoPanel() {
  return (
    <div
      className="logopanel-container"
      onClick={() => navigate('/chart/methadone')}>
      <img
        src={MethaChartLogo}
        width={30}
        alt="logo" />
    </div>
  )
}

export default LogoPanel;
