import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import {
  DatePanel,
  FloatingLabelInput,
  FormOptions,
  InputDose,
  InputTakehome,
  MedicationDropdown,
  ViewRow
} from '../../../components';
import {bindActionCreators} from 'redux';
import chartActions from '../../../actions/chart';
import {CarriesPanel} from '../../../connected';
import {FORMTYPE_MAR, FORMTYPE_TEMP, isMAR, getDosageUnit} from '../../../constants/constants';
import {navigate} from '../../../utils/history';
import getDateRange from '../../../utils/getDateRange';

const numbers = new RegExp('^[0-9]{0,2}$');

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
    width: '6rem',
    marginRight: '1.25rem'
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

function ChartMethadoneWrapper(props) {
  const isTemp = props.formType === FORMTYPE_TEMP;

  function handleSetName(e) {
    props.onSetError("");
    props.onSetPatientName(e.target.value);
  }

  function handleSetRxNumber(e) {
    props.onSetError("");
    props.onSetRxNumber(e.target.value);
  }

  function handleSetFormType(value) {
    props.onSetError("");
    if (value === FORMTYPE_MAR) {
      props.onSetDateRange(getDateRange());
    }
    props.onSetFormType(value);
  }

  function handleSetDrug(value) {
    props.onSetError("");
    props.onSetDrug(value);

    if (isMAR(value)) {
      props.onSetFormType(FORMTYPE_MAR);
      props.onSetDateRange(getDateRange());
      navigate('chart/mar');
    }
  }

  function handleSetDose(e) {
    if (!numbers.test(e.target.value)) {
      e.preventDefault();
      return;
    }

    props.onSetError("");
    props.onSetDose(e.target.value);
  }

  function handleSetTakehomeDose(e) {
    if (!numbers.test(e.target.value)) {
      e.preventDefault();
      return;
    }

    props.onSetError("");
    props.onSetTakehomeDose(e.target.value);
  }

  function handleSetDateRange(dateRange) {
    props.onSetError("");
    props.onSetDateRange(dateRange);
  }

  return (
    <div className="methadone-container">
      <ViewRow style={styles.row1}>
        <FloatingLabelInput
          value={props.patientName}
          onChange={handleSetName}
          placeholder="Name"
          style={styles.name} />
        <FloatingLabelInput
          value={props.rxNumber}
          onChange={handleSetRxNumber}
          placeholder="Rx#"
          style={styles.rx} />
        <FormOptions
          formType={props.formType}
          onSetFormType={handleSetFormType} />
      </ViewRow>
      <ViewRow>
        <MedicationDropdown
          value={props.selectedDrug}
          onChange={handleSetDrug} />
        <InputDose
          disabled={isTemp}
          inputStyle={styles.dose}
          value={props.dose}
          doseUnit={getDosageUnit(props.selectedDrug)}
          onChange={handleSetDose} />
        <InputTakehome
          disabled={isTemp}
          inputStyle={styles.takehome}
          value={props.takehome}
          doseUnit={getDosageUnit(props.selectedDrug)}
          onChange={handleSetTakehomeDose} />
      </ViewRow>
      <ViewRow>
        <DatePanel
          disabled={isTemp}
          daterange={props.daterange}
          timeinterval={props.timeinterval}
          onSetDateRange={handleSetDateRange} />
      </ViewRow>
      <ViewRow>
        <CarriesPanel />
      </ViewRow>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    patientName: chart.patientName,
    rxNumber: chart.rxNumber,
    formType: chart.formType,
    selectedDrug: chart.selectedDrug,
    dose: chart.dose,
    takehome: chart.takehome,
    daterange: chart.daterange,
    timeinterval: chart.timeinterval
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...chartActions}, dispatch)
};

const ChartMethadone = connect(mapStateToProps, mapDispatchToProps)(ChartMethadoneWrapper);

export default ChartMethadone;
