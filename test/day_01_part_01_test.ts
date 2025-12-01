import { assertEquals } from "@std/assert";
import { run } from "../src/day_01_part_01.ts";

Deno.test(function runTest() {
  const result = run([
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
  ]);
  console.log(result);
  assertEquals(result[1], 3);
});
