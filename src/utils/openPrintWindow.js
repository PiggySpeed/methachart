const { BrowserWindow } = window.require('electron').remote;
import { IS_DEV, PRINT_URL } from '../constants/constants';


/**
 * Main steps to get electron multi-windows working:
 * - webpack multiple entry points
 * - target: node (allows recognizing require and others)
 * - output.filename: [name].bundle.js
 * - index.html imports the correct bundle, based on prod/dev url roots
 * - loadURL: should be dev localhost server (dev) or file path (prod)
 * - BrowserWindow webPreferences: webSecurity: false, nodeIntegration: true
 * **/
export default function openPrintWindow(data) {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'src/resources/methachart-favicon.ico',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  });
  win.on('closed', () => win = null);
  if (IS_DEV) win.openDevTools();

  win.loadURL(PRINT_URL)
    .catch(err => console.error(err));

  // Printing
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('asynchronous-reply', data);
    // win.webContents.print({}, (error) => {
    //   if (error) throw error;
    // });
  });
};
