import './index.less';
import React, {useState} from 'react';
import moment from 'moment';
import Calendar from "react-calendar";
import { DateInput } from '../';

function convertToCalendarDateRange(daterange) {
  const start = daterange[0] ? daterange[0].toDate() : null;
  const end = daterange[1] ? daterange[1].toDate() : null;
  return [start, end];
}

function DatePanel({disabled, daterange, onSetDateRange}) {
  const [timerID, setTimerID] = useState(0);
  const [calendarFocus, setCalendarFocus] = useState(false);
  const [startDateError, setStartDateError] = useState(null);
  const [endDateError, setEndDateError] = useState(null);
  const startDate = daterange[0];
  const endDate = daterange[1];

  function handleCalendarDateChange([start, end]) {
    // calendar widget returns Date() objects; convert to moment
    console.log('handleCalendarDateChange');
    onSetDateRange([moment(start), moment(end)]);
    setCalendarFocus(false);
  }

  function handleInputStartDate(start) {
    if (!start.isValid()) {
      onSetDateRange([null, endDate]);
      return;
    }

    if (start.isAfter(endDate)) {
      onSetDateRange([null, endDate]);
      return;
    }

    setStartDateError(null);
    onSetDateRange([start, endDate]);
  }

  function handleValidateStartDate(start) {
    if (!start.isValid()) {
      setStartDateError('Invalid start date');
      return;
    }

    if (start.isAfter(endDate)) {
      setStartDateError('Start should come before end');
      return;
    }

    setStartDateError(null);
  }

  function handleInputEndDate(end) {
    if (!end.isValid()) {
      onSetDateRange([startDate, null]);
      return;
    }

    if (startDate.isAfter(end)) {
      onSetDateRange([startDate, null]);
      return;
    }

    setEndDateError(null);
    onSetDateRange([startDate, end]);
  }

  function handleValidateEndDate(end) {
    if (!end.isValid()) {
      setEndDateError('Invalid end date');
      return;
    }

    if (startDate.isAfter(end)) {
      setEndDateError('Start should come before end');
      return;
    }

    setEndDateError(null);
  }

  function handleFocusDatePanel(e) {
    console.log('handleFocusDatePanel');
    console.log(e.target);
    if (timerID) {
      // intercept blur event when focusing on
      // next date input element
      clearTimeout(timerID);
      setTimerID(0);
    }

    if (!calendarFocus) {
      setCalendarFocus(true);
    }
  }

  function handleBlurDatePanel() {
    const timerID = setTimeout(() => {
      setCalendarFocus(false);
    }, 0);
    setTimerID(timerID);
  }

  function handleClickCalendar() {
    if (timerID) {
      // cancel blur event when
      // clicking on the calendar
      clearTimeout(timerID);
      setTimerID(0);
    }
  }

  function handleFocusCalendar(e) {
    // let the datepanel blur event happen
    // when you focus the calendar through tabs
    e.stopPropagation();
  }

  return (
    <div
      className={`datepanel-container ${disabled ? 'disabled' : ''}`}
      onFocus={handleFocusDatePanel}
      onBlur={handleBlurDatePanel}>
      <DateInput
        disabled={disabled}
        error={!!startDateError}
        label="Start"
        defaultValue={startDate}
        style={{marginRight: '1rem'}}
        onInputDate={handleInputStartDate}
        onValidate={handleValidateStartDate} />
      <DateInput
        disabled={disabled}
        error={!!endDateError}
        label="End"
        defaultValue={endDate}
        onInputDate={handleInputEndDate}
        onValidate={handleValidateEndDate} />
      {calendarFocus &&
        <div
          tabIndex="-1"
          className="dateinput-calendar-container"
          onClick={handleClickCalendar}
          onFocus={handleFocusCalendar}>
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
