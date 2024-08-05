<script setup lang="ts">

import CenteredLoader from "@/components/loaders/CenteredLoader.vue";
import {ref} from "vue";

const isLoading = ref<Boolean>(true)

setTimeout(()=>isLoading.value = false, 2000)

</script>


<template>
  <CenteredLoader
    :isLoading=isLoading
  />
</template>



<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
}

.header-transition-enter-active {
  transition: all 2s ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
.header-transition-enter-from {
  opacity: 0;
  transform: translateY(-100%)
}
.header-transition-enter-to {
  opacity: 1;
  transform: translateY(0%)
}
.header-transition-leave-active {
  transition: all 2s ease-out;
}
.header-transition-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
