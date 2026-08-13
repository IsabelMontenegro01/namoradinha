import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração simples do Vite. Não é necessário mexer aqui.
export default defineConfig({
  plugins: [react()],
  base: './', // permite abrir o build em qualquer pasta/hospedagem sem quebrar os caminhos
})
