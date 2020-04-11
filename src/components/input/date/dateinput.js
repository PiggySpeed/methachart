import './index.less';
import React, {useState, useEffect} from 'react';
import moment from 'moment';

function DateNumberInput({min, max, defaultValue, placeholder, disabled, onFocus, onBlur, onChange}) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue || '');
  const [placehold, setPlacehold] = useState(!defaultValue);

  function handleChange(e) {
    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  }

  function handleFocus() {
    if (!focus) {
      setFocus(true);
    }

    if (!defaultValue) {
      setPlacehold(true);
    }

    if (onFocus) {
      onFocus();
    }
  }

  function handleBlur() {
    if (focus) {
      setFocus(false);
    }

    if (onBlur) {
      onBlur();
    }
  }

  return (
    <div className={`dateinput-input-container ${focus ? 'focus' : ''}`}>
      <input
        type="number"
        tabIndex={disabled ? -1 : 0}
        min={min}
        max={max}
        className={`dateinput-input ${disabled ? 'disabled' : ''}`}
        maxLength={2}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      {(!value && !focus) && <p className={`dateinput-placeholder ${!placehold ? 'hidden' : ''} ${disabled ? 'disabled' : ''}`}>{placeholder}</p>}
      <hr className={`dateinput-border ${focus ? 'focus' : ''} ${disabled ? 'disabled' : ''}`} />
    </div>
  )
}

function pad(numStr) {
  return numStr.padStart(2, '0');
}

function DateInput({style, disabled, label, onInputDate}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [dd, setDD] = useState(null);
  const [mm, setMM] = useState(null);
  const [yy, setYY] = useState(moment().format('YY'));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (dd && mm && yy) {
      let date = moment(`${pad(dd)}/${pad(mm)}/20${pad(yy)}`, 'DD/MM/YYYY', true);
      onInputDate(date);
    }
  }, [dd, mm, yy]);

  function handleChange(key, value) {
    setError(false);

    if (key === 'dd') {
      setDD(value);
    } else if (key === 'mm') {
      setMM(value);
    } else if (key === 'yy') {
      setYY(value);
    }
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      className={`dateinput-container ${focus ? 'focus' : ''} ${hover ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}
      style={style ? style : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p className={`dateinput-label ${focus ? 'focus' : ''} ${hover ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>{label}</p>
      <DateNumberInput
        min={1}
        max={31}
        placeholder="dd"
        disabled={disabled}
        onChange={(e) => handleChange('dd', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={1}
        max={12}
        placeholder="mm"
        disabled={disabled}
        onChange={(e) => handleChange('mm', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={20}
        max={99}
        defaultValue={yy}
        placeholder="yy"
        disabled={disabled}
        onChange={(e) => handleChange('yy', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
    </div>
  )
}

export default DateInput;
