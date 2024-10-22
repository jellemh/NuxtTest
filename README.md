<img src="https://nuxt.com/assets/design-kit/icon-green.svg" alt="Nuxt Logo" style="height: 128px; width: 128px;"/>

# Nuxt 3 Starter

Nuxt 3 Starter Guide that explains how this repository is generated and why aspects are used.

Nuxt 3 is a meta framework build on top of Vue.js, Vite, Nitro, and Typescript. It is a framework for building modern web applications. Nuxt provides both frontend and backend functionality so you can focus your attention to a single project. The interconnectivity between frontend and backend can be powered up by Typescript which makes it easier to develop, build, and debug. You can even extend this connectivity to your database with Prisma.

You can learn more about the basics, as well as documentation of Nuxt 3 [here](https://nuxt.com/docs).

---

Base included in this starter:

- <a href="#nuxt3">Nuxt 3</a>
- <a href="#config">Configuration</a>
  - <a href="#vite">Vite - Build Tool</a>
  - <a href="#env">Environment</a>
  - <a href="#eslint">Eslint - Linter</a>
  - <a href="#prettier">Prettier - Code Formatter</a>
  - <a href="#git">Git - Version Control</a>
- <a href="#frontend">Frontend</a>
  - <a href="#vue">Vue - Frontend Framework</a>
  - <a href="#pinia">Pinia - State Management</a>
  - <a href="#nuxt-ui">Nuxt UI - Tailwind first UI Components</a>
- <a href="#backend">Backend</a>
  - <a href="#nitro">Nitro</a>
  - <a href="#nuxt-security">Nuxt Security - Headers</a>

---

<h1 id="editor">Editor</h1>

Open Your editor in the folder you want in a new window

Helpful Visual Studio Code extensions:

- Prettier - Code formatter
- ESLint
- Vue - Official
- Tailwind CSS Intellisense

---

<h1 id="nuxt3">Nuxt 3</h1>

Open Terminal

- `npx nuxi init nuxt-app`
  Rename your folder however you want it, in this case its nuxt3-starter
- `cd nuxt3-starter`
- `mkdir pages server store`
  These directories have different purposes:

  1. **pages**: contains your application views and routes. Nuxt 3 will read all the .vue files inside this directory and set them up as application routes using the file name as the path.
  2. **server**: contains the server side of your app, which is the backend of your application.
  3. **store**: contains your Pinia store. Pinia is used for state management, that lets you transfer data between components without using props or events

     **Other directories:**

  4. **[components](https://nuxt.com/docs/guide/directory-structure/components)**: contains your Vue.js Components.
  5. **[plugins](https://nuxt.com/docs/guide/directory-structure/plugins)**: contains your plugins, which are JavaScript packages that you can add to your application at runtime.
  6. **[composables](https://nuxt.com/docs/guide/directory-structure/composables)**: contains composables, which are functions that can be used in multiple components. Composables can be recognized by the use prefix.
  7. **[utils](https://nuxt.com/docs/guide/directory-structure/utils)**: contains utility functions that can be used in multiple places. Similar to composables
  8. **[layouts](https://nuxt.com/docs/guide/directory-structure/layouts)**: contains customizable layouts used to create complex UIs.
  9. **[assets](https://nuxt.com/docs/guide/directory-structure/assets)**: contains your un-compiled assets such as css files, images, or fonts.
  10. **[public](https://nuxt.com/docs/guide/directory-structure/public)**: directory is directly served at the server root and contains public files that have to keep their names
  11. **[middleware](https://nuxt.com/docs/guide/directory-structure/middleware)**: contains customizable route middleware that you can use throughout your frontend. This can be used for your auth provider for example. Do not confuse with the /server/middleware directory, that is used to protect your api routes.
  12. **[content](https://nuxt.com/docs/guide/directory-structure/content)**: contains your content files, such as markdown files. Used to create a file based CMS. Requires installation of the @nuxt/content module.
  13. **types**: contains your typescript types. If you define your types in a **.d.ts** file. You can use your types across the application.

- `pnpm add vue`
  The next step is to add boilerplate dependencies:
  1. **Vue** is the frontend framework used for this app, most of the vue features are already included in Nuxt 3.
- `pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-prettier @nuxtjs/eslint-config-typescript`
  This step is installing dev dependencies:
  1. **Typescript**: we want to use strict Typescript because it leads to smoother developing, building and debugging. It also helps with code completion and documentation. Typescript is installed by default
  2. **ESLint**: we want to use ESLint to enforce certain code styles and rules, such as no unused variables.
  3. **Prettier**: we want to use Prettier to enforce certain code formatting, such as no semicolons or print width.

The next steps are configuring your project by adding or editing certain files in the root directory.

---

<h1 id="config">Configuration</h1>

### nuxt.config.ts

```jsx
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      env: process.env.NUXT_PUBLIC_ENV ?? process.env.NODE_ENV,
      url: process.env.NUXT_PUBLIC_URL,
    },
  },
  modules: ['@nuxt/devtools'],
  imports: {
    dirs: ['store'],
  },
  devtools: {
    enabled: true,
  },
})
```

This is the most important config file in your project. Your config is written inside the defineNuxtConfig() function.

You can read more about configurating Nuxt 3 [here](https://nuxt.com/docs/getting-started/configuration).

<h3 id="config-core">Core Configurations</h3>
These core configurations are usually used in a seperate config file. Nuxt 3 allows you to configure all of them in the nuxt.config.ts file. These are the core libraries/technologies that are used by Nuxt 3. This nuxt.config.ts setup uses all of the default settings for these core technologies.

<h4 id="vite">Vite</h4>
The vite property is used to configure vite, which is the build tool used by Nuxt 3. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Your build tool consists of your dev server, which lets you run your app locally on your machine. It also consists of your build process, which is used to build your app for production. Vite is used for both of these things.

You can learn more about Vite [here](https://vitejs.dev/guide/).

<h4 id="config-vue">Vue (config)</h4>
The vue property is used to configure vue, which is the frontend javascript framework used by Nuxt 3. Read more in the <a href="#vue">Vue</a> section.

<h4 id="config-nitro">Nitro (config)</h4>
The nitro property is used to configure Nitro, which is the server engine used by Nuxt 3. Read more in the <a href="#nitro">Nitro</a> section.

<h3 id="config-used">Used Configurations</h3>

<h4 id="ssr">SSR</h4>
The ssr property is used to enable or disable server side rendering. Nuxt 3 ships server-side rendering by default. This means the server returns a fully rendered HTML page to the browser.

You can learn more about rendering concepts [here](https://v3.nuxtjs.org/guide/concepts/rendering/).

<h4 id="runtimeconfig">Runtime config</h4>
The runtimeConfig property is used to configure environment variables that we want to expose to the useRuntimeConfig() composable. The variables in the root are exposed to the server, and need to be prefixed by NUXT. The variables in the public object are exposed to client, and need to be prefixed by NUXT_PUBLIC.

You can read more about Runtime config [here](https://nuxt.com/docs/api/composables/use-runtime-config).

<h4 id="modules">Modules</h4>
The modules property is used to configure nuxt modules.

You can find an extensive list of nuxt modules that let you expand on your app [here](https://nuxt.com/modules).

<h4 id="imports">Imports</h4>
The imports property is used to configure the auto import feature of Nuxt.

You can read more about the auto import feature [here](https://nuxt.com/docs/guide/concepts/auto-imports).

<h4 id="devtools">Devtools</h4>
The devtools property is used to configure the module @nuxt/devtools. You can use these devtools by clicking on the Nuxt icon in the bottom of your browser where the app is running.

You can read more about the devtools [here](https://devtools.nuxtjs.org/).

---

<h3 id="env">.env</h3>

Your.env file is used to store environment variables. These variables can be accessed in your **server side code only** using process.env.ENVIRONMENT_VARIABLE_NAME. This is useful for storing sensitive information such as api keys, or for storing different values for different build environments.

```
# Node.js
NODE_ENV="development"
PORT="3000"

# Nuxt 3 - Can be exposed to runtime config server side
NUXT_API_KEY=""

# Nuxt 3 Public - Can be exposed to public runtime config client side
NUXT_PUBLIC_ENV="development"
NUXT_PUBLIC_URL="http://localhost:3000"
```

You can generate an API key [here](https://codepen.io/corenominal/pen/rxOmMJ).

**IMPORTANT:** It is not possible to overwrite NODE_ENV even though it is in the .env file. This is because NODE_ENV is a reserved environment variable. The value is either "development" or "production" depending on the build environment. If you want to add more build environments, for example a test environment, you can replace the env variable in the runtimeConfig public object. For example as done here in : `env: process.env.NUXT_PUBLIC_ENV`

---

<h3 id="tsconfig">tsconfig.json</h3>

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "types": ["@pinia/nuxt"]
  }
}
```

This file is used to configure Typescript. It extends the Nuxt 3 Typescript config, and adds the Pinia types. There is also a seperate Typescript config for the server, which is located in the server folder.

You can learn more about Typescript [here](https://www.typescriptlang.org/docs/handbook/intro.html).

You can learn more about Typescript with Nuxt 3 [here](https://nuxt.com/docs/guide/concepts/typescript).

---

<h3 id="eslint">.eslintrc.js</h3>

```jsx
const attributesOrder = [
  'DEFINITION',
  'LIST_RENDERING',
  'CONDITIONALS',
  'RENDER_MODIFIERS',
  'GLOBAL',
  'UNIQUE',
  'SLOT',
  'TWO_WAY_BINDING',
  'OTHER_DIRECTIVES',
  'ATTR_SHORTHAND_BOOL',
  'ATTR_DYNAMIC',
  'ATTR_STATIC',
  'EVENTS',
  'CONTENT',
]

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-console': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': ['error', { order: attributesOrder, alphabetical: true }],
  },
}
```

change package.json `"scripts"` object to the following by adding a `lint` script command:

```jsx
"scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint --ext .ts,.js,.vue ."
},
```

If you need to change the Node version, you can do so in the engines object. The .nprmc file includes a `engine-strict=true` setting, which will make sure the Node version always matches the one specified in package.json.

You can also change the metadata of your application in package.json.

Now you can run the following commands in terminal to lint, and subsequently fix your code (that can be fixed automatically). Your linting will be using the config you made in .eslintrc.js. This config is fairly opinitinated, but you can change it to your liking by changing your config.

`pnpm lint`

`pnpm lint --fix`

You can learn more about how to configure ESLint [here](https://eslint.org/docs/latest/use/configure/).

---

<h3 id="prettier">.prettierrc.js</h3>

```jsx
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 160,
  tabWidth: 2,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
}
```

Do you have the prettier extension installed in your editor? Prettier will automatically format your code when you save, using the config you made in .prettierrc.js.

You can learn more about Prettier [here](https://prettier.io/docs/en/index.html).

---

<h3 id="git">.gitignore</h3>

```jsx
# Nuxt dev/build outputs
.output
.nuxt
.nitro
.cache
dist

# Node dependencies
node_modules

# Logs
logs
*.log

# Misc
*.DS_Store
.fleet
.idea

# Local env files
.env
.env.*
!.env.example
```

This file is used to tell git which files to ignore. You can add files to this list as you see fit. This config is the default config for Nuxt 3.

You can learn more about git and .gitignore [here](https://git-scm.com/docs).

---

<h1 id="frontend">Frontend</h1>

<h2 id="vue">Vue</h2>

Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex. Vue uses two types of syntax: the Options API and the Composition API. This project uses the Composition API, which was introduced in Vue 3.

You can learn more about Vue [here](https://vuejs.org/guide/introduction.html).

### app.vue

```html
<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Nuxt app',
    meta: [{ hid: 'description', name: 'description', content: 'Nuxt app' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: { lang: 'en' },
  })
</script>
```

app.vue is the root Vue component of your app. Every page using Nuxt 3 file based routing will be rendered inside the NuxtPage component. You can also place components or html here that is shared across the app, such as a navbar. Some page meta tags are also set here, using the useHead() composable. For example, the title and favicon.

Do note the setup property in the script tag, this is used to write our Vue 3 code in the Composition API style. This style is modular and is closer to vanilla Javascript than the Options API style.

You can read more about the Composition API [here](https://v3.vuejs.org/guide/composition-api-introduction.html).

### pages/index.vue

```html
<template>
  <div id="index">
    <h1>Index page</h1>
  </div>
</template>

<script setup lang="ts"></script>
```

This is the index.vue page, which is rendered at the base route of your app (http://localhost:3000).

You can read more about pages [here](https://nuxt.com/docs/guide/directory-structure/pages).

---

<h2 id="pinia">Pinia</h2>

`pnpm add pinia @pinia/nuxt`

### store/store.ts

```tsx
export const useStore = defineStore('pinia-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'

  return {
    env,
  }
})
```

This is the store file. It is a Typescript file, and it is using the Pinia library. Pinia is the standard state management system established by the Vue core team. The store is defined using the defineStore() function. The first argument is the name of the store, and the second argument is a function that returns an object. This object contains the state, getters, mutations, and actions of the store. By declaring the function with the ()=> syntax, the store is written in the Vue 3 composition api syntax. The store is then exported as a function called useStore(). By using the last part of the file, this function can be used in any component.

You can read more about Pinia [here](https://pinia.esm.dev/).

The variable declared is env, which is retrieved from the public runtime config. This variable serves as an example on how to declare pinia state variables, and can be used across the whole app to access an environment variable that we want to expose to the client. For example, if we want to use a different API url in development than in production.

Add the following to the **modules array of nuxt.config.ts**:

```tsx
'@pinia/nuxt'
```

Add the following properties to **nuxt.config.ts**:

```tsx
imports: {
    dirs: ["store"],
},
```

This will automatically import the store file into the app.

Now in any component you can use the following code snippet to initialize the store in your script tag, which then can also be used in your html.

```tsx
const store = useStore()
```

Or call `useStore()` directly in your html or javascript.

---

<h2 id="nuxt-ui">Nuxt UI</h2>

`pnpm add @nuxt/ui`

`pnpm add -D prettier-plugin-tailwindcss`

Nuxt UI is a module that provides a set of Vue components and composables built with Tailwind CSS and Headless UI to help you build beautiful and accessible user interfaces.
Its goal is to provide everything related to UI when building a Nuxt app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

You can learn more about Nuxt UI [here](https://ui.nuxt.com/getting-started).

When you install Nuxt UI,

Nuxt UI will automatically install the @nuxtjs/tailwindcss, @nuxtjs/color-mode and nuxt-icon modules for you. Tailwind CSS is a utility-first CSS framework. It is a very popular CSS framework, allowing you to write inline css without opiniated best practies. Nuxt Color Mode is a module that allows you to implement dark and light modes in your app. Nuxt Icon is a module that allows you to use a lot of icon libraries in your app. These modules are used to build the Nuxt UI components, and work together in synergy.

You can learn more about Tailwind CSS [here](https://tailwindcss.com/docs).

Add the following to the **modules array of nuxt.config.ts**:

```tsx
'@nuxt/ui'
```

Add the following property to **nuxt.config.ts**:

```tsx
tailwindcss: {
    exposeConfig: true,
    viewer: true,
},
```

If you do not want to have to implement light and dark color mode, you can set the colorMode to light (or dark) in nuxt.config.ts as follows:

```tsx
colorMode: {
    preference: 'light',
},
```

### app.config.ts

```tsx
export default defineAppConfig({
  ui: {
    primary: 'primaryColor',
  },
})
```

Nuxt UI uses a design system that is based on a primary color. In this config you can overwrite this color. The default is the green color included in tailwind css. This config overwrites this to primaryColor, which is later set up in tailwind.config.ts

### tailwind.config.ts

```tsx
import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryColor: colors.blue,
      },
    },
  },
}
```

This file is used to configure tailwind css. It is a typescript file, and it is used to extend the default tailwind css configuration. The primaryColor is set to the blue color from the tailwind css color palette. This color is then used as the primary color in the Nuxt UI components as configured in the app.config.ts file.

### /assets/css/tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This file is required to make sure Tailwind CSS is included in the application, and allows you to overwrite global styles using traditional CSS. You can use this for example to set a global font family.

Add the following array to **.prettierrc.js**:

```jsx
plugins: ['prettier-plugin-tailwindcss']
```

This prettier plugin orders your tailwind classes in a standardized way. This is helpful when working in a team, it also makes it easier to find classes in your code.

Add the following property to **nuxt.config.ts**:

```tsx
tailwindcss: {
  exposeConfig: true,
  viewer: true,
},
```

---

<h1 id="backend">Backend</h1>

<h2 id="nitro">Nitro</h2>

Nitro is the server engine used by Nuxt 3. The server directory is where you can configure the server/backend of your application. A server engine is different from a seperate backend application. Because Nitro also serves the server-side rendered website. Nitro uses the unjs/h3 http library for API endpoints and middleware, which is built for high performance and portability.

You can learn more about server directory [here](https://nuxt.com/docs/guide/directory-structure/server).
You can learn more about Nitro [here](https://nitro.unjs.io/).
This documentation mentions a basic middleware file, api request and server plugin. Everything you need to run your backend application.

You can find the documentation for h3 functions [here](https://www.jsdocs.io/package/h3#package-index-functions).

### /server/api/test.post.ts

Similar to the pages system, you can create api endpoints by creating files in the /server/api directory. The file name is the endpoint name, and the file extension is the request method. The file should export a default function that returns an object. This object will be returned as a json response by default.

To access dynamic route parameters, query parameters, hearders and body you can use the event context.

Note that reading of the request body is called asynchronously, so you need to use the await keyword. Make sure to include the async keyword before the arrow function definition.

```tsx
export default defineEventHandler(async (event) => {
  return {
    statusCode: 200,
    statusMessage: 'OK',
    url: getRequestURL(event),
    path: event.path,
    method: event.node.req.method,
    query: getQuery(event),
    headers: getRequestHeaders(event),
    body: await readBody(event),
  }
})
```

This example is pretty verbose, but demonstrates how to use the event context by returning it's properties directly to the user. The try/catch block is used to catch any errors that might occur while reading the request body. This serves as a foundational example on how to handle errors in Nitro. This endpoint can be used to test if the backend application is working, for monitoring purposes.

### /server/middleware/middleware.ts

```tsx
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
```

To protect the backend application, you want to add a basic middleware layer. Nuxt 3 automatically recognizes files in the /server/middleware directory to inject before every server/api route request. This code snippet is an example of an authentication layer. The code logs every request path, sets security headers, and checks if the request is a public route. If the route does not follow a public route explicitly stated in the pubicRoutes object, it will check if the request has a valid API key. If the request is not a public route, and does not have a valid API key, it will return a 401 error. This way every api route is protected by default, and you can add exceptions to the publicRoutes object.

### /server/plugins/server.ts

```tsx
export default defineNitroPlugin(async (nitroApp) => {
  try {
    await console.log(`Nitro server listening on: ${process.env.NUXT_PUBLIC_URL}`)
    const testResponse = await $fetch('/api/test', { method: 'POST', headers: { 'x-api-key': process.env.NUXT_API_KEY || '' } })
    console.log('testResponse:', testResponse.statusCode, testResponse.statusMessage)
    return nitroApp
  } catch (error) {
    console.log(error)
  }
})
```

Plugins are used to extend Nitro's runtime behavior.
Plugins are auto-registered (filename ordering) and run synchronously on the first nitro initialization. They receive nitroApp context, which can be used to hook into lifecycle events. For example, you can run CRON jobs. However, most hosting providers for Nuxt 3 applications are serverless. So CRON jobs are unreliable, since runtime is limited to the request-response cycle.

---

<h2 id="nuxt-security">Nuxt Security</h2>

`pnpm add nuxt-security`

Nuxt Security is an [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt 3 application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally. This everything on approach is chosen to make it easy to ship a secure application without having to configure security headers. The module also ships with additional security features by default, for example:

- Request size limiting
- Request rate limiting
- CORS Handler: default origin set to \*.

Add the following to the **modules array of nuxt.config.ts**:

```tsx
'nuxt-security'
```

This starter ships with some configurations for nuxt-security as listed in additions below. These include:

- **Nonce**: This feature enables nonce implementation in the Content Security Policy header.
- **Cross-Origin Embedder Policy**: unsafe-none, which enables nuxt-devtools to work.
- **Content Security Policy**: This is a security feature that helps prevent attacks such as Cross Site Scripting (XSS) and other code injection attacks. This configuration tightens img-src to only allow from https sources. It also adds a nonce to script-src and script-src-attr. This nonce is used to whitelist scripts that are allowed to run.
- **Strict Transport Security**: This is a security feature that enforces https connections. This configuration extends the max age to 1 year, includes subdomains, and preloads the browser.
- **Request Size Limiter**: This is a security feature that helps prevent attacks such as Denial of Service (DoS) attacks. This configuration limits the maximum request size to 2 MB and file upload requests to 8MB. These are Nuxt Security default values.
- **Rate Limiter**: This is a security feature that helps prevent attacks such as Denial of Service (DoS) attacks. This configuration limits the maximum request rate to 250 requests per minute.

Add the following property to **nuxt.config.ts**:

```tsx
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
```

You can learn more about Nuxt Security configuration [here](https://nuxt-security.vercel.app/documentation/getting-started/setup).

---
