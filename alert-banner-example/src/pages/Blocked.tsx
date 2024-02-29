import { BlockedFallbackProps } from "@lekko/react-components";

export function Blocked({ path, message }: BlockedFallbackProps) {
  return (
    <div id="blocked">
      <h1>Uh oh! :&#40;</h1>
      <p>The page {path} is currently unavailable.</p>
      <p>
        <i>{message}</i>
      </p>
      <br />
      <img key="blocked-img" src="https://placedog.net/480?id=147" />
    </div>
  );
}
