import { toLngLats } from "~/utils/converter";
import type { Emit, Props } from ".";

export function useInit(props: Props, emit: Emit, map: T.Map) {
  const { interval, speed, dynamicLine, Datas, carstyle, polylinestyle } = props;
  return new T.CarTrack(map, {
    interval,
    speed,
    dynamicLine,
    Datas: toLngLats(Datas),
    carstyle,
    polylinestyle,
    passOneNode: (lnglat, index, length) => {
      emit("passOneNode", [lnglat.lng, lnglat.lat], index, length);
    }
  });
}
