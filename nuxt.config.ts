// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    pages: true,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/global.scss";',
                },
            },
        },
    },
})
