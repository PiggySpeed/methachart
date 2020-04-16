import './index.less';
import React, {useState} from 'react';
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
  const {
    focus: focusCalendar,
    handleFocus: handleFocusCalendar,
    handleBlur: handleBlurCalendar
  } = useFocus(false);
  const [startDateError, setStartDateError] = useState(null);
  const [endDateError, setEndDateError] = useState(null);
  const startDate = daterange[0];
  const endDate = daterange[1];

  function handleCalendarDateChange([start, end]) {
    // calendar widget returns Date() objects; convert to moment
    console.log('handleCalendarDateChange');
    onSetDateRange([moment(start), moment(end)]);
    handleBlurCalendar();
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


  function handleAllFocus() {
    handleFocus();
    handleFocusCalendar();
    console.log('allFocus');
  }

  function handleAllBlur() {
    handleBlur();
    console.log('allBlur');
    // TODO: figure out calendar focus states
  }

  function handleCalendarBlur() {
    console.log('handleCalendarBlur()');
  }

  function handleCalendarFocus() {
    handleFocusCalendar();
  }
  console.log('daterange is ', daterange);

  return (
    <div
      className={`datepanel-container ${disabled ? 'disabled' : ''}`}
      onFocus={handleAllFocus}
      onBlur={handleAllBlur}
    >
      <DateInput
        disabled={disabled}
        error={!!startDateError}
        label="Start"
        defaultValue={startDate}
        style={{marginRight: '1rem'}}
        onInputDate={handleInputStartDate}
        onValidate={handleValidateStartDate}
      />
      <DateInput
        disabled={disabled}
        error={!!endDateError}
        label="End"
        defaultValue={endDate}
        onInputDate={handleInputEndDate}
        onValidate={handleValidateEndDate}
      />
      {focusCalendar &&
        <div
          tabIndex="-1"
          className="dateinput-calendar-container"
          onFocus={handleCalendarFocus}
          onBlur={handleCalendarBlur}>
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
