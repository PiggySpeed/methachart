import './index.less';
import React, {useState} from 'react';
import classList from '../../../utils/classlist';

function Day({disabled, label, day, dose, takehome, isCarry, onClick}) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  function handleDayClick() {
    onClick(day, !isCarry);
  }

  return (
    <div className="carries-day-container">
      <button
        tabIndex={-1}
        className={`carries-day-button ${classList({carry: isCarry, disabled})}`}
        onClick={handleDayClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <p className={`carries-day-label ${classList({carry: isCarry, disabled, hover})}`}>
          {label}
        </p>
      </button>
      {/*<p className={`carries-label ${classList({carry: isCarry, disabled})}`}>{isCarry ? 'CAR' : 'DWI'} {dose}</p>*/}
      {/*{takehome && <p className={`carries-th-label ${classList({carry: isCarry, disabled})}`}>TH {takehome}</p>}*/}
    </div>
  )
}

export default Day;
