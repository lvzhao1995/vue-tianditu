import { computed, defineComponent, onBeforeMount, type PropType, watch } from "vue";
import { TdtMarker } from "~/overlay/marker";
import { TdtInfowindow } from "~/overlay/infowindow";
import { toLngLats, toLonLatNumberArray } from "~/utils/converter";
import { h } from "~/utils/h-demi";
import { useMapRoot } from "~/use/mapRoot";
import type { LngLat } from "~/utils/types";

export const SearchMapView = defineComponent({
  props: {
    /** 显示在地图上的点数组 */
    pois: { type: Array as PropType<T.LocalSearchPoi[]>, default: () => [] },
    /** 显示信息窗口的坐标 */
    target: { type: Array as unknown as PropType<LngLat | null>, default: () => null },
    /** 信息窗口的内容 */
    content: { type: String, default: "" }
  },
  emits: {
    /** 点击地图上的标点触发 */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "poi-click": (e: T.LocalSearchPoi) => true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update-target": (e: LngLat | null) => true
  },
  setup(props, { emit }) {
    const markers = computed(() => {
      return props.pois.map(poi => {
        return {
          position: toLonLatNumberArray(poi.lonlat),
          extData: poi
        };
      });
    });

    onBeforeMount(async () => {
      const tdtMap = await useMapRoot();

      watch(markers, () => {
        tdtMap?.setViewport(toLngLats(markers.value.map(e => e.position)));
      });
    });

    return () =>
      h("div", null, [
        ...markers.value.map(item => {
          return h(TdtMarker, {
            props: { ...item },
            on: {
              click: () => emit("poi-click", item.extData)
            }
          });
        }),
        h(TdtInfowindow, {
          props: {
            target: props.target,
            content: props.content,
            offset: [0, -30],
            minWidth: 150
          },
          on: {
            "update:target": (e: LngLat | null) => emit("update-target", e)
          }
        })
      ]);
  }
});
