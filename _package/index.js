const storybook = require('@storybook/html/standalone')

storybook({
  mode: 'dev',
  port: 9009,
  staticDir: [
    '../assets/dist'
  ],
  configDir: './.storybook'
})
