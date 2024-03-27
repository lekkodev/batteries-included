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
   * If set to true, the close button will not be rendered.
   */
  permanent?: boolean;
}

export function getBannerConfig({
  pathname,
}: {
  pathname: string;
}): BannerConfig {
  if (pathname === "/404") {
    return {
      text: "Oh no, page not found",
      cta: {
        text: "Take me back",
        url: "/",
      },
      permanent: true,
    };
  }
  return {
    text: "Congratulations, you've successfully configured a banner using Lekko! 🎉",
    cta: {
      text: "Learn more",
      url: "https://www.lekko.com/",
      external: true,
    },
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

export function getBannerStyles(): BannerStyleConfig {
  return {
    className: "banner-root",
    textClassName: "banner-text",
    ctaClassName: "banner-cta",
    closeClassName: "banner-close",
  };
}
