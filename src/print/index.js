const ipcRenderer = window.require('electron').ipcRenderer;
import printLog from './printlog/printlog';

const FORMTYPE = {
  FORMTYPE_MAIN: 'FORMTYPE_MAIN',
  FORMTYPE_TEMP: 'FORMTYPE_TEMP'
};

/**
 * This index.js file gets bundled by webpack
 * into print.bundle.js, and used in index.html
 *
 * **/
ipcRenderer.on('asynchronous-reply', function(event, data) {
  if (data.header.formtype === FORMTYPE.FORMTYPE_MAIN) {
    printLog(data.logData, data.header);
  }
});
