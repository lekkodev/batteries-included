import Image from "next/image";

export default function Page() {
  return (
    <div id="integration-page">
      {" "}
      <div id="github">
        <h1>GitHub Integration</h1>
        <div>
          <p>
            We&apos;re not sure how exactly we&apos;re integrating with GitHub,
            but we have pictures of puppies.
          </p>
          <Image
            key="github-img"
            src="https://placedog.net/480?id=206"
            alt="Picture of a dog"
            width={480}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
