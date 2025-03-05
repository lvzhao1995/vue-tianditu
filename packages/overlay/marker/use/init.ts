import { toLngLat } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props) {
  const { /**icon,*/ draggable, title, zIndexOffset, opacity, position } = props;
  return new T.Marker(toLngLat(position), {
    /** icon: icon ? toIcon(icon) : undefined,*/
    draggable,
    title,
    zIndexOffset,
    opacity
  });
}
