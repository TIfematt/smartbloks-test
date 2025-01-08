<template>
    <div class="flex p-10 h-full">
        <h4 class="text-4xl">{{ localTitle }}</h4>
    </div>
</template>

<script lang='ts' setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Initialize local title with a default value of 'Hello': (ref: Default value)
const localTitle = ref('Hello')

// Function to handle incoming messages
const handleMessage = (event: MessageEvent) => {
    // Checking if the message is intended to update the title
    if (event.data.type === 'update-title') {
        // Updating local title with the new title from the message
        localTitle.value = event.data.title
    }
}

// i Added event listener for messages when the component is mounted
onMounted(() => {
    window.addEventListener('message', handleMessage)
})

// Remove the event listener for messages when the component is unmounted
onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
})
</script>

<style lang='postcss' scoped></style>