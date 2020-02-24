import './index.less';
import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import Chart from '../chart/chart';
import Settings from '../settings/settings';
import store from '../../reducers';

function Main() {
  return (
    <Provider store={store}>
      <Router className="main-container-router">
        <Chart default path="/" />
        <Settings path="settings" />
      </Router>
    </Provider>
  )
}

export default Main;
