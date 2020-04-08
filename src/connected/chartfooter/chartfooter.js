import './index.less';
import React from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import chartActions from '../../actions/chart';
import {FORMTYPE_TEMP} from '../../constants/constants';

const styles = {
  btn: {
    height: '2.5rem',
    margin: 0
  }
};

function ChartFooterWrapper({formType, onPrintRequest}) {
  const isTemp = formType === FORMTYPE_TEMP;

  return(
    <div className="chartfooter-container">
      <div className="chartfooter-left">

      </div>
      <div className="chartfooter-right">
        {isTemp && <p className="chartfooter-status-message">Printing Temp Log</p>}
        <Button
          secondary
          style={styles.btn}
          onClick={onPrintRequest}>Print</Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    formType: chart.formType
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...chartActions}, dispatch)
};

const ChartFooter = connect(mapStateToProps, mapDispatchToProps)(ChartFooterWrapper);

export default ChartFooter;
