// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: ["@invictus.codes/nuxt-vuetify",],
  vuetify: {
    vuetifyOptions: {},

    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,

      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
});
