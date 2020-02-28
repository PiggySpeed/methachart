import './index.less';
import React from 'react';
import { Router, LocationProvider } from '@reach/router';
import { Provider } from 'react-redux';
import Chart from '../chart/chart';
import ChartMethadone from '../chart/methadone/methadone';
import ChartSuboxone from '../chart/suboxone/suboxone';
import ChartKadian from '../chart/kadian/kadian';
import Settings from '../settings/settings';
import { NavBar } from '../../components';
import store from '../../reducers';
import {history} from '../../utils/history';


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
          </Chart>
          <Settings path="settings" />
        </Router>
      </LocationProvider>
    </Provider>
  )
}

export default Main;
