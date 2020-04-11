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

function DatePanel({disabled, daterange, onSetDateRange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const startDate = daterange[0];
  const endDate = daterange[1];
  // TODO: clear error upon change?

  function handleCalendarDateChange([start, end]) {
    // calendar widget returns Date() objects; convert to moment
    onSetDateRange([moment(start), moment(end)]);
  }

  function handleInputStartDate(start) {
    if (!start.isValid()) {
      onSetDateRange([null, endDate]);
      return; // TODO: error state
    }

    if (start.isAfter(endDate)) {
      onSetDateRange([null, endDate]);
      return; // TODO: error state
    }

    onSetDateRange([start, endDate]);
  }

  function handleInputEndDate(end) {
    if (!end.isValid()) {
      onSetDateRange([startDate, null]);
      return; // TODO: error state
    }

    if (startDate.isAfter(end)) {
      onSetDateRange([startDate, null]);
      return; // TODO: error state
    }

    onSetDateRange([startDate, end]);
  }

  return (
    <div
      className={`datepanel-container ${disabled ? 'disabled' : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <DateInput
        disabled={disabled}
        label="Start"
        value={startDate}
        style={{marginRight: '1rem'}}
        onInputDate={handleInputStartDate}
      />
      <DateInput
        disabled={disabled}
        label="End"
        value={endDate}
        onInputDate={handleInputEndDate}
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
