// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import dotenv from "dotenv";
import vercelAdapter from "@astrojs/vercel";

dotenv.config();
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelAdapter(),
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [tailwind(), react()],
});
