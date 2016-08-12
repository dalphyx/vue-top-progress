# vue-top-progress

> Yet another top progress loading bar component for Vue.js.

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`
- [Babel](https://github.com/babel/babel) for compile es6 code

# Instllation

## npm
``` bash
$ npm install vue-top-progress
```

# Usage
``` html
<template>
  <top-progress ref="topProgress"></top-progress>
</template>

<script>
import topProgress from 'vue-top-progress'

export default {
  mounted () {
    this.$refs.topProgress.start()

    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done()
    }, 2000)
  },

  components: {
    topProgress
  }
}
</script>
```

# Props

`speed`

Transition speed, in ms. Default: `350`

`easing`

Transition function. Default: `linear`

`color`

Color of progress bar. Default: `#29d`

`errorColor`

Color of progress bar when status is error. Default: `#f44336`

`height`

Height of progress bar. Default: `3`

`trickle`

Turn off the automatic incrementing behavior by setting this to `false`. Default: `true`

`trickleSpeed`

How often to trickle, in ms. Default: `250`

`minimum`

Minimum percentage used upon starting. Default: `0.8`

`maximum`

By default behavior, when progress start, it will never get to 100% until `done` or `fail` to be called. Setting this to adjust maximum percentage. Default: `97.5`

# License

[The MIT License](http://opensource.org/licenses/MIT)