import { toLngLats } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { path, color, weight, opacity, lineStyle } = props;
  return new T.Polyline(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle
  });
}
