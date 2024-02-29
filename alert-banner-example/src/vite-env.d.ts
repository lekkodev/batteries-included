/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEKKO_API_KEY: string;
  readonly VITE_LEKKO_REPOSITORY_NAME: string;
  readonly VITE_LEKKO_REPOSITORY_OWNER: string;
  readonly VITE_LEKKO_HOSTNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
