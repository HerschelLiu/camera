<template>
  <main class="p-5 bg-[#2c3e50] w-screen h-screen flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm opacity-70">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="请选择设备" filterable>
      <el-option v-for="item in cameras" :key="item.deviceId" :label="item.label" :value="item.deviceId" size="large" />
    </el-select>

    <!-- 使用 composable 组合 api持久化配置 -->
    <!-- <el-button type="success" size="large" @click="onSubmit">保存</el-button> -->

    <el-input v-model="config.borderWidth" placeholder="边框宽度" />
    <el-input v-model="config.borderColor" placeholder="边框颜色" />
  </main>
</template>

<script lang="ts" setup>
import { useCamera } from '@renderer/hooks/useCamera'

// 使用 composable 组合 api持久化配置
// import useConfig from '@renderer/composables/useConfig'
// const { config, updateConfig } = useConfig()

// 使用 pinia
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

const { cameras } = await useCamera()

// const onSubmit = () => {
//   使用 composable 组合 api持久化配置
//   updateConfig()
// }
</script>
