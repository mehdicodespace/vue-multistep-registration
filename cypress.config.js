import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    specPattern: 'src/**/__tests__/*.cy.js',
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
