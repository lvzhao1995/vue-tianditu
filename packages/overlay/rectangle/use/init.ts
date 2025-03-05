import { toBounds } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { bounds, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  return new T.Rectangle(toBounds(bounds), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
}
