(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/docker/4.md?vue&type=template&id=2b62c8ee
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "docker-镜像源配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#docker-镜像源配置"
    }
  }, [_vm._v("#")]), _vm._v(" Docker 镜像源配置")]), _vm._v(" "), _c('h2', {
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
      "id": "_1-创建或修改配置文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-创建或修改配置文件"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 创建或修改配置文件")]), _vm._v(" "), _c('p', [_vm._v("创建或修改 docker的镜像源文件 daemon.json")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cd /etc/docker\n\nvim daemon.json\n\n{\n  \"registry-mirrors\": [\n    \"https://docker.m.daocloud.io\",\n    \"https://registry.docker-cn.com\",\n    \"https://quay.mirrors.ustc.edu.cn\",\n    \"https://hub-mirror.c.163.com/\",\n    \"https://dockerhub.icu\"\n  ]\n}\n")])])]), _c('p', [_vm._v("1.重启docker")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("systemctl daemon-reload\nsystemctl restart docker\n\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/docker/4.md?vue&type=template&id=2b62c8ee

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/docker/4.md

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

/* harmony default export */ var _4 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);