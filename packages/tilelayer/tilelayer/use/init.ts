import { toBounds } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props, attrs: Record<string, unknown>) {
  const { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds } = props;
  return new T.TileLayer(url, {
    minZoom,
    maxZoom,
    errorTileUrl,
    opacity,
    zIndex,
    bounds: bounds.length ? toBounds(bounds) : undefined,
    ...attrs
  });
}
