import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';


function InputDoseML({disabled, inputStyle, value="", onChange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className="input-dose-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        type="number"
        tabindex={disabled ? -1 : 0}
        placeholder="Dose"
        value={value}
        style={inputStyle ? inputStyle : {}}
        disabled={disabled}
        isHovered={hover}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-dose-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>mL</p>
    </div>
  )
}

export default InputDoseML;
