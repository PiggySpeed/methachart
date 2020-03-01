import './index.less';
import React, {useState} from 'react';
import {Link} from '@reach/router';
import { LogoPanel } from '../';
import {Icon} from 'semantic-ui-react';

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
      <LogoPanel
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

export default NavBar;
