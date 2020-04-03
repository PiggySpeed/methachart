import './index.less';
import React, {useState} from 'react';
import useHover from '../../../hooks/useHover';

function FloatingLabelInput({disabled, tabindex, canFloat = true, isHovered, value="", placeholder, style, type='text', onChange, onFocus, onBlur}) {
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(isHovered);
  const [float, setFloat] = useState(false);
  const [focus, setFocus] = useState(false);

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

  return (
    <div
      className="flinput-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style ? style : {}}>
      <hr className={`flinput-border ${focus ? 'focus' : ''}`} />
      <input
        tabIndex={tabindex}
        className={`flinput-input ${(hover || isHovered) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}
        value={value || ''}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange} />
      {
        canFloat && <h6
        className={`flinput-floating-label ${float ? 'float' : ''} ${focus ? 'focus' : ''} ${((hover || isHovered) && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>
        {placeholder}
        </h6>
      }
      {
        !canFloat && <h6
          className={`flinput-floating-label ${float ? 'hidden' : ''} ${focus ? 'focus' : ''} ${((hover || isHovered) && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>
          {placeholder}
        </h6>
      }
    </div>
  )
}

export default FloatingLabelInput;
