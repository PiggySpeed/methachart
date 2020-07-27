import './index.less';
import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import { Checkbox } from 'semantic-ui-react';
import chartActions from '../../actions/chart';
import {connect} from 'react-redux';
import {CarriesSelector} from '../../components';
import {FORMTYPE_TEMP, SCHEME_WEEKDAYS, SCHEME_WEEKENDS} from '../../constants/constants';


const styles = {
  checkbox: (isTemp, isHover) => ({
    fontSize: 12,
    color: isTemp ? '#EBEBEB' : isHover ? '#9b9b9b' : '#C3C3C3',
    marginRight: 12,
    transition: 'none',
    pointerEvents: isTemp ? 'none' : 'auto'
  })
};

function CarriesPanelWrapper({formType, dose, takehome, carries, onDayClick, carryScheme, onSetCarryScheme}) {
  const [hover, setHover] = useState(false);
  const isTemp = formType === FORMTYPE_TEMP;

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <CarriesSelector
        dose={dose}
        hovered={hover}
        disabled={isTemp}
        takehome={takehome}
        carries={carries}
        onDayClick={handleDayClick} />
      <div className="carries-options">
        <Checkbox
          tabIndex={-1}
          disabled={isTemp}
          value={SCHEME_WEEKENDS}
          checked={carryScheme === SCHEME_WEEKENDS}
          label={{
            children: 'carry weekends',
            style: styles.checkbox(isTemp, hover) }}
          onChange={handleSetCarryScheme} />
        <Checkbox
          tabIndex={-1}
          disabled={isTemp}
          value={SCHEME_WEEKDAYS}
          checked={carryScheme === SCHEME_WEEKDAYS}
          label={{
            children: 'carry weekdays',
            style: styles.checkbox(isTemp, hover) }}
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
