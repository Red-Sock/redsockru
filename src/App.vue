<script setup lang="ts">

import {useLoaderState} from "@/app/store/loader.ts";

import MainLoader from "@/components/loaders/MainLoader.vue";
import {RouterView} from 'vue-router';

const loader = useLoaderState();
loader.spinMainLoader();

setTimeout(loader.stopMainLoader, 1500);
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
        name="content-transition"
        mode="out-in"
    >
      <component
          v-if="loader.isMainLoaded"
          :is="Component"
      />
    </transition>
  </router-view>

  <MainLoader/>

</template>


<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content-transition-enter-from,
.content-transition-leave-to {
  opacity: 0;
}

.content-transition-enter-to,
.content-transition-leave-from {
  opacity: 1;
}

.content-transition-enter-active {
  transition: opacity 1.5s ease-out;
  animation-delay: 5s;
}

</style>
