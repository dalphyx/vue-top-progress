import topProgress from './top-progress.vue'

const install = function (Vue, opt = {}) {
  if (install.installed) {
    return
  }

  Vue.component(topProgress.name, topProgress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  topProgress,
  install
}
