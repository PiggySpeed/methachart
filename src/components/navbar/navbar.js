import './index.less';
import React from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '..';

function NavBarButton({label, to}) {
  return (
    <Link to={to} className="navbar-button">{label}</Link>
  )
}

function NavBar() {
  return (
    <div className="navbar-container">
      <LogoPanel />
      <div className="navbar-inner-container-left">
        <NavBarButton to="chart/methadone" label="methadone" />
        <NavBarButton to="chart/suboxone" label="suboxone" />
        <NavBarButton to="chart/kadian" label="kadian" />
      </div>

      <div className="navbar-inner-container-right">
        <NavBarButton to="settings" label="settings" />
      </div>
    </div>
  )
}

export default NavBar;
