<script setup lang="ts">

import {ref} from "vue";

import HomePage from "@/pages/HomePage.vue";
import MainLoader from "@/components/loaders/MainLoader.vue";

const isLoading = ref<Boolean>(true)

setTimeout(() => isLoading.value = false, 2000)

</script>

<template>
    <MainLoader
        v-show="isLoading"
        :isLoading=isLoading
    />

  <HomePage v-show="!isLoading"/>
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

  width: 100%;
  height: 100%;
}

</style>
