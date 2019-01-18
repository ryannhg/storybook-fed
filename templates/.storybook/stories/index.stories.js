import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import { withOptions } from '@storybook/addon-options'

storiesOf('Demo', module)
  .addDecorator(withOptions({
    addonPanelInRight: true
  }))
  .add('Heading', () => `
    <div id="app">
      <div inline-template is="example">
        <div>
          <p v-text="message"></p>
          <input v-model="message" />
        </div>
      </div>
    </div>
  `)
  .add('Button', () => {
    const button = document.createElement('button')
    button.type = 'button'
    button.innerText = 'Hello Button'
    button.addEventListener('click', e => console.log(e))
    return button
  })
