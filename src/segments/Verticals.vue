<script setup lang="ts">
import {defineEmits} from 'vue'

import {Vertical} from "@/entities/vertical.ts";
import ProductIntro from "@/components/vertical_intro/ProductIntro.vue";

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

/*Mobile*/
@media (max-width: 800px) {
  .verticals {
    flex-direction: column;
  }

  .redsock-background {
    background-position: center top -2em;
  }

  .ruf-background {
    background-position: center bottom -8em;
  }

  .verv-background {
    background-position: top;
  }
}

/*Desktop*/
@media (min-width: 800px) {
  .verticals {
    flex-direction: row;
  }

  .redsock-background, .ruf-background, .verv-background {
    background-position: center;
  }
}

</style>
