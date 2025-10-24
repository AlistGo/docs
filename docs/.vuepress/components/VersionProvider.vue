<script setup lang="ts">
import { ref, provide, onMounted } from "vue"

const VERSION_KEY = "alist-version"
const VERSION_LOADING_KEY = "alist-version-loading"

// 创建全局状态
const version = ref("")
const loading = ref(true)

// 提供给子组件使用
provide(VERSION_KEY, version)
provide(VERSION_LOADING_KEY, loading)

const loadVersion = async () => {
  try {
    const res = await fetch("https://dapi.alistgo.com/v0/version/latest")
    const data = await res.json()
    version.value = data.version
  } catch (error) {
    console.warn("Failed to fetch version information")
    version.value = "3.52.0"
  } finally {
    loading.value = false
  }
}

if (typeof window !== "undefined") {
  onMounted(() => {
    void loadVersion()
  })
} else {
  loading.value = false
}
</script>

<template>
  <slot></slot>
</template>
