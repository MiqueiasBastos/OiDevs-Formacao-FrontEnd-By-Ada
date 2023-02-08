import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OiDevs-Formacao-FrontEnd-By-Ada/Modulo-06--Framework-Front-End-II-React/aula-01/projeto-instagram/dist',
  plugins: [react()],
})
