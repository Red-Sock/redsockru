<script setup lang="ts">

import VerticalsSegment from "@/segments/Verticals.vue";
import AboutRedsock from "@/segments/AboutRedsock.vue";
import AboutRuf from "@/segments/AboutRuf.vue";
import AboutVerv from "@/segments/AboutVerv.vue";
import {Vertical} from "@/entities/vertical.ts";

function moveToDescription(vertical: Vertical) {
  console.log(vertical)
}

</script>

<template>
  <div class="home-page">
    <VerticalsSegment
      @openVertical="moveToDescription"
    />
    <div class="">
      <AboutRedsock/>
    </div>
    <AboutRuf/>
    <AboutVerv/>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  height: 100%;
}

.home-page > * {
  height: 100vh;
  overflow: auto;
}

</style>
