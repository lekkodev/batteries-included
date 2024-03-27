"use client";

export interface BannerConfig {
  /**
   * Main banner message
   */
  text?: string;
  /**
   * If present, a call to action link will be rendered after the message.
   */
  cta?: {
    text?: string;
    url?: string;
    /**
     * Whether to open the link in a new tab
     */
    external?: boolean;
  };
  /**
   * Whether a close button should be rendered. Defaults to true.
   */
  dismissable?: boolean;
}

export function getBannerConfig({
  pathname,
}: {
  pathname: string;
}): BannerConfig {
  if (pathname === "/beta") {
    return {
      text: "Beta program banner",
      cta: {
        text: "Learn more",
        url: "/home",
      },
    };
  }
  return {
    text: "Congratulations, you've successfully configured the Lekko banner! 🎉",
  };
}

export interface BannerStyleConfig {
  /**
   * Targets the root <div> element.
   */
  className?: string;
  /**
   * Targets the banner's text, rendered in a <p> element.
   */
  textClassName?: string;
  /**
   * Targets the banner's CTA link, rendered in a <a> element.
   */
  ctaClassName?: string;
  /**
   * Targets the banner's close button, rendered in a <button> element.
   */
  closeClassName?: string;
}

export function getBannerStyles({ env }: { env: string }): BannerStyleConfig {
  return {
    className: "root-classname",
    ctaClassName: "cta-classname",
  };
}
