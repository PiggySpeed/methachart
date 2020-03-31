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
    marginRight: '2rem'
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

  function handleSetName(e) {
    props.onSetPatientName(e.target.value);
  }

  function handleSetRxNumber(e) {
    props.onSetRxNumber(e.target.value);
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
        <FormOptions />
      </ViewRow>
      <ViewRow>
        <MedicationDropdown
          value={props.selectedDrug}
          onChange={handleSetDrug} />
        <InputDoseML
          inputStyle={styles.dose}
          value={props.dose}
          onChange={handleSetDose} />
        <InputTakehomeML
          inputStyle={styles.takehome}
          value={props.takehome}
          onChange={handleSetTakehomeDose} />
      </ViewRow>
      <ViewRow>
        <DatePanel
          startdate={props.startdate}
          enddate={props.enddate}
          daterange={props.daterange}
          onSetStartDate={handleSetStartDate}
          onSetEndDate={handleSetEndDate}
          onSetDateRange={handleSetDateRange} />
      </ViewRow>
      <ViewRow>
        <CarriesPanel />
      </ViewRow>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  console.log(chart);
  return {
    patientName: chart.patientName,
    rxNumber: chart.rxNumber,
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
