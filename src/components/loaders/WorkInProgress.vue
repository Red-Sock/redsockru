<template>
  <h1
      :class="'work-in-progress '">
    Work in progress
  </h1>
</template>


<script>
export default {
  name: 'WorkInProgress'
}
</script>


<style scoped>

.work-in-progress {
  animation: work-in-progress-anim 4s ease infinite;
  background: linear-gradient(90deg, red, blue, green);
  background-size: 400% 400%;
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10em;
  height: 1.5em;
}

@keyframes work-in-progress-anim {
  0% {
    background-position: 0 50%;
    color: black;
  }
  50% {
    background-position: 100% 50%;
    color: white;
  }
  100% {
    background-position: 0 50%;
    color: black;
  }
}


.hide-wip {
  animation: hide-wip-anim 2s ease-out 1;
  animation-fill-mode: forwards;
}

@keyframes hide-wip-anim {
  0% {
    transform: translateY(0em);
  }
  10% {
    transform: translateY(2em);
  }
  99% {
    transform: translateY(-8em);
  }
  100% {
    opacity: 0;
  }
}


</style>
