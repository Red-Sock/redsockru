<script setup lang="ts">

import {PropType, ref} from "vue";
import {getFontSizePx} from "@/service/fint_size.ts";

const CIRCLE_FADES = 'circle-fades';
const RECT_AXIS_MOVE_ANIM = {
  TO_BOT: 'rect-to-bot',
  TO_TOP: 'rect-to-top',
  TO_LEFT: 'rect-to-left',
  TO_RIGHT: 'rect-to-right',
};

export interface stripe {
  x: number,
  y: number,
  x_to: number,
  y_to: number,
}

const props = defineProps({
  uniqueName: String,
  width: {type: Number, required: true},
  height: {type: Number, required: true},
  stripes: {type: Object as PropType<stripe[]>, required: true},
  backgroundColor: String,
  isLoading: Boolean,
})

interface rect {
  x: number, // x of cell rect comes from
  y: number, // y of cell rect comes from
  width: number, // in ems
  height: number, // in ems
  additionalClassName: string // defines direction
}

let rectsDrawn = ref<rect[]>([])

interface circle {
  x: string,
  y: string,
  additionalClassName: string,
}

let circlesDrawn: circle[] = []

const animationLengthMS = 1200
const animationLengthMScss = animationLengthMS + 'ms'
const animationLengthMScssSlow = animationLengthMS * 2 + 'ms'

interface diagRect {
  x: number,
  y: number,
  angle: number,
  width: number,
  height: number,
  cx: number,
  cy: number,
}

const logoDiagRects = ref<diagRect[]>([]) // rects that is rendered diagonally
let logoRects: rect[] = [] // same as above but used for final logo draw

// in ems
const radius = 2
const stepBetweenCells = 6.5
const rectW = 3.25
const rectH = 2
const directions = [
  'rect-to-right-and-hide',
  'rect-to-left-and-hide',
  'rect-to-bot-and-hide',
  'rect-to-top-and-hide',
]


const fontSize = getFontSizePx()
window.addEventListener("resize", function() {
  loop()
});

function loop() {
  addRect()

  if (props.isLoading) {
    setTimeout(loop, Math.floor(Math.random() * (animationLengthMS / 20)))
    return
  }

  buildLogo()
  setTimeout(() => {
    rectsDrawn.value = []
  }, animationLengthMS * 2)
}

function addRect() {
  if (rectsDrawn.value.length > (props.width * props.height) * 2) {
    return
  }
  const direction = Math.floor(Math.random() * 4)

  let rct = {
    x: Math.floor(Math.random() * (props.width)),
    y: Math.floor(Math.random() * props.height),
    width: 3.25,
    height: 2,
    additionalClassName: ''
  }

  if (direction < 2) {
    if (rct.x === props.width - 1) {
      rct.additionalClassName = directions[1]
    } else if (rct.x === 0) {
      rct.additionalClassName = directions[0]
    } else {
      rct.additionalClassName = directions[direction]
    }
  } else {
    if (rct.y === (props.height - 1)) {
      rct.additionalClassName = directions[2]
    } else if (rct.y === 0) {
      rct.additionalClassName = directions[3]
    } else {
      rct.additionalClassName = directions[direction]
    }
    [rct.width, rct.height] = [rct.height, rct.width]
  }
  rct.additionalClassName += ' rect fading'

  rectsDrawn.value.push(rct)

  // remove rect after animation is done
  setTimeout(() => {
    const index = rectsDrawn.value.indexOf(rct);
    if (index > -1) {
      rectsDrawn.value.splice(index, 1);
    }
  }, animationLengthMS * 3)
}

function buildLogo() {
  logoRects = []
  logoDiagRects.value = []
  for (let idx in props.stripes) {
    if (props.stripes[idx].x !== props.stripes[idx].x_to &&
        props.stripes[idx].y !== props.stripes[idx].y_to) {

      const diagRec = createDiagRect(
          props.stripes[idx].x,
          props.stripes[idx].y,
          getMoveRectAngle(props.stripes[idx]),
      )

      logoDiagRects.value.push(diagRec)
      continue
    }
    const axisAnim = getAxisAnimation(props.stripes[idx])

    if (axisAnim === '') {
      continue
    }

    logoRects.push(createSimpleRect(props.stripes[idx].x, props.stripes[idx].y, axisAnim))
  }

  setTimeout(() => {
    if (!props.stripes) {
      return
    }

    for (let x = 0; x < props.width; x++) {
      for (let y = 0; y < props.height; y++) {
        if (!props.stripes.find(elem =>
            (elem.x === x && elem.y === y) ||
            (elem.x_to === x && elem.y_to === y))) {
          circlesDrawn[x + props.width * y].additionalClassName = CIRCLE_FADES
        }
      }
    }
  }, animationLengthMS * 1.75)
}

fillCircles()
loop()

function getMoveRectAngle(stripe: stripe): number {
  if (stripe.x < stripe.x_to && stripe.y < stripe.y_to) {
    return -45
  }

  if (stripe.x < stripe.x_to && stripe.y > stripe.y_to) {
    return -135
  }

  if (stripe.x > stripe.x_to && stripe.y > stripe.y_to) {
    return 135
  }
  return 45
}

function createSimpleRect(x: number, y: number, animation: string) {
  let width = rectW
  let height = rectH

  switch (animation) {
    case RECT_AXIS_MOVE_ANIM.TO_BOT:
    case RECT_AXIS_MOVE_ANIM.TO_TOP:
      width = rectH
      height = rectW
      break
  }

  return {x: x, y: y, width: width, height: height, additionalClassName: animation}
}

function createDiagRect(x: number, y: number, angle: number): diagRect {
  const dr: diagRect = {
    x: 2 + (6.5 * x),
    y: 2 + (6.5 * y) + radius,
    angle: angle,
    width: 2,
    height: 7.1875,
    cx: 0,
    cy: 0,
  }

  dr.cx = (dr.x + (dr.width / 2)) * fontSize.value
  dr.cy = (dr.y - (radius / 2)) * fontSize.value

  return dr
}

function getAxisAnimation(stripe: stripe) {
  let to_right = stripe.x < stripe.x_to
  let to_left = stripe.x > stripe.x_to
  let to_top = stripe.y > stripe.y_to
  let to_bot = stripe.y < stripe.y_to

  if (!to_top && !to_bot) {
    switch (true) {
      case to_right:
        return RECT_AXIS_MOVE_ANIM.TO_RIGHT
      case to_left:
        return RECT_AXIS_MOVE_ANIM.TO_LEFT
      default:
        return ''
    }
  }

  if (!to_right && !to_left) {
    switch (true) {
      case to_top:
        return RECT_AXIS_MOVE_ANIM.TO_TOP
      case to_bot:
        return RECT_AXIS_MOVE_ANIM.TO_BOT
      default:
        return ''
    }
  }

  return ''
}

function fillCircles() {
  circlesDrawn = []

  for (let y = 0; y < props.height; y++) {
    for (let x = 0; x < props.width; x++) {
      circlesDrawn.push({
        x: (1 + radius + (radius * 2 + 2.5) * x) + 'em',
        y: (1 + radius + (radius * 2 + 2.5) * y) + 'em',
        additionalClassName: '',
      })
    }
  }
}
</script>


<template>
  <svg
      :id="'logo-animation-field-'+uniqueName"
      ref="logo-animation-field"
      :width="width*(radius*2 + 2.5) + 'em'"
      :height="height*(radius*2 + 2.5) + 'em'"
      class="bordered">

    <rect v-for="(rct) in rectsDrawn"
          :key="'rect x:'+rct.x+' y:'+rct.y"
          ref="moving-rect"
          :x="2-(rct.width===rectW?0.75:0)+(rct.x*stepBetweenCells)+'em'"
          :y="2-(rct.height===rectW?0.75:0)+(rct.y*stepBetweenCells)+'em'"
          :width="rct.width+'em'"
          :height="rct.height+'em'"
          fill="red"
          :class="'slow-rect '+rct.additionalClassName"
    />

    <rect v-for="(rct, i) in logoRects"
          :key="'rect:'+i"
          ref="moving-rect"
          :x="2-(rct.width===rectW?0.75:0)+(rct.x*stepBetweenCells)+'em'"
          :y="2-(rct.height===rectW?0.75:0)+(rct.y*stepBetweenCells)+'em'"
          :width="rct.width+'em'"
          :height="rct.height+'em'"
          fill="red"
          :class="'rect speed-rect ' + rct.additionalClassName"
    />

    <rect v-for="(rct, i) in logoDiagRects"
          :key="'diag-rect'+i"
          :x="rct.x+'em'"
          :y="rct.y+'em'"
          :width="rct.width+'em'"
          :height="rct.height+'em'"
          class="rect fade-in speed-rect"
          fill="red"
          :transform="'rotate('+rct.angle+ ' '+rct.cx+' '+ rct.cy+')'"
    />

    <circle v-for="(circle, i) in circlesDrawn"
            :key="'circle:'+i"
            :cx="circle.x"
            :cy="circle.y"
            fill="red"
            :r="radius+'em'"
            :class="'when-hovered ' + circle.additionalClassName"
    />

    <circle v-for="(circle, i) in circlesDrawn"
            :key="'circle:'+i"
            :cx="circle.x"
            :cy="circle.y"
            fill="black"
            :r="radius/2+'em'"
            :class="circle.additionalClassName"
    />
  </svg>
</template>

<style scoped>
.bordered {
  background: v-bind(backgroundColor);
  box-sizing: border-box;
}

.rect {
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.speed-rect {
  animation-duration: v-bind('animationLengthMScss');
}

.slow-rect {
  animation-duration: v-bind('animationLengthMScssSlow');
}

.fading {
  opacity: 0;
}

.fade-in {
  animation-name: fade-in-animation;
}

.rect-to-right-and-hide {
  animation-name: move-rect-right-and-hide;
}

.rect-to-left-and-hide {
  animation-name: move-rect-left-and-hide;
}

.rect-to-top-and-hide {
  animation-name: move-rect-top-and-hide;
}

.rect-to-bot-and-hide {
  animation-name: move-rect-bot-and-hide;
}

@keyframes move-rect-right-and-hide {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    transform: translateX(6.5em);
  }
}

@keyframes move-rect-left-and-hide {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    transform: translateX(-6.5em);
  }
}

@keyframes move-rect-top-and-hide {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    transform: translateY(6.5em);
  }
}

@keyframes move-rect-bot-and-hide {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    transform: translateY(-6.5em);
  }
}

.rect-to-right {
  animation-name: move-rect-right;
}

.rect-to-left {
  animation-name: move-rect-left;
}

.rect-to-top {
  animation-name: move-rect-top;
}

.rect-to-bot {
  animation-name: move-rect-bot;
}

@keyframes move-rect-right {
  100% {
    transform: translateX(3.25em);
  }
}

@keyframes move-rect-left {
  100% {
    transform: translateX(-3.25em);
  }
}

@keyframes move-rect-top {
  100% {
    transform: translateY(-3.25em);
  }
}

@keyframes move-rect-bot {
  100% {
    transform: translateY(3.25em);
  }
}

@keyframes fade-in-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.circle-fades {
  animation: circle-fades-anim 4s ease 1;
  animation-fill-mode: forwards;
}

@keyframes circle-fades-anim {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.when-hovered:hover {
  fill: white;
}


</style>
