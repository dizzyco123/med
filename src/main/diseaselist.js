const { app, BrowserWindow } = require('electron');
const { Console } = require('node:console');
const path = require('node:path');
app.disableHardwareAcceleration()

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

function createWindow(win, dir, htm) {
  var htmPath = path.join("src/main", dir, htm);
  win.loadFile(htmPath);

  win.once('ready-to-show', () => {
    win.show()
  });
};

var mainWindow;
var mainWindowInfo = {
  width: 640,
  height: 480,
  minWidth: 320,
  minHeight: 480,
  show: false,
};

app.whenReady().then(() => {
  mainWindow = new BrowserWindow(mainWindowInfo);
  createWindow(mainWindow, "pages", "diseaselist.html");

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = new BrowserWindow(mainWindowInfo);
      createWindow(mainWindow, "pages", "diseaselist.html");
    }
  });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function sortABC(ul) {
  var list = document.getElementById(ul);

  Array.from(list.getElementsByTagName("LI"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => list.appendChild(li));
};

function filterList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-bar');
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName('l-div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("l-item")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    };
  };
};