import { toLngLats } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { path, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  return new T.Polygon(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
}
