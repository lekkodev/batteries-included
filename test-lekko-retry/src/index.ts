import "dotenv/config";
import retry from "lekko-retry";
import * as lekko from "@lekko/node-server-sdk";

console.log("starting...");

let attempt = 0;

async function canFail(): Promise<string> {
  attempt++;
  console.log(`attempt: ${attempt}`);
  if (attempt < 2) {
    throw "oops!";
  }
  return "foo";
}

async function main() {
  await lekko.setupClient();
  console.log(await retry(canFail));
}

main()
  .catch((e) => {
    console.log(`error: ${e}`);
  })
  .finally(() => {
    console.log("finishing!");
    process.exit();
  });
