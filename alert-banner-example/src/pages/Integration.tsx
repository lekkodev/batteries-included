import { useParams } from "react-router-dom";

export function Integration() {
  const { integrationId } = useParams();

  let content = <></>;
  switch (integrationId) {
    case "github": {
      content = (
        <div id="github">
          <h1>GitHub Integration</h1>
          <div>
            <p>
              We're not sure how exactly we're integrating with GitHub, but we
              have pictures of puppies.
            </p>
            <img key="github-img" src="https://placedog.net/480?id=206" />
          </div>
        </div>
      );
      break;
    }
    case "slack": {
      content = (
        <div id="slack">
          <h1>Slack Integration</h1>
          <div>
            <p>
              We're not sure how exactly we're integrating with Slack, but we
              have pictures of puppies.
            </p>
            <img key="slack-img" src="https://placedog.net/480?id=236" />
          </div>
        </div>
      );
      break;
    }
    case "openai": {
      content = (
        <div id="openai">
          <h1>OpenAI Integration</h1>
          <div>
            <p>
              We're not sure how exactly we're integrating with OpenAI, but we
              have pictures of puppies.
            </p>
            <img key="openai-img" src="https://placedog.net/480?id=238" />
          </div>
        </div>
      );
      break;
    }
  }

  return <div id="integration-page">{content}</div>;
}
