(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/linux/1.md?vue&type=template&id=3e9e9802
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "linux-常用命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#linux-常用命令"
    }
  }, [_vm._v("#")]), _vm._v(" Linux 常用命令")]), _vm._v(" "), _c('p', [_vm._v("在 Linux 系统中，端口管理和网络相关的命令。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "网络相关命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#网络相关命令"
    }
  }, [_vm._v("#")]), _vm._v(" 网络相关命令")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-netstat"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-netstat"
    }
  }, [_vm._v("#")]), _vm._v(" 1. netstat")]), _vm._v(" "), _c('p', [_vm._v("netstat 用于显示网络连接、路由表、接口统计、伪装连接和多播成员资格。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\nnetstat -tuln\n\n显示所有正在监听的 TCP 和 UDP 端口及其状态。\n\n")])])]), _c('h3', {
    attrs: {
      "id": "_2-ss"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-ss"
    }
  }, [_vm._v("#")]), _vm._v(" 2. ss")]), _vm._v(" "), _c('p', [_vm._v("ss 是 netstat 的现代替代品，用于显示套接字统计信息。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\nss -tuln\n\n显示所有正在监听的 TCP 和 UDP 端口及其状态。\n")])])]), _c('h3', {
    attrs: {
      "id": "_3-lsof"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-lsof"
    }
  }, [_vm._v("#")]), _vm._v(" 3. lsof")]), _vm._v(" "), _c('p', [_vm._v("lsof（list open files）显示系统中打开的文件和网络端口。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\nlsof -i :80\n\n显示与端口 80 相关的所有打开文件和进程信息。\n")])])]), _c('h3', {
    attrs: {
      "id": "_4-nmap"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-nmap"
    }
  }, [_vm._v("#")]), _vm._v(" 4. nmap")]), _vm._v(" "), _c('p', [_vm._v("nmap（Network Mapper）是一个网络扫描和端口扫描工具，用于发现网络上的设备和开放的端口。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\nnmap -p 80 localhost\n\n扫描本地主机上的端口 80 是否开放。\n")])])]), _c('h3', {
    attrs: {
      "id": "_5-nc-netcat"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-nc-netcat"
    }
  }, [_vm._v("#")]), _vm._v(" 5. nc（netcat）")]), _vm._v(" "), _c('p', [_vm._v("nc 是一个用于读写网络连接的工具。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\nnc -l 12345\n\n在端口 12345 上监听。\n\necho \"Hello\" | nc localhost 12345\n\n向本地主机的端口 12345 发送 \"Hello\"。\n")])])]), _c('h3', {
    attrs: {
      "id": "_6-telnet"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-telnet"
    }
  }, [_vm._v("#")]), _vm._v(" 6. telnet")]), _vm._v(" "), _c('p', [_vm._v("telnet 用于与远程主机建立 TCP 连接，通常用于调试和测试目的。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\ntelnet localhost 80\n\n尝试连接本地主机的端口 80。\n")])])]), _c('h3', {
    attrs: {
      "id": "_7-curl"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_7-curl"
    }
  }, [_vm._v("#")]), _vm._v(" 7. curl")]), _vm._v(" "), _c('p', [_vm._v("curl 是一个用于传输数据的命令行工具，可以与 HTTP/HTTPS 端口进行交互。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("常见用法：\n\ncurl http://localhost:80\n\n访问本地主机的端口 80 上的 HTTP 服务。\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/linux/1.md?vue&type=template&id=3e9e9802

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/linux/1.md

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