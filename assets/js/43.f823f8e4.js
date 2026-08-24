(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/docker/2.md?vue&type=template&id=1d896a86
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "docker-数据卷与网络"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#docker-数据卷与网络"
    }
  }, [_vm._v("#")]), _vm._v(" Docker 数据卷与网络")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "数据卷"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#数据卷"
    }
  }, [_vm._v("#")]), _vm._v(" 数据卷")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "数据卷简介"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#数据卷简介"
    }
  }, [_vm._v("#")]), _vm._v(" 数据卷简介")]), _vm._v(" "), _c('p', [_vm._v("数据卷相当于是容器的虚拟文件系统和主机的真实文件系统之间的一个桥梁，建立数据卷就相当于是打通了容器于主机之间的文件交互通道，可以让容器运行时所产生的数据变更被保存到主机中，能够更方便的对数据进行备份以及保护")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "数据卷使用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#数据卷使用"
    }
  }, [_vm._v("#")]), _vm._v(" 数据卷使用")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("docker")]), _vm._v(" run "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--rm")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("80")]), _vm._v(":80 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" /www/test nginx  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 匿名数据卷")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" run "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--rm")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("80")]), _vm._v(":80 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" nginx-www:/www/test nginx  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 具名数据卷")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" volume  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Docker 为我们提供了一些专门用于管理数据卷的命令")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "docker-网络"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#docker-网络"
    }
  }, [_vm._v("#")]), _vm._v(" Docker 网络")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "网络简介"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#网络简介"
    }
  }, [_vm._v("#")]), _vm._v(" 网络简介")]), _vm._v(" "), _c('p', [_vm._v("是 Docker 对容器网络隔离的一项技术，提供了多种不同的模式供用户使用，选择不同的网络模式来实现容器网络的互通以及彻底的隔离。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "网络模式"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#网络模式"
    }
  }, [_vm._v("#")]), _vm._v(" 网络模式")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("docker")]), _vm._v(" network "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ls")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 查看网络模式")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("Bridge 网络模式")])]), _vm._v(" "), _c('p', [_vm._v("bridge 网络模式需要在创建容器时通过参数  --net bridge 或者 --network bridge")]), _vm._v(" "), _c('p', [_vm._v("host 网络模式")]), _vm._v(" "), _c('p', [_vm._v("host 网络模式需要在创建容器时通过参数 --net host 或者 --network host 指定；\n采用 host 网络模式的 Docker Container，可以直接使用宿主机的 IP 地址与外界进行通信，若宿主机的 eth0 是一个公有 IP，那么容器也拥有这个公有 IP。同时容器内服务的端口也可以使用宿主机的端口，无需额外进行 NAT 转换；")]), _vm._v(" "), _c('p', [_vm._v("none 网络模式")]), _vm._v(" "), _c('p', [_vm._v("none 网络模式 --net none 或者 --network none")]), _vm._v(" "), _c('p', [_vm._v("container 网络模式")]), _vm._v(" "), _c('p', [_vm._v("Container 网络模式是 Docker 中一种较为特别的网络的模式。在创建容器时通过参数 --net container:已运行的容器名称|ID 或者 --network container:已运行的容器名称|ID 指定；\n处于这个模式下的 Docker 容器会共享一个网络栈，这样两个容器之间可以使用 localhost 高效快速通信。")]), _vm._v(" "), _c('p', [_vm._v("自定义网络")]), _vm._v(" "), _c('p', [_vm._v("docker network create  --创建网络")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\n# 连接网络\n")])])]), _c('p', [_vm._v("通过 docker network connect 网络名称 容器名称 为容器连接新的网络模式。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("# 断开网络\n")])])]), _c('p', [_vm._v("通过 docker network disconnect 网络名称 容器名称 命令断开网络。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("# 移除网络\n")])])]), _c('p', [_vm._v("可以通过 docker network rm 网络名称 命令移除自定义网络模式，网络模式移除成功会返回网络模式名称。")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("# 容器间通信\n")])])]), _c('p', [_vm._v("两个属于同一个网络的容器是可以进行网络通信的，默认需要通过ip 进行通信，创建容器时使用 --name 可以使用容器名进行通信")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code')])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/docker/2.md?vue&type=template&id=1d896a86

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/docker/2.md

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