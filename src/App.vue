<script setup lang="ts">

import {ref} from "vue";

import HomePage from "@/pages/HomePage.vue";
import MainLoader from "@/components/loaders/MainLoader.vue";

const isLoading = ref<boolean>(true)

setTimeout(() => isLoading.value = false, 2000)
</script>

<template>
  <transition name="content-transition">
    <div
        class="content"
        v-show="!isLoading">
            <HomePage />
    </div>
  </transition>

    <MainLoader
        :isLoading=isLoading
    />
</template>


<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  width: 100%;
  height: 100%;
}

.content-transition-enter-from {
 opacity: 0;
}
.content-transition-enter-to {
  opacity: 1;
}

.content-transition-enter-active {
  transition: opacity 0.5s;
  transition-delay: 3s;
}

</style>
