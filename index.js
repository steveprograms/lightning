const { app, BrowserWindow, electron } = require('electron')
const util = require('util')
let win

function createWindow () {
  win = new BrowserWindow({ width: 1600, height: 1000 })
  win.loadFile('index.html')
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
