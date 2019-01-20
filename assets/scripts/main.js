import Vue from 'vue'
// This is a plugin!
const plugin = {
  install (Vue) {
    require('./mixins')(Vue)
    require('./directives')(Vue)
    require('./components')(Vue)
  }
}

if (document.getElementById('app')) {
  Vue.use(plugin)
  window.app = new Vue({ el: '#app' })
}

export default plugin
