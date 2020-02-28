import './index.less';
import React from 'react';
import {
  DatePanel,
  FloatingLabelInput,
  InputDoseMG,
  InputTakehomeMG,
  MedicationDropdown,
  ViewRow
} from '../../../components';

const styles = {
  row1: {
    minHeight: '6rem',
    paddingTop: '2rem'
  },

  name: {
    marginRight: '2rem',
    width: '14rem'
  },
  rx: {
    width: '6rem'
  },
  dose: {
    width: '3rem',
    margin: '0.5rem 0.5rem 0 2rem'
  },
  takehome: {
    width: '1.25rem',
    marginRight: '0.5rem'
  }
};

function ChartSuboxone() {
  return (
    <div className="suboxone-container">
      <ViewRow style={styles.row1}>
        <FloatingLabelInput placeholder="Name" style={styles.name} />
        <FloatingLabelInput placeholder="Rx#" style={styles.rx} />
      </ViewRow>
      <ViewRow>
        <MedicationDropdown defaultValue="SUBOXONE" />
        <InputDoseMG inputStyle={styles.dose} />
        <InputTakehomeMG inputStyle={styles.takehome} />
      </ViewRow>
      <ViewRow>
        <DatePanel />
      </ViewRow>
    </div>
  )
}

export default ChartSuboxone;
