import './index.less';
import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import { Checkbox } from 'semantic-ui-react';
import chartActions from '../../actions/chart';
import {connect} from 'react-redux';
import {CarriesSelector} from '../../components';
import {SCHEME_WEEKDAYS, SCHEME_WEEKENDS} from '../../constants/constants';


const styles = {
  checkbox: {
    fontSize: 12,
    color: '#5F5F5F',
    marginRight: 12
  }
};

function CarriesPanelWrapper({dose, takehome, carries, onDayClick, carryScheme, onSetCarryScheme}) {

  function handleSetCarryScheme(e, target) {
    if (target.checked) {
      onSetCarryScheme(target.value);
    } else {
      onSetCarryScheme(null);
    }
  }

  function handleDayClick(day, isCarry) {
    if (carryScheme !== null) {
      onSetCarryScheme(null);
    }
    onDayClick(day, isCarry);
  }

  return (
    <div>
      <CarriesSelector
        dose={dose}
        takehome={takehome}
        carries={carries}
        onDayClick={handleDayClick} />
      <div className="carries-options">
        <Checkbox
          value={SCHEME_WEEKENDS}
          checked={carryScheme === SCHEME_WEEKENDS}
          label={{
            children: 'carry weekends',
            style: styles.checkbox }}
          onChange={handleSetCarryScheme} />
        <Checkbox
          value={SCHEME_WEEKDAYS}
          checked={carryScheme === SCHEME_WEEKDAYS}
          label={{
            children: 'carry weekdays',
            style: styles.checkbox }}
          onChange={handleSetCarryScheme} />
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    carries: chart.carries,
    dose: chart.dose,
    takehome: chart.takehome,
    carryScheme: chart.carryScheme
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onDayClick: chartActions.onDayClick,
    onSetCarryScheme: chartActions.onSetCarryScheme,
  }, dispatch)
};

const CarriesPanel = connect(mapStateToProps, mapDispatchToProps)(CarriesPanelWrapper);


export default CarriesPanel;
