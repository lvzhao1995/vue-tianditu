import { defineComponent, h } from "vue";
import { SearchBox } from "~/service/search/components/SearchBox";
import { SearchPois } from "~/service/search/components/SearchPois";
import { useMethods, useState } from "../use";

export const RouteSearch = defineComponent({
  setup() {
    const state = useState();
    const { onSearch, onPoiClick, onPageChange } = useMethods(state);

    return () =>
      h("div", { class: "route-search" }, [
        // 起点搜索框
        h(SearchBox, {
          modelValue: state.startKeyword,
          placeholder: "请输入起点",
          onFocus: () => (state.poiType = "start"),
          "onUpdate:modelValue": (val: string) => onSearch(1, val, "start")
        }),
        // 终点搜索框
        h(SearchBox, {
          modelValue: state.endKeyword,
          placeholder: "请输入终点",
          onFocus: () => (state.poiType = "end"),
          "onUpdate:modelValue": (val: string) => onSearch(1, val, "end")
        }),
        // 搜索点
        h(SearchPois, {
          pois: state.pois || [],
          page: {
            current: state.current,
            size: 10,
            total: state.total
          },
          onPoiClick: onPoiClick,
          "onUpdate:page": onPageChange
        })
      ]);
  }
});
