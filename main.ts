import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea you've carried around for years — just describe it in plain words, an AI agent builds the first version for free, and it's yours to keep: worst case, you've spent an afternoon; best case, it's real.";

if (PITCH.length === 0 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
