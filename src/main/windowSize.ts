import { BrowserWindow, ipcMain } from 'electron'

// 获取出发事件的窗口
const getWin = (event: Electron.IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}
ipcMain.on('setWindowSize', (event: Electron.IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
  const win = getWin(event)
  console.log(opt)

  win.setAspectRatio(opt.aspectRatio)
  win.setBounds({ width: opt.width, height: opt.height })
})
