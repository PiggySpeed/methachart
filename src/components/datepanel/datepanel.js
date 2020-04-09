import './index.less';
import React from 'react';
import moment from 'moment';
import Calendar from "react-calendar";
import { DateInput } from '../';
import useFocus from '../../hooks/useFocus';

function convertToCalendarDateRange(daterange) {
  const start = daterange[0] ? daterange[0].toDate() : null;
  const end = daterange[1] ? daterange[1].toDate() : null;
  return [start, end];
}

function DatePanel({disabled, startdate, enddate, daterange, onSetStartDate, onSetEndDate, onSetDateRange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);

  function handleCalendarDateChange([start, end]) {
    // calendar widget returns Date() objects; convert to moment
    onSetStartDate(moment(start));
    onSetEndDate(moment(end));
  }

  function handleInputValidStartDate(start) {
    onSetStartDate(start);

    // validate date range, then set it if valid; otherwise error
    if (start && enddate && (start <= enddate)) {
      onSetDateRange([start, enddate]);
    } else {
      onSetDateRange([moment(), enddate]);
    }
  }

  function handleInputValidEndDate(end) {
    onSetEndDate(end);

    // validate date range, then set it if valid; otherwise error
    if (startdate && end && (startdate <= end)) {
      onSetDateRange([startdate, end]);
    } else {
      onSetDateRange([startdate, moment()]);
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
        <div tabIndex="-1" className="dateinput-calendar-container">
          <Calendar
            selectRange
            showNeighboringMonth
            showFixedNumberOfWeeks
            calendarType="US"
            returnValue="range"
            onChange={handleCalendarDateChange}
            value={convertToCalendarDateRange(daterange)}
          />
        </div>
      }
    </div>
  )
}

export default DatePanel;
