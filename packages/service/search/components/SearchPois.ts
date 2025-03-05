import { defineComponent, h, type PropType } from "vue";
import { SearchPage } from "./SearchPage";
import "../styles/search-pois.scss";

export type PageProps = InstanceType<typeof SearchPage>["$props"];

export const SearchPois = defineComponent({
  props: {
    /** 搜索点数组 */
    pois: { type: Array as PropType<T.LocalSearchPoi[]>, default: () => [] },
    /** 分页配置 */
    page: { type: Object as PropType<PageProps> }
  },
  emits: {
    /** 点击搜索结果项触发 */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "poi-click": (e: T.LocalSearchPoi) => true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update:page": (e: PageProps) => true
  },
  setup(props, { emit }) {
    return () =>
      h(
        "div",
        {
          class: "tdt-search-pois",
          style: { display: props.pois.length ? "block" : "none" }
        },
        [
          // 点信息
          ...props.pois.map(item => {
            return h(
              "div",
              {
                class: "search-pois-item",
                onClick: () => emit("poi-click", item)
              },
              [
                h("strong", { class: "search-pois-item__name" }, item.name),
                h("br"),
                h("span", { class: "search-pois-item__address" }, item.address)
              ]
            );
          }),
          // 分页
          h(SearchPage, {
            current: props.page?.current,
            size: props.page?.size,
            total: props.page?.total,
            "onUpdate:current": (current: number) => {
              emit("update:page", { ...(props.page || {}), current });
            }
          })
        ]
      );
  }
});
