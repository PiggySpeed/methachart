import './index.less';
import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import { Form, Radio } from 'semantic-ui-react';
import chartActions from '../../actions/chart';
import {connect} from 'react-redux';
import {CarriesSelector} from '../../components';


function CarriesPanelWrapper(props) {
  const [carryScheme, setCarryScheme] = useState(null);

  function handleSetCarryScheme(e, target) {
    setCarryScheme(target.value);
  }

  return (
    <div>
      <CarriesSelector carries={props.carries} />

      <Form>
        <Form.Field>
          <Radio
            label='Carry Weekdays'
            name='radioGroup'
            value='weekdays'
            checked={carryScheme === 'weekdays'}
            onChange={handleSetCarryScheme}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='CarryWeekends'
            name='radioGroup'
            value='weekends'
            checked={carryScheme === 'weekends'}
            onChange={handleSetCarryScheme}
          />
        </Form.Field>
      </Form>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    carries: chart.carries
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...chartActions}, dispatch)
};

const CarriesPanel = connect(mapStateToProps, mapDispatchToProps)(CarriesPanelWrapper);


export default CarriesPanel;
