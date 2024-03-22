import Image from "next/image";

export default function Page() {
  return (
    <div id="integration-page">
      {" "}
      <div id="openai">
        <h1>OpenAI Integration</h1>
        <div>
          <p>
            We're not sure how exactly we're integrating with OpenAI, but we
            have pictures of puppies.
          </p>
          <Image
            key="openai-img"
            src="https://placedog.net/480?id=238"
            alt="dog"
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}
