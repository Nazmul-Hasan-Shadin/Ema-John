import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/free-solid-svg-icons']
    }
  }
}
