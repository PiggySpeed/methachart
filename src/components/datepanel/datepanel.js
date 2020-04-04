import './index.less';
import React from 'react';
import {DateInput} from '../index';
import Calendar from "react-calendar";
import useFocus from '../../hooks/useFocus';

function DatePanel({disabled, startdate, enddate, daterange, onSetStartDate, onSetEndDate, onSetDateRange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);

  function handleDateChange([start, end]) {
    onSetStartDate(start);
    onSetEndDate(end);
  }

  function handleInputValidStartDate(start) {
    onSetStartDate(start);

    // validate date range, then set it if valid; otherwise error
    if (start && enddate && (start <= enddate)) {
      onSetDateRange([start, enddate]);
    } else {
      onSetDateRange([new Date(), enddate]);
    }
  }

  function handleInputValidEndDate(end) {
    onSetEndDate(end);

    // validate date range, then set it if valid; otherwise error
    if (startdate && end && (startdate <= end)) {
      onSetDateRange([startdate, end]);
    } else {
      onSetDateRange([startdate, new Date()]);
    }
  }

  return (
    <div
      className={`datepanel-container ${disabled ? 'disabled' : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <DateInput
        disabled={disabled}
        label="Start"
        value={startdate}
        style={{marginRight: '1rem'}}
        onInputValidDate={handleInputValidStartDate}
      />
      <DateInput
        disabled={disabled}
        label="End"
        value={enddate}
        onInputValidDate={handleInputValidEndDate}
      />
      {focus &&
        <div tabIndex="-1"  className="dateinput-calendar-container">
          <Calendar
            selectRange
            showNeighboringMonth
            showFixedNumberOfWeeks
            calendarType="US"
            returnValue="range"
            onChange={handleDateChange}
            value={daterange}
          />
        </div>
      }
    </div>
  )
}

export default DatePanel;
