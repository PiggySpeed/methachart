import './index.less';
import React from 'react';
import {
  Router,
  createMemorySource,
  createHistory,
  LocationProvider} from '@reach/router';
import { Provider } from 'react-redux';
import Chart from '../chart/chart';
import ChartMethadone from '../chart/methadone/methadone';
import ChartSuboxone from '../chart/suboxone/suboxone';
import ChartKadian from '../chart/kadian/kadian';
import Settings from '../settings/settings';
import { NavBar } from '../../components';
import store from '../../reducers';

const source = createMemorySource('/chart/methadone');
const history = createHistory(source);

function Main() {
  return (
    <Provider store={store}>
      <LocationProvider history={history}>
        <NavBar/>
        <Router className="main-container-router">
          <Chart default path="chart">
            <ChartMethadone default path="methadone" />
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
