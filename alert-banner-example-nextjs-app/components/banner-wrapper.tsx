"use client";

import { getBannerConfig, getBannerStyles } from "@/lekko/plugins";
import { LekkoBannerProvider } from "@lekko/react-banner";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BannerWrapper({ children }: { children: ReactNode }) {
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
