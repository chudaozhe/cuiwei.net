// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/base.css', '~/assets/styles/bootstrap-grid.min.css', '~/assets/styles/github-markdown.min.css'],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
  site: {
    url: 'https://www.cuiwei.net',
  },
  sitemap: {
    // https://nuxtseo.com/sitemap/guides/customising-ui
    excludeAppSources: ['nuxt:pages'],
    sources: [
      '/api/sitemap',
    ],
    xsl: false,
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'https://www.cuiwei.net'
    }
  }
})