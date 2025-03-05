/**
 * 解决地图的滚动冒泡和点击及双击冒泡
 */
export function fixMapPropagation(map: T.Map | null) {
  return {
    onMousewheel: (e: Event) => e.stopPropagation(),
    onClick: (e: Event) => {
      e.stopPropagation();
      if (map?.isDoubleClickZoom()) {
        map?.disableDoubleClickZoom();
        setTimeout(() => map?.enableDoubleClickZoom(), 300);
      }
    },
    onMousemove: (e: Event) => {
      e.stopPropagation();
      if (map?.isDrag()) {
        map?.disableDrag();
        setTimeout(() => map?.enableDrag(), 300);
      }
    }
  };
}
