import './index.less';
import React from 'react';
import {DAYS_OF_WEEK} from '../../constants/constants';
import Day from './day/day';


function CarriesSelector({carries, dose, takehome, onDayClick}) {
  return (
    <div className="carries-selector-container">
      <p className="carries-selector-label">Carries</p>
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
