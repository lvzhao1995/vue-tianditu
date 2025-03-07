import { computed, defineComponent, h, onMounted, onUnmounted } from "vue";
import { useMapRoot } from "~/use/mapRoot";
import { useEvent } from "~/use/event";
import { EVENTS, NATIVE_EVENTS, PROPS, useInit, useWatch } from "./use";

export const TdtInfowindow = defineComponent({
  name: "TdtInfowindow",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const contentRef = computed(() => {
      return h(
        "div",
        {
          class: "tdt-infowindow-custom",
          style: {
            minWidth: props.minWidth,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            display: slots.default && props.target ? "block" : "none"
          }
        },
        slots.default?.()
      );
    });

    onMounted(async () => {
      onUnmounted(() => tdtMap?.closeInfoWindow());

      const content = slots.default ? (contentRef.value.el as HTMLElement) : undefined;
      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, content);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, emitted });
      useWatch({ props, instance: tdtComponent, map: tdtMap });
      emit("init", tdtComponent);
    });

    function emitted(event: string) {
      if (event === "close") {
        emit("update:target", null);
      }
    }

    return () => contentRef.value;
  }
});

export type TdtInfowindowInstance = InstanceType<typeof TdtInfowindow>;
