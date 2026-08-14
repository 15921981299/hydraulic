import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const astroPackagePath = resolve("node_modules/astro/package.json");
const astroPackage = JSON.parse(readFileSync(astroPackagePath, "utf8"));
const astroCli = resolve("node_modules/astro", astroPackage.bin.astro);
const result = spawnSync(process.execPath, [astroCli, "build"], {
  cwd: process.cwd(),
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
  shell: false,
  stdio: "inherit",
});

if (result.status !== 0) process.exit(result.status ?? 1);

await import(pathToFileURL(resolve("scripts/create-worker-entry.mjs")));
