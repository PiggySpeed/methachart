const { ipcRenderer } = window.require('electron');

export default function openPrintWindow(data) {
  ipcRenderer.send('open-print-window', data)
};
