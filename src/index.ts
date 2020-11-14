import { app, BrowserWindow, ipcMain } from 'electron';
import { writeFile } from 'fs';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('writeFile', function(event, arg) {
  
  const ttt = String.raw`import * as React from 'react';
  import * as antd from 'antd';
  import 'antd/dist/antd.css'
  
  const Liu = () => {
  
     return( <div>
          ${arg}
          </div>
      )
  }
  
  export default Liu;`;

  console.log(ttt )
  writeFile('/Users/wangjz/1-dev/upbos_git/easy-ide/src/data/Liu.tsx', ttt, function(err:any) {
    console.log(err)
    if(err) {
      console.log('写入失败')
    }else {
      console.log('写入成功')
    }
    event.sender.send('onWriteFile', true)
  })
})