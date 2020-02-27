import './index.less';
import React, {useState} from 'react';

function DateNumberInput({min, max, placeholder, onFocus, onBlur, onChange}) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  }

  function handleFocus() {
    if (!focus) {
      setFocus(true);
    }

    if (onFocus) {
      onFocus();
    }
  }

  function handleBlur() {
    if (focus && value === '') {
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
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`dateinput-placeholder ${focus ? 'hidden' : ''}`}>{placeholder}</p>
      <hr className={`dateinput-border ${focus ? 'focus' : ''}`} />
    </div>
  )
}

function DateInput({style, label}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  function handleFocus(e) {
    setFocus(true);
  }

  function handleBlur(e) {
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
      className={`dateinput-container ${focus ? 'focus' : ''}`}
      style={style ? style : {}}>
      <p className="dateinput-label">{label}</p>
      <DateNumberInput
        min={1}
        max={31}
        placeholder="dd"
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={1}
        max={12}
        placeholder="mm"
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <DateNumberInput
        min={20}
        max={99}
        placeholder="yy"
        onFocus={handleFocus}
        onBlur={handleBlur} />
    </div>
  )
}

export default DateInput;
