import { copyDocs, exec } from "./utils.js";

copyDocs();
exec("git add docs/index.md");
exec("git add docs/CHANGELOG.md");
