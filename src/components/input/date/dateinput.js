import './index.less';
import React, {useState, useEffect} from 'react';
import moment from 'moment';

function DateNumberInput({min, max, defaultValue, placeholder, onFocus, onBlur, onChange}) {
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

  function handleBlur(e) {
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
        min={min}
        max={max}
        className="dateinput-input"
        maxLength={2}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      {(!value && !focus) && <p className={`dateinput-placeholder ${!placehold ? 'hidden' : ''}`}>{placeholder}</p>}
      <hr className={`dateinput-border ${focus ? 'focus' : ''}`} />
    </div>
  )
}

function convertToDateObject(dd, mm, yy) {
  return new Date(parseInt(`20${yy}`), parseInt(mm), parseInt(dd));
}

function DateInput({style, label, onInputValidDate}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [dd, setDD] = useState(null);
  const [mm, setMM] = useState(null);
  const [yy, setYY] = useState(new Date().getFullYear().toString().slice(-2));
  const [error, setError] = useState(false);

  useEffect(() => {
    // validate date; send over if valid, otherwise error
    if (dd && mm && yy) {
      let isValid = moment(`${dd}/${mm}/20${yy}`, 'DD/MM/YYYY', true).isValid();
      console.log('is date valid ', isValid, `${dd}/${mm}/${yy}`);
      if (isValid) {
        onInputValidDate(convertToDateObject(dd, mm, yy));
      } else {
        setError(true);
      }
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
      className={`dateinput-container ${focus ? 'focus' : ''} ${hover ? 'hover' : ''}`}
      style={style ? style : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p className={`dateinput-label ${focus ? 'focus' : ''} ${hover ? 'hover' : ''}`}>{label}</p>
      <DateNumberInput
        min={1}
        max={31}
        placeholder="dd"
        onChange={(e) => handleChange('dd', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={1}
        max={12}
        placeholder="mm"
        onChange={(e) => handleChange('mm', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={20}
        max={99}
        defaultValue={yy}
        placeholder="yy"
        onChange={(e) => handleChange('yy', e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur} />
    </div>
  )
}

export default DateInput;
