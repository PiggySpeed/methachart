import './index.less';
import React, {useState} from 'react';
import MethaChartLogo from '../../assets/methachart_logo.png';
import {navigate} from '../../utils/history';

function LogoPanel({onMouseOver, onMouseLeave}) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);

    if (onMouseOver) {
      onMouseOver();
    }
  }

  function handleMouseLeave() {
    setHover(false);

    if (onMouseLeave) {
      onMouseLeave();
    }
  }

  return (
    <div
      className="logopanel-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate('/chart/methadone')}>
      <img
        src={MethaChartLogo}
        width={30}
        alt="logo" />
    </div>
  )
}

export default LogoPanel;
