import { spawnSync } from "node:child_process";

const npmCli = process.env.npm_execpath;
if (!npmCli) {
  console.error(
    "npm_execpath is unavailable; run this script through npm run verify.",
  );
  process.exit(1);
}
const tasks = [
  ["run", "check"],
  ["run", "build"],
  ["run", "test:rfq"],
  ["run", "audit:models"],
  ["run", "audit:content"],
  ["run", "audit:seo"],
  ["run", "check:links"],
  ["run", "audit:encoding"],
];

for (const args of tasks) {
  const result = spawnSync(process.execPath, [npmCli, ...args], {
    cwd: process.cwd(),
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
    shell: false,
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log("Site verification passed.");
