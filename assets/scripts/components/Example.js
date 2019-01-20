module.exports = (Vue) =>
  Vue.component('Example', {
    props: {
      label: String
    },
    data: _ => ({
      message: 'Hello'
    })
  })
