import './index.less';
import React from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import chartActions from '../../actions/chart';
import {FORMTYPE_TEMP, FORMTYPE_MAR} from '../../constants/constants';

const styles = {
  btn: {
    height: '2.5rem',
    margin: 0
  }
};

function Error({error}) {
  return (
    <div className="chartfooter-error-container">
      <i className="exclamation triangle icon yellow"></i>
      <p>{error}</p>
    </div>
  )
}

function ChartFooterWrapper({formType, error, onPrintRequest, onPrintTempRequest, onPrintMARRequest}) {
  const isTemp = formType === FORMTYPE_TEMP;

  function handlePrintRequest() {
    if (isTemp) {
      onPrintTempRequest();
    } else if (formType === FORMTYPE_MAR) {
      onPrintMARRequest();
    } else {
      onPrintRequest();
    }
  }

  return(
    <div className="chartfooter-container">
      <div className="chartfooter-left">
        {!!error && <Error error={error} />}
      </div>
      <div className="chartfooter-right">
        {isTemp && <p className="chartfooter-status-message">Printing Temp Log</p>}
        <Button
          secondary
          style={styles.btn}
          onClick={handlePrintRequest}>Print</Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    formType: chart.formType,
    error: chart.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...chartActions}, dispatch)
};

const ChartFooter = connect(mapStateToProps, mapDispatchToProps)(ChartFooterWrapper);

export default ChartFooter;
