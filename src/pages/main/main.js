import './index.less';
import React from 'react';
import { Router, LocationProvider } from '@reach/router';
import { Provider } from 'react-redux';
import Chart from '../chart/chart';
import ChartOAT from '../chart/oat/oat';
import ChartMAR from '../chart/mar/mar';
import Settings from '../settings/settings';
import { NavBar } from '../../connected';
import { history } from '../../utils/history';
import store from '../../reducers';


function Main() {
  return (
    <Provider store={store}>
      <LocationProvider history={history}>
        <NavBar/>
        <Router className="main-container-router">
          <Chart path="chart">
            <ChartOAT path="oat" />
            <ChartMAR path="mar" />
          </Chart>
          <Settings path="settings" />
        </Router>
      </LocationProvider>
    </Provider>
  )
}

export default Main;
