import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Load KEY=value pairs from project-root .env (falls back to .env.example). */
export function loadEnvFile(root = path.resolve(__dirname, "../..")) {
  const candidates = [".env", ".env.example"];
  for (const name of candidates) {
    const envPath = path.join(root, name);
    if (!existsSync(envPath)) continue;
    if (name === ".env.example" && !existsSync(path.join(root, ".env"))) {
      console.warn(
        "Notice: .env was not found, so values were read from .env.example. Keep API keys in an uncommitted .env file.",
      );
    }

    const text = readFileSync(envPath, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
    if (existsSync(path.join(root, ".env"))) break;
  }
}
