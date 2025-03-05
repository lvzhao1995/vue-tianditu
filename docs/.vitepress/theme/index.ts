import type { Theme } from "vitepress";
import defaultTheme from "vitepress/theme";
import { install } from "~/install";
import components from "../components";
import "./custom.css";

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(install, {
      v: "4.0",
      tk: "7f013d0186775b063d6a046977bbefc6",
      plugins: ["CarTrack"]
    });
    app.use(components);
  }
} satisfies Theme;
