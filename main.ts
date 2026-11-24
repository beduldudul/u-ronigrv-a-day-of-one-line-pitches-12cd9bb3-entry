import { mkdirSync, writeFileSync } from "node:fs";

// v2: warmer, more direct — speaks to the friend, ends on "you finally built it".
const PITCH =
  "You've had that app idea for years — describe it to an AI agent in plain words, and by tomorrow you'll have a real first version, free, yours to keep; worst case, you spent one evening talking; best case, you finally built it.";

if (PITCH.length === 0 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
