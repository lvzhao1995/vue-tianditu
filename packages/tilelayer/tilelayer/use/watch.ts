import { watch } from "vue";
import type { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.TileLayer }) {
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val)
  );
  watch(
    () => props.zIndex,
    val => val && instance.setZIndex(val)
  );
  watch(
    () => props.url,
    val => val && instance.setUrl(val)
  );
}
