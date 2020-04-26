import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';

function InputDoseMG({disabled, inputStyle}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className={`input-dose-container ${disabled ? 'disabled' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        type="number"
        tabindex={disabled ? -1 : 0}
        placeholder="Dose"
        style={inputStyle ? inputStyle : {}}
        disabled={disabled}
        isHovered={hover}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-dose-mg ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''} ${disabled ? 'disabled' : ''}`}>mg</p>
    </div>
  )
}

export default InputDoseMG;
