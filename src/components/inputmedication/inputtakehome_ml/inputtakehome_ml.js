import './index.less';
import React, {useState} from 'react';
import {FloatingLabelInput} from '../../../components';

function InputTakehomeML({inputStyle}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      className="input-takehome-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        canFloat={false}
        placeholder="&nbsp;0"
        style={inputStyle ? inputStyle : {}}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-takehome-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>mL</p>
      <h6 className={`input-takehome-label ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>Take Home (optional):</h6>
    </div>
  )
}

export default InputTakehomeML;
