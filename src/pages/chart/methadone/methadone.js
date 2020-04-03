import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import {
  DatePanel,
  FloatingLabelInput, FormOptions,
  InputDoseML,
  InputTakehomeML,
  MedicationDropdown,
  ViewRow
} from '../../../components';
import {bindActionCreators} from 'redux';
import chartActions from '../../../actions/chart';
import {CarriesPanel} from '../../../connected';
import {FORMTYPE_TEMP} from '../../../constants/constants';

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
    props.onSetPatientName(e.target.value);
  }

  function handleSetRxNumber(e) {
    props.onSetRxNumber(e.target.value);
  }

  function handleSetFormType(value) {
    props.onSetFormType(value);
  }

  function handleSetDrug(value) {
    props.onSetDrug(value);
  }

  function handleSetDose(e) {
    props.onSetDose(e.target.value);
  }

  function handleSetTakehomeDose(e) {
    props.onSetTakehomeDose(e.target.value);
  }

  function handleSetStartDate(date) {
    props.onSetStartDate(date);
  }

  function handleSetEndDate(date) {
    props.onSetEndDate(date);
  }

  function handleSetDateRange(dateRange) {
    props.onSetDateRange(dateRange);
  }

  function handleSetTimeInterval(interval) {
    props.onSetTimeInterval(interval);
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
        <InputDoseML
          disabled={isTemp}
          inputStyle={styles.dose}
          value={props.dose}
          onChange={handleSetDose} />
        <InputTakehomeML
          disabled={isTemp}
          inputStyle={styles.takehome}
          value={props.takehome}
          onChange={handleSetTakehomeDose} />
      </ViewRow>
      <ViewRow>
        <DatePanel
          isTemp={isTemp}
          startdate={props.startdate}
          enddate={props.enddate}
          daterange={props.daterange}
          onSetStartDate={handleSetStartDate}
          onSetEndDate={handleSetEndDate}
          onSetDateRange={handleSetDateRange} />
      </ViewRow>
      <ViewRow>
        <CarriesPanel isTemp={isTemp} />
      </ViewRow>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  console.log(chart);
  return {
    patientName: chart.patientName,
    rxNumber: chart.rxNumber,
    formType: chart.formType,
    selectedDrug: chart.selectedDrug,
    dose: chart.dose,
    takehome: chart.takehome,
    startdate: chart.startdate,
    enddate: chart.enddate,
    daterange: chart.daterange,
    timeinterval: chart.timeinterval
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...chartActions}, dispatch)
};

const ChartMethadone = connect(mapStateToProps, mapDispatchToProps)(ChartMethadoneWrapper);

export default ChartMethadone;
