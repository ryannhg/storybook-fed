<template>
  <button class="button" v-text="label"></button>
</template>

<script>
import { text } from '@storybook/addon-knobs'

export default {
  props: {
    label: {
      type: String,
      default: _ => {
        return text('Label', 'Read more')
      }
    }
  }
}
</script>
