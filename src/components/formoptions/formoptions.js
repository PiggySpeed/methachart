import './index.less';
import React from 'react';
import {IconChartMain, IconChartTemp} from '..';
import {FORMTYPE_MAIN, FORMTYPE_TEMP} from '../../constants/constants';

function IconButton({isActive, type, onClick}) {

  function handleSetFormType() {
    onClick(type);
  }

  return (
    <button
      tabIndex={-1}
      className={`formoptions-icon-button-container ${isActive ? 'active' : ''}`}
      onClick={handleSetFormType}>
      {(type === FORMTYPE_MAIN)
        ? <IconChartMain fill={isActive ? '#4781FF' : '#c3c3c3'} />
        : <IconChartTemp fill={isActive ? '#4781FF' : '#c3c3c3'} />
      }
    </button>
  )
}

function FormOptions({formType, onSetFormType}) {
  return(
    <div className="formoptions-container">
      <IconButton
        type={FORMTYPE_MAIN}
        isActive={formType === FORMTYPE_MAIN}
        onClick={onSetFormType} />
      <IconButton
        type={FORMTYPE_TEMP}
        isActive={formType === FORMTYPE_TEMP}
        onClick={onSetFormType} />
    </div>
  )
}

export default FormOptions;
