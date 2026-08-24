(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/代码/signature.md?vue&type=template&id=3cfefb42
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "数字签名实现"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#数字签名实现"
    }
  }, [_vm._v("#")]), _vm._v(" 数字签名实现")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "签名流程图"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#签名流程图"
    }
  }, [_vm._v("#")]), _vm._v(" 签名流程图")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "https://s2.loli.net/2024/09/24/bRaWZi5MHyeOQcX.png",
      "alt": ".png",
      "title": "https://sm.ms/image/bRaWZi5MHyeOQcX"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "代码实现"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#代码实现"
    }
  }, [_vm._v("#")]), _vm._v(" 代码实现")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("export const salt = '49A1EBA40661CC96DAFF6263B2E3D813'\nexport function generateMd5Signature(params, salt) {\n  // 对请求参数按照字典序进行排序\n  const sortedParams = getSortParams(params)\n  // 拼接排序后的请求参数和盐值\n  let concatenatedString = ''\n  for (const [key, value] of Object.entries(sortedParams)) {\n    concatenatedString += `${key}=${value}&`\n  }\n  concatenatedString += `salt=${salt}`\n  // 使用MD5哈希算法计算签名\n\n  const result = md5(concatenatedString)\n  return result\n}\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/代码/signature.md?vue&type=template&id=3cfefb42

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/代码/signature.md

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

/* harmony default export */ var signature = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);