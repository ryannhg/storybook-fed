const storybook = require('@storybook/html/standalone')

storybook({
  mode: 'dev',
  port: 3000,
  ci: true,
  staticDir: [ './dist' ],
  configDir: './.storybook'
})
