import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
        note: "note.html",
      }
    }
  }
})
