import { computed, defineComponent, h } from "vue";
import { IconClose } from "./icons";
import "../styles/search-box.scss";

export const SearchBox = defineComponent({
  props: {
    modelValue: { type: String, default: "" },
    /** 显示在输入框的提示 */
    placeholder: { type: String, default: "输入关键字搜索" },
    /** 是否显示搜索按钮 */
    searchBtn: { type: Boolean, default: true },
    /** 是否显示导航按钮 */
    routeBtn: { type: Boolean, default: true }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update:modelValue": (e: string) => true,
    // 点击搜索按钮或回车时触发
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    search: (e: string) => true
  },
  setup(props, { emit, slots }) {
    let isComposition = false;

    const keyword = computed({
      get() {
        return props.modelValue;
      },
      set(val: string) {
        emit("update:modelValue", val);
      }
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search-box"
        },
        [
          h("input", {
            class: "tdt-search-box__input",
            type: "text",
            placeholder: props.placeholder,
            value: keyword.value,
            onCompositionstart: () => (isComposition = true),
            onCompositionend: () => (isComposition = false),
            onInput: (e: any) => setTimeout(() => !isComposition && (keyword.value = e.target.value)),
            onKeyup: (e: KeyboardEvent) => e.code === "Enter" && emit("search", keyword.value)
          }),
          h(
            "i",
            {
              class: "tdt-search-box__close",
              style: { display: props.modelValue ? "block" : "none" },
              onClick: () => (keyword.value = "")
            },
            [h(IconClose)]
          ),
          slots.default?.()
        ]
      );
  }
});
