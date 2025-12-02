import os from "node:os";

export function takeInput(seperator: string = os.EOL): string[] {
  const input = prompt("Task Input:")?.split(seperator);
  if (!input) {
    console.error("Error: Empty input");
    Deno.exit(1);
  }
  return input;
}
