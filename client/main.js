import App from './app.vue'
import Vue from 'vue'

if (typeof window !== 'undefined') {
  /* eslint no-new: 0 */
  new Vue({
    el: '.app',
    render: h => h(App)
  })
}
