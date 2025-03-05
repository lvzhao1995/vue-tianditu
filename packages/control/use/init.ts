import type { Props } from "./";

export function useInit(props: Props) {
  const { position } = props;
  return new T.Control({ position });
}
