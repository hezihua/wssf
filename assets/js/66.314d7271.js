(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/2.md?vue&type=template&id=67a3cfd6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "vue-vscode-断点调试"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#vue-vscode-断点调试"
    }
  }, [_vm._v("#")]), _vm._v(" Vue + VSCode 断点调试")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "配置步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#配置步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 配置步骤")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-安装-javascript-debugger-插件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-安装-javascript-debugger-插件"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 安装 JavaScript Debugger 插件")]), _vm._v(" "), _c('p', [_vm._v("在 VSCode 中安装 JavaScript Debugger 插件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-更新-source-map"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-更新-source-map"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 更新 source-map")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("devtool: 'source-map'\n")])])]), _c('h3', {
    attrs: {
      "id": "_3-配置-launch-json"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-配置-launch-json"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 配置 launch.json")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  \"version\": \"0.2.0\",\n  \"configurations\": [\n    {\n      \"type\": \"chrome\",\n      \"request\": \"launch\",\n      \"name\": \"Launch Chrome against localhost\",\n      \"url\": \"http://localhost:80\",\n      \"webRoot\": \"${workspaceFolder}/website/ai.psychological.vue\" // 项目根目录\n    }\n  ]\n}\n")])])]), _c('h3', {
    attrs: {
      "id": "_4-在-vscode-上设置断点"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-在-vscode-上设置断点"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 在 VSCode 上设置断点")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-启动-localhost-80-服务"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-启动-localhost-80-服务"
    }
  }, [_vm._v("#")]), _vm._v(" 5. 启动 localhost:80 服务")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_6-f5-打开浏览器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-f5-打开浏览器"
    }
  }, [_vm._v("#")]), _vm._v(" 6. F5 打开浏览器")]), _vm._v(" "), _c('p', [_vm._v("断点处会自动断点")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/2.md?vue&type=template&id=67a3cfd6

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/2.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _2 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);