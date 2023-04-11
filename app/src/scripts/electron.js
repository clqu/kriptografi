const { ipcRenderer } = require('electron');

const closeBtn = document.getElementById('close');
const minimizeBtn = document.getElementById('minimize');
const maximizeBtn = document.getElementById('maximize');

closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close');
});

minimizeBtn.addEventListener('click', () => {
    ipcRenderer.send('minimize');
});

maximizeBtn.addEventListener('click', () => {
    ipcRenderer.send('maximize');
});