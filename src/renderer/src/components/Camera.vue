<template>
  <main
    class="w-screen h-screen overflow-hidden"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border: solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video class="object-cover w-full h-full" :class="{ 'rounded-full': config.rounded }" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

// 使用 composable 组合 api持久化配置
// import useConfig from '@renderer/composables/useConfig'
// const { config } = useConfig()

// 使用 pinia
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

onMounted(async () => {
  const video = document.querySelector('video')!
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId
    }
  } as MediaStreamConstraints

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>
