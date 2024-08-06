<script setup lang="ts">

import {ref} from "vue";

const props = defineProps({
  name: {type: String, required: true},
})

const defaultHeaderColor = "wheat"
const selectedHeaderColor = "pink"
const isSelected = ref<boolean>(false)

let backgroundClass = ''

switch (props.name) {
  case 'RedSock':
    backgroundClass = 'redsock-background';
    break;
  case 'Ruf':
    backgroundClass = 'ruf-background';
    break;
  case 'Verv':
    backgroundClass = 'verv-background';
    break;
}

function MouseEntered(): void {
  isSelected.value = true
}

function MouseLeft(): void {
  isSelected.value = false
}


</script>

<template>
  <div
      @mouseenter="MouseEntered"
      @mouseleave="MouseLeft"
      :class="'product-intro '+ backgroundClass"
      :style="{
        flex: isSelected ? 3 : 2,
      }"
  >
    <div
        class="product-name"
        :style="{
         color: isSelected ? selectedHeaderColor : defaultHeaderColor,
         fontSize: isSelected? '1.125em': '1em',
         width: isSelected ? '100%' : '',
       }"
    >
      {{ name }}
    </div>

    <div class="underscore"/>
  </div>
</template>

<style scoped>
.product-intro {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.25s linear;

  background-position: center;
  background-size: cover;
}

.product-name {
  flex-direction: column;
  text-shadow: -5px -2px 0 #000, 2px -2px 0 #000, -5px 2px 0 #000, 2px 2px 0 #000;

  transition: all 0.1s linear;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.underscore {
  width: 80%;
  height: 1px;
  border-top: #e6d9d9 solid 4px;
}

.redsock-background {
  background-image: url("@/assets/verticals/redsock.jpg");
}

.ruf-background {
  background-image: url("@/assets/verticals/raf.jpg");
}

.verv-background {
  background-image: url("@/assets/verticals/verv.jpg");
}

</style>
