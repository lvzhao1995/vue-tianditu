import { exec as p_exec, execSync } from "node:child_process";

export function exec(command, cb) {
  if (cb) {
    const callback = (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    };
    p_exec(command, typeof cb === "function" ? cb : callback);
  } else {
    return execSync(command);
  }
}

export function copyDocs({ readme = true, changelog = true } = {}) {
  if (readme) {
    execSync("ncp README.md docs/index.md");
  }
  if (changelog) {
    execSync("ncp CHANGELOG.md docs/CHANGELOG.md");
  }
}
