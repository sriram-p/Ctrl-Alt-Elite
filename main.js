const electron = require('electron')
const path = require('path')
const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')


let win;

function createWindow () {
  // Create the browser window.
    win = new BrowserWindow({
    width: 800,
    height: 600,
        show:false,
    icon: path.join(__dirname, './public/images/nineleaps_logo.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
//   win.loadFile(path.join(__dirname, './html/index.html'));
  win.loadURL(url.format({
    pathname: path.join(__dirname, './public/html/index.html'),
    protocol: 'file',
    slashes: true
  }));

    win.once('ready-to-show', () => {
        win.show()
    });

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })


app.on('ready', createWindow)
