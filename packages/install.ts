import type { App } from "vue";
import { type LoadConfig, useApiLoader } from "./use/apiLoader";
import * as components from "./components";

export function install(app: App, config: LoadConfig): void {
  useApiLoader(config);
  Object.values(components).forEach(component => {
    if (component.name) {
      app.component(component.name, component);
    }
  });
}
