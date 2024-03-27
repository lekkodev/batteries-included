"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LekkoBannerProvider } from "@lekko/react-banner";
import { getBannerConfig, getBannerStyles } from "@/lekko/plugins";

// This is a client component wrapper around the Lekko banner provider.
// Importing the config functions here ensures we don't run into issues around
// passing functions from the server to the client.
// Drop it into the root layout inside the <body> tags, wrapping the other elements.
export default function BannerProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const env = process.env.NODE_ENV;

  return (
    <LekkoBannerProvider
      context={{ pathname, env }}
      bannerConfig={getBannerConfig}
      styleConfig={getBannerStyles}
    >
      {children}
    </LekkoBannerProvider>
  );
}
