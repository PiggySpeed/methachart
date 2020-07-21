import './index.less';
import 'wicg-inert';
import React from 'react';
import {bindActionCreators} from 'redux';
import { Checkbox } from 'semantic-ui-react';
import chartActions from '../../actions/chart';
import {connect} from 'react-redux';
import {CarriesSelector} from '../../components';
import {FORMTYPE_TEMP, SCHEME_WEEKDAYS, SCHEME_WEEKENDS} from '../../constants/constants';


const styles = {
  checkbox: isTemp => ({
    fontSize: 12,
    color: isTemp ? '#EBEBEB' : '#C3C3C3',
    marginRight: 12
  })
};

function CarriesPanelWrapper({formType, dose, takehome, carries, onDayClick, carryScheme, onSetCarryScheme}) {
  const isTemp = formType === FORMTYPE_TEMP;

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
    <div inert="true">
      <CarriesSelector
        dose={dose}
        disabled={isTemp}
        takehome={takehome}
        carries={carries}
        onDayClick={handleDayClick} />
      <div className="carries-options">
        <Checkbox
          disabled={isTemp}
          value={SCHEME_WEEKENDS}
          checked={carryScheme === SCHEME_WEEKENDS}
          label={{
            children: 'carry weekends',
            style: styles.checkbox(isTemp) }}
          onChange={handleSetCarryScheme} />
        <Checkbox
          disabled={isTemp}
          value={SCHEME_WEEKDAYS}
          checked={carryScheme === SCHEME_WEEKDAYS}
          label={{
            children: 'carry weekdays',
            style: styles.checkbox(isTemp) }}
          onChange={handleSetCarryScheme} />
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    formType: chart.formType,
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
