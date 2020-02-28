import './index.less';
import React, {useState} from 'react';
import {FloatingLabelInput} from '../../../components';

function InputDoseMG({inputStyle}) {
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
      className="input-dose-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FloatingLabelInput
        placeholder="Dose"
        style={inputStyle ? inputStyle : {}}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      <p className={`input-dose-ml ${focus ? 'focus' : ''} ${(hover && !focus) ? 'hover' : ''}`}>mg</p>
    </div>
  )
}

export default InputDoseMG;
