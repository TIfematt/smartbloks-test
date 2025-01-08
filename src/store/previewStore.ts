import { createPinia } from 'pinia'
import { defineEditorStore } from './editorStore'

// Created a separate Pinia instance for the preview
export const previewPinia = createPinia()

// Created the store for the preview using the same definition
export const usePreviewStore = defineEditorStore() 