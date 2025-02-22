<script setup lang="ts">

import {PropType} from "vue";
import {Vertical} from "@/entities/vertical.ts";
import {isMobile} from "@/service/font_size.ts";

const props = defineProps({
  vertical: {type: String as PropType<Vertical>, required: true},
  description: {type: String, required: true}
})


let backgroundClass: string | undefined;
const verticalsToBackgroundClass = new Map<Vertical, string>()
verticalsToBackgroundClass.set(Vertical.RedSock, 'redsock-background')
verticalsToBackgroundClass.set(Vertical.Ruf, 'ruf-background')
verticalsToBackgroundClass.set(Vertical.Verv, 'verv-background')

backgroundClass = verticalsToBackgroundClass.get(props.vertical)

if (!backgroundClass) {
  backgroundClass = 'unknown-background'
}

const isMob = isMobile()

</script>

<template>
  <div
      class="product-intro"
      :style="{
        flexDirection: isMob ? 'row' : 'column',
        backgroundPosition:
          (props.vertical == Vertical.Ruf) ? (isMob ? 'center bottom -8em' : 'center') :
            props.vertical == Vertical.RedSock ? (isMob ? 'center top -2em' : 'center') :
            props.vertical == Vertical.Verv ? (isMob ? 'center top -8em' : 'center') : 'center'
      }"
  >

    <div class="product-name">
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

    <div class="description">
      <p>
        {{ description }}
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
  box-sizing: border-box;

  border: black solid 2px;
}

.product-intro:hover .product-name {
  cursor: pointer;
  color: pink;
}

.product-name {
  flex-direction: column;
  text-shadow: -5px -2px 0 #000, 2px -2px 0 #000, -5px 2px 0 #000, 2px 2px 0 #000;

  transition: all 0.1s linear;

  display: flex;
  align-items: center;
  color: wheat;
  width: 100%;
}

.underscore {
  background-color: #e6d9d9;
}

.description {
  overflow: hidden;

  font-size: 0.5em;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  text-align: center;

}

.description > p {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

.product-intro:hover .description > p {
  transform: translateY(0%);
}

.description > p {
  margin: 0;
  padding: 0;
  color: black;
  background-color: rgba(255, 255, 255, 0.55);
  box-sizing: border-box;
  max-width: 30vw;
}

</style>
