import './index.less';
import React from 'react';

function Day({label, day, dose, takehome, isCarry, onClick}) {

  function handleDayClick() {
    onClick(day, !isCarry);
  }

  return (
    <div className="carries-day-container">
      <button
        className={`carries-day-button ${isCarry ? 'carry' : ''}`}
        onClick={handleDayClick}>
        <p className={`carries-day-label ${isCarry ? 'carry' : ''}`}>
          {label}
        </p>
      </button>
      <p className={`carries-label ${isCarry ? 'carry' : ''}`}>{isCarry ? 'CAR' : 'DWI'} {dose}</p>
      {takehome && <p className={`carries-th-label ${isCarry ? 'carry' : ''}`}>TH {takehome}</p>}
    </div>
  )
}

export default Day;
