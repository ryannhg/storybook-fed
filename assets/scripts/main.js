import Vue from 'vue'

require('./mixins')
require('./directives')
require('./components')

window.app = new Vue({ el: '#app' })
