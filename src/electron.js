const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const os = require('os');

const IS_DEV = process.env.NODE_ENV === 'development';

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: IS_DEV ? 1600 : 800,
    height: 750,
    // icon: './assets/methachart-favicon.ico',
    icon: `file://${path.join(__dirname, './assets/methachart-favicon.ico')}`,
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

ipcMain.on('open-new-window', (event, data) => {
  let win = new BrowserWindow({width:960, height:540});
  win.loadURL(`file://${__dirname}/` + `.html`)
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
