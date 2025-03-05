import { defineComponent, type PropType } from "vue";
import { h } from "~/utils/h-demi";
import "../styles/search-suggests.scss";

export const SearchSuggests = defineComponent({
  props: {
    /** 搜索建议数组 */
    suggests: { type: Array as PropType<T.LocalSearchSuggest[]>, default: () => [] }
  },
  emits: {
    /** 点击搜索建议项 */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "suggest-click": (e: T.LocalSearchSuggest) => true
  },
  setup(props, { emit }) {
    return () =>
      h(
        "div",
        {
          class: "tdt-search-suggests",
          style: { display: props.suggests.length ? "block" : "none" }
        },
        props.suggests.map(item => {
          return h(
            "div",
            {
              class: "search-suggests-item",
              on: {
                click: () => emit("suggest-click", item)
              }
            },
            [
              h("span", { class: "search-suggests-item__name" }, item.name),
              h("span", { class: "search-suggests-item__address" }, item.address)
            ]
          );
        })
      );
  }
});
