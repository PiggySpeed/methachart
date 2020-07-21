import './index.less';
import React, {useState} from 'react';
import moment from 'moment';
import Calendar from "react-calendar";
import { DateInput } from '../';

const DATE_ERROR = {
  INVALID_START_DATE: -100,
  INVALID_END_DATE: -101,
  START_COMES_AFTER_END: -102
};

function convertToCalendarDateRange(daterange) {
  const start = daterange[0] ? daterange[0].toDate() : null;
  const end = daterange[1] ? daterange[1].toDate() : null;
  return [start, end];
}

function checkDateRange(start, end) {
  if (!start || !start.isValid()) {
    return DATE_ERROR.INVALID_START_DATE;
  }

  if (!end || !end.isValid()) {
    return DATE_ERROR.INVALID_END_DATE;
  }

  if (start.isAfter(end)) {
    return DATE_ERROR.START_COMES_AFTER_END;
  }

  return 1;
}

function DatePanel({disabled, daterange, onSetDateRange, timeinterval}) {
  const [timerID, setTimerID] = useState(0);
  const [calendarFocus, setCalendarFocus] = useState(false);
  const [startDateError, setStartDateError] = useState(null);
  const [endDateError, setEndDateError] = useState(null);
  const startDate = daterange[0];
  const endDate = daterange[1];

  function handleCalendarDateChange([start, end]) {
    // calendar widget returns Date() objects; convert to moment
    onSetDateRange([moment(start), moment(end)]);
    setCalendarFocus(false);
  }

  function handleInputStartDate(start) {
    // do not change redux date store unless dates are valid
    if (!start.isValid()) {
      // onSetDateRange([null, endDate]);
      return;
    }

    if (start.isAfter(endDate)) {
      // onSetDateRange([null, endDate]);
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

    if (endDate && start.isAfter(endDate)) {
      setStartDateError('Start should come before end');
      return;
    }

    setStartDateError(null);
  }

  function handleInputEndDate(end) {
    // do not change redux date store unless dates are valid
    if (!end.isValid()) {
      // onSetDateRange([startDate, null]);
      return;
    }

    if (startDate && startDate.isAfter(end)) {
      // onSetDateRange([startDate, null]);
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

    if (startDate && startDate.isAfter(end)) {
      setEndDateError('Start should come before end');
      return;
    }

    setEndDateError(null);
  }

  function handleFocusDatePanel() {
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
    }, 500); // small delay required
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
      <div className="datepanel-container-notes">
        {(startDate && endDate) && <p>{startDate.format('MMM DD, YYYY')} to {endDate.format('MMM DD, YYYY')}</p>}
        {timeinterval && <p>{timeinterval} days</p>}
      </div>
    </div>
  )
}

export default DatePanel;
