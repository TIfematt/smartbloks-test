<template>
   <div class="flex h-screen">
      <div class="w-1/5 bg-gray-50 border-r shadow">
         <Sidebar />
      </div>
      <div class="w-4/5 p-3">
         <div class="border h-full flex flex-col  rounded">
            <div class="h-16 px-3 flex items-center border-b">
               <div class="border px-2 py-1 bg-gray-100 flex item-center justify-center rounded">
                  <i class="ri-global-line text-gray-500"></i>
                  <small class="text-xs text-gray-600 leading-0 mt-1 ml-1">https://testsite.smartbloks.site</small>
               </div>
            </div>
            <iframe class="w-full flex-1" src="/preview" ref="previewFrame"></iframe>
         </div>
      </div>
   </div>
</template>

<script lang='ts' setup>
import Sidebar from '../components/Sidebar.vue'
import { useEditorStore } from '../store/editor'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const editorStore = useEditorStore()
const { title } = storeToRefs(editorStore)
const previewFrame = ref(null)

// This watcher listens for changes to the title and updates the preview frame accordingly (I maintained the use of iframe as noted in the task description)
// Another approach will be to use the preview component directly

watch(title, (newTitle) => {
    if (previewFrame.value) {
        previewFrame.value.contentWindow.postMessage({ type: 'update-title', title: newTitle }, '*')
    }
})
</script>

<style lang='postcss' scoped></style>