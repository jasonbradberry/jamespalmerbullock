import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://jasonbradberry.github.io', // Site URL
    base: '/jamespalmerbullock', // Base URL for GitHub Pages deployment
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
import { defineConfig } from 'astro/config';