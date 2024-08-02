<template>
  <div class="">
    <div class="flex items-center justify-center mb-8">
      <Bear
        :mode="snapshot.value"
        :frameNumber="snapshot.context.frameNumber.value"
      />
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
import { createMachine, fromPromise } from "xstate";
import { useMachine } from "@xstate/vue";

import Bear from "./Bear.vue";
import { bearMachine } from "./bearMachine";

const { snapshot, send } = useMachine(bearMachine);

function onPasswordFocus() {
  send({ type: "hide" });
}
function onPasswordBlur() {
  send({ type: "watch" });
}
function onEmailFocus() {
  send({ type: "watch" });
  send({ type: "look", angle: 10 });
}
function onEmailBlur() {
  send({ type: "look", angle: 0 });
}
function onEmailInput(e: Event) {
  send({ type: "look", angle: (e.target as HTMLInputElement).value?.length });
}
</script>
