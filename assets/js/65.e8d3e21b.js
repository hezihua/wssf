(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/1.md?vue&type=template&id=79151bef
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "verdaccio-搭建私有仓库"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#verdaccio-搭建私有仓库"
    }
  }, [_vm._v("#")]), _vm._v(" Verdaccio 搭建私有仓库")]), _vm._v(" "), _c('h2', {
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
      "id": "_1-拉取镜像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-拉取镜像"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 拉取镜像")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker pull verdaccio/verdaccio\n")])])]), _c('h3', {
    attrs: {
      "id": "_2-构建volume"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-构建volume"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 构建volume")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker volume create verdaccio\n")])])]), _c('h3', {
    attrs: {
      "id": "_3-启动容器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-启动容器"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 启动容器")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run -d --name verdaccio -p 4873:4873 -v verdaccio:/verdaccio verdaccio/verdaccio\n")])])]), _c('h3', {
    attrs: {
      "id": "_4-访问"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-访问"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 访问")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("http://127.0.0.1:4873/\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/1.md?vue&type=template&id=79151bef

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/1.md

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

/* harmony default export */ var _1 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);