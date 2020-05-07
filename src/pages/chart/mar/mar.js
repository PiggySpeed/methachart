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
import {isMAR} from '../../../constants/constants';
import {navigate} from '../../../utils/history';

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
    props.onSetPatientName(e.target.value);
  }

  function handleSetDrug(value) {
    props.onSetDrug(value);

    if (!isMAR(value)) {
      navigate('/chart/oat');
    }
  }

  function handleSetDateRange(dateRange) {
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
          onSetDateRange={handleSetDateRange} />
          <p className="mar-date-comment">date is optional</p>
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
