(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/nginx/2.md?vue&type=template&id=532f99dd
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "nginx-上传文件模块"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#nginx-上传文件模块"
    }
  }, [_vm._v("#")]), _vm._v(" Nginx 上传文件模块")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "参考资料"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#参考资料"
    }
  }, [_vm._v("#")]), _vm._v(" 参考资料")]), _vm._v(" "), _c('p', [_vm._v("推荐一篇文章： https://www.noicdi.com/posts/6159a89c.html")]), _vm._v(" "), _c('p', [_vm._v("防止文章失联，稍微做一下总结")]), _vm._v(" "), _c('h2', {
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
      "id": "_1-依赖模块"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-依赖模块"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 依赖模块")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("wget")]), _vm._v(" https://nginx.org/download/nginx-1.20.2.tar.gz\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" clone https://github.com/fdintino/nginx-upload-module.git\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" clone https://github.com/xQmQ/nginx-upload-rename-module.git\n")])])]), _c('h3', {
    attrs: {
      "id": "_2-编译安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-编译安装"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 编译安装")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("./configure "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--prefix")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("pwd")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v(")")])]), _vm._v("/nginx --add-module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v("/nginx-upload-rename-module --add-module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v("/nginx-upload-module\n\n"), _c('span', {
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
  }, [_vm._v("install")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "后端服务"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#后端服务"
    }
  }, [_vm._v("#")]), _vm._v(" 后端服务")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-处理上传文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-处理上传文件"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 处理上传文件")]), _vm._v(" "), _c('p', [_vm._v("需要部署一个服务处理上传的文件，这里使用python3的flask框架")]), _vm._v(" "), _c('div', {
    staticClass: "language-python extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("from")]), _vm._v(" flask "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" Flask"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" request\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" os\n\napp "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" Flask"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("__name__"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token decorator annotation punctuation"
    }
  }, [_vm._v("@app"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("route")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/upload'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" methods"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'POST'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("upload_file")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("file")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" request"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("files"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'file'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("file")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        filename "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("file")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("filename\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("file")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("save"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("os"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("join"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'uploads'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" filename"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'File uploaded successfully'")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'No file uploaded'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" __name__ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'__main__'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    app"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("run"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("host"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'0.0.0.0'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" port"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5000")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "_4-配置-nginx"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-配置-nginx"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 配置 Nginx")]), _vm._v(" "), _c('div', {
    staticClass: "language-nginx extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-nginx"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("server")])]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("listen")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("80")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("server_name")]), _vm._v(" localhost")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("location")]), _vm._v(" /upload")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_pass")]), _vm._v(" @upload")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_store")]), _vm._v(" uploads")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_store_access")]), _vm._v(" user:rw group:rw all:r")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_set_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_field_name.name")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_file_name")]), _vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_set_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_field_name.content_type")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_content_type")]), _vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_set_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_field_name.path")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_tmp_path")]), _vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_aggregate_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_field_name.md5")]), _vm._v("\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_file_md5")]), _vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_aggregate_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_field_name.size")]), _vm._v("\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$upload_file_size")]), _vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  \n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_pass_form_field")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"^.*$\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("upload_cleanup")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("400")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("404")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("499")]), _vm._v(" 500-505")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("location")]), _vm._v(" @upload")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("proxy_pass")]), _vm._v(" http://127.0.0.1:5000/upload")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("proxy_set_header")]), _vm._v(" Host "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$host")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("proxy_set_header")]), _vm._v(" X-Real-IP "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$remote_addr")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("proxy_set_header")]), _vm._v(" X-Forwarded-For "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$proxy_add_x_forwarded_for")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token directive"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("proxy_set_header")]), _vm._v(" X-Forwarded-Proto "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$scheme")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/nginx/2.md?vue&type=template&id=532f99dd

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/nginx/2.md

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