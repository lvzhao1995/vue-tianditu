import mitt from "mitt";

export type MapEvents = {
  mapInit: T.Map;
};

export const mapEmitter = mitt<MapEvents>();
