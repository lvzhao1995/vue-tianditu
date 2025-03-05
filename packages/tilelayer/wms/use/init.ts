import type { Props } from "./";

export function useInit(props: Props, attrs: Record<string, unknown>) {
  const { url, layers, styles, format, transparent, version, srs } = props;
  return new T.TileLayer.WMS(url, {
    layers,
    styles,
    format,
    transparent,
    version,
    srs,
    ...attrs
  });
}
