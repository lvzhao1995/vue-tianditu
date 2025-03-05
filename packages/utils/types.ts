import type { EmitsOptions, ExtractPropTypes, SetupContext } from "vue";

export type Point = [number, number];
export type LngLat = [number, number];
export type LngLats = LngLat[];
export type Bounds = number[][];

export type IconOptions = Omit<T.IconOptions, "iconSize" | "iconAnchor"> & {
  iconSize?: Point;
  iconAnchor?: Point;
};

export type ControlName = "Zoom" | "Scale" | "Copyright" | "OverviewMap" | "MapType";

export interface ControlMapTypeOptions {
  mapTypes?: {
    title: string;
    icon: string;
    layer:
      | "TMAP_NORMAL_MAP"
      | "TMAP_SATELLITE_MAP"
      | "TMAP_HYBRID_MAP"
      | "TMAP_TERRAIN_MAP"
      | "TMAP_TERRAIN_HYBRID_MAP";
  }[];
}

export type ControlCopyrightOptions = Omit<T.ControlCopyrightOptions, "bounds"> & {
  bounds: Bounds;
};

export type ControlOptions = T.ControlZoomOptions &
  T.ControlScaleOptions &
  ControlCopyrightOptions &
  T.ControlOverviewMapOptions &
  ControlMapTypeOptions & {
    name: ControlName;
  };

export type DefineProps<P> = ExtractPropTypes<P>;

export type DefineEmits<E extends EmitsOptions> = SetupContext<E>["emit"];
