// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  serverHandlers: [
    { route: '/api/seat', handler: '~/server/api/seat.get.ts' },
    { route: '/api/seatPUT', handler: '~/server/api/seat.put.ts' }
  ]  
})
