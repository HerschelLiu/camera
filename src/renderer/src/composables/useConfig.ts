import { reactive } from 'vue'
import { useCamera } from '@renderer/hooks/useCamera'

type ConfigType = {
  deviceId: string
}
const { cameras } = await useCamera()
const initConfig = reactive<ConfigType>({
  deviceId: cameras[0]?.deviceId
})
export default () => {
  const cache = localStorage.getItem('config')
  const config = cache ? (JSON.parse(cache) as ConfigType) : initConfig
  const updateConfig = () => {
    localStorage.setItem('config', JSON.stringify(config))
  }
  return { config, updateConfig }
}
