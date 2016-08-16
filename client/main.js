import App from './app.vue'
import Vue from 'vue'

if (typeof window !== 'undefined') {
  new Vue({
    el: '.app',
    render: h => h(App)
  })
}
