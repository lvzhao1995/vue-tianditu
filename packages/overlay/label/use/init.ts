import { toLngLat, toPoint } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { position, offset, text } = props;
  return new T.Label({
    position: toLngLat(position),
    offset: toPoint(offset),
    text
  });
}
