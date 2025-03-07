import type { PropType } from "vue";
import type { Bounds, DefineEmits, DefineProps } from "~/utils/types";

export const NATIVE_PROPS = {
  /** 矩形边线颜色 */
  color: { type: String, default: "#0000ff" },
  /** 矩形边线的宽度，以像素为单位 */
  weight: { type: Number, default: 3 },
  /** 矩形边线的透明度（范围0-1 之间） */
  opacity: { type: Number, default: 0.5 },
  /** 矩形边线的样式（solid或dashed） */
  lineStyle: { type: String as PropType<"solid" | "dashed">, default: "solid" },
  /** 矩形填充颜色。当参数为空时，折线覆盖物将没有填充效果 */
  fillColor: { type: String, default: "#0000ff" },
  /** 矩形填充的透明度（范围0-1 之间） */
  fillOpacity: { type: Number, default: 0.2 }
};

export const EXTRA_PROPS = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 矩形地理范围 */
  bounds: { type: Array as unknown as PropType<Bounds>, default: () => [] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const NATIVE_EVENTS: T.RectangleEvents = {
  click: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  remove: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.Rectangle) => e instanceof T.Rectangle
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
