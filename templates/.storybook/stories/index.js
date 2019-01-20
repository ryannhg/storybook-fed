import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import { withKnobsOptions } from '@storybook/addon-knobs'
import withFigmaUrl from 'storybook-addon-figma'
import centered from '@storybook/addon-centered'

Vue.use(require('../../../assets/scripts/main.js'))

try {
  require('../../static/main.css')
} catch (e) {}

const contexts = {
  components: require.context(`../../components`, true, /.vue$/),
  layouts: require.context(`../../layouts`, true, /.vue$/),
  pages: require.context(`../../pages`, true, /.vue$/)
}

const init = ({ label, context }) => {
  const stories = storiesOf(label, module)
    .addDecorator(withKnobsOptions({
      escapeHTML: false
    }))
    .addDecorator(withFigmaUrl({
      url: 'https://www.figma.com/file/Ltv4Ku2uwI308h3kRM0hF6DT/Buttons?node-id=1%3A2'
    }))
  
  if (label === 'Components') {
    stories.addDecorator(centered)
  }

  context
    .keys()
    .forEach(key => {
      const componentLabel = key.split('.')[1].slice(1)

      // Load .vue file
      const { default: component } = 
        label === 'Components'
          ? require(`../../components/${componentLabel}.vue`)
          : label === 'Layouts'
            ? require(`../../layouts/${componentLabel}.vue`)
            : label === 'Pages'
              ? require(`../../pages/${componentLabel}.vue`)
              : {}

      // Load .md file, if it exists
      let md
      try {
        md =
          label === 'Components'
            ? require(`../../components/${componentLabel}.md`)
            : label === 'Layouts'
              ? require(`../../layouts/${componentLabel}.md`)
              : label === 'Pages'
                ? require(`../../pages/${componentLabel}.md`)
                : {}
        md = md.slice('module.exports = "'.length, md.length - '";'.length).split('\\n').join('')
      } catch (e) {}


      stories.add(
        componentLabel,
        _ => component, {
        notes: { markdown: md || '# ' + componentLabel + '\nNo notes found.' },
      })

    })
}

init({ label: 'Components', context: contexts.components })
init({ label: 'Layouts', context: contexts.layouts })
init({ label: 'Pages', context: contexts.pages })