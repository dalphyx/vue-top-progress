import vueTopprogress from './top-progress.vue'

const install = function (Vue, opt = {}) {
  if (install.installed) {
    return
  }

  Vue.component(vueTopprogress.name, vueTopprogress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  vueTopprogress,
  install
}
