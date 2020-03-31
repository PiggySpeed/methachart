import './index.less';
import React from 'react';
import {FloatingLabelInput} from '../../../components';
import useFocus from '../../../hooks/useFocus';
import useHover from '../../../hooks/useHover';

function InputTakehomeMG({inputStyle}) {
  const {focus, handleFocus, handleBlur} = useFocus(false);
  const {hover, handleMouseEnter, handleMouseLeave} = useHover(false);

  return (
    <div
      className="input-takehome-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        type="number"
        canFloat={false}
        isHovered={hover}
        placeholder="&nbsp;0"
        style={inputStyle ? inputStyle : {}}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-takehome-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>mg</p>
      <h6 className={`input-takehome-label ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>Take Home (optional):</h6>
    </div>
  )
}

export default InputTakehomeMG;
