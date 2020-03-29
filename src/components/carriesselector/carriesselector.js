import './index.less';
import React, {useState} from 'react';
import {DAYS_OF_WEEK} from '../../constants/constants';
import Day from './day/day';


function CarriesSelector({carries, dose, takehome, onDayClick}) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true)
  }

  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <div
      className="carries-selector-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p className={`carries-selector-label ${hover ? 'hover' : ''}`}>Carries</p>
      {DAYS_OF_WEEK.map(day => {
        const currentDay = carries[day];
        return (
          <Day
            key={currentDay.label}
            day={day}
            dose={dose}
            takehome={takehome}
            label={currentDay.label}
            isCarry={currentDay.isCarry}
            onClick={onDayClick} />
        )}
      )}
    </div>
  )
}

export default CarriesSelector;
