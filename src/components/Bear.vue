<template>
  <img :src="imageUrl" alt="" aridHidden />
</template>
<script setup lang="ts">
import { asyncComputed, computedAsync } from "@vueuse/core";
import { computed } from "vue";

type BearProps = {
  mode?: "watch" | "hide";
  frameNumber?: number;
};
const props = defineProps<BearProps>();

const imageUrl = computedAsync(
  async () => {
    const mode = props.mode ?? "watch";
    const frame = clamp(0, props.frameNumber ?? 0, mode === "watch" ? 20 : 5);

    return (await import(
      `@/src/assets/${mode}/${mode}_bear${frame}.png?url`
    ).then((_) => _.default)) as Promise<string>;

    function clamp(min: number, x: number, max: number) {
      return x >= max ? max : x <= min ? min : x;
    }
  },
  undefined
  //   { lazy: true }
);
</script>
