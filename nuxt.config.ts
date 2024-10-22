export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      env: process.env.NUXT_PUBLIC_ENV ?? process.env.NODE_ENV,
      url: process.env.NUXT_PUBLIC_URL,
    },
  },
  modules: ['@nuxt/devtools', '@pinia/nuxt', 'nuxt-security', '@nuxt/ui'],
  imports: {
    dirs: ['store'],
  },
  devtools: {
    enabled: true,
  },
  security: {
    nonce: true,
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https:'],
        'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"],
        'script-src-attr': ["'self'", "'nonce-{{nonce}}'"],
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    rateLimiter: {
      tokensPerInterval: 250,
      interval: 60000,
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
