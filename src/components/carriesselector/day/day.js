import './index.less';
import React from 'react';

function Day({label, day, dose, takehome, isCarry, onClick}) {

  function handleDayClick() {
    onClick(day, !isCarry);
  }

  return (
    <div className="carries-day-container">
      {!isCarry && <p className="carries-dwi-label">DWI {dose}</p>}
      {isCarry && <p className="carries-car-label">CAR {dose}</p>}
      <button
        className={`carries-day-button ${isCarry ? 'carry' : ''}`}
        onClick={handleDayClick}>
        <p className={`carries-day-label ${isCarry ? 'carry' : ''}`}>
          {label}
        </p>
      </button>
    </div>
  )
}

export default Day;
