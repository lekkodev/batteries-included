import type { JsonObject } from "@bufbuild/protobuf";
import lekko from "@lekko/node-server-sdk";
import retry from "async-retry";
import { RetryConfig } from "./gen/default/config/v1beta1/example_pb";

const lekkoClient = await lekko.initClient();

export default async function lekkoRetry<Type>(
  fn: retry.RetryFunction<Type>,
  context?: JsonObject,
): Promise<Type> {
  const ctx = lekko.ClientContext.fromJson(context);
  if (ctx.get("fn") === undefined && fn.name.length > 0) {
    ctx.setString("fn", fn.name);
  }
  const configAny = lekkoClient.getProto("retry", "retry-config", ctx);
  const config = new RetryConfig();
  config.fromBinary(configAny.value);
  return retry(fn, config);
}
