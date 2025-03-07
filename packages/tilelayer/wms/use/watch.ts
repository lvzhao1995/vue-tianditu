import { watch } from "vue";
import type { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.TileLayer.WMS }) {
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val),
    { immediate: true }
  );
  watch(
    () => props.zIndex,
    val => val && instance.setZIndex(val),
    { immediate: true }
  );
  watch(
    () => props.url,
    val => val && instance.setUrl(val)
  );
}
