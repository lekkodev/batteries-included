import "@lekko/react-banner/styles.css";
import "./index.css";
import Link from "next/link";
import type { Metadata } from "next";
import { getBannerConfig, getBannerStyles } from "@/lekko/plugins";
import BannerProvider from "@/components/banner";

// TODO: icon
export const metadata: Metadata = {
  title: "Lekko Alert Banner Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BannerProvider>
          <div id="root">
            <div id="sidebar">
              <h1>
                <Link href="/">Lekko Alert Banner Example</Link>
              </h1>
              <nav>
                <h2>Pages</h2>
                <ul>
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/beta">Beta ✨</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h2>Integrations</h2>
                <ul>
                  <li>
                    <Link href="/integrations/github">GitHub</Link>
                  </li>
                  <li>
                    <Link href="/integrations/slack">Slack</Link>
                  </li>
                  <li>
                    <Link href="/integrations/openai">OpenAI</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div id="page">{children}</div>
          </div>
        </BannerProvider>
      </body>
    </html>
  );
}
