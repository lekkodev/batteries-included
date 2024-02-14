import retry from "async-retry";
import { RetryConfig } from "./gen/default/config/v1beta1/example_pb";
import lekko from "@lekko/node-server-sdk";

const lekkoClient = await lekko.initClient();

export default async function lekkoRetry<Type>(
  fn: retry.RetryFunction<Type>,
  context?: lekko.ClientContext | undefined,
): Promise<Type> {
  const config = new RetryConfig();
  const configAny = lekkoClient.getProto("retry", "retry-config", context);
  config.fromBinary(configAny.value);
  return retry(fn, config);
}
