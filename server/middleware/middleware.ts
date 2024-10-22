import { H3Event } from 'h3'
import type { HTTPMethod } from 'nuxt-security'

type ApiMethod = '*' | HTTPMethod
type ApiRoute = { path: string; method: ApiMethod }

const publicApiRoutes: { strict: ApiRoute[]; dynamic: ApiRoute[] } = {
  strict: [],
  dynamic: [],
}

export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event)
  console.log(`${event.method} request: ${event.path}`)
  // Security headers
  event.node.res.setHeader('Cache-Control', 'no-cache, no-store')
  event.node.res.setHeader('Pragma', 'no-cache')
  event.node.res.setHeader('Expires', '0')
  // SSRF Attempt detection
  if (isSSRFAttempt(event.path)) {
    console.log('Not Authenticated: SSRF attempt detected')
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
  }
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (isPublicApiRoute(event)) {
      return console.log('Authenticated: Public route')
    }
    if (process.env.NUXT_API_KEY && headers['x-api-key'] === process.env.NUXT_API_KEY) {
      return console.log('Authenticated: API key provided')
    }
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})

function isPublicApiRoute(event: H3Event) {
  const url = getRequestURL(event)
  const path = url.pathname
  const method = event.method
  const isStrictPublicRoute = publicApiRoutes.strict.some((route) => route.path === path && (route.method === method || route.method === '*'))
  if (isStrictPublicRoute) return true
  const isDynamicPublicRoute = publicApiRoutes.dynamic.some((route) => path.startsWith(route.path) && (route.method === method || route.method === '*'))
  if (isDynamicPublicRoute) return true
  return false
}

function isSSRFAttempt(path: string) {
  if (path.includes('http') || path.includes('https')) return true
  const htmlJavaScriptRegex = /<(?:[^>]+|script[^>]*>[^<]*<\/script>)/i
  if (htmlJavaScriptRegex.test(path)) return true
  const ipRegex = /(\d{1,3}\.){3}\d{1,3}/
  if (ipRegex.test(path)) return true
  return false
}
