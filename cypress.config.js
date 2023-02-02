const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--use-fake-ui-for-media-stream')
      launchOptions.args.push('--use-fake-device-for-media-stream')
      launchOptions.args.push('--use-file-for-fake-video-capture=C:\\Users\\Nico\\Desktop\\FAVA\\cypress\\fixtures\\validarIdentidad.y4m')
    }

    return launchOptions
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://automation.qa.digiventures.la/",
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});