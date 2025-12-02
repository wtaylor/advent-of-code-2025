import { assertEquals } from "@std/assert";
import { run } from "../src/day_02_part_01.ts";

Deno.test(function runTest() {
  const result = run([
    "11-22",
    "95-115",
    "998-1012",
    "1188511880-1188511890",
    "222220-222224",
    "1698522-1698528",
    "446443-446449",
    "38593856-38593862",
  ]);
  console.log(result);
  assertEquals(result, 1227775554);
});
