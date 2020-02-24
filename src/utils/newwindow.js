const { BrowserWindow } = window.require('electron').remote;
//var ipcMain = require('electron').ipcMain;

const openWindow = (url, data) => {
  /**
   * url (str): must be a complete path
   * **/
  let win = new BrowserWindow({width: 800, height: 600, icon: 'src/resources/methachart-favicon.ico'});
  //win.openDevTools();

  win.loadURL(url);
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