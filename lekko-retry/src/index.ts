import fetch from "node-fetch";
import retry from "./lekko-retry";
import lekko from "@lekko/node-server-sdk";

async function main() {
  try {
    const s = await retry(
      async (bail, attempt) => {
        console.log(`attempt: ${attempt}`);
        // if anything throws, we retry
        if (attempt < 3) {
          throw new Error("test");
        }
        const res = await fetch("https://google.com");

        if (403 === res.status) {
          // don't retry upon 403
          bail(new Error("Unauthorized"));
          return;
        }

        const data = await res.text();
        return data.substr(0, 500);
      },
      new lekko.ClientContext().setString("env", "prod"),
    );
    console.log(s);
  } catch (e) {
    console.log(e);
  }
}

main().finally(() => {
  process.exit();
});
