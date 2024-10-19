import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature", // Define o local dos arquivos .feature
    async setupNodeEvents(on, config) {
      // Adicione o plugin de cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Use o esbuild para transpilar
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on('after:run', () => {
        const report = require('multiple-cucumber-html-reporter');

        report.generate({
          jsonDir: 'cypress/cucumber-json', // Diretório dos relatórios JSON
          reportPath: './cypress/reports/html-report', // Caminho para gerar HTML
          metadata:{
            browser: {
              name: 'chrome',
              version: '94'
            },
            device: 'Local test machine',
            platform: {
              name: 'Mac OS',
              version: '11.2'
            }
          },
          customData: {
            title: 'Execution Info',
            data: [
              {label: 'Project', value: 'Cypress Automation'},
              {label: 'Release', value: '1.0.0'},
              {label: 'Execution Start Time', value: new Date().toISOString()},
              {label: 'Execution End Time', value: new Date().toISOString()}
            ]
          }
        });
      });

      

      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    // Localização dos arquivos de step definitions
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports', // Pasta onde os relatórios serão gerados
        overwrite: false,             // Não sobrescrever relatórios antigos
        html: false,                  // Não gerar HTML diretamente
        json: true                    // Gerar relatórios em JSON
      }
    }
  },
});
