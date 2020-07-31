module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "28fb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "363a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "689f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueRecyclist_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28fb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueRecyclist_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueRecyclist_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueRecyclist_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "74a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_cssloading_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("363a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_cssloading_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_cssloading_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_cssloading_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74d88daa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueRecyclist.vue?vue&type=template&id=52d08a36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'vue-recyclist',
    _vm.fixedItemHeight ? 'vue-recyclist--scroll-auto': 'vue-recyclist--scroll-y' ]},[_c('div',{staticClass:"vue-recyclist-header"},[_vm._t("header")],2),_c('div',{ref:"list",staticClass:"vue-recyclist-items",style:({height: _vm.height + 'px', 'padding-top': _vm.topPadding + 'px'})},[_vm._l((_vm.visibleItems),function(item,index){return _c('div',{key:index,staticClass:"vue-recyclist-item"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tombstone),expression:"tombstone"}],class:{
                    'vue-recyclist-transition': _vm.tombstone,
                    'vue-recyclist__item--hidden': item.loaded,
                },style:({opacity: +!item.loaded})},[_vm._t("tombstone")],2),_c('div',{class:{
                    'vue-recyclist-transition': _vm.tombstone,
                    'vue-recyclist__item--hidden': !item.loaded,
                },style:({opacity: +item.loaded})},[_vm._t("item",null,{"data":item.data,"index":index})],2)])}),_c('div',{staticClass:"vue-recyclist-pool"},[_vm._l((_vm.items),function(item,index){return (!item.tomb && !item.height)?_c('div',{key:index,ref:'item'+index,refInFor:true,staticClass:"vue-recyclist-item vue-recyclist-invisible"},[_vm._t("item",null,{"data":item.data,"index":index})],2):_vm._e()}),_c('div',{ref:"tomb",staticClass:"vue-recyclist-item vue-recyclist-invisible"},[_vm._t("tombstone")],2)],2)],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.spinner && !_vm.nomore && !_vm.tombstone),expression:"spinner && !nomore && !tombstone"}],staticClass:"vue-recyclist-loading",style:({visibility: _vm.loading ? 'visible' : 'hidden'})},[_vm._t("spinner",[_vm._m(0)])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.nomore && !_vm.loading),expression:"nomore && !loading"}],staticClass:"vue-recyclist-nomore"},[_vm._t("nomore",[_c('div',[_vm._v("End of list")])])],2),_c('div',{staticClass:"vue-recyclist-footer"},[_vm._t("footer")],2)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-recyclist-loading-content"},[_c('div',{staticClass:"cssloading-circle vue-recyclist-spinner"})])}]


// CONCATENATED MODULE: ./src/components/VueRecyclist.vue?vue&type=template&id=52d08a36&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueRecyclist.vue?vue&type=script&lang=js&
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

/* harmony default export */ var VueRecyclistvue_type_script_lang_js_ = ({
    props: {
        list: {
            type: Array,
            required: true,
        },
        tombstone: {
            type: Boolean,
            default: false, // Whether to show tombstones.
        },
        size: {
            type: Number,
            default: 20, // The number of items added each time.
        },
        offset: {
            type: Number,
            default: 200, // The number of pixels of additional length to allow scrolling to.
        },
        loadmore: {
            type: Function,
            required: true, // The function of loading more items.
        },
        spinner: {
            type: Boolean,
            default: true, // Whether to show loading spinner.
        },
        nomore: {
            type: Boolean,
            default: false, // Whether to show 'no more data' status bar
        },
        fixedItemHeight: {
            type: Boolean,
            default: true, // item height fixed or dynamic
        },
        bypass: {
            type: Boolean,
            default: false, // render list as is w/o recycling
        },
    },
    data () {
        return {
            name: 'VueRecyclist',
            items: [], // Wrapped full list items
            height: 0, // Full list height
            loadings: [], // Loading status queue
            start: 0, // Visible items start index
            startOffset: 0, // Start item offset
        }
    },
    computed: {
        visibleItems () {
            if (this.bypass) {
                return this.items
            }
            return this.items.slice(
                Math.max(0, this.start - this.size),
                Math.min(this.items.length, this.start + this.size),
            )
        },

        topPadding () {
            if (this.bypass) {
                return 0
            }
            const firstItem = this.visibleItems[0]
            return firstItem ? firstItem.top : '0'
        },
        containerHeight () {
            return this.$el && this.$el.offsetHeight || 0 // eslint-disable-line
        },
        tombHeight () {
            return this.tombstone ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0
        },
        loading () {
            return this.loadings.length
        },
    },
    watch: {
        list (arr) {
            if (arr.length) {
                this.loadings.pop()
                if (!this.loading) {
                    this.loadItems()
                }
            } else {
                this.init()
            }
        },
        items (arr) {
            if (arr.length > this.list.length) {
                this.getItems()
            }
        },
    },
    mounted () {
        this.$el.addEventListener('scroll', this.onScroll.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
        this.init()
    },
    destroyed () {
        this.$el.removeEventListener('scroll', this.onScroll.bind(this))
        window.removeEventListener('resize', this.onResize.bind(this))
    },
    methods: {
        init () {
            this.reset()
            this.load()
        },
        reset () {
            this.items = []
            this.height = this.top = this.start = 0 // eslint-disable-line
            this.$el.scrollTop = 0
        },
        load () {
            if (this.tombstone) {
                this.items.length += this.size
                this.loadItems()
            } else if (!this.loading) {
                this.getItems()
            }
        },
        getItems () {
            this.loadings.push(1)
            this.loadmore()
        },
        loadItems () {
            const loads = []
            const start = 0
            const end = this.tombstone ? this.items.length : this.list.length
            for (let i = start; i < end; i += 1) {
                if (this.items[i] && this.items[i].loaded) {
                    continue // eslint-disable-line
                }
                this.setItem(i, this.list[i] || null)
                // update newly added items position
                loads.push(this.$nextTick().then(() => {
                    this.updateItemHeight(i)
                }))
            }
            // update items top and full list height
            Promise.all(loads).then(() => {
                this.updateItemTop()
            })
            this.adjustWidth()
        },
        adjustWidth () {
            if (this.$refs.list) {
                this.$refs.list.style.width = `${this.$el.scrollWidth}px`
            }
        },
        setItem (index, data) {
            this.$set(this.items, index, {
                data: data || {},
                height: 0,
                top: -1000,
                tomb: !data,
                loaded: !!data,
            })
        },
        updateItemHeight (index) {
            // update item height
            const cur = this.items[index]
            const dom = this.$refs[`item${index}`]
            if (dom && dom[0]) {
                cur.height = dom[0].offsetHeight
            } else {
                // item is tombstone
                cur.height = this.tombHeight
            }
        },
        updateItemTop () {
            // loop all items to update item top and list height
            this.height = 0
            for (let i = 0; i < this.items.length; i += 1) {
                const pre = this.items[i - 1]
                this.items[i].top = pre ? pre.top + pre.height : 0
                this.height += this.items[i].height
            }
            // update scroll top when needed
            if (this.startOffset) {
                this.setScrollTop()
            }
            this.updateIndex()
            this.makeScrollable()
        },
        updateIndex () {
            // update visible items start index
            const top = this.$el.scrollTop
            for (let i = 0; i < this.items.length; i += 1) {
                if (this.items[i].top > top) {
                    this.start = Math.max(0, i - 1)
                    break
                }
            }
            // scrolling does not need recalculate scrolltop
            // this.getStartItemOffset()
        },
        getStartItemOffset () {
            if (this.items[this.start]) {
                this.startOffset = this.items[this.start].top - this.$el.scrollTop
            }
        },
        setScrollTop () {
            if (this.items[this.start]) {
                this.$el.scrollTop = this.items[this.start].top - this.startOffset
                // reset start item offset
                this.startOffset = 0
            }
        },
        makeScrollable () {
            // make ios -webkit-overflow-scrolling scrollable
            this.$el.classList.add('vue-recyclist-scrollable')
        },
        onScroll () {
            if (this.$el.scrollTop + this.$el.offsetHeight > this.height - this.offset) {
                this.load()
            }
            this.updateIndex()
        },
        onResize () {
            this.getStartItemOffset()
            this.items.forEach((item) => {
                item.loaded = false
            })
            this.loadItems()
        },
    },
});


// CONCATENATED MODULE: ./src/components/VueRecyclist.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueRecyclistvue_type_script_lang_js_ = (VueRecyclistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cssloading.css?vue&type=style&index=0&lang=css&
var cssloadingvue_type_style_index_0_lang_css_ = __webpack_require__("74a1");

// EXTERNAL MODULE: ./src/components/VueRecyclist.vue?vue&type=style&index=1&lang=css&
var VueRecyclistvue_type_style_index_1_lang_css_ = __webpack_require__("689f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueRecyclist.vue







/* normalize component */

var component = normalizeComponent(
  components_VueRecyclistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueRecyclist = (component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src_0 = (VueRecyclist);

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-recyclist', VueRecyclist)
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-recyclist.common.js.map