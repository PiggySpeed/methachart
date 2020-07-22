import './index.less';
import React from 'react';
import classList from '../../../utils/classlist';

function Day({disabled, label, day, dose, takehome, isCarry, onClick}) {

  function handleDayClick() {
    onClick(day, !isCarry);
  }

  return (
    <div className="carries-day-container">
      <button
        tabIndex={-1}
        className={`carries-day-button ${classList({carry: isCarry, disabled})}`}
        onClick={handleDayClick}>
        <p className={`carries-day-label ${classList({carry: isCarry, disabled})}`}>
          {label}
        </p>
      </button>
      <p className={`carries-label ${classList({carry: isCarry, disabled})}`}>{isCarry ? 'CAR' : 'DWI'} {dose}</p>
      {takehome && <p className={`carries-th-label ${classList({carry: isCarry, disabled})}`}>TH {takehome}</p>}
    </div>
  )
}

export default Day;
