import './index.less';
import React, {useState} from 'react';
import MethaChartLogo from '../../assets/methachart_logo.png';
import {navigate} from '../../utils/history';
import {FORMTYPE_MAR, isMAR} from '../../constants/constants';

function LogoPanel({onMouseOver, onMouseLeave, onLogoClick}) {
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
      onClick={onLogoClick}>
      <img
        src={MethaChartLogo}
        width={30}
        alt="logo" />
    </div>
  )
}

export default LogoPanel;
