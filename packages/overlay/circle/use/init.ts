import { toLngLat } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { center, radius, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  return new T.Circle(toLngLat(center), radius, {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
}
