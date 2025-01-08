<template>
    <div class="flex p-10 h-full">
        <h4 class="text-4xl">{{ title }}</h4>
    </div>
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted } from 'vue'
import { usePreviewStore } from '../store/previewStore'
import { storeToRefs } from 'pinia'

const previewStore = usePreviewStore()
const { title } = storeToRefs(previewStore)

// Handle store updates from the parent window
const handleMessage = (event: MessageEvent) => {
    if (event.data.type === 'store-update') {
        // Update the preview store state
        previewStore.updateTitle(event.data.state.title)
    }
}

onMounted(() => {
    window.addEventListener('message', handleMessage)
})

onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
})
</script>

<style lang='postcss' scoped></style>