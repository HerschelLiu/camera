import { useCamera } from '@renderer/hooks/useCamera'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

const { cameras } = await useCamera()

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = reactive({
      page: 'camera',
      deviceId: cameras[0]?.deviceId || '',
      borderWidth: '0px',
      borderColor: '#d35400',
      rounded: true
    })

    return { config }
  },
  {
    persist: true
  }
)
