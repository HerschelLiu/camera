import { app, ipcMain, Menu } from 'electron'
import type { MenuItemConstructorOptions } from 'electron'

ipcMain.on('quit', () => {
  const template = [
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
