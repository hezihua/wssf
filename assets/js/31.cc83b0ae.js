(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ applyMode; });

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/modeOptions.js
const modeOptions = {
  light: {
    '--default-color-10': 'rgba(255, 255, 255, 1)',
    '--default-color-9': 'rgba(255, 255, 255, .9)',
    '--default-color-8': 'rgba(255, 255, 255, .8)',
    '--default-color-7': 'rgba(255, 255, 255, .7)',
    '--default-color-6': 'rgba(255, 255, 255, .6)',
    '--default-color-5': 'rgba(255, 255, 255, .5)',
    '--default-color-4': 'rgba(255, 255, 255, .4)',
    '--default-color-3': 'rgba(255, 255, 255, .3)',
    '--default-color-2': 'rgba(255, 255, 255, .2)',
    '--default-color-1': 'rgba(255, 255, 255, .1)',
    '--background-color': '#fff',
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
    '--text-color': '#242424',
    '--text-color-sub': '#7F7F7F',
    '--border-color': '#eaecef',
    '--code-color': 'rgba(27, 31, 35, 0.05)',
    '--mask-color': '#888'
  },
  dark: {
    '--default-color-10': 'rgba(0, 0, 0, 1)',
    '--default-color-9': 'rgba(0, 0, 0, .9)',
    '--default-color-8': 'rgba(0, 0, 0, .8)',
    '--default-color-7': 'rgba(0, 0, 0, .7)',
    '--default-color-6': 'rgba(0, 0, 0, .6)',
    '--default-color-5': 'rgba(0, 0, 0, .5)',
    '--default-color-4': 'rgba(0, 0, 0, .4)',
    '--default-color-3': 'rgba(0, 0, 0, .3)',
    '--default-color-2': 'rgba(0, 0, 0, .2)',
    '--default-color-1': 'rgba(0, 0, 0, .1)',
    '--background-color': '#181818',
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, .6)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, .7)',
    '--text-color': 'rgba(255, 255, 255, .8)',
    '--text-color-sub': '#8B8B8B',
    '--border-color': 'rgba(0, 0, 0, .3)',
    '--code-color': 'rgba(0, 0, 0, .3)',
    '--mask-color': '#000'
  }
};
/* harmony default export */ var Mode_modeOptions = (modeOptions);
// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/applyMode.js

function render(mode) {
  const rootElement = document.querySelector(':root');
  const options = Mode_modeOptions[mode];
  const opposite = mode === 'dark' ? 'light' : 'dark';
  for (const k in options) {
    rootElement.style.setProperty(k, options[k]);
  }
  rootElement.classList.remove(opposite);
  rootElement.classList.add(mode);
}

/**
 * Sets a color scheme for the website.
 * If browser supports "prefers-color-scheme", 'auto' mode will respect the setting for light or dark mode
 * otherwise it will set a dark theme during night time
 */
function applyMode(mode) {
  if (mode !== 'auto') {
    render(mode);
    return;
  }
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (isDarkMode) render('dark');
  if (isLightMode) render('light');
  if (!isDarkMode && !isLightMode) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.');
    const hour = new Date().getHours();
    if (hour < 6 || hour >= 18) render('dark');else render('light');
  }
}

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModePicker_vue_vue_type_style_index_0_id_9b03bb0a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModePicker_vue_vue_type_style_index_0_id_9b03bb0a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModePicker_vue_vue_type_style_index_0_id_9b03bb0a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue?vue&type=template&id=9b03bb0a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mode-options"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Choose mode")]), _vm._v(" "), _c('ul', {
    staticClass: "color-mode-options"
  }, _vm._l(_vm.modeOptions, function (mode, index) {
    return _c('li', {
      key: index,
      class: _vm.getClass(mode.mode),
      on: {
        "click": function ($event) {
          return _vm.selectMode(mode.mode);
        }
      }
    }, [_vm._v(_vm._s(mode.title))]);
  }), 0)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue?vue&type=template&id=9b03bb0a

// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/applyMode.js + 1 modules
var applyMode = __webpack_require__(355);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue?vue&type=script&lang=js

/* harmony default export */ var ModePickervue_type_script_lang_js = ({
  name: 'ModeOptions',
  data() {
    return {
      modeOptions: [{
        mode: 'dark',
        title: 'dark'
      }, {
        mode: 'auto',
        title: 'auto'
      }, {
        mode: 'light',
        title: 'light'
      }],
      currentMode: 'auto'
    };
  },
  mounted() {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto';

    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    var that = this;
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      that.$data.currentMode === 'auto' && Object(applyMode["a" /* default */])(that.$data.currentMode);
    });
    window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
      that.$data.currentMode === 'auto' && Object(applyMode["a" /* default */])(that.$data.currentMode);
    });
    Object(applyMode["a" /* default */])(this.currentMode);
  },
  methods: {
    selectMode(mode) {
      if (mode !== this.currentMode) {
        this.currentMode = mode;
        Object(applyMode["a" /* default */])(mode);
        localStorage.setItem('mode', mode);
      }
    },
    getClass(mode) {
      return mode !== this.currentMode ? mode : `${mode} active`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue?vue&type=script&lang=js
 /* harmony default export */ var Mode_ModePickervue_type_script_lang_js = (ModePickervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue?vue&type=style&index=0&id=9b03bb0a&prod&lang=stylus
var ModePickervue_type_style_index_0_id_9b03bb0a_prod_lang_stylus = __webpack_require__(362);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/Mode/ModePicker.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Mode_ModePickervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModePicker = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);