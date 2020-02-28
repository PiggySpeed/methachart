import {createHistory, createMemorySource} from '@reach/router';

const source = createMemorySource('/chart/methadone');

export const history = createHistory(source);
export const navigate = history.navigate;
