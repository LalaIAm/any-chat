import { defineConfig } from "cypress";
import vitePreprocessor from 'cypress-vite'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor())

      config.env = config.env || {}
      
      config.env.BASE_URL = process.env.CYPRESS_BASE_URL

      return config;
    },
  },
});
