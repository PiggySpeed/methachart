import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';
import classList from '../../../utils/classlist';

function InputTakehome({disabled, inputStyle, value="", doseUnit="mL", onChange}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className={`input-takehome-container ${disabled ? 'disabled' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        type="number"
        tabindex={-1}
        canFloat={false}
        disabled={disabled}
        isHovered={hover}
        placeholder="&nbsp;0"
        value={value}
        style={inputStyle ? inputStyle : {}}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-takehome ${classList({focus, hover: (hover && !focus), disabled})}`}>{doseUnit}</p>
      <h6 className={`input-takehome-label ${classList({focus, hover: (hover && !focus), disabled})}`}>Take Home (optional):</h6>
    </div>
  )
}

export default InputTakehome;
