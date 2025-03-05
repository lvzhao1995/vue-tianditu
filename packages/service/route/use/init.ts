import { useMapRoot } from "~/use/mapRoot";
import type { RouteState } from "../types";
import { useMethods } from "./methods";

export async function useInit(state: RouteState) {
  const { onSearchComplete, onDrivingComplete, onTransitComplete } = useMethods(state);

  state.tdtMap = await useMapRoot();
  state.localSearch = new T.LocalSearch(state.tdtMap, {
    pageCapacity: 10,
    onSearchComplete
  });
  state.drivingRoute = new T.DrivingRoute(state.tdtMap, {
    policy: state.drivingPolicy,
    onSearchComplete: onDrivingComplete
  });
  state.transitRoute = new T.TransitRoute(state.tdtMap, {
    policy: state.transitPolicy,
    onSearchComplete: onTransitComplete
  });
}
