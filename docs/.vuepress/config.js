import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

import meta from './config/meta'
import theme from './config/theme'
import plugins from './config/plugins'

export default defineUserConfig({
  ...meta,
  theme,
  plugins,
  bundler: viteBundler(),
  base: process.env.VUEPRESS_BASE ? `/${process.env.VUEPRESS_BASE}/` : '/',
  head: [
    [
      "link",
      {
        // href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        href: "public/fonts/Noto_Sans/NotoSans-Regular.ttf",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        // href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        href: "public/fonts/Noto_Sans/NotoSans-Bold.ttf",
        rel: "stylesheet",
      },
    ],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/de/': {
      lang: 'de-DE',
    },
    '/en/': {
      lang: 'en-EN',
    },
    '/fr/': {
      lang: 'fr-FR',
    },
  }
})
