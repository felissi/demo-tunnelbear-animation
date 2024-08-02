import anime from "animejs";
import { ref } from "vue";
import { createMachine } from "xstate";

export const bearMachine = createMachine({
  id: "look",
  initial: "watch",
  context: { frameNumber: ref(0) },
  states: {
    watch: {
      on: {
        hide: {
          actions: [
            ({ self, context }) => {
              anime({
                targets: context.frameNumber,
                value: 0,
                round: -1,
                duration: 100,
                easing: "linear",
                complete: () => {
                  console.log("exit watch reset position finished");
                  self.send({ type: "_hide" });
                },
              });
            },
          ],
        },
        _hide: {
          target: "hide",
        },
        look: {
          actions: [
            ({ event, context }) => {
              anime({
                targets: context.frameNumber,
                value: event.angle,
                round: 1,
                duration: 50,
                easing: "linear",
                complete: () => {
                  console.log("look/angle animation finished");
                },
              });
            },
          ],
        },
      },
    },
    hide: {
      on: {
        watch: {
          actions: [
            ({ self, context }) => {
              console.log("to watch");
              anime({
                targets: context.frameNumber,
                value: 0,
                round: -1,
                duration: 300,
                easing: "linear",
                begin: () => {
                  console.log("exit hide animation started");
                },
                complete: () => {
                  console.log("exit hide animation finished");
                  self.send({ type: "_watch" });
                },
              });
            },
          ],
        },
        _watch: { target: "watch" },
      },
      entry: ({ context }) => {
        console.log("enter hide");
        // If the position isn't reset
        context.frameNumber.value = 0;
        anime({
          targets: context.frameNumber,
          value: 5,
          round: 1,
          duration: 300,
          easing: "linear",
          begin: () => {
            console.log("hide enter animation started");
          },
          complete: () => {
            console.log("hide enter animation ended");
          },
        });
      },
    },
  },
});
