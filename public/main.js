const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/index.html');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

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
  // if (process.platform !== 'darwin') {
  app.quit();
  // }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific root process
// code. You can also put them in separate files and import them here.

var exec = require('child_process').exec;

module.exports = function myTest() {
  return new Promise(function(resolve, reject) {
    var cmd = 'ipconfig';
    exec(
      cmd,
      {
        maxBuffer: 1024 * 2000,
      },
      function(err, stdout, stderr) {
        if (err) {
          console.log(err);
          reject(err);
        } else if (stderr.lenght > 0) {
          reject(new Error(stderr.toString()));
        } else {
          console.log(stdout);
          resolve();
        }
      },
    );
  });
};
