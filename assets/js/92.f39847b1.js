(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/项目总结/ruoyi.md?vue&type=template&id=9551b77c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "ruoyi-项目总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ruoyi-项目总结"
    }
  }, [_vm._v("#")]), _vm._v(" RuoYi 项目总结")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "技术难点"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#技术难点"
    }
  }, [_vm._v("#")]), _vm._v(" 技术难点")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-技术难点总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-技术难点总结"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 技术难点总结")]), _vm._v(" "), _c('p', [_vm._v("1） 使用特定 https://doc.dataarche.com/#/，只能在https 环境下使用，自生成https证书")]), _vm._v(" "), _c('p', [_vm._v("2） 地图引擎需要配置nginx")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("add_header 'Cross-Origin-Embedder-Policy' 'require-corp';\n\n作用: 这是 跨源嵌入策略（Cross-Origin Embedder Policy，简称 COEP）的一个配置项，用于确保站点只能加载那些明确允许被跨域加载的资源。\n\n如果外部资源没有设置 Cross-Origin-Resource-Policy 头，且该资源与当前页面来自不同域，资源将不会被加载。\n\nadd_header 'Cross-Origin-Opener-Policy' 'same-origin';\n\n作用: 这是 跨源打开策略（Cross-Origin Opener Policy，简称 COOP）的一个配置项，用于控制页面是否与其打开的页面或被打开的页面共享相同的浏览器上下文（如同一窗口或 iframe）。\n\nsame-origin 意味着页面只能与同源（即相同协议、域名和端口）的页面共享同一浏览器上下文。这种隔离可以防止跨域攻击，比如 Spectre 攻击等。\n")])])]), _c('p', [_vm._v("3）基于第二点，文件资源只能使用files 代理进行访问")]), _vm._v(" "), _c('p', [_vm._v("4）搭建rtsp 服务，实现浏览器播放实时视频流，rtsp 服务是一个websocket服务，在https 环境下需要代理 /wss 才能实现访问rtsp 服务")]), _vm._v(" "), _c('p', [_vm._v("5）地图在一个tab 下只能打开实例化一次，通过事件总线机制全局共享同一个地图弹框")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/项目总结/ruoyi.md?vue&type=template&id=9551b77c

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/项目总结/ruoyi.md

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

/* harmony default export */ var ruoyi = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);