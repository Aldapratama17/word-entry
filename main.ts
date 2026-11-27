import { mkdirSync, writeFileSync } from 'node:fs';

/** Validates the one-line word entry and writes it to /output/entry.txt. */
const line = 'agencrastinate (v.) - to postpone a task by first building an elaborate system that would have finished it sooner.';

if (line.length > 140) {
  process.stderr.write('entry exceeds 140 characters\n');
  process.exit(1);
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
