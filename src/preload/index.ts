import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  quit: () => {
    ipcRenderer.send('quit')
  },
  drag: (opt: { x: number; y: number }) => {
    ipcRenderer.invoke('drag', opt)
  },
  setWindowSize: (opt: { aspectRatio: number; width: number; height: number }) => {
    ipcRenderer.send('setWindowSize', opt)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
