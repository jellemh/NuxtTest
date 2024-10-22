export const useStore = defineStore('pinia-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'

  return {
    env,
  }
})
