import { defineStore } from "pinia";

export const defineEditorStore = () => defineStore('editor', {
    state: () => ({
        title: 'Hello'
    }),
    actions: {
        updateTitle(newTitle: string) {
            this.title = newTitle
        }
    }
})

// Created the store for the main app
export const useEditorStore = defineEditorStore() 