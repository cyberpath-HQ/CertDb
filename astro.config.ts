// @ts-check
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site:         "https://certdb.cyberpath-hq.com",
    base:          `/`,
    trailingSlash: `ignore`,
    integrations: [
        tailwind({
            nesting: true,
        }),
        react(),
        sitemap(),
        mdx({
            extendMarkdownConfig: true,
            gfm:                  true,
        }),
    ],
    build:        {
        assets: "assets",
    },
    output:       "static",
});
