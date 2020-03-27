import './index.less';
import React from 'react';
import {DAYS_OF_WEEK} from '../../constants/constants';
import Day from './day/day';


function CarriesSelector(props) {
  return (
    <div className="carries-selector-container">
      <p className="carries-selector-label">Carries</p>
      {DAYS_OF_WEEK.map(day => {
        const currentDay = props.carries[day];
        return (
          <Day
            key={currentDay.label}
            label={currentDay.label} />
        )}
      )}
    </div>
  )
}

export default CarriesSelector;
