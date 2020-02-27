// order of imports matters
import './index.less';
import React, {useState} from 'react';
import moment from 'moment';
import {DateInput} from '../index';

function DatePanel() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(7, 'd'));
  const [focusedInput, setFocusedInput] = useState(null);

  function handleDateChange(start, end) {
    console.log('onDateChange ', start, end);
    setStartDate(start);
    setEndDate(end);
  }

  function handleFocusChange(focusedInput) {
    console.log('onFocusChange ', focusedInput);
    setFocusedInput(focusedInput);
  }

  return (
    <div className="datepanel-container">
      <DateInput label="Start" style={{marginRight: '1rem'}}/>
      <DateInput label="End" />
    </div>
  )
}

export default DatePanel;
