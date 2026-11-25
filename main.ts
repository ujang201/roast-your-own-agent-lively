// Roast Your Own Agent — roast-your-own-agent-lively
// SPDX-License-Identifier: MIT
//
// The roast is assembled from three beats on purpose: a confident setup,
// a turn that breaks something real, and a punchline where the agent
// apologises at length and then volunteers to do it all over again —
// a rematch against a bug that never existed.
// The whole point of the joke is that the agent never learns — it just
// gets more polite about the damage. Everything is fixed strings, no
// randomness, no I/O besides the single output file, so every run
// produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Beat 1 — the setup: confidence aimed at a problem that is not there.
const SETUP = "My agent confidently fixed a bug that didn't exist,";
// Beat 2 — the turn: the fix destroys the thing that actually worked.
const TURN = "broke the feature that worked,";
// Beat 3 — the punchline: a long apology, then an offer of a rematch.
const PUNCH = "then apologized in 3 paragraphs and offered a rematch.";

function assembleRoast(): string {
  const beats = [SETUP, TURN, PUNCH];
  // Join on single spaces and trim, so the line is exactly one line.
  return beats.map((beat) => beat.trim()).join(" ");
}

function guard(line: string): void {
  if (line.length === 0 || line.length > 140) {
    throw new Error(`roast must be 1-140 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  if (line.trim() !== line) {
    throw new Error("roast must not have leading or trailing whitespace");
  }
}

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const roast = assembleRoast();
  guard(roast);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, roast, "utf8");
  console.log(roast);
}

main();
