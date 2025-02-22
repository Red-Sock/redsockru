<script setup lang="ts">

import ProductIntro from "@/components/vertical_intro/ProductIntro.vue";
import {Vertical} from "@/entities/vertical.ts";
import {defineEmits} from 'vue'

const emit = defineEmits(['openVertical'])

function openVertical(vertical: Vertical) {
  emit('openVertical', vertical)
}
</script>

<template>
  <div class="verticals">
    <div class="vertical redsock-background">
      <ProductIntro
          @click="()=>{openVertical(Vertical.RedSock)}"
          :vertical="Vertical.RedSock"
          description="Набор инструментов разработчика"
      />
    </div>
    <div class="vertical ruf-background">
      <ProductIntro
          @click="()=>{openVertical(Vertical.Ruf)}"
          :vertical="Vertical.Ruf"
          description="Группа пользовательских приложений"
      />
    </div>
    <div class="vertical verv-background">
      <ProductIntro
          @click="()=>{openVertical(Vertical.Verv)}"
          :vertical="Vertical.Verv"
          description="Легковесный инструмент развёртывания"
      />
    </div>
  </div>
</template>

<style scoped>
.verticals {
  display: flex;
  width: 100%;

  justify-content: center;
  flex-direction: var(--verticals-flex-direction);

  transition: all 0.29s linear;
}

.vertical {
  width: 100%;
  flex: 4;
  background-position: center;
  background-size: cover;
  transition: all 0.25s linear;

}

.vertical:hover {
  flex: 5;
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
