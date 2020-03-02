import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';

function InputDoseML({inputStyle}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className="input-dose-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        placeholder="Dose"
        style={inputStyle ? inputStyle : {}}
        isHovered={hover}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-dose-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>mL</p>
    </div>
  )
}

export default InputDoseML;
