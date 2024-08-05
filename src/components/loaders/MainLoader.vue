<script setup lang="ts">

import BasicLoader from "@/components/loaders/BasicLoader.vue";

const bricks = [
  // Карта логотип
  // R
  {x: 0, y: 0, x_to: 0, y_to: 1},
  {x: 0, y: 0, x_to: 1, y_to: 0},
  {x: 0, y: 1, x_to: 1, y_to: 1},
  {x: 1, y: 0, x_to: 1, y_to: 1},
  {x: 0, y: 1, x_to: 0, y_to: 2},
  {x: 0, y: 1, x_to: 1, y_to: 2},
  // E
  {x: 2, y: 0, x_to: 3, y_to: 0},
  {x: 2, y: 0, x_to: 2, y_to: 1},
  {x: 2, y: 1, x_to: 3, y_to: 1},
  {x: 2, y: 1, x_to: 2, y_to: 2},
  {x: 2, y: 2, x_to: 3, y_to: 2},
  // D
  {x: 4, y: 0, x_to: 4, y_to: 1},
  {x: 4, y: 0, x_to: 5, y_to: 1},
  {x: 4, y: 1, x_to: 4, y_to: 2},
  {x: 5, y: 1, x_to: 5, y_to: 2},
  {x: 4, y: 2, x_to: 5, y_to: 2},
  // S
  {x: 0, y: 3, x_to: 1, y_to: 3},
  {x: 0, y: 3, x_to: 0, y_to: 4},
  {x: 0, y: 4, x_to: 1, y_to: 4},
  {x: 1, y: 4, x_to: 1, y_to: 5},
  {x: 1, y: 5, x_to: 0, y_to: 5},
  // O
  {x: 2, y: 3, x_to: 3, y_to: 3},
  {x: 2, y: 3, x_to: 2, y_to: 4},
  {x: 2, y: 4, x_to: 2, y_to: 5},
  {x: 2, y: 5, x_to: 3, y_to: 5},
  {x: 3, y: 5, x_to: 3, y_to: 4},
  {x: 3, y: 4, x_to: 3, y_to: 3},
  // C
  {x: 4, y: 3, x_to: 5, y_to: 3},
  {x: 4, y: 3, x_to: 4, y_to: 4},
  {x: 4, y: 4, x_to: 4, y_to: 5},
  {x: 4, y: 5, x_to: 5, y_to: 5},
  // K
  {x: 6, y: 3, x_to: 6, y_to: 4},
  {x: 6, y: 4, x_to: 7, y_to: 3},
  {x: 6, y: 4, x_to: 7, y_to: 5},
  {x: 6, y: 4, x_to: 6, y_to: 5},
]
const isLoading = defineModel('isLoading', {type: Boolean, default: true})

</script>

<template>
  <transition name="loader-transition">
    <div class="loader-static" v-show="isLoading">
      <BasicLoader
          :isLoading="isLoading"
          :height="6"
          :width="8"
          :stripes="bricks"
          unique-name="centered-loader"
      />
    </div>
  </transition>
</template>


<style scoped>

.loader-static {
  position: fixed;
  left: 50%;
  right: 50%;
  top: 10%;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.loader-transition-leave-active {
  animation: loader-transition-anim 1.5s ease-out 1;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  z-index: 0;
}

@keyframes loader-transition-anim {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(10%);
  }
  99% {
    transform: translateY(-200%);
  }
  100% {
    opacity: 0;
  }
}


</style>
