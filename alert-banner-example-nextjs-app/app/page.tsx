export default function Root() {
  return (
    <div id="root-page">
      <h1>Welcome!</h1>
      {/* TODO: Add link to docs here */}
      <p>
        This is an example project showcasing an alert banner plugin, powered by
        Lekko.
      </p>
      <p>
        Using the plugin, you can easily integrate a dynamically configurable
        status banner and router blocklist into your React Router webapp.
      </p>
      <p>
        Imagine this is what your SaaS app looks like! Try navigating around the
        different pages on the sidebar and tinkering with the Lekko config{" "}
        <b>plugins/alert-banner</b> to get more familiar with its capabilities.
      </p>
      <br />
      <p>If you have any questions, please feel free to reach out to us!</p>
    </div>
  );
}
