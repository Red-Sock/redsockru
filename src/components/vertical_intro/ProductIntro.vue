<script setup lang="ts">

import {PropType, ref} from "vue";
import {verticals} from "@/entities/verticals.ts";
import {isMobile} from "@/service/font_size.ts";

const props = defineProps({
  vertical: {type: String as PropType<verticals>, required: true},
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
  backgroundClass = 'unknown-background'
}

function MouseEntered(): void {
  isSelected.value = true
}

function MouseLeft(): void {
  isSelected.value = false
}

const isMob = isMobile()

</script>

<template>
  <div
      @mouseenter="MouseEntered"
      @mouseleave="MouseLeft"
      :class="'product-intro '+ backgroundClass"
      :style="{
        flex: isSelected ? 5 : 4,
        flexDirection: isMob ? 'row' : 'column',
        justifyContent: isMob?'flex-start':'center',
        backgroundPosition:
          (props.vertical == verticals.Ruf) ? (isMob ? 'center bottom -8em' : 'center') :

            props.vertical == verticals.RedSock ? (isMob ? 'center top -2em' : 'center') :
            props.vertical == verticals.Verv ? (isMob ? 'center top -8em' : 'center') : 'center',
        backgroundSize: 'cover',
      }"
  >

    <div
        class="product-name"
        :style="{
         color: isSelected ? selectedHeaderColor : defaultHeaderColor,
         fontSize: isSelected? '1.125em': '1em',
       }"
    >
      {{ vertical }}
    </div>

    <div
        class="underscore"
        :style="{
              width: isMob ? '1px': '80%',
              height: isMob ? '80%': '1px',
              marginTop: isMob ? '':'4px',
              marginBottom: isMob ? '':'4px',
              marginLeft: !isMob ? '':'4px',
              marginRight: !isMob ? '':'4px',
        }"

    />

    <div
        class="description"
    >
      <p
          :style="{
            transform: isMob ?
               (isSelected ? (`translateX(0%)`):(`translateX(-100%)`)) :
               (isSelected ? (`translateY(0%)`):(`translateY(-100%)`)),
            }">
        Так как процентные размеры вычисляются относительно значений родительских элементов, то необходимо установить
        соответствующие значения для каждого элемента DOM. Единица измерения vh не требует установки значений по
        цепочке, так как её значение вычисляется напрямую относительно окна браузера:
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Basic properties */
.product-intro {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.25s linear;
}


.product-name {
  flex-direction: column;
  text-shadow: -5px -2px 0 #000, 2px -2px 0 #000, -5px 2px 0 #000, 2px 2px 0 #000;

  transition: all 0.1s linear;

  display: flex;
  align-items: center;
  width: 20vw;
}

.underscore {
  background-color: #e6d9d9;
}

.description {
  overflow: hidden;

  font-size: 0.5em;
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  box-sizing: border-box;

  text-align: center;
}

.description > p {
  margin: 0;
  padding-top: 0.5em;
  transition: all 0.29s linear;
  color: black;
  background-color: rgba(255, 255, 255, 0.55);
}


/* Backgrounds */
.redsock-background {
  background-image: url("@/assets/verticals/redsock.jpg");
}

.ruf-background {
  background-image: url("@/assets/verticals/raf.jpg");
}

.verv-background {
  background-image: url("@/assets/verticals/verv.jpg");
}

.unknown-background {
  background-image: url("@/assets/verticals/unknown.jpg");
}

</style>
