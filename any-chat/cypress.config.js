import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import codeCoverageTask from "@cypress/code-coverage/task.js";

export default defineConfig({
  projectId: "sqwjxw",
  
  // Global configuration
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  
  // Environment variables
  env: {
    codeCoverage: {
      exclude: [
        'cypress/**/*.*',
        'node_modules/**/*.*',
        'dist/**/*.*',
        'build/**/*.*'
      ]
    }
  },
  
  e2e: {
    // Base URL for the application under test
    baseUrl: 'http://localhost:5173',
    
    // Test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    
    // Experimental features
    experimentalStudio: true,
    
    // Setup node events and plugins
    setupNodeEvents(on, config) {
      // Vite preprocessor for modern JavaScript/TypeScript support
      on('file:preprocessor', vitePreprocessor());
      
      // Code coverage plugin (if using @cypress/code-coverage)
      codeCoverageTask(on, config);
      
      // Return the config object
      return config;
    },
  },
  
  // Component testing configuration (if needed in the future)
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
