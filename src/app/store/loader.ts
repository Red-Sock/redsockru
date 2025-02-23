import {defineStore} from 'pinia'

export const useLoaderState = defineStore('loading', {
    state: () => ({
        mainLoader: false,
        mainLoaded: false,
    }),
    getters: {
        isMainLoading: state => state.mainLoader,
        isMainLoaded: state => state.mainLoaded
    },
    actions: {
        spinMainLoader() {
            this.mainLoader = true
        },
        stopMainLoader() {
            this.mainLoader = false
        },

        setMainLoaded(mainLoaded: boolean) {
            this.mainLoaded = mainLoaded
        }
    },
})
