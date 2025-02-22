<script setup lang="ts">

import {PropType} from "vue";
import {Vertical} from "@/entities/vertical.ts";

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

</script>

<template>
  <div class="product-intro">
    <div class="name">
      {{ vertical }}
    </div>

    <div class="underscore"/>

    <div class="description-container">
      <div class="description">
        {{ description }}
      </div>
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
  justify-content: start;

  box-sizing: border-box;

  border: black solid 2px;
}

.name {
  flex-direction: column;
  text-shadow: -5px -2px 0 #000, 2px -2px 0 #000, -5px 2px 0 #000, 2px 2px 0 #000;

  display: flex;
  align-items: center;

  color: wheat;

  width: 100%;
}

.product-intro:hover .name {
  cursor: pointer;
  color: pink;
}

.underscore {
  background-color: #e6d9d9;
}

.description-container {
  overflow: hidden;

  font-size: 0.5em;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  text-align: center;

}

.description {
  margin: 0;
  padding: 0;
  color: black;
  background-color: rgba(255, 255, 255, 0.55);
  box-sizing: border-box;
  max-width: 30vw;

  transition: transform 0.3s ease-in-out;
}


/*Mobile*/
@media (max-width: 800px) {
  .product-intro {
    flex-direction: row;
  }

  .name {
    width: 30vw;
  }

  .underscore {
    width: 1px;
    height: 80%;
    margin: 0 4px;
  }

  .description {
    transform: translateX(-100%);
  }

  .product-intro:hover .description {
    transform: translateY(0%);
  }
}

/*Desktop*/
@media (min-width: 800px) {
  .product-intro {
    flex-direction: column;
  }

  .name {
    margin-top: 45vh;
  }

  .underscore {
    width: 90%;
    height: 1px;
    margin: 4px 0;
  }

  .description {
    transform: translateY(-100%);
  }

  .product-intro:hover .description {
    transform: translateX(0%);
  }
}

</style>
