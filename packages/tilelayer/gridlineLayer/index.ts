import { defineComponent, onBeforeMount, onUnmounted } from "vue";
import { useMapRoot } from "~/use/mapRoot";
import { useEvent } from "~/use/event";
import { EVENTS, NATIVE_EVENTS, PROPS, useInit, useWatch } from "./use";

export const TdtGridlineLayer = defineComponent({
  name: "TdtGridlineLayer",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeLayer(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      tdtMap.addLayer(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {};
  }
});

export type TdtGridlineLayerInstance = InstanceType<typeof TdtGridlineLayer>;
