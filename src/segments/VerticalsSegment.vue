<script setup lang="ts">

import ProductIntro from "@/components/vertical_intro/ProductIntro.vue";


</script>

<template>
  <div class="verticals">
      <ProductIntro
          name="RedSock"/>

      <ProductIntro
          name="Ruf"/>

      <ProductIntro
          name="Verv"/>
  </div>
</template>

<style scoped>

.verticals {
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: row;
  justify-content: center;
}

.verticals > * {
  width: 100%;
  height: 100%;
}

.red-sock-vert {
  background-image: url("@/assets/verticals/redsock.jpg");
  background-position: center;
  background-size: cover;

  flex: 1;
}

.ruf-vert{
  background-image: url("@/assets/verticals/raf.jpg");
  background-position: center;
  background-size: cover;

  flex: 1;
}

.verv-vert{
  background-position: center;
  background-size: cover;
  background-image: url("@/assets/verticals/verv.jpg");

  flex: 1;
}
</style>
