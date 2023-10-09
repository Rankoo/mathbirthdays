import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [preact()],
    base: '/'
  }

  if (command !== 'serve') {
    config.base = '/mathbirthdays/'
  }

  return config
})
