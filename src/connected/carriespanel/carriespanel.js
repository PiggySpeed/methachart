import './index.less';
import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import { Checkbox } from 'semantic-ui-react';
import chartActions from '../../actions/chart';
import {connect} from 'react-redux';
import {CarriesSelector} from '../../components';


const styles = {
  checkbox: {
    fontSize: 12,
    color: '#5F5F5F',
    marginRight: 12
  }
};

function CarriesPanelWrapper({dose, takehome, carries, onDayClick}) {
  const [carryScheme, setCarryScheme] = useState(null);

  function handleSetCarryScheme(e, target) {
    setCarryScheme(target.value);
  }

  return (
    <div>
      <CarriesSelector
        dose={dose}
        takehome={takehome}
        carries={carries}
        onDayClick={onDayClick} />
      <div className="carries-options">
        <Checkbox label={{
          children: 'carry weekends',
          style: styles.checkbox
        }} />
        <Checkbox label={{
          children: 'carry weekdays',
          style: styles.checkbox
        }} />
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    carries: chart.carries,
    dose: chart.dose,
    takehome: chart.takehome
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onDayClick: chartActions.onDayClick
  }, dispatch)
};

const CarriesPanel = connect(mapStateToProps, mapDispatchToProps)(CarriesPanelWrapper);


export default CarriesPanel;
