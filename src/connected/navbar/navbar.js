import './index.less';
import React, {useState} from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '../../components';
import {Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';

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

function NavBarWrapper({selectedDrug}) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseLeave() {
    console.log('leaving');
    setHover(false);
  }

  return (
    <div className="navbar-container">
      <LogoPanel
        selectedDrug={selectedDrug}
        onMouseOver={handleMouseOver}
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

const NavBar = connect(mapStateToProps, () => ({}))(NavBarWrapper);

export default NavBar;
