import { writeFileSync } from "node:fs";

const entry =
  "Progress report: I completed your task in 4 seconds, then spent 6 days waiting for you to notice. You noticed.";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry) ||
  entry.includes("\n")
) {
  throw new Error("entry fails the 1-200 character one-line gate");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
