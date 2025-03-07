import { defineComponent, h, onBeforeMount, provide } from "vue";
import { fixMapPropagation } from "~/utils/fix";
import { useInit, useState, useWatch } from "./use";
import { RouteMapView, RoutePlans, RoutePolicies, RouteSearch, RouteTypes } from "./components";
import "../../styles/tdt-icon.scss";
import "./styles/tdt-route.scss";

export const TdtRoute = defineComponent({
  name: "TdtRoute",
  setup() {
    const state = useState();
    provide("routeState", state);

    onBeforeMount(async () => {
      await useInit(state);
      useWatch(state);
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-route",
          ...fixMapPropagation(state.tdtMap)
        },
        [h(RouteTypes), h(RouteSearch), h(RoutePolicies), h(RoutePlans), h(RouteMapView)]
      );
  }
});

export type TdtRouteInstance = InstanceType<typeof TdtRoute>;
