webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(3)
__vue_script__ = __webpack_require__(2)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] client/app.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(4)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) {
(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
}
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-743d44c9/app.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTopProgress = __webpack_require__(5);

var _vueTopProgress2 = _interopRequireDefault(_vueTopProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$refs.topProgress.start();
    setTimeout(function () {
      _this.$refs.topProgress.done();
    }, 2000);
  },

  components: {
    topProgress: _vueTopProgress2.default
  }
};

/***/ },
/* 3 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "\n<div class=\"app\">\n  <top-progress ref=\"topProgress\"></top-progress>\n  <div class=\"container\">\n    <h1 class=\"title\">vue-top-progress</h1>\n    <div class=\"actions\">\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.start()\">\n          Start\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.pause()\">\n          Pause\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.done()\">\n          Done\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.fail()\">\n          Fail\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.increase(20)\">\n          Increase(20)\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.decrease(20)\">\n          Decrease(20)\n        </div>\n      </div>\n      <div class=\"action\">\n        <div class=\"button\" @click=\"$refs.topProgress.set(20)\">\n          Set(20)\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-center\">\n      <a class=\"button green download\" href=\"https://github.com/dalphyx/vue-top-progress\">\n        Download\n      </a>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 5 */
/***/ function(module, exports) {

/**
 * Helpers
 */

function clamp (n, min, max) {
  if (n < min) {
    return min
  }
  if (n > max) {
    return max
  }
  return n
}

let queue = (() => {
  let pending = []

  function next () {
    let fn = pending.shift()
    if (fn) {
      fn(next)
    }
  }

  return fn => {
    pending.push(fn)
    if (pending.length === 1) {
      next()
    }
  }
})()

module.exports = {
  template: `
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-bind:css="false"
    >
      <div class="top-progress" :style="barStyle" v-if="show">
        <div class="peg" :style="pegStyle">
        </div>
      </div>
    </transition>
  `,

  data () {
    return {
      error: false,
      show: false,
      progress: 0,
      opacity: 1,
      status: null,
      isPaused: false
    }
  },

  props: {
    speed: {
      type: Number,
      default: 350
    },

    color: {
      type: String,
      default: '#29d'
    },

    errorColor: {
      type: String,
      default: '#f44336'
    },

    trickle: {
      type: Boolean,
      default: true
    },

    trickleSpeed: {
      type: Number,
      default: 250
    },

    easing: {
      type: String,
      default: 'linear'
    },

    height: {
      type: Number,
      default: 3
    },

    minimum: {
      type: Number,
      default: 0.8
    },

    maximum: {
      type: Number,
      default: 97.5
    }
  },

  computed: {
    progressColor () {
      return this.error ? this.errorColor : this.color
    },

    isStarted () {
      return typeof this.status === 'number'
    },

    barStyle () {
      return {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: `${this.progress}%`,
        height: `${this.height}px`,
        backgroundColor: this.progressColor,
        transition: `all ${this.speed}ms ${this.easing}`,
        opacity: `${this.opacity}`,
        zIndex: 9999
      }
    },

    pegStyle () {
      return {
        display: 'block',
        position: 'absolute',
        right: '0',
        width: '100px',
        height: '100%',
        opacity: this.progress ? '1' : '0',
        boxShadow: `0 0 10px ${this.progressColor}, 0 0 5px ${this.progressColor}`,
        transform: 'rotate(3deg) translate(0px, -4px)'
      }
    }
  },

  methods: {
    beforeEnter (el) {
      this.opacity = 0
      this.progress = 0
      this.width = 0
    },

    enter (el, done) {
      this.opacity = 1
      done()
    },

    afterEnter (el) {
      this._runStart()
    },

    _work () {
      setTimeout(() => {
        if (!this.isStarted || this.isPaused) {
          return
        }
        this.increase()
        this._work()
      }, this.trickleSpeed)
    },

    _runStart () {
      this.status = (this.progress === 100 ? null : this.progress)

      if (this.trickle) {
        this._work()
      }
    },

    start () {
      this.isPaused = false

      if (this.show) {
        this._runStart()
      } else {
        this.show = true
      }
    },

    set (amount) {
      this.isPaused = false

      let o
      if (this.isStarted) {
        o = amount < this.progress ?
          clamp(amount, 0, 100) :
          clamp(amount, this.minimum, 100)
      } else {
        o = 0
      }

      this.status = (o === 100 ? null : o)

      queue(next => {
        this.progress = o
        if (o === 100) {
          setTimeout(() => {
            this.opacity = 0
            setTimeout(() => {
              this.show = false
              this.error = false
              next()
            }, this.speed)
          }, this.speed)
        } else {
          setTimeout(next, this.speed)
        }
      })
    },

    increase (amount) {
      let o = this.progress

      if (o < 100 && typeof amount !== 'number') {
        if (o >= 0 && o < 25) {
          amount = Math.random() * 3 + 3
        } else if (o >= 25 && o < 50) {
          amount = Math.random() * 3
        } else if (o >= 50 && o < 85) {
          amount = Math.random() * 2
        } else if (o >= 85 && o < 99) {
          amount = 0.5
        } else {
          amount = 0
        }
      }
      this.set(clamp(o + amount, 0, this.maximum))
    },

    decrease (amount) {
      if (this.progress === 0) {
        return
      }
      this.increase(-amount)
    },

    done () {
      this.set(100)
    },

    getProgress () {
      return this.status ? this.progress : 0
    },

    pause () {
      this.isPaused = true
    },

    fail () {
      this.error = true
      this.done()
    }
  }
}


/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  new _vue2.default({
    el: '.app',
    render: function render(h) {
      return h(_app2.default);
    }
  });
}

/***/ }
],[7]);