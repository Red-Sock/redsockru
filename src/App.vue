<script setup lang="ts">

import {useLoaderState} from "@/app/store/loader.ts";

import MainLoader from "@/components/loaders/MainLoader.vue";
import {RouterView} from 'vue-router';

const loader = useLoaderState();
loader.spinMainLoader();

setTimeout(loader.stopMainLoader, 2000);
</script>

<template>
  <transition name="content-transition">
    <router-view></router-view>
  </transition>

  <MainLoader
      :isLoading=loader.isMainLoading
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
