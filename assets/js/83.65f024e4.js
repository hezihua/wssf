(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/项目总结/llama-factory.md?vue&type=template&id=b7d87116
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "llama-factory-部署笔记"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#llama-factory-部署笔记"
    }
  }, [_vm._v("#")]), _vm._v(" LLaMA-Factory 部署笔记")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "参考资料"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#参考资料"
    }
  }, [_vm._v("#")]), _vm._v(" 参考资料")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-相关文档"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-相关文档"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 相关文档")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("https://zhuanlan.zhihu.com/p/695287607\n\nhttps://github.com/hiyouga/LLaMA-Factory/blob/main/README_zh.md\n\n")])])]), _c('h2', {
    attrs: {
      "id": "部署流程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#部署流程"
    }
  }, [_vm._v("#")]), _vm._v(" 部署流程")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-环境搭建"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-环境搭建"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 环境搭建")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("git clone depth 1 https://github.com/hiyouga/LLaMA-Factory.git\n\nconda create -n llama_factory python=3.10\n\nconda activate llama_factory\n\ncd LLaMA-Factory\n\n# 使用镜像安装\npip install -e '.[torch,metrics]' https://mirrors.aliyun.com/pypi/simple/\n\n")])])]), _c('h1', {
    attrs: {
      "id": "安装conda"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安装conda"
    }
  }, [_vm._v("#")]), _vm._v(" 安装conda")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh\n\nbash ~/miniconda.sh\n\n\n")])])]), _c('h1', {
    attrs: {
      "id": "下载大模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#下载大模型"
    }
  }, [_vm._v("#")]), _vm._v(" 下载大模型")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\nfrom modelscope import snapshot_download\nmodel_dir = snapshot_download('LLM-Research/Llama3-8B-Chinese-Chat')\n\n")])])]), _c('h1', {
    attrs: {
      "id": "启动"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#启动"
    }
  }, [_vm._v("#")]), _vm._v(" 启动")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("CUDA_VISIBLE_DEVICES=0 llamafactory-cli webchat     --model_name_or_path /home/hezihua/.cache/modelscope/hub/LLM-Research/Llama3-8B-Chinese-Chat     --template llama3\n\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/项目总结/llama-factory.md?vue&type=template&id=b7d87116

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/项目总结/llama-factory.md

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

/* harmony default export */ var llama_factory = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);