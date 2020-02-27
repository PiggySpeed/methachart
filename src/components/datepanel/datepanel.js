// order of imports matters
import './index.less';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_override.less';
import React, {useState} from 'react';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// ref for datepicker: https://github.com/airbnb/react-dates#make-some-awesome-datepickers

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
    <div className="datepanel-container" style={{position: 'relative', zIndex:99}}>
      <DateRangePicker
        // momentPropTypes.momentObj or null
        startDate={startDate}

        // PropTypes.string.isRequired
        startDateId="your_unique_start_date_id"

        // momentPropTypes.momentObj or null
        endDate={endDate}

        // PropTypes.string.isRequired
        endDateId="your_unique_end_date_id"

        // PropTypes.func.isRequired
        onDatesChange={handleDateChange}

        // PropTypes.oneOf([START_DATE, END_DATE]) or null
        focusedInput={focusedInput}

        // PropTypes.func.isRequired
        onFocusChange={handleFocusChange}

        orientation="vertical"
        anchorDirection="right"
      />
    </div>
  )
}

export default DatePanel;
