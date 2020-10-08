const {app, BrowserWindow, Menu} = require('electron')

const path = require('path')
const url = require('url')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Principal',
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.once("ready-to-show", () => {
        mainWindow.show()
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

})