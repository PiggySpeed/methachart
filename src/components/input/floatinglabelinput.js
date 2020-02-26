import './index.less';
import React, {useState} from 'react';

function FloatingLabelInput({canFloat = true, placeholder, style, onChange, onFocus, onBlur}) {
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
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div className="flinput-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style ? style : {}}>
      <hr className={`flinput-border ${focus ? 'focus' : ''}`} />
      <input
        className={`flinput-input ${hover ? 'hover' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange} />
      {
        canFloat && <h6
        className={`flinput-floating-label ${float ? 'float' : ''} ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>
        {placeholder}
        </h6>
      }
      {
        !canFloat && <h6
          className={`flinput-floating-label ${float ? 'hidden' : ''} ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>
          {placeholder}
        </h6>
      }

    </div>
  )
}

export default FloatingLabelInput;
