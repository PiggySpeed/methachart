import './index.less';
import React, {useState} from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '..';
import {Icon} from 'semantic-ui-react';

function HoverNav({hover, onMouseEnter, onMouseLeave}) {
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`navbar-hover-nav ${hover ? 'hover' : ''}`}>
      <div className="nav-mock-logo-container">
        <div className="nav-mock-logo logo-1">A</div>
      </div>
      <div className="nav-mock-logo-container">
      <div className="nav-mock-logo logo-2">R</div>
      </div>
      <div className="nav-mock-logo-container">
        <div className="nav-mock-logo logo-3">N</div>
      </div>
    </div>
  )
}

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
      <HoverNav hover={hover}
                onMouseLeave={handleMouseLeave}/>
      <LogoPanel
        onMouseOver={handleMouseOver}
      />
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
