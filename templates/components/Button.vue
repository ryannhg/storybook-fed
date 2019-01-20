<template>
  <button class="button" v-text="label"></button>
</template>

<script>
import { text } from '@storybook/addon-knobs'

export default {
  data: _ => ({
    label: text('Label', 'Read more')
  })
}
</script>
