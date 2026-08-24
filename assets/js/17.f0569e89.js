(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useShowModule; });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function useInstance() {
  const vm = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentInstance */ "d"])();
  if (!vm) throw new Error('must be called in setup');
  const instance = (vm === null || vm === void 0 ? void 0 : vm.proxy) || {};
  return instance;
}
function useShowModule() {
  const recoShowModule = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "h"])(false);
  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* onMounted */ "e"])(() => {
    recoShowModule.value = true;
  });
  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* onUpdated */ "f"])(() => {
    recoShowModule.value = false;
    setTimeout(() => {
      recoShowModule.value = true;
    }, 100);
  });
  return {
    recoShowModule
  };
}

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_RecoIcon; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_ModuleTransition; });

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+babel-helper-vue-jsx-merge-props@1.4.0/node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(322);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.reflect.to-string-tag.js
var es_reflect_to_string_tag = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-class-component@7.2.6_vue@2.7.16/node_modules/vue-class-component/dist/vue-class-component.esm.js
var vue_class_component_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/.pnpm/@vuepress-reco+core@1.6.14-beta.0_vue-class-component@7.2.6/node_modules/@vuepress-reco/core/lib/components/RecoIcon.js


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const ICON_REGEXP = /^(\w+)\-/;
const RecoIconProps = vue_runtime_esm["b" /* default */].extend({
  props: {
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
});
let RecoIcon_RecoIcon = class RecoIcon extends RecoIconProps {
  getClass(icon) {
    if (ICON_REGEXP.test(icon)) {
      return icon.replace(ICON_REGEXP, (...args) => {
        return args[1] === 'reco' ? `iconfont ${args[0]}` : `${args[1]} ${args[0]}`;
      });
    }
    return icon;
  }
  go(link) {
    if (link === '') return;
    window.open(link);
  }
  render() {
    const h = arguments[0];
    return h("i", helper_default()([{}, {
      class: this.getClass(this.icon),
      on: {
        click: this.go.bind(this, this.link)
      }
    }]), [this.$slots.default]);
  }
};
RecoIcon_RecoIcon = __decorate([vue_class_component_esm["b" /* default */]], RecoIcon_RecoIcon);
/* harmony default export */ var components_RecoIcon = (RecoIcon_RecoIcon);
// CONCATENATED MODULE: ./node_modules/.pnpm/@vuepress-reco+core@1.6.14-beta.0_vue-class-component@7.2.6/node_modules/@vuepress-reco/core/lib/components/ModuleTransition.js

var ModuleTransition_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const ModuleTransitionProps = vue_runtime_esm["b" /* default */].extend({
  props: {
    delay: {
      type: String,
      default: '0'
    },
    duration: {
      type: String,
      default: '.25'
    },
    transform: {
      type: Array,
      default() {
        return ['translateY(-20px)', 'translateY(0)'];
      }
    }
  }
});
let ModuleTransition = class ModuleTransition extends ModuleTransitionProps {
  setStyle(items) {
    items.style.transition = `transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`;
    items.style.transform = this.transform[0];
    items.style.opacity = 0;
  }
  unsetStyle(items) {
    items.style.transform = this.transform[1];
    items.style.opacity = 1;
  }
  render() {
    const h = arguments[0];
    return h("transition", {
      "attrs": {
        ...{
          name: 'module'
        }
      },
      "on": {
        ...{
          enter: this.setStyle,
          appear: this.setStyle,
          'before-leave': this.setStyle,
          'after-appear': this.unsetStyle,
          'after-enter': this.unsetStyle
        }
      }
    }, [this.$slots.default]);
  }
};
ModuleTransition = ModuleTransition_decorate([vue_class_component_esm["b" /* default */]], ModuleTransition);
/* harmony default export */ var components_ModuleTransition = (ModuleTransition);
// CONCATENATED MODULE: ./node_modules/.pnpm/@vuepress-reco+core@1.6.14-beta.0_vue-class-component@7.2.6/node_modules/@vuepress-reco/core/lib/components/index.js




/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(21);
var global = __webpack_require__(4);
var setToStringTag = __webpack_require__(323);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h)}else c[b][f]=a[b][f];}else if("hook"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(18).f;
var hasOwn = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(26);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(128);
var uncurryThis = __webpack_require__(5);
var toString = __webpack_require__(61);
var validateArgumentsLength = __webpack_require__(391);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(128);
var uncurryThis = __webpack_require__(5);
var toString = __webpack_require__(61);
var validateArgumentsLength = __webpack_require__(391);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(8);
var uncurryThis = __webpack_require__(5);
var defineBuiltInAccessor = __webpack_require__(417);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(129);
var defineProperty = __webpack_require__(18);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlgoliaSearchBox_vue_vue_type_style_index_0_id_bb5a10ae_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlgoliaSearchBox_vue_vue_type_style_index_0_id_bb5a10ae_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlgoliaSearchBox_vue_vue_type_style_index_0_id_bb5a10ae_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue?vue&type=template&id=bb5a10ae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('form', {
    staticClass: "algolia-search-wrapper search-box",
    attrs: {
      "id": "search-form",
      "role": "search"
    }
  }, [_c('reco-icon', {
    attrs: {
      "icon": "reco-search"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "search-query",
    attrs: {
      "id": "algolia-search-input",
      "placeholder": _vm.placeholder
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue?vue&type=template&id=bb5a10ae

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(414);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/.pnpm/@vuepress-reco+core@1.6.14-beta.0_vue-class-component@7.2.6/node_modules/@vuepress-reco/core/lib/components/index.js + 2 modules
var components = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/helpers/composable.js
var composable = __webpack_require__(319);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue?vue&type=script&lang=js







/* harmony default export */ var AlgoliaSearchBoxvue_type_script_lang_js = (Object(vue_runtime_esm["c" /* defineComponent */])({
  components: {
    RecoIcon: components["b" /* RecoIcon */]
  },
  props: ['options'],
  setup(props, ctx) {
    const instance = Object(composable["a" /* useInstance */])();
    const placeholder = Object(vue_runtime_esm["h" /* ref */])(undefined);
    const initialize = (userOptions, lang) => {
      Promise.all([Promise.all(/* import() | docsearch */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.t.bind(null, 435, 7)), Promise.all(/* import() | docsearch */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.t.bind(null, 436, 7))]).then(([docsearch]) => {
        docsearch = docsearch.default;
        const {
          algoliaOptions = {}
        } = userOptions;
        docsearch(Object.assign({}, userOptions, {
          inputSelector: '#algolia-search-input',
          // #697 Make docsearch work well at i18n mode.
          algoliaOptions: Object.assign({
            'facetFilters': [`lang:${lang}`].concat(algoliaOptions.facetFilters || [])
          }, algoliaOptions),
          handleSelected: (input, event, suggestion) => {
            const {
              pathname,
              hash
            } = new URL(suggestion.url);
            this.$router.push(`${pathname}${hash}`);
          }
        }));
      });
    };
    const update = (options, lang) => {
      instance.$el.innerHTML = '<input id="algolia-search-input" class="search-query">';
      instance.initialize(options, lang);
    };
    Object(vue_runtime_esm["e" /* onMounted */])(() => {
      initialize(props.options, instance.$lang);
      placeholder.value = instance.$site.themeConfig.searchPlaceholder || '';
    });
    return {
      placeholder,
      initialize,
      update
    };
  },
  watch: {
    $lang(newValue) {
      this.update(this.options, newValue);
    },
    options(newValue) {
      this.update(newValue, this.$lang);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AlgoliaSearchBoxvue_type_script_lang_js = (AlgoliaSearchBoxvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue?vue&type=style&index=0&id=bb5a10ae&prod&lang=stylus
var AlgoliaSearchBoxvue_type_style_index_0_id_bb5a10ae_prod_lang_stylus = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/AlgoliaSearchBox.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AlgoliaSearchBoxvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlgoliaSearchBox = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);