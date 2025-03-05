import { toMarker } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props, map: T.Map) {
  const { markers, girdSize, maxZoom } = props;
  const marker = markers?.map(item => toMarker(item));
  return new T.MarkerClusterer(map, {
    markers: marker,
    girdSize,
    maxZoom
  });
}
