(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/问题解决/go.md?vue&type=template&id=109252ce
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h3', {
    attrs: {
      "id": "_1-安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-安装"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 安装")]), _vm._v(" "), _c('p', [_vm._v("wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz\n```")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("解压到系统目录：")]), _c('div', {
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
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("tar")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-C")]), _vm._v(" /usr/local "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-xzf")]), _vm._v(" go1.22.0.linux-amd64.tar.gz\n")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-配置环境变量"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-配置环境变量"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 配置环境变量")]), _vm._v(" "), _c('p', [_vm._v("为了让系统随时随地识别 "), _c('code', [_vm._v("go")]), _vm._v(" 命令，需要修改你的 shell 配置文件（通常是 "), _c('code', [_vm._v("~/.bashrc")]), _vm._v(" 或 "), _c('code', [_vm._v("~/.zshrc")]), _vm._v("）。")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("打开配置文件：")]), _c('div', {
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
  }, [_vm._v("nano")]), _vm._v(" ~/.bashrc\n")])])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("在文件末尾添加以下三行：")]), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("GOROOT")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/usr/local/go\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("GOPATH")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token environment constant"
    }
  }, [_vm._v("$HOME")]), _vm._v("/go\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token environment constant"
    }
  }, [_vm._v("PATH")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token environment constant"
    }
  }, [_vm._v("$PATH")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$GOROOT")]), _vm._v("/bin:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$GOPATH")]), _vm._v("/bin\n")])])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("保存并退出：")]), _vm._v(" 按 "), _c('code', [_vm._v("Ctrl + O")]), _vm._v(" 保存，再按 "), _c('code', [_vm._v("Ctrl + X")]), _vm._v(" 退出。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("刷新配置：")]), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("source")]), _vm._v(" ~/.bashrc\n")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-验证安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-验证安装"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 验证安装")]), _vm._v(" "), _c('p', [_vm._v("输入以下命令，如果看到版本号，说明你已经成功了：")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("go version")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/问题解决/go.md?vue&type=template&id=109252ce

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/问题解决/go.md

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

/* harmony default export */ var go = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);