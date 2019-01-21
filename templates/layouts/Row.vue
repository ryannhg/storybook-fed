<template>
  <div class="row" :class="rowClass">
    <div class="row__item">
      <div v-if="component" :is="component"></div>
      <div v-else :style="emptyElement"></div>
    </div>
    <div class="row__item">
      <div v-if="component" :is="component"></div>
      <div v-else :style="emptyElement"></div>
    </div>
    <div class="row__item">
      <div v-if="component" :is="component"></div>
      <div v-else :style="emptyElement"></div>
    </div>
  </div>
</template>

<script>
import { select } from '@storybook/addon-knobs'
import Button from '../components/Button'

const components = {
  Empty: '', 
  Button
}

const spacings = {
  None: 'row--none',
  Small: 'row--small',
  Medium: 'row--medium',
  Large: 'row--large'
}

export default {
  data: _ => ({
    spacing: select('Spacing', Object.keys(spacings), 'Small'),
    componentName: select('Component', Object.keys(components), 'Empty'),
  }),
  computed: {
    component () {
      return components[this.componentName]
    },
    rowClass () {
      return spacings[this.spacing]
    },
    emptyElement () {
      return {
        height: '75px',
        width: '200px',
        backgroundColor: '#ddd'
      }
    }
  }
}
</script>
