<template>
  <div class="">
    <div class="flex items-center justify-center mb-8">
      <Bear :mode="mode" :frameNumber="frameNumber" />
    </div>

    <h1 class="m-auto mb-4 text-3xl font-semibold text-center">
      Log in to TunnelBear
    </h1>
    <form action="">
      <div class="flex flex-col gap-2 w-[380px]">
        <input
          class="p-2 w-[380px] h-[55px] bg-gray-50 border border-gray-200 outline-none rounded-sm focus:border-gray-800"
          type="email"
          autocomplete="email"
          required
          @focus="onEmailFocus"
          @blur="onEmailBlur"
          @input="onEmailInput"
        />
        <input
          class="p-2 w-[380px] h-[55px] bg-gray-50 border border-gray-200 outline-none rounded-sm focus:border-gray-800"
          type="password"
          autocomplete="current-password"
          @focus="onPasswordFocus"
          @blur="onPasswordBlur"
        />
        <button
          class="hover:bg-green-500 focus:border focus:border-green-600 h-16 text-xl font-semibold text-white bg-green-400 rounded-sm"
          type="button"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, Ref, ref, watchEffect } from "vue";
import anime from "animejs";

import Bear from "./Bear.vue";

const mode = ref();
const frameNumber = ref(0);
function onPasswordFocus() {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:40 ~ 'focus password':`,
    "focus password"
  );
  mode.value = "hide";
  // incrementTo(frameNumber, 5);
  anime({
    targets: frameNumber,
    value: 5,
    round: 1,
    duration: 300,
    easing: "easeInCirc",
  });
}
function onPasswordBlur() {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:45 ~ 'blur password':`,
    "blur password"
  );
  // mode.value = undefined;
  // frameNumber.value = 0;
  anime({
    targets: frameNumber,
    // value: (v: Ref<number>, target: number, round: number) => {
    //   // console.log("value", e);
    //   // return v.value === target ? target : (v.value -= 1), v.value;
    // },
    value: 0,
    round: -1,
    duration: 300,
    easing: "easeOutCubic",
  });
}
function onEmailFocus() {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:40 ~ 'focus email':`,
    "focus email"
  );
  mode.value = "watch";
  // anime({
  //   targets: frameNumber,
  //   value: 20,
  //   round: 1,
  //   duration: 300,
  //   easing: "easeInCirc",
  // });
}
function onEmailBlur() {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:45 ~ 'blur email':`,
    "blur email"
  );
  // mode.value = undefined;
}
// function incrementTo(obj: Ref<number>, target: number) {
//   if (obj.value === target) {
//     return;
//   }
//   for (let i = obj.value; i < target; i++) {
//     requestAnimationFrame(() => {
//       nextTick().then(() => {
//         obj.value += 1;
//       });
//     }, 16);
//   }
//   // return incrementTo(obj, target);
// }
watchEffect(() => {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:99 ~ frameNumber.value:`,
    frameNumber.value
  );
});
function onEmailInput(e: Event) {
  console.log("email niput");
  mode.value = "watch";
  console.log(
    `🚀 // DEBUG 🍔 ~ file: Page.vue:126 ~ e.value?.length:`,
    (e.target as HTMLInputElement).value
  );
  frameNumber.value = (e.target as HTMLInputElement).value?.length;
}
</script>
