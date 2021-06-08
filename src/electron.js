const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const os = require('os');

const IS_DEV = process.env.NODE_ENV === 'development';
const FAVICON_URL = `file://${path.join(__dirname, './assets/methachart_favicon.ico')}`;

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: IS_DEV ? 1600 : 800,
    height: 750,
    icon: FAVICON_URL,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  if (!IS_DEV) {
    win.setMenu(null);
  }

  win.loadURL(
    IS_DEV
    ? 'http://localhost:8000'
    : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (IS_DEV) {
    // redux devtools - uncomment the following lines if you want
    // to use redux devtools, after following the instructions below
    // https://www.electronjs.org/docs/tutorial/devtools-extension
    // BrowserWindow.addDevToolsExtension(
    //   path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0')
    // );

    win.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});


/**
 * Main steps to get electron multi-windows working:
 * - webpack multiple entry points
 * - target: node (allows recognizing require and others)
 * - output.filename: [name].bundle.js
 * - index.html imports the correct bundle, based on prod/dev url roots
 * - loadURL: should be dev localhost server (dev) or file path (prod)
 * - BrowserWindow webPreferences: nodeIntegration: true, contextIsolation: false
 * **/
ipcMain.on('open-print-window', (event, data) => {
  let win = new BrowserWindow({
    width: IS_DEV ? 1600 : 800,
    height: 600,
    // icon: './assets/methachart-favicon.ico',
    icon: FAVICON_URL,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.on('closed', () => win = null);

  if (IS_DEV) {
    win.openDevTools()
  }

  const PRINT_URL = IS_DEV
      ? 'http://localhost:8000/print.html'
      : `file://${path.join(__dirname, './build/print.html')}`;

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
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
