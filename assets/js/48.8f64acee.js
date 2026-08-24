(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/linux/3.md?vue&type=template&id=4be3d9e3
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "ps-进程管理命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ps-进程管理命令"
    }
  }, [_vm._v("#")]), _vm._v(" PS 进程管理命令")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "常用命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#常用命令"
    }
  }, [_vm._v("#")]), _vm._v(" 常用命令")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-ps-aux"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-ps-aux"
    }
  }, [_vm._v("#")]), _vm._v(" 1. ps aux")]), _vm._v(" "), _c('p', [_vm._v("列出系统中所有用户的所有进程。")]), _vm._v(" "), _c('p', [_vm._v("输出包括用户、PID、CPU 和内存使用率、进程运行时间、进程命令等。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("参数说明：")])]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("a")]), _vm._v(": 显示所有用户的进程")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("u")]), _vm._v(": 以用户友好的格式显示输出（包括用户名和更详细的信息）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("x")]), _vm._v(": 显示没有控制终端的进程（包括后台进程）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-ps-ef"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-ps-ef"
    }
  }, [_vm._v("#")]), _vm._v(" 2. ps -ef")]), _vm._v(" "), _c('p', [_vm._v("列出所有进程")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-ps-u-username"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-ps-u-username"
    }
  }, [_vm._v("#")]), _vm._v(" 3. ps -u [username]")]), _vm._v(" "), _c('p', [_vm._v("查看特定用户的进程")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-ps-p-pid"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-ps-p-pid"
    }
  }, [_vm._v("#")]), _vm._v(" 4. ps -p [PID]")]), _vm._v(" "), _c('p', [_vm._v("显示指定进程 ID（PID）的详细信息。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-ps-forest"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-ps-forest"
    }
  }, [_vm._v("#")]), _vm._v(" 5. ps --forest")]), _vm._v(" "), _c('p', [_vm._v("显示进程之间的父子关系，帮助查看进程的继承结构。")]), _vm._v(" "), _c('p', [_vm._v("可以与 -f 或 aux 结合使用。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("ps -ef --forest\n")])])]), _c('h3', {
    attrs: {
      "id": "_6-ps-c-command"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-ps-c-command"
    }
  }, [_vm._v("#")]), _vm._v(" 6. ps -C [command]")]), _vm._v(" "), _c('p', [_vm._v("ps -C nginx")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_7-ps-t-p-pid"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_7-ps-t-p-pid"
    }
  }, [_vm._v("#")]), _vm._v(" 7. ps -T -p [PID]")]), _vm._v(" "), _c('p', [_vm._v("查看某个进程的所有线程。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_8-ps-aux-sort-cpu-ps-aux-sort-mem"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_8-ps-aux-sort-cpu-ps-aux-sort-mem"
    }
  }, [_vm._v("#")]), _vm._v(" 8. ps aux --sort=-%cpu / ps aux --sort=-%mem")]), _vm._v(" "), _c('p', [_vm._v("按 CPU 或内存使用率排序显示进程。")]), _vm._v(" "), _c('p', [_vm._v("--sort=-%cpu: 按 CPU 使用率降序排列。")]), _vm._v(" "), _c('p', [_vm._v("--sort=-%mem: 按内存使用率降序排列。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_9-ps-eo-pid-lstart-cmd-grep-pid"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_9-ps-eo-pid-lstart-cmd-grep-pid"
    }
  }, [_vm._v("#")]), _vm._v(" 9. ps -eo pid,lstart,cmd | grep [PID]")]), _vm._v(" "), _c('p', [_vm._v("显示进程的启动时间及启动的命令。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_10-ps-e-p-pid"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_10-ps-e-p-pid"
    }
  }, [_vm._v("#")]), _vm._v(" 10. ps e -p [PID]")]), _vm._v(" "), _c('p', [_vm._v("显示指定进程的环境变量。")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/linux/3.md?vue&type=template&id=4be3d9e3

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/linux/3.md

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

/* harmony default export */ var _3 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);