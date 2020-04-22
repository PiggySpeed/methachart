const { app, BrowserWindow, ipcMain } = require('electron');
const IS_DEV = true;

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 600,
    height: 730,
    webPreferences: {
      nodeIntegration: true
    },
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  win.loadURL(
    IS_DEV
    ? 'http://localhost:8000'
    : `file://${path.join(__dirname, '../dist/index.html')}`
  );

  // Open the DevTools.
  win.webContents.openDevTools()
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
