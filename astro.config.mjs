import { defineConfig } from "astro/config";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";

export default defineConfig({
  site: isGitHubPages
    ? "https://komafes69-prteam.github.io"
    : "https://69.komafes.com", // さくらサーバーのURL

  base: isGitHubPages ? "/Komafes69" : "/",
});