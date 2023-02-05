export default defineNuxtConfig({
    pages: true,
    ssr: false,
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
