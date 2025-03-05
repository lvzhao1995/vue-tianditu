import { defineComponent, onBeforeMount, onUnmounted, watch } from "vue";
import { useMapRoot } from "~/use/mapRoot";
import { EVENTS, PROPS, useInit } from "./use";

export const TdtCarTrack = defineComponent({
  name: "TdtCarTrack",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent?.clear());

      expose?.({ start, pause, stop, clear });

      const tdtMap = await useMapRoot();
      let tdtComponent: T.CarTrack | null = null;
      watch(
        () => props.Datas,
        val => {
          tdtComponent?.clear();
          tdtComponent = null;
          if (!val.length) return;
          tdtComponent = useInit(props, emit, tdtMap);
          emit("init", tdtComponent);
        },
        { immediate: true }
      );

      function start() {
        tdtComponent?.start();
      }

      function pause() {
        tdtComponent?.pause();
      }

      function stop() {
        tdtComponent?.stop();
      }

      function clear() {
        tdtComponent?.clear();
      }
    });
    return () => {};
  }
});

export type TdtCarTrack = InstanceType<typeof TdtCarTrack>;
