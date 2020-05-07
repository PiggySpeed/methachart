import './index.less';
import React, {useState} from 'react';
import MethaChartLogo from '../../assets/methachart_logo.png';
import {navigate} from '../../utils/history';
import {isMAR} from '../../constants/constants';

function LogoPanel({onMouseOver, onMouseLeave, selectedDrug}) {
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

  function handleLogoClick() {
    console.log('selected', selectedDrug);
    if (isMAR(selectedDrug)) {
      navigate('/chart/mar');
    } else {
      navigate('/chart/oat');
    }
  }

  return (
    <div
      className="logopanel-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleLogoClick}>
      <img
        src={MethaChartLogo}
        width={30}
        alt="logo" />
    </div>
  )
}

export default LogoPanel;
