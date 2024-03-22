import Image from "next/image";

export default function Page() {
  return (
    <div id="integration-page">
      {" "}
      <div id="slack">
        <h1>Slack Integration</h1>
        <div>
          <p>
            We're not sure how exactly we're integrating with Slack, but we have
            pictures of puppies.
          </p>
          <Image
            key="slack-img"
            src="https://placedog.net/480?id=236"
            alt="Picture of three puppies"
            width={480}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
