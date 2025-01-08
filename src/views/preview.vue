<template>
   <Site/>
</template>

<script lang='ts' setup>
import Site from '../components/site.vue'
import { previewPinia } from '../store/previewStore'
import { createApp } from 'vue'
import { markRaw } from 'vue'

// Installed the preview Pinia instance
const app = markRaw(createApp({}))
app.use(previewPinia)
</script>

<style lang='postcss' scoped>
</style>