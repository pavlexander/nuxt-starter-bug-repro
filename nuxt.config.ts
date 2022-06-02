import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false, // Disable Server Side rendering
    modules: [
        '@nuxt/content'
    ],
    content: {
        // Options
        sources: [
            ".nuxt/content/**",
            "content/**"
        ]
    },
})
