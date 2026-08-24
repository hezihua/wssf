(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/nginx/6.md?vue&type=template&id=34809d4c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "nginx-windows-启动脚本"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#nginx-windows-启动脚本"
    }
  }, [_vm._v("#")]), _vm._v(" Nginx Windows 启动脚本")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "批处理脚本"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#批处理脚本"
    }
  }, [_vm._v("#")]), _vm._v(" 批处理脚本")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "启动脚本内容"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#启动脚本内容"
    }
  }, [_vm._v("#")]), _vm._v(" 启动脚本内容")]), _vm._v(" "), _c('div', {
    staticClass: "language-batch extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-batch"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("@")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("echo")]), _vm._v(" off")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("REM 设置NGINX的安装目录")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("set")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("NGINX_DIR")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("D:\\nginx\\nginx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("-1")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("20")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")])]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("REM 切换到NGINX目录")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("cd")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/d")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("%NGINX_DIR%")])]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("REM 启动NGINX")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("start")]), _vm._v(" nginx.exe")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("REM 显示提示信息")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("echo")]), _vm._v(" NGINX 已启动...")]), _vm._v("\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/nginx/6.md?vue&type=template&id=34809d4c

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/nginx/6.md

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

/* harmony default export */ var _6 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);