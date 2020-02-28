import './index.less';
import React from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '..';
import {Icon} from 'semantic-ui-react';

function NavBarButton({label, to}) {
  return (
    <Link to={to} className="navbar-button">{label}</Link>
  )
}

function NavBarIconButton({name, to}) {
  return (
    <Link to={to} className="navbar-icon-button">
      <Icon name={name} size="large" />
    </Link>
  )
}

function NavBar() {
  return (
    <div className="navbar-container">
      <LogoPanel />
      <div className="navbar-inner-container-left">
        {/*<NavBarButton to="chart/methadone" label="methadone" />*/}
        {/*<NavBarButton to="chart/suboxone" label="suboxone" />*/}
        {/*<NavBarButton to="chart/kadian" label="kadian" />*/}
      </div>

      <div className="navbar-inner-container-right">
        <NavBarIconButton to="settings" name="setting" />
      </div>
    </div>
  )
}

export default NavBar;
