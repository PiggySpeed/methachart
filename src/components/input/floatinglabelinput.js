import './index.less';
import React, {useState} from 'react';
import { Input } from 'semantic-ui-react';

const styles = {
  input: {
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none',
    border: 'none'
  }
};

function FloatingLabelInput({placeholder, onChange, onFocus, onBlur}) {
  const [float, setFloat] = useState(false);
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  function handleChange(e) {
    if (e.target.value === '' && !focus) {
      setFloat(false);
    } else if (!float) {
      setFloat(true);
    }

    if (onChange) {
      onChange(e);
    }
  }

  function handleFocus(e) {
    setFocus(true);

    if (!float) {
      setFloat(true);
    }

    if (onFocus) {
      onFocus(e);
    }
  }

  function handleBlur(e) {
    setFocus(false);

    if (e.target.value === '') {
      setFloat(false);
    }

    if (onFocus) {
      onBlur(e);
    }
  }

  function handleMouseEnter() {
    console.log('hovering');
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div className="flinput-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <hr className={`flinput-border ${focus ? 'focus' : ''}`} />
      <input
        className={`flinput-input ${hover ? 'hover' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange} />
      <h6
        className={`flinput-floating-label ${float ? 'float' : ''} ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>
        {placeholder}
      </h6>
    </div>
  )
}

export default FloatingLabelInput;
