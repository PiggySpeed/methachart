import './index.less';
import React, {useState} from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '../../components';
import {Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import chartActions from '../../actions/chart';
import {FORMTYPE_MAR, isMAR} from '../../constants/constants';
import {navigate} from '../../utils/history';

function NavBarIconButton({name, to}) {
  return (
    <Link to={to} className="navbar-icon-button">
      <Icon name={name} size="large" />
    </Link>
  )
}

function NavBarTextButton({label, to}) {
  return (
    <div className="navbar-text-button-container">
      <Link to={to} className="navbar-text-button">
        {label}
      </Link>
    </div>
  )
}

function NavBarWrapper({selectedDrug, onSetFormType}) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleLogoClick() {
    if (isMAR(selectedDrug)) {
      onSetFormType(FORMTYPE_MAR);
      navigate('/chart/mar');
    } else {
      navigate('/chart/oat');
    }
  }

  return (
    <div className="navbar-container">
      <LogoPanel
        selectedDrug={selectedDrug}
        onMouseOver={handleMouseOver}
        onLogoClick={handleLogoClick}
      />
      <div className="navbar-inner-container-left">
      </div>

      <div className="navbar-inner-container-right">
        <NavBarIconButton to="settings" name="setting" />
      </div>
    </div>
  )
}

const mapStateToProps = ({chart}) => {
  return {
    selectedDrug: chart.selectedDrug
  }
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSetFormType: chartActions.onSetFormType
  }, dispatch)
};


const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarWrapper);

export default NavBar;
