(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/nginx/5.md?vue&type=template&id=4a1e33cd
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "nginx-局域网自签名证书"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#nginx-局域网自签名证书"
    }
  }, [_vm._v("#")]), _vm._v(" Nginx 局域网自签名证书")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "配置步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#配置步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 配置步骤")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-生成客户端公钥私钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-生成客户端公钥私钥"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 生成客户端公钥私钥")]), _vm._v(" "), _c('p', [_vm._v("自签名证书并配置nginx, 生成客户端公钥私钥")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("mkdir")]), _vm._v(" new_cert\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" new_cert/\nopenssl genrsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1024")]), _vm._v("\nopenssl rsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" server.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-pubout")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server.pem\nopenssl genrsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" client.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1024")]), _vm._v("\nopenssl rsa  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" client.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-pubout")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" client.pem\n")])])]), _c('h3', {
    attrs: {
      "id": "_2-生成-ca-证书"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-生成-ca-证书"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 生成 CA 证书")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("openssl genrsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" ca.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1024")]), _vm._v("\nopenssl req "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-new")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-key")]), _vm._v(" ca.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" ca.csr\nopenssl x509 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-req")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" ca.csr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-signkey")]), _vm._v(" ca.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" ca.crt\n")])])]), _c('h3', {
    attrs: {
      "id": "_3-生成服务器端和客户端-crt-证书"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-生成服务器端和客户端-crt-证书"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 生成服务器端和客户端 CRT 证书")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("注意：")]), _vm._v(" 这里服务端和客户端的 Organization Name (eg, company) 以及 Organizational Unit Name 都必须要和 CA 的不一样才可以")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("openssl req "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-new")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-key")]), _vm._v(" server.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server.csr\nopenssl req "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-new")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-key")]), _vm._v(" client.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" client.csr \nopenssl x509 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-req")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CA")]), _vm._v(" ca.crt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CAkey")]), _vm._v(" ca.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CAcreateserial")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" server.csr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server.crt\nopenssl x509 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-req")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CA")]), _vm._v(" ca.crt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CAkey")]), _vm._v(" ca.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-CAcreateserial")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" client.csr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" client.crt\n")])])]), _c('h3', {
    attrs: {
      "id": "_4-生成最终需要的-key-和-crt-文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-生成最终需要的-key-和-crt-文件"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 生成最终需要的 key 和 crt 文件")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("openssl rsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" server.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server_nginx.key\nopenssl x509 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-req")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-days")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3650")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-in")]), _vm._v(" server.csr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-signkey")]), _vm._v(" server_nginx.key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-out")]), _vm._v(" server_nginx.crt\n")])])]), _c('h3', {
    attrs: {
      "id": "_5-配置-nginx"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-配置-nginx"
    }
  }, [_vm._v("#")]), _vm._v(" 5. 配置 Nginx")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "参考资料"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#参考资料"
    }
  }, [_vm._v("#")]), _vm._v(" 参考资料")]), _vm._v(" "), _c('p', [_vm._v("https://www.cnblogs.com/sky-cheng/p/15789441.html")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/nginx/5.md?vue&type=template&id=4a1e33cd

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/nginx/5.md

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

/* harmony default export */ var _5 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);