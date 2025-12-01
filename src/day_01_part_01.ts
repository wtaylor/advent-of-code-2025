import { Array } from "npm:effect";
import os from "node:os";

const DIAL_SIZE = 100;
const START_POSITION = 50;

if (import.meta.main) {
  const input = prompt("Input code combinations:")?.split(os.EOL);
  if (!input) {
    console.error("Error: Empty input");
    Deno.exit(1);
  }

  console.log(run(input));
}

export function run(input: string[]): number[] {
  input = Array.fromIterable(input);
  return input
    .map((i) => (i.charAt(0) == "L" ? -1 : 1) * (parseInt(i.slice(1))))
    .reduce((acc, i) => {
      const dial_value = (acc[0] + i) % DIAL_SIZE;
      return [dial_value, dial_value == 0 ? acc[1] + 1 : acc[1]];
    }, [START_POSITION, 0]);
}
