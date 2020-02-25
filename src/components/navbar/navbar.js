import './index.less';
import React from 'react';
import {Link} from '@reach/router';

function NavBar({location}) {
  console.log('nav location is ', location);
  return (
    <div className="navbar-container">
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
