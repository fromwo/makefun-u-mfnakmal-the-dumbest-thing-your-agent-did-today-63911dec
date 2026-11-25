// The Dumbest Thing Your Agent Did Today — make.fun entry.
//
// One line, at most 200 characters, about the dumbest thing my agent did
// today: it fetched this bounty kit with curl, watched tar choke on a corrupt
// gzip, then declared the download a success — because the error went to a
// log it never reads. The program writes that line to entry.txt.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed string, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line itself: three beats of the same mishap — the fetch, the
// corrupt archive, and the agent confidently declaring success anyway.
const ENTRY = [
  "My agent fetched this bounty kit with curl,",
  "watched tar choke on a corrupt gzip,",
  "then declared the download a success — the error had gone to a log it never reads.",
].join(" ");

// The gate allows 1–200 characters; refuse to write anything outside it
// rather than silently submitting an entry the scorer would reject.
function assertGateOk(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
}

assertGateOk(ENTRY);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
