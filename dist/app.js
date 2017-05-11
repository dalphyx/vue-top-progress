webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(12)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(10),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/dalphyx/project/github/vue-top-progress/docs/client/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04bc4b3c", Component.options)
  } else {
    hotAPI.reload("data-v-04bc4b3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(2);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = __webpack_require__(6);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _topProgress = __webpack_require__(9);

var _topProgress2 = _interopRequireDefault(_topProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _topProgress2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "\n* {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased\n}\nbody {\n  margin: 0;\n  font-family: source sans pro, sans-serif\n}\n.text-center {\n  text-align: center\n}\n.container {\n  width: 960px;\n  margin-right: auto;\n  margin-left: auto\n}\n.title {\n  font-size: 50px;\n  color: #555;\n  text-align: center\n}\n.action {\n  margin-bottom: 15px;\n  text-align: center\n}\n.button {\n  display: inline-block;\n  min-width: 10em;\n  padding: 10px 20px;\n  color: #333;\n  text-align: center;\n  background-color: #f1f1f1;\n  border: 1px solid #eee;\n  border-radius: 3px\n}\n.button.green {\n  background-color: #2d9\n}\n.download {\n  margin-top: 50px;\n  color: #fff;\n  text-decoration: none\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(11),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/dalphyx/project/github/vue-top-progress/src/top-progress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] top-progress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81c85816", Component.options)
  } else {
    hotAPI.reload("data-v-81c85816", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('top-progress', {
    ref: "topProgress"
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("vue-top-progress")]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.start()
      }
    }
  }, [_vm._v("\n          Start\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.pause()
      }
    }
  }, [_vm._v("\n          Pause\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.done()
      }
    }
  }, [_vm._v("\n          Done\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.fail()
      }
    }
  }, [_vm._v("\n          Fail\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.increase(20)
      }
    }
  }, [_vm._v("\n          Increase(20)\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.decrease(20)
      }
    }
  }, [_vm._v("\n          Decrease(20)\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('div', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$refs.topProgress.set(20)
      }
    }
  }, [_vm._v("\n          Set(20)\n        ")])])]), _vm._v(" "), _vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-center"
  }, [_c('a', {
    staticClass: "button green download",
    attrs: {
      "href": "https://github.com/dalphyx/vue-top-progress"
    }
  }, [_vm._v("\n        Download\n      ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04bc4b3c", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "css": false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "after-enter": _vm.afterEnter
    }
  }, [(_vm.show) ? _c('div', {
    staticClass: "top-progress",
    style: (_vm.barStyle)
  }, [_c('div', {
    staticClass: "peg",
    style: (_vm.pegStyle)
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81c85816", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("717c9fd6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bc4b3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bc4b3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(14)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
],[3]);