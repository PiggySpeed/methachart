const { BrowserWindow } = window.require('electron').remote;
const IS_DEV = true;
//var ipcMain = require('electron').ipcMain;

const openWindow = (url, data) => {
  /**
   * url (str): must be a complete path
   * **/
  let win = new BrowserWindow({width: 800, height: 600, icon: 'src/resources/methachart-favicon.ico'});
  win.openDevTools();

  const newUrl = `https://localhost:8080/src/components/print/print.html`;
  console.log(newUrl);
  // TODO: fix this
  win.loadURL(
    IS_DEV
    ? 'http://localhost:8000'
    : `file://${path.join(__dirname, '../dist/index.html')}`);
  win.on('closed', () => {
    win = null
  });

  // Printing
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('asynchronous-reply', data);
    win.webContents.print({}, (error) => {
      if (error) throw error;
    });
  });

  //win.webContents.on('did-finish-load', () => {
  //  // Use default printing options
  //  win.webContents.print({}, (error) => {
  //    if (error) throw error;
  //  });
  //});


};
export default openWindow;
