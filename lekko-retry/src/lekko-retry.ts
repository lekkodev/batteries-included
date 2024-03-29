import * as lekko from "@lekko/node-server-sdk";
import retry from "async-retry";
import { RetryConfig } from "./gen/default/config/v1beta1/example_pb";

export default async function lekkoRetry<Type>(
  fn: retry.RetryFunction<Type>,
  context?: { [key: string]: string | number | boolean },
): Promise<Type> {
  const ctx = lekko.ClientContext.fromJSON(context);
  if (ctx.get("fn") === undefined && fn.name.length > 0) {
    ctx.setString("fn", fn.name);
  }
  let config: RetryConfig | undefined = undefined;
  try {
    const configAny = (await lekko.getClient()).getProto(
      "retry",
      "retry-config",
      ctx,
    );
    config = new RetryConfig();
    config.fromBinary(configAny.value);
  } catch (e) {
    console.log("failed to read the config");
    // fallback to defaults https://github.com/tim-kos/node-retry?tab=readme-ov-file#retrytimeoutsoptions
  }
  console.log(`using config: ${config?.retries}`);
  return retry(fn, config);
}
