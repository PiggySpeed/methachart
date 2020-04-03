import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';

function InputTakehomeML({disabled, inputStyle, value="", onChange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className="input-takehome-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        type="number"
        tabindex={disabled ? -1 : 0}
        canFloat={false}
        disabled={disabled}
        isHovered={hover}
        placeholder="&nbsp;0"
        value={value}
        style={inputStyle ? inputStyle : {}}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-takehome-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>mL</p>
      <h6 className={`input-takehome-label ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>Take Home (optional):</h6>
    </div>
  )
}

export default InputTakehomeML;
