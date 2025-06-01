const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 100,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    resizable: false,
  });

  win.loadFile("index.html");
};

app.on("ready", () => {
  createWindow();
});
