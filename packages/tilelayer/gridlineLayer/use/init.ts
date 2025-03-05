import type { Props } from ".";

export function useInit(props: Props) {
  const { tileSize, minZoom, maxZoom, opacity, outlineSize, textSize } = props;
  return new T.GridlineLayer({
    tileSize,
    minZoom,
    maxZoom,
    opacity,
    outlineSize,
    textSize
  });
}
