import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
   projectId: "sqwjxw",
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', vitePreprocessor())
    },
  },
});
