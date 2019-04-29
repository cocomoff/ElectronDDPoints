'use strict';

const {app, BrowserWindow, ipcMain} = require("electron");
const fs = require('fs');

let mainWindow

// Electron のウィンドウを生成する関数
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800, height: 600,
    useContentSize: true,
    webPreferences:{
       nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  });
}

// Electronの初期化完了後に、ウィンドウ生成関数を実行
app.on('ready', createWindow)


// Mac OS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
