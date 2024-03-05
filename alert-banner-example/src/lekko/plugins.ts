export type AlertBannerConfig = {
  banners?: Array<{ path: string; message: string; color?: string }>;
  blocked?: Array<{ path: string; message: string }>;
};

export function getAlertBanner(context: { env: string }): AlertBannerConfig {
  if (context.env === "production") {
    return {
      banners: [
        {
          message: "Beta sign-up period closed - see you next time!",
          path: "*",
        },
      ],
      blocked: [
        {
          message:
            "Sorry, the Beta program is no longer available at this time.",
          path: "/beta",
        },
      ],
    };
  }
  return {
    banners: [
      {
        message: "Test banner!",
        path: "*",
      },
      {
        message:
          "The beta program is available for a limited time - apply now!",
        path: "/beta",
      },
      {
        color: "error",
        message: "Service interruption: GitHub, OpenAI",
        path: "/integrations/*",
      },
    ],
    blocked: [
      {
        message: "OpenAI is currently experiencing some service disruptions.",
        path: "/integrations/openai",
      },
      {
        message:
          "GitHub is currently experiencing degradation in webhook performance.",
        path: "/integrations/github",
      },
    ],
  };
}

export type ThemeConfig = {
  [colorName: string]: string;
};

export function getTheme(): ThemeConfig {
  return {};
}
