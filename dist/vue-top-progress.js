(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueTopProgress = factory());
}(this, (function () { 'use strict';

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

var topProgress$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "css": false }, on: { "before-enter": _vm.beforeEnter, "enter": _vm.enter, "after-enter": _vm.afterEnter } }, [_vm.show ? _c('div', { staticClass: "top-progress", style: _vm.barStyle }, [_c('div', { staticClass: "peg", style: _vm.pegStyle })]) : _vm._e()]);
  }, staticRenderFns: [],
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
        width: this.progress + "%",
        height: this.height + "px",
        backgroundColor: this.progressColor,
        transition: "all " + this.speed + "ms " + this.easing,
        opacity: "" + this.opacity,
        zIndex: "" + this.zIndex
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
        boxShadow: "0 0 10px " + this.progressColor + ", 0 0 5px " + this.progressColor,
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

return topProgress$1;

})));
