import './index.less';
import React, {useState} from 'react';
import useHover from '../../../hooks/useHover';
import classList from '../../../utils/classlist';

function FloatingLabel({canFloat, hover, float, focus, disabled, text}) {
  let floatStyle = float ? 'float' : '';
  if (!canFloat) {
    floatStyle = float ? 'hidden' : '';
  }

  return (
    <h6
      className={`flinput-floating-label ${floatStyle} ${classList({focus, hover: (hover && !focus), disabled})} ${focus ? 'focus' : ''}`}>
      {text}
    </h6>
  )
}

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
      className={`flinput-container ${classList({disabled})}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style ? style : {}}>
      <hr className={`flinput-border ${classList({focus})}`} />
      <input
        tabIndex={tabindex}
        className={`flinput-input ${classList({hover: (hover || isHovered), disabled})}`}
        value={value || ''}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange} />
      <FloatingLabel
        canFloat={canFloat}
        hover={hover || isHovered}
        float={float}
        focus={focus}
        disabled={disabled}
        text={placeholder} />
    </div>
  )
}

export default FloatingLabelInput;
