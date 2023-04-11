const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300,
        title: 'Kriptografi Uygulaması',
        icon: path.join(__dirname, 'assets/icon.jpg'),
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        },
        resizable: false
    });

    win.setMenu(null);
    win.setTitle('Kriptografi Uygulaması');

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    ipcMain.on('close', () => {
        win.close();
    });

    ipcMain.on('minimize', () => {
        win.minimize();
    });

    ipcMain.on('maximize', () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    win.on('closed', () => {
        win = null;
    });
}

try {
    app.on('ready', createWindow);

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (win === null) {
            createWindow();
        }
    });
} catch (e) {
    throw e;
}