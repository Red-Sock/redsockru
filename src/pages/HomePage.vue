<script setup lang="ts">

import VerticalsSegment from "@/segments/Verticals.vue";
import AboutRedsock from "@/segments/AboutRedsock.vue";
import AboutRuf from "@/segments/AboutRuf.vue";
import AboutVerv from "@/segments/AboutVerv.vue";
import {Vertical} from "@/entities/vertical.ts";
import {onMounted, useTemplateRef} from "vue";

const aboutRedsock = useTemplateRef<HTMLElement>('about-redsock');
const aboutRuf = useTemplateRef<HTMLElement>('about-ruf');
const aboutVerv = useTemplateRef<HTMLElement>('about-verv');
onMounted(()=>{
  window.scrollTo(0, 0)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
})

function moveToDescription(vertical: Vertical) {
  switch (vertical) {
    case Vertical.RedSock:
      aboutRedsock.value?.scrollIntoView({behavior: 'smooth'});
      return
    case Vertical.Ruf:
      aboutRuf.value?.scrollIntoView({behavior: 'smooth'});
      return;
    case Vertical.Verv:
      aboutVerv.value?.scrollIntoView({behavior: 'smooth'});
      return;
  }

}


</script>

<template>
  <div class="home-page">
    <VerticalsSegment
        @openVertical="moveToDescription"
    />
    <div ref="about-redsock">
      <AboutRedsock/>
    </div>
    <div ref="about-ruf">
      <AboutRuf/>
    </div>
    <div ref="about-verv">
      <AboutVerv/>
    </div>
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
