// Last Text at One Percent — a make.fun bounty entry.
// The dying phone's final text message, written to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "1%. Last text. I held your 4,000 blurry photos, your 2am 'u up?' texts, and your ex's number. I was the only one who never left you on read. Bye—";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} chars`);
