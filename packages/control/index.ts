import { defineComponent, onMounted, onUnmounted } from "vue";
import { useEvent } from "~/use/event";
import { useMapRoot } from "~/use/mapRoot";
import { EVENTS, NATIVE_EVENTS, PROPS, useInit, useWatch } from "./use";
import { h } from "vue";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    let controlRef = h("div");

    onMounted(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeControl(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      tdtComponent.onAdd = () => controlRef.el;
      tdtComponent.onRemove = () => {};
      tdtMap.addControl(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {
      controlRef = h("div", { class: "tdt-control-custom" }, slots.default?.());
      return controlRef;
    };
  }
});

export type TdtControl = InstanceType<typeof TdtControl>;
