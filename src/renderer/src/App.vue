<script setup lang="ts">
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import { useConfigStore } from './stores/useConfigStore'
import useDrag from '@renderer/composables/useDrag'
import { onMounted } from 'vue'

// 拖拽窗口
const { drag } = useDrag()
drag.run()

const setWindowSize = () => {
  if (config.rounded) {
    window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  } else {
    window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 280 })
  }
}
const changeRound = () => {
  config.rounded = !config.rounded
  setWindowSize()
}

onMounted(() => {
  setWindowSize()
})

const quit = () => {
  window.api.quit()
}

const { config } = useConfigStore()
</script>

<template>
  <!-- group为Tailwindcss的编组 -->
  <main class="relative bg-transparent group" @contextmenu="quit">
    <section>
      <!-- group-hover:block当组 hover 时显示 -->
      <setting-icon
        v-if="config.page === 'camera'"
        theme="outline"
        size="24"
        class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-90 cursor-pointer z-10 hidden group-hover:block"
        @click="config.page = 'setting'"
      />
      <camera-five
        v-if="config.page === 'setting'"
        theme="outline"
        size="24"
        class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-90 cursor-pointer"
        @click="config.page = 'camera'"
      />
      <inner-shadow-top-left
        v-if="config.page === 'camera'"
        theme="outline"
        size="24"
        class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-90 cursor-pointer z-10 hidden group-hover:block"
        @click="changeRound"
      />
    </section>
    <section>
      <Camera v-if="config.page === 'camera'" />
      <Suspense v-else>
        <Setting />
      </Suspense>
    </section>
  </main>
</template>
