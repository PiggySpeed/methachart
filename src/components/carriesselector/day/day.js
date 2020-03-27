import './index.less';
import React from 'react';

function Day(props) {
  return (
    <div className="carries-day-container">
      <p className="carries-dwi-label">DWI 10</p>
      <button className="carries-day-button">
        <p className="carries-day-label">
          {props.label}
        </p>
      </button>
      <p className="carries-car-label">CAR 10</p>
    </div>
  )
}

export default Day;
