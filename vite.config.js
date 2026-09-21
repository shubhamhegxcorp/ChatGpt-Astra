import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['deskbound-whoever-movable.ngrok-free.dev']
  }
})