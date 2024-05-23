const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:4200',
    //cy.viewport(550, 750),
  //   viewportWidth: 550,
  // viewportHeight: 750,
    
    pageLoadTimeout : 60000,

  }
})