import './index.less';
import React, {useState} from 'react';
import {DateInput} from '../index';
import Calendar from "react-calendar";
import useFocus from '../../hooks/useFocus';

function DatePanel() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  function handleDateChange([start, end]) {
    setStartDate(start);
    setEndDate(end);
  }

  function handleInputValidStartDate(start) {
    setStartDate(start);

    // validate date range, then set it if valid; otherwise error
    if (start && endDate && (start <= endDate)) {
      setDateRange([start, endDate]);
    } else {
      setDateRange([new Date(), endDate]);
    }
  }

  function handleInputValidEndDate(end) {
    setEndDate(end);

    // validate date range, then set it if valid; otherwise error
    if (startDate && end && (startDate <= end)) {
      setDateRange([startDate, end]);
    } else {
      setDateRange([startDate, new Date()]);
    }
  }

  return (
    <div
      className="datepanel-container"
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <DateInput
        label="Start"
        value={startDate}
        style={{marginRight: '1rem'}}
        onInputValidDate={handleInputValidStartDate}
      />
      <DateInput
        label="End"
        value={endDate}
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
            value={dateRange}
          />
        </div>
      }
    </div>
  )
}

export default DatePanel;
