import './index.less';
import React from 'react';
import {
  DatePanel,
  FloatingLabelInput,
  InputDoseML,
  InputTakehomeML,
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

function ChartMethadone() {
  return (
    <div className="methadone-container">
      <ViewRow style={styles.row1}>
        <FloatingLabelInput placeholder="Name" style={styles.name} />
        <FloatingLabelInput placeholder="Rx#" style={styles.rx} />
      </ViewRow>
      <ViewRow>
        <MedicationDropdown defaultValue="METHADONE" />
        <InputDoseML inputStyle={styles.dose} />
        <InputTakehomeML inputStyle={styles.takehome} />
      </ViewRow>
      <ViewRow>
        <DatePanel />
      </ViewRow>
    </div>
  )
}

export default ChartMethadone;
