import type { App, Component } from "vue";

const components = import.meta.glob<{ default: Component }>("./**/*.vue", {
  eager: true
});

export default {
  install: (app: App) => {
    Object.values(components).forEach(component => {
      if (component.default.name) {
        app.component(component.default.name, component.default);
      }
    });
  }
};
