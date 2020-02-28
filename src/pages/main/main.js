import './index.less';
import React from 'react';
import { Router, LocationProvider } from '@reach/router';
import { Provider } from 'react-redux';
import Chart from '../chart/chart';
import ChartMethadone from '../chart/methadone/methadone';
import ChartSuboxone from '../chart/suboxone/suboxone';
import ChartKadian from '../chart/kadian/kadian';
import ChartDilaudid from '../chart/dilaudid/dilaudid';
import Settings from '../settings/settings';
import { NavBar } from '../../components';
import { history } from '../../utils/history';
import store from '../../reducers';


function Main() {
  return (
    <Provider store={store}>
      <LocationProvider history={history}>
        <NavBar/>
        <Router className="main-container-router">
          <Chart path="chart">
            <ChartMethadone path="methadone" />
            <ChartSuboxone path="suboxone" />
            <ChartKadian path="kadian" />
            <ChartDilaudid path="dilaudid" />
          </Chart>
          <Settings path="settings" />
        </Router>
      </LocationProvider>
    </Provider>
  )
}

export default Main;
