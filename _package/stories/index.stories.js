import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import { withOptions } from '@storybook/addon-options'

storiesOf('Demo', module)
  .addDecorator(withOptions({
    addonPanelInRight: true
  }))
  .add('Heading', () => '<h1>Hello World!</h1>')
  .add('Button', () => {
    const button = document.createElement('button')
    button.type = 'button'
    button.innerText = 'Hello Button'
    button.addEventListener('click', e => console.log(e))
    return button
  })
