const { BrowserWindow } = window.require('electron').remote;
const path = require('path');
const IS_DEV = process.env.NODE_ENV === 'development';

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
    width: IS_DEV ? 1600 : 800,
    height: 600,
    // icon: './assets/methachart-favicon.ico',
    icon: `file://${path.join(__dirname, './assets/methachart-favicon.ico')}`,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  });
  win.on('closed', () => win = null);

  if (IS_DEV) {
    win.openDevTools();
  }

  const PRINT_URL = IS_DEV
     ? 'http://localhost:8000/print.html'
     : `file://${path.join(__dirname, '../build/print.html')}`;

  win.loadURL(PRINT_URL)
    .catch(err => console.error(err));

  // Printing
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('asynchronous-reply', data);
    if (!IS_DEV) {
      win.webContents.print({}, (error) => {
        if (error) throw error;
      });
    }
  });
};
