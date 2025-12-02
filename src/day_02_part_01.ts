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
    .filter((i) => i.length % 2 == 0)
    .map((i) => [i.slice(0, i.length / 2), i.slice(i.length / 2)])
    .filter((i) => i[0] == i[1])
    .map((i) => parseInt(i[0] + i[1]))
    .reduce((acc, i) => acc + i);
}
