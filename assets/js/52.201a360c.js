(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/linux/7.md?vue&type=template&id=23e84dbc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "fnm-离线安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#fnm-离线安装"
    }
  }, [_vm._v("#")]), _vm._v(" FNM 离线安装")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "安装步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安装步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 安装步骤")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-fnm-离线安装命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-fnm-离线安装命令"
    }
  }, [_vm._v("#")]), _vm._v(" 1. FNM 离线安装命令")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("mkdir")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" ~/.fnm "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("curl")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-L")]), _vm._v(" https://github.com/Schniz/fnm/releases/latest/download/fnm-linux.zip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-o")]), _vm._v(" /tmp/fnm.zip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("unzip")]), _vm._v(" /tmp/fnm.zip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" /tmp "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("mv")]), _vm._v(" /tmp/fnm ~/.fnm/fnm "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("chmod")]), _vm._v(" +x ~/.fnm/fnm "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'export PATH=\"$HOME/.fnm:$PATH\"'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">>")]), _vm._v(" ~/.bashrc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'eval \"$(fnm env)\"'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">>")]), _vm._v(" ~/.bashrc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("source")]), _vm._v(" ~/.bashrc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\nfnm "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--version")]), _vm._v("\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/linux/7.md?vue&type=template&id=23e84dbc

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/linux/7.md

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

/* harmony default export */ var _7 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);