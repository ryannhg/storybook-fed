<template>
  <section class="hero" :style="heroStyle">
    <div class="container">
      <h1 class="hero__title" v-text="title"></h1>
      <h2 class="hero__subtitle" v-text="subtitle"></h2>
    </div>
  </section>
</template>

<script>
export default {
  data: _ => ({
    title: 'Lorem ipsum',
    subtitle: 'Dolor sit a beep-boop.',
    backgroundImage: undefined
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
