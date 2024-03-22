import Image from "next/image";

export default function Home() {
  return (
    <div id="home-page">
      <h1>Home</h1>
      <p>
        The homepage of your SaaS product, the premier place to browse pictures
        of SaaSy dogs
      </p>
      <Image
        key="home-img"
        src="https://placedog.net/480?id=3"
        width={480}
        height={320}
        alt="Picture of a dog"
      />
    </div>
  );
}
