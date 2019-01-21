<template>
  <div class="row" :class="rowClass">
    <div class="row__item" v-for="(_, i) in items" :key="i">
      <div v-if="component" :is="component"></div>
      <div v-else :style="emptyElement"></div>
    </div>
  </div>
</template>

<script>
import { number, select } from '@storybook/addon-knobs'
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
    componentName: select('Component', Object.keys(components), 'Empty'),
    numberOfItems: number('Item Count', 3,
      { range: true, min: 1, max: 5, step: 1 }
    ),
    spacing: select('Spacing', Object.keys(spacings), 'Small'),
  }),
  computed: {
    component () {
      return components[this.componentName]
    },
    rowClass () {
      return spacings[this.spacing]
    },
    items () {
      return [ ...Array(this.numberOfItems) ]
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
