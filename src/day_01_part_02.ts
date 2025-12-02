import { Array } from "npm:effect";
import { takeInput } from "../lib/input_handling.ts";

const DIAL_SIZE = 100;
const START_POSITION = 50;

if (import.meta.main) {
  const input = takeInput();
  console.log(run(input));
}

export function run(input: string[]): number[] {
  input = Array.fromIterable(input);
  const result = input
    .map((i) => (i.charAt(0) == "L" ? -1 : 1) * (parseInt(i.slice(1))))
    .reduce((acc, instruction) => {
      let new_dial_value = acc[0] + instruction;
      let clicks_through_zero = 0;
      if (new_dial_value < 0) {
        clicks_through_zero = Math.abs(Math.trunc(new_dial_value / DIAL_SIZE)) +
          1;
        new_dial_value = DIAL_SIZE + (new_dial_value % DIAL_SIZE);
      } else if (new_dial_value >= DIAL_SIZE) {
        clicks_through_zero = Math.trunc(new_dial_value / DIAL_SIZE);
        new_dial_value = new_dial_value % DIAL_SIZE;
      }

      // if (new_dial_value == 0) {
      //   clicks_through_zero += 1;
      // }

      return [new_dial_value, acc[1] + clicks_through_zero];
    }, [START_POSITION, 0]);
  return result;
}
