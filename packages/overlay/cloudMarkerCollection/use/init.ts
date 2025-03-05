import { toLngLats } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { ShapeType, SizeType, color, lnglats } = props;
  return new T.CloudMarkerCollection(toLngLats(lnglats), {
    ShapeType,
    SizeType,
    color
  });
}
