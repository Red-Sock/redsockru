<script setup lang="ts">

import ProductIntro from "@/components/vertical_intro/ProductIntro.vue";
import {verticals} from "@/entities/verticals.ts";
</script>

<template>
  <div class="verticals">
      <ProductIntro
          :vertical="verticals.RedSock"/>

      <ProductIntro
          :vertical="verticals.Ruf"/>

      <ProductIntro
          :vertical="verticals.Verv"/>
  </div>
</template>

<style scoped>
.verticals {
  display: flex;
  width: 100%;

  justify-content: center;
  flex-direction: var(--verticals-flex-direction);
}

.verticals > * {
  width: 100%;
  height: 100%;
}

</style>
