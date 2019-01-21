module.exports = (Vue) =>
  Vue.component('Accordion', {
    props: {
      accordions: Array
    },
    data: _ => ({
      index: undefined
    }),
    methods: {
      toggle (index) {
        this.index = this.isActive(index)
          ? undefined
          : index
      },
      isActive (index) {
        return this.index === index
      }
    }
  })
