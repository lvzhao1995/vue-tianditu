import { watch } from "vue";
import { toIcon, toLngLat } from "~/utils/converter";
import type { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.Marker }) {
  watch(
    () => props.position,
    val => val && instance.setLngLat(toLngLat(val))
  );
  watch(
    () => props.draggable,
    val => (val ? instance.enableDragging() : instance.disableDragging())
  );
  watch(
    () => props.icon,
    val => val && instance.setIcon(toIcon(val)),
    { immediate: true }
  );
  watch(
    () => props.zIndexOffset,
    val => val && instance.setZIndexOffset(val),
    { immediate: true }
  );
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val),
    { immediate: true }
  );
  watch(
    () => props.visible,
    val => (val ? instance.show() : instance.hide()),
    { immediate: true }
  );
}
