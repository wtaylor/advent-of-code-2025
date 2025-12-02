import { Array } from "npm:effect";
import { takeInput } from "../lib/input_handling.ts";

if (import.meta.main) {
  const input = takeInput(",");
  console.log(run(input));
}

export function run(input: string[]): number {
  return Array.fromIterable(input)
    .map((i) => i.split("-").map((j) => parseInt(j)))
    .flatMap((i) => Array.range(i[0], i[1]))
    .map((i) => i.toString())
    .filter((i) => i.length > 1)
    .filter((i) => isRepeatedSequence(i))
    .map((i) => parseInt(i))
    .reduce((acc, i) => acc + i);
}

function isRepeatedSequence(input: string): boolean {
  for (
    let pattern_length = 1;
    pattern_length < input.length;
    pattern_length++
  ) {
    const pattern = input.slice(0, pattern_length);
    const input_chunks = Array.chunksOf(input, pattern_length)
      .map((i) => i.join(""));

    const all_chunks_match_pattern = input_chunks
      .every((i) => i == pattern);

    if (input_chunks.length > 1 && all_chunks_match_pattern) {
      return true;
    }
  }

  return false;
}
