(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/docker/1.md?vue&type=template&id=61427300
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "镜像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#镜像"
    }
  }, [_vm._v("#")]), _vm._v(" 镜像")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker search 镜像名称  -- 查找镜像\n\ndocker pull 镜像名称:标签（版本号） --拉取镜像\n\ndocker images -- 查找本地镜像\n\ndocker rmi 镜像名称:版本号  --删除镜像\n")])])]), _c('h1', {
    attrs: {
      "id": "容器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#容器"
    }
  }, [_vm._v("#")]), _vm._v(" 容器")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run 参数... 镜像名称  -- 创建并运行容器\n\ndocker ps -a  --查看容器\n\ndocker rm 容器id或名称  --删除容器\n\ndocker stop 容器id或名称  --停止容器\n\ndocker start 容器id或名称  --启动容器\n\ndocker logs 容器id或名称  --查看容器日志\n\ndocker exec -it    容器id或名称    进入后执行的命令   --进入容器\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/docker/1.md?vue&type=template&id=61427300

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/docker/1.md

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