import type { PropType } from "vue";
import type { DefineEmits, DefineProps, LngLat, Point } from "~/utils/types";

export const NATIVE_PROPS = {
  /** 弹出框的最小宽度 */
  minWidth: { type: Number, default: 50 },
  /** 弹出框的最大宽度 */
  maxWidth: { type: Number, default: 300 },
  /** 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器 */
  maxHeight: { type: Number, default: null },
  /** 是否开启信息窗口打开时地图自动移动（默认关闭） */
  autoPan: { type: Boolean, default: false },
  /** 控制弹出窗口中出现的关闭按钮 */
  closeButton: { type: Boolean, default: true },
  /** 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用 */
  offset: { type: Array as unknown as PropType<Point>, default: () => [0, 7] },
  /** 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘 */
  autoPanPadding: { type: Array as unknown as PropType<Point>, default: () => [5, 5] },
  /** 是否开启点击地图关闭信息窗口（默认关闭） */
  closeOnClick: { type: Boolean, default: false }
};

export const EXTRA_PROPS = {
  /** 信息浮窗的显示 HTML 内容 */
  content: { type: [String, Object, HTMLElement] as PropType<string | HTMLElement>, default: "" },
  /** 打开信息浮窗的覆盖物或信息浮窗所指向的地理位置坐标 */
  target: { type: [Object, Array] as PropType<T.OverlayBase<any> | LngLat | null>, default: null }
};

export const NATIVE_EVENTS: T.InfoWindowEvents = {
  close: () => true,
  open: () => true,
  clickclose: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.InfoWindow) => e instanceof T.InfoWindow,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "update:target": (e: any) => true
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
