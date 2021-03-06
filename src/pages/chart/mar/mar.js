import './index.less';
import React from 'react';
import {
  DatePanel,
  FloatingLabelInput,
  MedicationDropdown,
  ViewRow
} from '../../../components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import chartActions from '../../../actions/chart';
import {FORMTYPE_MAIN, isMAR} from '../../../constants/constants';
import {navigate} from '../../../utils/history';
import getDateRange from '../../../utils/getDateRange';

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

function ChartMARWrapper(props) {

  function handleSetName(e) {
    props.onSetError("");
    props.onSetPatientName(e.target.value);
  }

  function handleSetDrug(value) {
    props.onSetError("");
    props.onSetDrug(value);

    if (!isMAR(value)) {
      props.onSetDateRange([null, null]);
      props.onSetFormType(FORMTYPE_MAIN);
      navigate('/chart/oat');
    } else {
      props.onSetDateRange(getDateRange());
    }
  }

  function handleSetDateRange(dateRange) {
    props.onSetError("");
    props.onSetDateRange(dateRange);
  }

  return (
    <div className="mar-container">
      <ViewRow style={styles.row1}>
        <FloatingLabelInput
          value={props.patientName}
          onChange={handleSetName}
          placeholder="Name"
          style={styles.name} />
      </ViewRow>
      <ViewRow>
        <MedicationDropdown
          defaultValue={props.selectedDrug}
          onChange={handleSetDrug} />
      </ViewRow>
      <div className="mar-date-row">
        <DatePanel
          daterange={props.daterange}
          timeinterval={props.timeinterval}
          onSetDateRange={handleSetDateRange} />
      </div>
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

const ChartMAR = connect(mapStateToProps, mapDispatchToProps)(ChartMARWrapper);

export default ChartMAR;
