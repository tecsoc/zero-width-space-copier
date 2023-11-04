import react from "@astrojs/react";
import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  })]
});