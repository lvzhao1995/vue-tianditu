import mitt from "mitt";
import { defineComponent, h, onMounted, provide, ref } from "vue";
import type { MapEvents } from "~/utils/emitter";
import { useApiLoader } from "~/use/apiLoader";
import { useEvent } from "~/use/event";
import { EVENTS, NATIVE_EVENTS, PROPS, useControls, useInit, useWatch } from "./use";

export const TdtMap = defineComponent({
  name: "TdtMap",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const tdtMap = ref<T.Map>();
    const mapEmitter = mitt<MapEvents>();
    provide("mapRoot", tdtMap);
    provide("mapEmitter", mapEmitter);

    const tdtMapRef = h<"div">("div", {
      class: "tdt-map",
      style: "width:100%;height:100%",
      id: props.mid
    });

    onMounted(async () => {
      await useApiLoader(props.loadConfig);
      tdtMap.value = useInit(props, tdtMapRef.el as HTMLElement);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtMap.value });
      useWatch({ props, instance: tdtMap.value });
      useControls(props, tdtMap.value, emit);
      emit("init", tdtMap.value);
      mapEmitter.emit("mapInit", tdtMap.value);
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-map-container",
          style: "width:100%;height:100%"
        },
        [tdtMapRef, slots.default?.()]
      );
  }
});

export type TdtMapInstance = InstanceType<typeof TdtMap>;
