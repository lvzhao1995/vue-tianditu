import { inject, reactive } from "vue";
import type { DrivingState, RouteState, SearchState, TransitState } from "../types";

export function useState() {
  const searchState: SearchState = {
    tdtMap: null,
    localSearch: null,
    startKeyword: "",
    startMarker: null,
    endKeyword: "",
    endMarker: null,
    routeType: 0,
    poiType: "start",
    pois: [],
    current: 1,
    total: 0
  };
  const drivingState: DrivingState = {
    drivingRoute: null,
    drivingLines: [],
    drivingPolicy: 0,
    drivingPlans: [],
    drivingPlanIndex: 0
  };
  const transitState: TransitState = {
    transitRoute: null,
    transitPlans: [],
    transitPlanIndex: 0,
    transitPolicy: 1,
    walkLines: [],
    busLines: [],
    busMarkers: [],
    metroMarkers: []
  };

  return inject<RouteState>("routeState", () => reactive({ ...searchState, ...drivingState, ...transitState }), true);
}
