<script setup lang="ts">

import {PropType, ref} from "vue";
import {verticals} from "@/entities/verticals.ts";

const props = defineProps({
  vertical: {type: Object as PropType<verticals>, required: true},
})

const defaultHeaderColor = "wheat"
const selectedHeaderColor = "pink"
const isSelected = ref<boolean>(false)

let backgroundClass: string | undefined;
const verticalsToBackgroundClass = new Map<verticals, string>()
verticalsToBackgroundClass.set(verticals.RedSock, 'redsock-background')
verticalsToBackgroundClass.set(verticals.Ruf, 'ruf-background')
verticalsToBackgroundClass.set(verticals.Verv, 'verv-background')

backgroundClass = verticalsToBackgroundClass.get(props.vertical)

if (!backgroundClass) {
  backgroundClass = 'unknown'
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
        flex: isSelected ? 5 : 4,
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
      {{ vertical }}
    </div>

    <div class="underscore"/>

    <div
        class="description"
    >
        <p
            class="description-p"
            :style="{
             transform: isSelected?`translateY(0%)`:`translateY(-100%)`,
            }"
        >Так как процентные размеры вычисляются относительно значений родительских элементов, то необходимо установить
          соответствующие значения для каждого элемента DOM. Единица измерения vh не требует установки значений по
          цепочке, так как её значение вычисляется напрямую относительно окна браузера:
        </p>
    </div>
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

  overflow: hidden;
}

.product-name {

  flex-direction: column;
  text-shadow: -5px -2px 0 #000, 2px -2px 0 #000, -5px 2px 0 #000, 2px 2px 0 #000;

  transition: all 0.1s linear;

  display: flex;
  justify-content: center;
  align-items: center;
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

.unknown {
  background-image: url("@/assets/verticals/unknown.jpg");
}

.description {
  overflow: hidden;

  font-size: 0.35em;
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  box-sizing: border-box;

  text-align: center;

}

.description-p {
  margin: 0;
  padding-top: 0.5em;
  transition: all 0.19s linear;
}
</style>
