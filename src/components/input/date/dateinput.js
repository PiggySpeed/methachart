import './index.less';
import React, {useState, useEffect} from 'react';
import classList from '../../../utils/classlist';
import moment from 'moment';

function DateNumberInput({min, max, value, placeholder, disabled, onFocus, onBlur, onChange, onKeyDown}) {
  const [focus, setFocus] = useState(false);
  const [placehold, setPlacehold] = useState(!value);

  useEffect(() => {
    setPlacehold(!value);
  }, [value]);

  function handleChange(e) {
    if (onChange) {
      onChange(e);
    }
  }

  function handleFocus() {
    if (!focus) {
      setFocus(true);
    }

    if (!value) {
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
      onBlur(e);
    }
  }

  return (
    <div className={`dateinput-input-container ${classList({focus})}`}>
      <input
        type="number"
        tabIndex={disabled ? -1 : 0}
        min={min}
        max={max}
        className={`dateinput-input ${classList({disabled})}`}
        maxLength={2}
        value={value || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}/>
      {(!value && !focus) && <p className={`dateinput-placeholder ${classList({hidden: !placehold, disabled})}`}>{placeholder}</p>}
      <hr className={`dateinput-border ${classList({focus, disabled})}`} />
    </div>
  )
}

function DateInput({style, disabled, error, label, defaultValue, onInputDate, onValidate, onTabLastField}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [dd, setDD] = useState(null);
  const [mm, setMM] = useState(null);
  const [yy, setYY] = useState(null);

  useEffect(() => {
    // to support picking date by calendar
    // if defaultValue changes, trigger update
    const [DD, MM, YY] = defaultValue
       ? defaultValue.format('DD MM YY').split(' ')
       : [null, null, moment().format('YY')];
    setDD(DD);
    setMM(MM);
    setYY(YY);
  }, [defaultValue]);

  useEffect(() => {
    // allow real-time changes to calendar ui
    if (dd && mm && yy) {
      let date = moment(`${dd}/${mm}/20${yy}`, 'DD/MM/YYYY', true);
      onInputDate(date);
    }
  }, [dd, mm, yy]);

  function handleChange(key, value) {
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

    // validate error states upon blur
    if (dd && mm && yy) {
      let date = moment(`${dd}/${mm}/20${yy}`, 'DD/MM/YYYY', true);
      onValidate(date);
    }
  }

  function handleKeyDown(e) {
    if (onTabLastField && e.keyCode === 9) {
      onTabLastField();
    }
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      className={`dateinput-container ${classList({focus, hover, disabled})}`}
      style={style ? style : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p className={`dateinput-label ${classList({focus, hover, disabled})}`}>{label}</p>
      <DateNumberInput
        min={1}
        max={31}
        value={dd}
        placeholder="dd"
        disabled={disabled}
        onChange={(e) => handleChange('dd', e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <DateNumberInput
        min={1}
        max={12}
        value={mm}
        placeholder="mm"
        disabled={disabled}
        onChange={(e) => handleChange('mm', e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <DateNumberInput
        min={20}
        max={99}
        value={yy}
        placeholder="yy"
        disabled={disabled}
        onChange={(e) => handleChange('yy', e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default DateInput;
