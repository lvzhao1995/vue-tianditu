import { useInit as useInitMarker } from "../overlay/marker/use/init";
import type { Props as MarkerProps } from "../overlay/marker/use/const";
import type { Bounds, IconOptions, LngLat, LngLats, Point } from "~/utils/types";

/**
 * 转换为经纬度对象
 * @param lnglat 经纬度
 */
export const toLngLat = (lnglat: LngLat) => {
  const [lng, lat] = lnglat;
  return new T.LngLat(lng, lat);
};

/**
 * 转换为经纬度数组对象
 * @param lnglats 经纬度数组
 */
export const toLngLats = (lnglats: LngLats) => {
  return lnglats.map(lnglat => {
    const [lng, lat] = lnglat;
    return new T.LngLat(lng, lat);
  });
};

/**
 * 转换为地理范围对象
 * @param bounds 地理范围数组
 */
export const toBounds = (bounds: Bounds) => {
  const [[lng1, lat1], [lng2, lat2]] = bounds;
  return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2));
};

/**
 * 转换为像素坐标点对象
 * @param point 像素坐标点数组
 */
export const toPoint = (point: Point) => {
  const [x, y] = point;
  return new T.Point(x, y);
};

/**
 * 过滤掉对象中undefined的属性
 * @param obj 对象
 */
export const objectFilter = (obj: Record<string, any>) => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      res[key] = obj[key];
    }
  });
  return res;
};

/**
 * 转换为图标对象
 * @param icon 图标配置或者图片地址
 */
export const toIcon = (icon: IconOptions | string) => {
  if (typeof icon === "string") {
    return new T.Icon({ iconUrl: icon });
  } else {
    const { iconUrl, iconSize, iconAnchor } = icon;
    const iconOption = {
      iconUrl,
      iconSize: iconSize && toPoint(iconSize),
      iconAnchor: iconAnchor && toPoint(iconAnchor)
    };
    return new T.Icon(objectFilter(iconOption));
  }
};

/**
 * 转换为点标注对象
 * @param option 点标注配置
 */
export const toMarker = (option: MarkerProps) => {
  const marker = useInitMarker(option);
  if (option.icon) {
    marker.setIcon(toIcon(option.icon));
  }
  marker.extData = option.extData;
  return marker;
};

/**
 * 转换 LonLat String 为 LonLat Number Array(抽离出来用于统一兼容，疑似原格式 "xxx.xx xxx.xx"，新格式 "xxx.xx,xxx.xx")
 * @param lonlat LonLat String
 * @returns LonLat Number Array
 */
export const toLonLatNumberArray = (lonlat: string): LngLat => {
  let lnglat: number[] = [];
  if (lonlat.includes(" ")) {
    lnglat = lonlat.split(" ").map(Number);
  } else if (lonlat.includes(",")) {
    lnglat = lonlat.split(",").map(Number);
  }
  if (lnglat.length != 2) {
    throw new Error("unknown lonlat format: " + lonlat);
  }
  return lnglat as unknown as LngLat;
};
