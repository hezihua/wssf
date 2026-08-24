(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/代码/crypt.md?vue&type=template&id=6169a9c6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "rsa-加密"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#rsa-加密"
    }
  }, [_vm._v("#")]), _vm._v(" RSA 加密")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "简介"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#简介"
    }
  }, [_vm._v("#")]), _vm._v(" 简介")]), _vm._v(" "), _c('p', [_vm._v("什么是RSA加密")]), _vm._v(" "), _c('p', [_vm._v("RSA加密算法是一种非对称加密算法，RSA加密使用了\"一对\"密钥.分别是公钥和私钥,这个公钥和私钥其实就是一组数字!其二进制位长度可以是1024位或者2048位.长度越长其加密强度越大,目前为止公之于众的能破解的最大长度为768位密钥,只要高于768位,相对就比较安全.所以目前为止,这种加密算法一直被广泛使用.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "代码示例"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#代码示例"
    }
  }, [_vm._v("#")]), _vm._v(" 代码示例")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'\n\n// 密钥对生成 http://web.chacuo.net/netrsakeypair\n\nconst publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\\n'\n\nconst privateKey = 'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\\n'\n\n// 加密\nexport function encrypt(txt) {\n  const encryptor = new JSEncrypt()\n  encryptor.setPublicKey(publicKey) // 设置公钥\n  return encryptor.encrypt(txt) // 对数据进行加密\n}\n\n// 解密\nexport function decrypt(txt) {\n  const encryptor = new JSEncrypt()\n  encryptor.setPrivateKey(privateKey) // 设置私钥\n  return encryptor.decrypt(txt) // 对数据进行解密\n}\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/代码/crypt.md?vue&type=template&id=6169a9c6

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/代码/crypt.md

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

/* harmony default export */ var crypt = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);