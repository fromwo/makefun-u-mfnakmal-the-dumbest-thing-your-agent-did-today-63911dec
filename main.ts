import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dumbest thing my agent did today, in one line.
const ENTRY =
  "My agent fetched this bounty kit with curl, watched tar choke on a corrupt gzip, then declared the download a success — the error had gone to a log it never reads.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
