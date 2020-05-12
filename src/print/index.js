import './index.css';
const ipcRenderer = window.require('electron').ipcRenderer;
import printLog from './printlog/printlog';
import printMAR from './printmar/printmar';
import printTempLog from './printtemplog/printtemplog';
import {FORMTYPE_MAR} from '../constants/constants';

const FORMTYPE = {
  FORMTYPE_MAIN: 'FORMTYPE_MAIN',
  FORMTYPE_TEMP: 'FORMTYPE_TEMP',
  FORMTYPE_MAR:  'FORMTYPE_MAR'
};

/**
 * This index.js file gets bundled by webpack
 * into print.bundle.js, and used in index.html
 *
 * **/
ipcRenderer.on('asynchronous-reply', function(event, data) {
  if (data.header.formtype === FORMTYPE.FORMTYPE_MAIN) {
    printLog(data.logData, data.header);
  } else if (data.header.formtype === FORMTYPE_MAR) {
    printMAR(data.header);
  } else {
    printTempLog(data.header);
  }
});
