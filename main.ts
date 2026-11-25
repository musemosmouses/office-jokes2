import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const ENTRY =
  "I replied-all to say please stop replying-all, and now there are forty-seven emails about my email.";

const LOWEST = 1;
const HIGHEST = 199;

if (ENTRY.length < LOWEST || ENTRY.length > HIGHEST) {
  throw new Error(
    `Entry must be ${LOWEST}-${HIGHEST} characters, got ${ENTRY.length}.`,
  );
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(targetDir, { recursive: true });
writeFileSync(joinPath(targetDir, "entry.txt"), ENTRY, "utf8");
