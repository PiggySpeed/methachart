import './index.less';
import React, {useState} from 'react';
import {DAYS_OF_WEEK} from '../../constants/constants';
import Day from './day/day';
import classList from '../../utils/classlist';


function CarriesSelector({hovered, disabled, carries, dose, takehome, onDayClick}) {
  const hover = disabled ? false : hovered;

  return (
    <div
      className={`carries-selector-container ${classList({disabled, hover})}`}>
      <p className={`carries-selector-label ${classList({disabled, hover})}`}>Carries</p>
      {DAYS_OF_WEEK.map(day => {
        const currentDay = carries[day];
        return (
          <Day
            key={currentDay.label}
            disabled={disabled}
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
