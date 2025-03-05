import { toPoint } from "~/utils/converter";
import type { Props } from "./";

export function useInit(props: Props, contentRef?: HTMLElement) {
  const { minWidth, maxWidth, maxHeight, autoPan, closeButton, offset, autoPanPadding, closeOnClick, content } = props;
  return new T.InfoWindow(contentRef || content, {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset: toPoint(offset),
    autoPanPadding: toPoint(autoPanPadding),
    closeOnClick
  });
}
