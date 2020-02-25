import './index.less';
import React from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '..';

function NavBar() {
  return (
    <div className="navbar-container">
      <LogoPanel />
      <div className="navbar-inner-container-left">
        <Link to="chart/methadone">methadone</Link>
        <Link to="chart/suboxone">suboxone</Link>
        <Link to="chart/kadian">kadian</Link>
      </div>

      <div className="navbar-inner-container-right">
        <Link to="settings">settings</Link>
      </div>
    </div>
  )
}

export default NavBar;
