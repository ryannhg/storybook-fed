<template>
  <section class="hero" :style="heroStyle">
    <div class="container">
      <h1 class="hero__title" v-text="title"></h1>
      <h2 v-if="subtitle" class="hero__subtitle" v-text="subtitle"></h2>
      <div class="hero__controls">
        <Button/>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue'
import { text } from '@storybook/addon-knobs'

export default {
  storybook: {
    centered: false
  },
  components: {
    Button
  },
  data: _ => ({
    title: text('Title', 'Lorem ipsum'),
    subtitle: text('Subtitle', 'Dolor sit a beep-boop')
  }),
  computed: {
    heroStyle () {
      return {
        backgroundImage: this.backgroundImage
          ? `url('${this.backgroundImage}')`
          : undefined
      }
    }
  }
}
</script>
