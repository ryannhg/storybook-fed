<template>
  <section class="hero" :style="heroStyle">
    <div class="container">
      <h1 class="hero__title" v-text="title"></h1>
      <h2 v-if="subtitle" class="hero__subtitle" v-text="subtitle"></h2>
      <div v-if="ctaLabel" class="hero__controls">
        <Button :label="ctaLabel"/>
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
  props: {
    title: {
      type: String,
      default: _ => {
        return text('Title', 'Lorem ipsum')
      }
    },
    subtitle: {
      type: String,
      default: _ => {
        return text('Subtitle', 'Dolor sit a beep-boop')
      }
    },
    ctaLabel: {
      type: String,
      default: _ => {
        return text('CTA Label', 'Read more')
      }
    },
  },
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
