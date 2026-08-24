(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/linux/4.md?vue&type=template&id=ebcb72b0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "systemd-服务管理"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#systemd-服务管理"
    }
  }, [_vm._v("#")]), _vm._v(" Systemd 服务管理")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "基础介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#基础介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 基础介绍")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-systemd-命令介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-systemd-命令介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 1. Systemd 命令介绍")]), _vm._v(" "), _c('p', [_vm._v("在 "), _c('code', [_vm._v("/etc/systemd/system/")]), _vm._v(" 目录下创建文件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-核心组件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-核心组件"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 核心组件")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("systemctl")]), _vm._v("：这是 systemd 的核心命令行工具，用于启动、停止、重启服务，查看状态等")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("journalctl")]), _vm._v("：用于查看和管理由 systemd-journald 收集的系统日志")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("systemd-analyze")]), _vm._v("：用于分析系统启动时间，帮助优化系统启动速度")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("timedatectl")]), _vm._v("：用于查看和设置系统的时间和时区")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("loginctl")]), _vm._v("：用于管理用户登录会话")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-重要命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-重要命令"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 重要命令")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" systemctl daemon-reload  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 加载文件")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "配置示例"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#配置示例"
    }
  }, [_vm._v("#")]), _vm._v(" 配置示例")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-nginx-服务配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-nginx-服务配置"
    }
  }, [_vm._v("#")]), _vm._v(" 4. Nginx 服务配置")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("[Unit]\nDescription=NGINX service\nAfter=network.target\n\n[Service]\nType=forking\nExecStart=/usr/bin/nginx\nExecReload=/bin/kill -s HUP $MAINPID\nExecStop=/bin/kill -s TERM $MAINPID\nPIDFile=/var/run/nginx/nginx.pid\nUser=root\nGroup=root\n\n[Install]\nWantedBy=multi-user.target\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo systemctl start nginx\n\nsudo systemctl stop nginx\n\nsudo systemctl status nginx\n\nsudo systemctl enable nginx\n\n开机自启\n\n")])])]), _c('ol', {
    attrs: {
      "start": "2"
    }
  }, [_c('li', [_vm._v("rtsp.service")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("[Unit]\nDescription=rtsp service\n\n[Service]\nExecStart=/usr/bin/node /software/projects/rtsp-server/main.js\nRestart=always\nUser=root\nEnvironment=PATH=/usr/bin:/usr/local/bin\nEnvironment=NODE_ENV=production\nWorkingDirectory=/software/projects/rtsp-server\n\n[Install]\nWantedBy=multi-user.target\n")])])]), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("sudo systemctl start rtsp\n\nsudo systemctl status rtsp\n\nsudo systemctl enable rtsp\n\n开机自启\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/linux/4.md?vue&type=template&id=ebcb72b0

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/linux/4.md

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