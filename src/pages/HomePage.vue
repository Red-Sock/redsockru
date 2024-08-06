<script setup lang="ts">

import VerticalsSegment from "@/segments/VerticalsSegment.vue";

</script>

<template>
  <div class="home-page">
    <VerticalsSegment/>
  </div>
</template>

<style scoped>
.home-page {
  font-size: 1.5em;
  width: 100%;
  height: 100%;
}

.home-page > * {
  height: 100vh;
  overflow: auto;
}

</style>
