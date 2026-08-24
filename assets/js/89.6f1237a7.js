(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/项目总结/regist.md?vue&type=template&id=134bf667
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "windows-自定义协议注册"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#windows-自定义协议注册"
    }
  }, [_vm._v("#")]), _vm._v(" Windows 自定义协议注册")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "简介"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#简介"
    }
  }, [_vm._v("#")]), _vm._v(" 简介")]), _vm._v(" "), _c('p', [_vm._v("在 Windows 中注册自定义协议")]), _vm._v(" "), _c('p', [_vm._v("Windows 使用注册表 (Registry) 来管理自定义协议的注册。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "注册步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#注册步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 注册步骤")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-编辑注册表手动注册"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-编辑注册表手动注册"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 编辑注册表手动注册")]), _vm._v(" "), _c('p', [_vm._v("按下 Win + R，输入 regedit 打开注册表编辑器。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-导航到路径"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-导航到路径"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 导航到路径")]), _vm._v(" "), _c('p', [_vm._v("HKEY_CLASSES_ROOT")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-创建新键"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-创建新键"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 创建新键")]), _vm._v(" "), _c('p', [_vm._v("创建一个新的键，名称为自定义协议名称，例如 myapp。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-配置协议"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-配置协议"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 配置协议")]), _vm._v(" "), _c('p', [_vm._v("在 myapp 下：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("设置 (默认) 的值为描述字符串，例如 MyApp Protocol。")]), _vm._v(" "), _c('li', [_vm._v("新建一个字符串值 URL Protocol（值留空）。")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-创建子键结构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-创建子键结构"
    }
  }, [_vm._v("#")]), _vm._v(" 5. 创建子键结构")]), _vm._v(" "), _c('p', [_vm._v("创建一个子键 shell，在其中再创建子键 open，然后再创建子键 command。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_6-设置执行路径"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-设置执行路径"
    }
  }, [_vm._v("#")]), _vm._v(" 6. 设置执行路径")]), _vm._v(" "), _c('p', [_vm._v("设置 command 下 (默认) 的值为调用的客户端路径，例如：")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\"C:\\Path\\to\\your-client.exe\" \"%1\"\n\n")])])]), _c('h3', {
    attrs: {
      "id": "_7-在浏览器中调用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_7-在浏览器中调用"
    }
  }, [_vm._v("#")]), _vm._v(" 7. 在浏览器中调用")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "myapp://example"
    }
  }, [_vm._v(" 打开app ")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "https://s2.loli.net/2024/12/04/zYmZaRTNsbyi1rX.png",
      "alt": "764D88B7-1D10-4537-B117-DD8ADA396A65.png"
    }
  })])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/项目总结/regist.md?vue&type=template&id=134bf667

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/项目总结/regist.md

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

/* harmony default export */ var regist = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);