import assert from "assert";
import retry from "./lekko-retry";

async function getAnswer(
  _: (e: Error) => void,
  attempt: number,
): Promise<string | undefined> {
  if (attempt < 3) {
    throw new Error(`attempt: ${attempt}, please try at least 3 times`);
  }
  return "42";
}

async function main() {
  try {
    console.log(
      await retry(getAnswer, {
        env: "prod",
      }),
    );
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(
      await retry(
        async (bail, attempt) => {
          return getAnswer(bail, attempt);
        },
        {
          fn: "getAnswer",
          env: "prod",
        },
      ),
    );
  } catch (e) {
    console.log(e);
  }

  try {
    async function doNotRetry(bail: (e: Error) => void, attempt: number) {
      if (attempt > 1) {
        bail(new Error("do not retry!"));
      }
      throw "should fail";
    }

    await retry(doNotRetry);
  } catch (e) {
    assert(e === "should fail");
  }
}

try {
  await main();
} catch (e) {
  console.log(e);
} finally {
  process.exit();
}
