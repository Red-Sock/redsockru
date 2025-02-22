import {defineStore} from 'pinia'

export const useLoaderState = defineStore('loading', {
    state: () => ({mainLoader: false}),
    getters: {
        isMainLoading: (state) => state.mainLoader,
    },
    actions: {
        spinMainLoader() {
            this.mainLoader = true
        },
        stopMainLoader() {
            this.mainLoader = false
        }
    },
})
