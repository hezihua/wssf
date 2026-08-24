(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/docker/3.md?vue&type=template&id=099e6bd9
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "docker-dockerfile"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#docker-dockerfile"
    }
  }, [_vm._v("#")]), _vm._v(" Docker Dockerfile")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "dockerfile-简介"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#dockerfile-简介"
    }
  }, [_vm._v("#")]), _vm._v(" Dockerfile 简介")]), _vm._v(" "), _c('p', [_vm._v("Dockerfile 可以自定义镜像内容")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "语法说明"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#语法说明"
    }
  }, [_vm._v("#")]), _vm._v(" 语法说明")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "基础指令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#基础指令"
    }
  }, [_vm._v("#")]), _vm._v(" 基础指令")]), _vm._v(" "), _c('div', {
    staticClass: "language-dockerfile extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-dockerfile"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("FROM")]), _vm._v(" 基础镜像")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("MAINTAINER")]), _vm._v(" name  # 指定镜像作者")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("LABEL")]), _vm._v(" key=value  # 标签")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ENV")]), _vm._v(" key=value key>=value  # 设置环境变量")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("RUN")]), _vm._v(" ["), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"executable\"")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"param1\"")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"param2\"")]), _vm._v("]  # 镜像构建过程中要执行的命令")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ADD")]), _vm._v(" src dest  # 把src 目录中的文件复制到容器中的 dest 目录")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("WORKDIR")]), _vm._v(" dir  # 设置工作目录，可以简单理解为 cd 到指定目录，如果该目录不存在会自动创建，对 RUN、CMD、ENTRYPOINT、COPY、ADD 生效，可以设置多次 WORKDIR")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("VOLUME")]), _vm._v(" dir dir  # 设置挂载目录，可以将主机中的指定目录挂载到容器中")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("EXPOSE")]), _vm._v(" port tcp/udp")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("CMD")]), _vm._v(" command param1 param2  # 该镜像启动容器时默认执行的命令或参数")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token instruction"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ARG")]), _vm._v(" name=default value  # 设置变量，在镜像中定义一个变量，当使用 docker build 命令构建镜像时，带上 --build-arg name=value 来指定参数值，如果该变量名在 Dockerfile 中不存在则会抛出一个警告")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "构建镜像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#构建镜像"
    }
  }, [_vm._v("#")]), _vm._v(" 构建镜像")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "构建命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#构建命令"
    }
  }, [_vm._v("#")]), _vm._v(" 构建命令")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 基于一个现有的容器，构建一个新的镜像")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" commit "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("OPTIONS"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" CONTAINER "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("REPOSITORY"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v(":TAG"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 基于一个 Dockerfile 构建镜像")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" build "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-t")]), _vm._v(" ImageName:TagName dockerfile "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("dir")]), _vm._v("\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/docker/3.md?vue&type=template&id=099e6bd9

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/docker/3.md

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