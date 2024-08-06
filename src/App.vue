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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;

  width: 100%;
  height: 100%;
}

* {
  font-family: Perun, sans-serif;
}

@font-face {
  font-family: "Perun";
  src: local("Perun"),
  url(./fonts/Perun.ttf) format("truetype");
}

</style>
