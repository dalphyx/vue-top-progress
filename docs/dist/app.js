webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);



if (typeof window !== 'undefined') {
  /* eslint no-new: 0 */
  new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: '.app',
    render: h => h(__WEBPACK_IMPORTED_MODULE_0__app_vue__["a" /* default */])
  })
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_eslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04bc4b3c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_eslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04bc4b3c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/client/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

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
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("11c8f08e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bc4b3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bc4b3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n* {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased\n}\nbody {\n  margin: 0;\n  font-family: source sans pro, sans-serif\n}\n.text-center {\n  text-align: center\n}\n.container {\n  width: 960px;\n  margin-right: auto;\n  margin-left: auto\n}\n.title {\n  font-size: 50px;\n  color: #555;\n  text-align: center\n}\n.action {\n  margin-bottom: 15px;\n  text-align: center\n}\n.button {\n  display: inline-block;\n  min-width: 10em;\n  padding: 10px 20px;\n  color: #333;\n  text-align: center;\n  background-color: #f1f1f1;\n  border: 1px solid #eee;\n  border-radius: 3px\n}\n.button.green {\n  background-color: #2d9\n}\n.download {\n  margin-top: 50px;\n  color: #fff;\n  text-decoration: none\n}\n", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
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

var listToStyles = __webpack_require__(8)

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
/* 8 */
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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_vue_top_progress_min__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_vue_top_progress_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_vue_top_progress_min__);
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
//



/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function mounted() {
    var _this = this;

    this.$refs.topProgress.start();
    setTimeout(function () {
      _this.$refs.topProgress.done();
    }, 2000);
  },

  components: {
    vueTopprogress: __WEBPACK_IMPORTED_MODULE_0__dist_vue_top_progress_min__["vueTopprogress"]
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vueTopProgress=e()}(this,function(){"use strict";function t(t,e,s){return t<e?e:t>s?s:t}var e=function(){function t(){var s=e.shift();s&&s(t)}var e=[];return function(s){e.push(s),1===e.length&&t()}}(),s={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[t.show?s("div",{staticClass:"top-progress",style:t.barStyle},[s("div",{staticClass:"peg",style:t.pegStyle})]):t._e()])},staticRenderFns:[],name:"vueTopprogress",data:function(){return{error:!1,show:!1,progress:0,opacity:1,status:null,isPaused:!1}},props:{speed:{type:Number,default:350},color:{type:String,default:"#29d"},colorShadow:String,errorColor:{type:String,default:"#f44336"},trickle:{type:Boolean,default:!0},trickleSpeed:{type:Number,default:250},easing:{type:String,default:"linear"},height:{type:Number,default:3},minimum:{type:Number,default:.8},maximum:{type:Number,default:97.5},zIndex:{type:Number,default:9999}},computed:{progressColor:function(){return this.error?this.errorColor:this.color},isStarted:function(){return"number"==typeof this.status},boxShadow:function(){return this.colorShadow||this.progressColor},barStyle:function(){return{position:"fixed",top:"0",left:"0",right:"0",width:this.progress+"%",height:this.height+"px",backgroundColor:this.progressColor,transition:"all "+this.speed+"ms "+this.easing,opacity:""+this.opacity,zIndex:""+this.zIndex}},pegStyle:function(){return{display:"block",position:"absolute",right:"0",width:"100px",height:"100%",opacity:this.progress?"1":"0",boxShadow:"0 0 10px "+this.boxShadow+", 0 0 5px "+this.boxShadow,transform:"rotate(3deg) translate(0px, -4px)"}}},methods:{beforeEnter:function(t){this.opacity=0,this.progress=0,this.width=0},enter:function(t,e){this.opacity=1,e()},afterEnter:function(t){this._runStart()},_work:function(){var t=this;setTimeout(function(){t.isStarted&&!t.isPaused&&(t.increase(),t._work())},this.trickleSpeed)},_runStart:function(){this.status=100===this.progress?null:this.progress,this.trickle&&this._work()},start:function(){this.isPaused=!1,this.show?this._runStart():this.show=!0},set:function(s){var r=this;this.isPaused=!1;var i=void 0;i=this.isStarted?s<this.progress?t(s,0,100):t(s,this.minimum,100):0,this.status=100===i?null:i,e(function(t){r.progress=i,100===i?setTimeout(function(){r.opacity=0,setTimeout(function(){r.show=!1,r.error=!1,t()},r.speed)},r.speed):setTimeout(t,r.speed)})},increase:function(e){var s=this.progress;s<100&&"number"!=typeof e&&(e=s>=0&&s<25?3*Math.random()+3:s>=25&&s<50?3*Math.random():s>=50&&s<85?2*Math.random():s>=85&&s<99?.5:0),this.set(t(s+e,0,this.maximum))},decrease:function(t){0!==this.progress&&this.increase(-t)},done:function(){this.set(100)},getProgress:function(){return this.status?this.progress:0},pause:function(){this.isPaused=!0},fail:function(){this.error=!0,this.done()}}},r=function t(e){t.installed||e.component(s.name,s)};return"undefined"!=typeof window&&window.Vue&&r(window.Vue),{vueTopprogress:s,install:r}});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app" },
    [
      _c("vue-topprogress", { ref: "topProgress" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "title" }, [_vm._v("vue-top-progress")]),
        _vm._v(" "),
        _c("div", { staticClass: "actions" }, [
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.start()
                  }
                }
              },
              [_vm._v("\n          Start\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.pause()
                  }
                }
              },
              [_vm._v("\n          Pause\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.done()
                  }
                }
              },
              [_vm._v("\n          Done\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.fail()
                  }
                }
              },
              [_vm._v("\n          Fail\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.increase(20)
                  }
                }
              },
              [_vm._v("\n          Increase(20)\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.decrease(20)
                  }
                }
              },
              [_vm._v("\n          Decrease(20)\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "action" }, [
            _c(
              "div",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.$refs.topProgress.set(20)
                  }
                }
              },
              [_vm._v("\n          Set(20)\n        ")]
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "a",
        {
          staticClass: "button green download",
          attrs: { href: "https://github.com/dalphyx/vue-top-progress" }
        },
        [_vm._v("\n        Download\n      ")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04bc4b3c", esExports)
  }
}

/***/ })
],[2]);