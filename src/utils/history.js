import {createHistory, createMemorySource} from '@reach/router';

const source = createMemorySource('/chart/oat');

export const history = createHistory(source);
export const navigate = history.navigate;
