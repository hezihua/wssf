(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/nginx/1.md?vue&type=template&id=66a01f64
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "nginx-编译安装及标识修改"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#nginx-编译安装及标识修改"
    }
  }, [_vm._v("#")]), _vm._v(" Nginx 编译安装及标识修改")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "安装准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安装准备"
    }
  }, [_vm._v("#")]), _vm._v(" 安装准备")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-下载-nginx-包"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-下载-nginx-包"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 下载 Nginx 包")]), _vm._v(" "), _c('p', [_vm._v("去 nginx官网下载 nginx 包，建议下载稳定版本")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-上传到服务器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-上传到服务器"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 上传到服务器")]), _vm._v(" "), _c('p', [_vm._v("上传 nginx 到 linux 系统自定义的目录下。（上传工具可以使用 xftp）")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-安装依赖环境"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-安装依赖环境"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 安装依赖环境")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("yum "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" gcc-c++\nyum "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-y")]), _vm._v(" pcre pcre-devel\nyum "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-y")]), _vm._v(" zlib zlib-devel\nyum "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-y")]), _vm._v(" openssl openssl-devel\n")])])]), _c('h2', {
    attrs: {
      "id": "安装配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安装配置"
    }
  }, [_vm._v("#")]), _vm._v(" 安装配置")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-解压压缩包"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-解压压缩包"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 解压压缩包")]), _vm._v(" "), _c('p', [_vm._v("解压后得到源码，之后需要编译后安装")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("tar")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-zxvf")]), _vm._v(" nginx-1.xx.tar.gz\n")])])]), _c('h3', {
    attrs: {
      "id": "_5-创建临时目录"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-创建临时目录"
    }
  }, [_vm._v("#")]), _vm._v(" 5. 创建临时目录")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("mkdir")]), _vm._v(" /var/temp/nginx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "隐藏标识"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#隐藏标识"
    }
  }, [_vm._v("#")]), _vm._v(" 隐藏标识")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_6-隐藏-nginx-标识-修改源码"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-隐藏-nginx-标识-修改源码"
    }
  }, [_vm._v("#")]), _vm._v(" 6. 隐藏 Nginx 标识 - 修改源码")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# vim src/core/nginx.h +14")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#define NGINX_VER          \"wjoyxt/\" NGINX_VERSION")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# vim src/http/ngx_http_special_response.c  +22 +29 和 +36  （注意修改后无引号，NGINX_VER为变量）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"<hr><center>wjoyxt</center>\"")]), _vm._v(" CRLF\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# vim src/http/ngx_http_header_filter_module.c +49")]), _vm._v("\nstatic char ngx_http_server_string"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Server: wjoyxt\"")]), _vm._v(" CRLF"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "_7-隐藏版本号"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_7-隐藏版本号"
    }
  }, [_vm._v("#")]), _vm._v(" 7. 隐藏版本号")]), _vm._v(" "), _c('p', [_vm._v("curl Nginx服务器时，有这么一行Server: nginx，说明我用的是 Nginx 服务器，但并没有具体的版本号。由于某些 Nginx 漏洞只存在于特定的版本，隐藏版本号可以提高安全性。这只需要在nginx.conf配置里加上这个就可以了：")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("server_tokens off;\n")])])]), _c('h2', {
    attrs: {
      "id": "编译安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#编译安装"
    }
  }, [_vm._v("#")]), _vm._v(" 编译安装")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_8-配置编译选项"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_8-配置编译选项"
    }
  }, [_vm._v("#")]), _vm._v(" 8. 配置编译选项")]), _vm._v(" "), _c('p', [_vm._v("切换到 nginx 目录，输入如下命令进行配置")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("./configure "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--prefix")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/usr/local/nginx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--pid-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/run/nginx/nginx.pid "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--lock-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/lock/nginx.lock "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--error-log-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/log/nginx/error.log "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-log-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/log/nginx/access.log "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--with-http_gzip_static_module "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-client-body-temp-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/temp/nginx/client "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-proxy-temp-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/temp/nginx/proxy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-fastcgi-temp-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/temp/nginx/fastcgi "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-uwsgi-temp-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/temp/nginx/uwsgi "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n--http-scgi-temp-path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("/var/temp/nginx/scgi\n")])])]), _c('h3', {
    attrs: {
      "id": "_9-编译安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_9-编译安装"
    }
  }, [_vm._v("#")]), _vm._v(" 9. 编译安装")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("make")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("make")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "_10-启动-nginx"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_10-启动-nginx"
    }
  }, [_vm._v("#")]), _vm._v(" 10. 启动 Nginx")]), _vm._v(" "), _c('p', [_vm._v("进入 nginx 目录下的 sbin 目录，执行命令")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("./nginx\n")])])]), _c('h3', {
    attrs: {
      "id": "_11-验证安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_11-验证安装"
    }
  }, [_vm._v("#")]), _vm._v(" 11. 验证安装")]), _vm._v(" "), _c('p', [_vm._v("执行./nginx 命令启动后，打开浏览器，访问虚拟机所处内网 ip 即可打开 nginx 默认页面，表示安装成功（默认访问 80 端口，所以保证 80 端口是开启的，如在本地虚拟机，需要关闭防火墙）\n"), _c('img', {
    attrs: {
      "src": "https://s2.loli.net/2024/07/18/l7Mpzt9dJj3BT2s.png",
      "alt": "nginx 效果图",
      "title": "https://sm.ms/image/l7Mpzt9dJj3BT2s"
    }
  })])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/nginx/1.md?vue&type=template&id=66a01f64

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/nginx/1.md

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