import Image from "next/image";

export default function Beta() {
  return (
    <div id="beta-page">
      <h1>Beta Access</h1>
      <p>Nothing to see here... yet!</p>
      <Image
        key="beta-img"
        src="https://placedog.net/480?id=2"
        alt="Picture of two puppies"
        width={480}
        height={360}
      />
    </div>
  );
}
