import './index.less';
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { MEDICATIONS } from '../../constants/constants';
import {navigate} from '../../utils/history';

const styles = {
  dropdown: {
    width: '14rem'
  }
};

function MedicationDropdown({defaultValue}) {
  function handleChange(e, data) {
    if (data.value) {
      navigate(`/chart/${data.value.toLowerCase()}`);
    }
  }

  return (
    <Dropdown
      fluid
      search
      selection
      selectOnNavigation={false}
      defaultValue={defaultValue}
      onChange={handleChange}
      options={MEDICATIONS}
      style={styles.dropdown}
    />
  )
}

export default MedicationDropdown;
