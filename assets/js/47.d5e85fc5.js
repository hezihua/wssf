(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/linux/2.md?vue&type=template&id=4fbc5982
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "linux-防火墙常用命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#linux-防火墙常用命令"
    }
  }, [_vm._v("#")]), _vm._v(" Linux 防火墙常用命令")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "防火墙工具"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#防火墙工具"
    }
  }, [_vm._v("#")]), _vm._v(" 防火墙工具")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-iptables"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-iptables"
    }
  }, [_vm._v("#")]), _vm._v(" 1. iptables")]), _vm._v(" "), _c('p', [_vm._v("iptables 是一个管理 IPv4 和 IPv6 数据包过滤和 NAT 的工具。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("常见用法：")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\nsudo systemctl start iptables\n\nsudo systemctl enable iptables\n\n启动iptables;\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo iptables -L\n\n显示当前的防火墙规则。\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\n\n允许 HTTP 流量（端口 80）进入。\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo iptables -D INPUT -p tcp --dport 81 -j ACCEPT\n\n删除规则\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo iptables-save | sudo tee /etc/sysconfig/iptables\n\n保存配置\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo iptables -L INPUT --line-numbers\n\n查看\n")])])]), _c('h3', {
    attrs: {
      "id": "_2-firewalld"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-firewalld"
    }
  }, [_vm._v("#")]), _vm._v(" 2. firewalld")]), _vm._v(" "), _c('p', [_vm._v("firewalld 是一个动态管理防火墙的工具，主要用于 Red Hat 系列发行版。")]), _vm._v(" "), _c('p', [_vm._v("常见用法：")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo firewall-cmd --zone=public --add-port=80/tcp --permanent\n\nsudo firewall-cmd --reload\n\n永久允许端口 80 的 TCP 流量并重新加载防火墙规则。\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo systemctl status firewalld\n\n查看 firewalld 的状态。\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo systemctl stop iptables\n\nsudo systemctl disable firewalld\n\n关闭防火墙并且重启后不启动。\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo systemctl start firewalld\n\nsudo systemctl enable firewalld\n\n启动防火墙和 并且开机自动开启。\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/linux/2.md?vue&type=template&id=4fbc5982

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/linux/2.md

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

/* harmony default export */ var _2 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);