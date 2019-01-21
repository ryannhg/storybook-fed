<template>
  <div class="page">
    <Hero
      title="Ryan Haskell-Glatz"
      subtitle="Elm Salesman"
      cta-label="Learn more"
    />
    <section class="section">
      <h3>Accordions Demo</h3>
      <div is="accordion" inline-template :accordions="accordion.accordions">
        <div class="accordion">
          <div class="accordion__item"
            v-for="(a, i) in accordions"
            :key="i">
            <button
              class="accordion__header"
              @click="toggle(i)"
              v-text="a.header"></button>
            <div class="accordion__content"
              v-show="isActive(i)"
              v-html="a.content"
              ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },
  data: _ => ({
    accordion: {
      title: 'Accordions',
      accordions: [
        { header: 'Title One', content: '<p>Hello</p>' },
        { header: 'Title Two', content: '<p>Hello 2</p>' },
        { header: 'Title Three', content: '<p>Hello 3</p>' }
      ]
    }
  })
}
</script>

