import type { TdtMarkerInstance } from "../../components";
import type { LngLat } from "~/utils/types";

export interface SearchLocalState {
  tdtMap: T.Map | null;
  localSearch: T.LocalSearch | null;
  keyword: string;
  queryType: number;
  showRoute: boolean;
}

export type SearchResultState = Pick<
  T.LocalSearchResult,
  "pois" | "statistics" | "area" | "suggests" | "prompt" | "lineData"
>;

export interface SearchViewState {
  markers: TdtMarkerInstance["$props"][];
  target: LngLat | null;
  content: string;
  current: number;
  total: number;
}

export type SearchState = SearchLocalState & SearchResultState & SearchViewState;
