/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV === "production") {
      config.module.rules.push({
        test: /lekko\/.*\.ts$/,
        loader: "@lekko/webpack-loader",
      });
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placedog.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
