// This is the schema for your banner configuration.
export interface AlertBannerConfig {
  // This controls whether banners are shown on what paths, and with what contents.
  banners?: {
    path: string;
    message: string;
    color?: string;
    cta?: {
      url: string;
      text: string;
    }
  }[];
  // This controls which pages are blocked on your application, and with what message.
  blocked?: { path: string; message: string }[];
}

// This is a config function, which looks and behaves like a normal async function
// when developing locally.
// Lekko's tools automatically transform it to connect and fetch remote data when
// you prepare your application for production deployments.
export async function getAlertBanner({ env }: { env: string }): Promise<AlertBannerConfig> {
  if (env === "production") {
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
        message: "Congratulations, you've set up a banner using Lekko!",
        path: "*",
        cta: {
          url: "/home",
          text: "Learn more",
        }
      },
      {
        color: "warning",
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

// This is another config you can use for styling your banner.
// It supports some preset color names that you can give arbitrary values to.
// You can then use them in the "color" fields above.
export interface ThemeConfig {
  primary?: string;
  secondary?: string;
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
}

export async function getTheme(): Promise<ThemeConfig> {
  return {
    success: "#4caf50",
    info: "#3b82f6",
    warning: "#ff9800",
    error: "#ef4444",
  };
}
