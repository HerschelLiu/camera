import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      quit: () => void
      drag: (opt: { x: number; y: number }) => void
      setWindowSize: (opt: { aspectRatio: number; width?: number; height?: number }) => void
    }
  }
}
