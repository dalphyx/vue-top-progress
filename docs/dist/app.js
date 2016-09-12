webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(4)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1", __vue_options__)
  } else {
    hotAPI.reload("data-v-1", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Helpers
 */

function clamp(n, min, max) {
  if (n < min) {
    return min;
  }
  if (n > max) {
    return max;
  }
  return n;
}

var queue = function () {
  var pending = [];

  function next() {
    var fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }

  return function (fn) {
    pending.push(fn);
    if (pending.length === 1) {
      next();
    }
  };
}();

exports.default = {
  template: '\n    <transition\n      v-on:before-enter="beforeEnter"\n      v-on:enter="enter"\n      v-on:after-enter="afterEnter"\n      v-bind:css="false"\n    >\n      <div class="top-progress" :style="barStyle" v-if="show">\n        <div class="peg" :style="pegStyle">\n        </div>\n      </div>\n    </transition>\n  ',

  data: function data() {
    return {
      error: false,
      show: false,
      progress: 0,
      opacity: 1,
      status: null,
      isPaused: false
    };
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
    },

    zIndex: {
      type: Number,
      default: 9999
    }
  },

  computed: {
    progressColor: function progressColor() {
      return this.error ? this.errorColor : this.color;
    },
    isStarted: function isStarted() {
      return typeof this.status === 'number';
    },
    barStyle: function barStyle() {
      return {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: this.progress + '%',
        height: this.height + 'px',
        backgroundColor: this.progressColor,
        transition: 'all ' + this.speed + 'ms ' + this.easing,
        opacity: '' + this.opacity,
        zIndex: '' + this.zIndex
      };
    },
    pegStyle: function pegStyle() {
      return {
        display: 'block',
        position: 'absolute',
        right: '0',
        width: '100px',
        height: '100%',
        opacity: this.progress ? '1' : '0',
        boxShadow: '0 0 10px ' + this.progressColor + ', 0 0 5px ' + this.progressColor,
        transform: 'rotate(3deg) translate(0px, -4px)'
      };
    }
  },

  methods: {
    beforeEnter: function beforeEnter(el) {
      this.opacity = 0;
      this.progress = 0;
      this.width = 0;
    },
    enter: function enter(el, done) {
      this.opacity = 1;
      done();
    },
    afterEnter: function afterEnter(el) {
      this._runStart();
    },
    _work: function _work() {
      var _this = this;

      setTimeout(function () {
        if (!_this.isStarted || _this.isPaused) {
          return;
        }
        _this.increase();
        _this._work();
      }, this.trickleSpeed);
    },
    _runStart: function _runStart() {
      this.status = this.progress === 100 ? null : this.progress;

      if (this.trickle) {
        this._work();
      }
    },
    start: function start() {
      this.isPaused = false;

      if (this.show) {
        this._runStart();
      } else {
        this.show = true;
      }
    },
    set: function set(amount) {
      var _this2 = this;

      this.isPaused = false;

      var o = void 0;
      if (this.isStarted) {
        o = amount < this.progress ? clamp(amount, 0, 100) : clamp(amount, this.minimum, 100);
      } else {
        o = 0;
      }

      this.status = o === 100 ? null : o;

      queue(function (next) {
        _this2.progress = o;
        if (o === 100) {
          setTimeout(function () {
            _this2.opacity = 0;
            setTimeout(function () {
              _this2.show = false;
              _this2.error = false;
              next();
            }, _this2.speed);
          }, _this2.speed);
        } else {
          setTimeout(next, _this2.speed);
        }
      });
    },
    increase: function increase(amount) {
      var o = this.progress;

      if (o < 100 && typeof amount !== 'number') {
        if (o >= 0 && o < 25) {
          amount = Math.random() * 3 + 3;
        } else if (o >= 25 && o < 50) {
          amount = Math.random() * 3;
        } else if (o >= 50 && o < 85) {
          amount = Math.random() * 2;
        } else if (o >= 85 && o < 99) {
          amount = 0.5;
        } else {
          amount = 0;
        }
      }
      this.set(clamp(o + amount, 0, this.maximum));
    },
    decrease: function decrease(amount) {
      if (this.progress === 0) {
        return;
      }
      this.increase(-amount);
    },
    done: function done() {
      this.set(100);
    },
    getProgress: function getProgress() {
      return this.status ? this.progress : 0;
    },
    pause: function pause() {
      this.isPaused = true;
    },
    fail: function fail() {
      this.error = true;
      this.done();
    }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

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
    topProgress: _src2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 4 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "app"
  }, [_h('top-progress', {
    ref: "topProgress"
  }), " ", _h('div', {
    staticClass: "container"
  }, [_m(0), " ", _h('div', {
    staticClass: "actions"
  }, [_h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.start()
      }
    }
  }, ["\n          Start\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.pause()
      }
    }
  }, ["\n          Pause\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.done()
      }
    }
  }, ["\n          Done\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.fail()
      }
    }
  }, ["\n          Fail\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.increase(20)
      }
    }
  }, ["\n          increase(20)\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.decrease(20)
      }
    }
  }, ["\n          decrease(20)\n        "])]), " ", _h('div', {
    staticClass: "action"
  }, [_h('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        $refs.topProgress.set(20)
      }
    }
  }, ["\n          set(20)\n        "])])]), " ", _m(1)])])
}},staticRenderFns: [function (){with(this) {
  return _h('h1', {
    staticClass: "title"
  }, ["vue-top-progress"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "text-center"
  }, [_h('a', {
    staticClass: "button green download",
    attrs: {
      "href": "https://github.com/dalphyx/vue-top-progress"
    }
  }, ["\n        Download\n      "])])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
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
  /* eslint no-new: 0 */
  new _vue2.default({
    el: '.app',
    render: function render(h) {
      return h(_app2.default);
    }
  });
}

/***/ }
],[7]);