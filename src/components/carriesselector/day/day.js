import './index.less';
import React from 'react';

function Day({disabled, label, day, dose, takehome, isCarry, onClick}) {

  function handleDayClick() {
    onClick(day, !isCarry);
  }

  return (
    <div className="carries-day-container">
      <button
        className={`carries-day-button ${isCarry ? 'carry' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={handleDayClick}>
        <p className={`carries-day-label ${isCarry ? 'carry' : ''}  ${disabled ? 'disabled' : ''}`}>
          {label}
        </p>
      </button>
      <p className={`carries-label ${isCarry ? 'carry' : ''} ${disabled ? 'disabled' : ''}`}>{isCarry ? 'CAR' : 'DWI'} {dose}</p>
      {takehome && <p className={`carries-th-label ${isCarry ? 'carry' : ''} ${disabled ? 'disabled' : ''}`}>TH {takehome}</p>}
    </div>
  )
}

export default Day;
