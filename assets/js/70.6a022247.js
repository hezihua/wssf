(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/passkey.md?vue&type=template&id=4612b45b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "passkey-验证完整流程说明"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#passkey-验证完整流程说明"
    }
  }, [_vm._v("#")]), _vm._v(" Passkey 验证完整流程说明")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📋-目录"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📋-目录"
    }
  }, [_vm._v("#")]), _vm._v(" 📋 目录")]), _vm._v(" "), _c('ol', [_c('li', [_c('a', {
    attrs: {
      "href": "#%E6%B3%A8%E5%86%8C%E6%B5%81%E7%A8%8B"
    }
  }, [_vm._v("注册流程（Registration）")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B"
    }
  }, [_vm._v("登录流程（Authentication）")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E5%85%B3%E9%94%AE%E6%A6%82%E5%BF%B5%E8%AF%B4%E6%98%8E"
    }
  }, [_vm._v("关键概念说明")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E6%95%B0%E6%8D%AE%E6%B5%81%E5%90%91%E5%9B%BE"
    }
  }, [_vm._v("数据流向图")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔐-注册流程-registration"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔐-注册流程-registration"
    }
  }, [_vm._v("#")]), _vm._v(" 🔐 注册流程（Registration）")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "步骤-1-获取注册挑战"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-获取注册挑战"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：获取注册挑战")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端调用：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("POST")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("api"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("auth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("passkey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("register"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("challenge\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"zhangsan\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  userDisplayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"张三\"")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端处理：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("验证用户名是否存在")]), _vm._v(" "), _c('li', [_vm._v("生成唯一的 "), _c('code', [_vm._v("user.id")]), _vm._v("（如果用户不存在，先创建用户）")]), _vm._v(" "), _c('li', [_vm._v("生成随机 "), _c('code', [_vm._v("challenge")]), _vm._v("（防重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("配置注册选项：\n"), _c('ul', [_c('li', [_c('code', [_vm._v("requireResidentKey: true")]), _vm._v(" - 要求可发现凭证")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("residentKey: 'required'")]), _vm._v(" - 强制可发现凭证")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.id")]), _vm._v(" - 用户唯一标识（字节串）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.name")]), _vm._v(" - 用户名")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.displayName")]), _vm._v(" - 显示名称")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("返回：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-json extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-json"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"challenge\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码的随机字符串\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"rp\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"name\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"InfiniCapital\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"id\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"localhost\"")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"user\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"id\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码的用户ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"name\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"zhangsan\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"displayName\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"张三\"")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"pubKeyCredParams\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("..."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"authenticatorSelection\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"requireResidentKey\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"residentKey\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"required\"")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "步骤-2-浏览器创建凭证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-浏览器创建凭证"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：浏览器创建凭证")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端调用：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" credential "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("await")]), _vm._v(" navigator"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("credentials"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("create")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  publicKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 从步骤1获取")]), _vm._v("\n    rp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" id "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    user"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" displayName "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    authenticatorSelection"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      requireResidentKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      residentKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'required'")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("认证器处理：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("生成密钥对：\n"), _c('ul', [_c('li', [_vm._v("私钥（永远不离开设备）")]), _vm._v(" "), _c('li', [_vm._v("公钥（发送给服务端）")])])]), _vm._v(" "), _c('li', [_vm._v("在设备本地存储：\n"), _c('ul', [_c('li', [_vm._v("私钥")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.id")]), _vm._v("（用户标识）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("rpId")]), _vm._v("（依赖方ID，即域名）")]), _vm._v(" "), _c('li', [_vm._v("用户显示名称（用于显示）")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("返回凭证：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"凭证ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  response"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    attestationObject"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 包含公钥和元数据")]), _vm._v("\n    clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 包含 challenge 和 origin")]), _vm._v("\n    transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"internal\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("          "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 传输方式")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "步骤-3-验证注册并保存"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-验证注册并保存"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：验证注册并保存")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端发送：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("POST")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("api"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("auth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("passkey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("register"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("verify\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"zhangsan\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"之前获取的challenge\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  credential"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"凭证ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    response"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      attestationObject"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"internal\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端验证：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("验证 "), _c('code', [_vm._v("challenge")]), _vm._v(" 是否有效（防重放）")]), _vm._v(" "), _c('li', [_vm._v("验证 "), _c('code', [_vm._v("origin")]), _vm._v(" 和 "), _c('code', [_vm._v("rpId")]), _vm._v(" 是否匹配")]), _vm._v(" "), _c('li', [_vm._v("解析 "), _c('code', [_vm._v("attestationObject")]), _vm._v(" 获取公钥")]), _vm._v(" "), _c('li', [_vm._v("验证签名（证明是真实设备生成的）")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("保存到数据库：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  credentialId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"凭证ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  publicKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"公钥（Base64URL）\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  userId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"用户ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  counter"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 初始计数器")]), _vm._v("\n  transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"internal\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔑-登录流程-authentication"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔑-登录流程-authentication"
    }
  }, [_vm._v("#")]), _vm._v(" 🔑 登录流程（Authentication）")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "步骤-1-获取登录挑战"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-获取登录挑战"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：获取登录挑战")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端调用：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("POST")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("api"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("auth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("passkey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("challenge\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("undefined")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可选，可发现凭证不需要")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端处理：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("生成随机 "), _c('code', [_vm._v("challenge")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("关键：不提供 "), _c('code', [_vm._v("allowCredentials")])]), _vm._v("（或设为 "), _c('code', [_vm._v("undefined")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("这样浏览器会枚举所有可发现凭证")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("返回：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-json extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-json"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"challenge\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码的随机字符串\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"rpId\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"localhost\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"timeout\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("60000")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"userVerification\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"required\"")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 注意：没有 allowCredentials")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "步骤-2-浏览器枚举并选择凭证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-浏览器枚举并选择凭证"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：浏览器枚举并选择凭证")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端调用：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" credential "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("await")]), _vm._v(" navigator"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("credentials"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("get")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  publicKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    rpId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"localhost\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    userVerification"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"required\"")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 注意：没有 allowCredentials")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("浏览器处理：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("扫描设备上所有可发现凭证")]), _vm._v(" "), _c('li', [_vm._v("过滤出匹配当前 "), _c('code', [_vm._v("rpId")]), _vm._v(" 的凭证")]), _vm._v(" "), _c('li', [_vm._v("显示列表供用户选择（如：[\"张三\", \"李四\"]）")]), _vm._v(" "), _c('li', [_vm._v("用户选择后，认证器：\n"), _c('ul', [_c('li', [_vm._v("使用私钥对 "), _c('code', [_vm._v("challenge")]), _vm._v(" 签名")]), _vm._v(" "), _c('li', [_vm._v("返回 "), _c('code', [_vm._v("userHandle")]), _vm._v("（即注册时的 "), _c('code', [_vm._v("user.id")]), _vm._v("）")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("返回凭证：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"凭证ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  response"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    authenticatorData"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 包含签名和元数据")]), _vm._v("\n    clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 包含 challenge 和 origin")]), _vm._v("\n    signature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("          "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 对 challenge 的签名")]), _vm._v("\n    userHandle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" ArrayBuffer          "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户ID（可发现凭证）")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "步骤-3-验证登录"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-验证登录"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：验证登录")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("前端发送：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("POST")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("api"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("auth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("passkey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("verify\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("undefined")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可选")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"之前获取的challenge\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  credential"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"凭证ID\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    response"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      authenticatorData"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      signature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      userHandle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"base64url编码\"")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 关键！")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端验证：")])]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("从 "), _c('code', [_vm._v("userHandle")]), _vm._v(" 获取用户ID：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" userHandleBuffer "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" Buffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("from")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("userHandle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'base64url'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" userId "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" userHandleBuffer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("toString")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'utf-8'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("根据用户ID查找凭证：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" credential "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("await")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("getCredentialByUserId")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("userId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 或根据 credential.id 查找")]), _vm._v("\n")])])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("验证签名：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("使用存储的公钥验证签名")]), _vm._v(" "), _c('li', [_vm._v("验证 "), _c('code', [_vm._v("challenge")]), _vm._v(" 是否匹配")]), _vm._v(" "), _c('li', [_vm._v("验证 "), _c('code', [_vm._v("origin")]), _vm._v(" 和 "), _c('code', [_vm._v("rpId")]), _vm._v(" 是否匹配")]), _vm._v(" "), _c('li', [_vm._v("验证 "), _c('code', [_vm._v("counter")]), _vm._v(" 是否递增（防重放）")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("更新计数器：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("await")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("updateCounter")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("credentialId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" newCounter"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("生成 token 并返回：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-json extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-json"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"access_token\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"JWT token\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"token_type\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Bearer\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"verified\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"userId\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"从userHandle获取的用户ID\"")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔑-关键概念说明"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔑-关键概念说明"
    }
  }, [_vm._v("#")]), _vm._v(" 🔑 关键概念说明")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-challenge-挑战"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-challenge-挑战"
    }
  }, [_vm._v("#")]), _vm._v(" 1. Challenge（挑战）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("作用")]), _vm._v("：防重放攻击")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("生成")]), _vm._v("：服务端生成随机字符串")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("验证")]), _vm._v("：确保响应是针对当前请求的")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-user-id-用户标识"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-user-id-用户标识"
    }
  }, [_vm._v("#")]), _vm._v(" 2. User ID（用户标识）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("注册时")]), _vm._v("：服务端生成唯一ID，传入 "), _c('code', [_vm._v("user.id")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("存储位置")]), _vm._v("：认证器设备本地（可发现凭证）")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("登录时")]), _vm._v("：从 "), _c('code', [_vm._v("userHandle")]), _vm._v(" 中获取")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-resident-key-可发现凭证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-resident-key-可发现凭证"
    }
  }, [_vm._v("#")]), _vm._v(" 3. Resident Key（可发现凭证）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("特点")]), _vm._v("：用户信息存储在设备本地")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("优势")]), _vm._v("：登录时无需输入用户名")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("设置")]), _vm._v("："), _c('code', [_vm._v("requireResidentKey: true")])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-allowcredentials-允许的凭证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-allowcredentials-允许的凭证"
    }
  }, [_vm._v("#")]), _vm._v(" 4. AllowCredentials（允许的凭证）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("提供时")]), _vm._v("：限制只能使用指定的凭证")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("不提供时")]), _vm._v("：浏览器枚举所有可发现凭证（无用户名登录）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-counter-计数器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-counter-计数器"
    }
  }, [_vm._v("#")]), _vm._v(" 5. Counter（计数器）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("作用")]), _vm._v("：防止重放攻击")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("规则")]), _vm._v("：每次使用后必须递增")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("验证")]), _vm._v("：服务端检查 counter 是否大于上次的值")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_6-signature-签名"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-signature-签名"
    }
  }, [_vm._v("#")]), _vm._v(" 6. Signature（签名）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("生成")]), _vm._v("：使用私钥对 "), _c('code', [_vm._v("challenge + authenticatorData")]), _vm._v(" 签名")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("验证")]), _vm._v("：使用公钥验证签名，证明拥有私钥")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📊-数据流向图"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📊-数据流向图"
    }
  }, [_vm._v("#")]), _vm._v(" 📊 数据流向图")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "注册流程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#注册流程"
    }
  }, [_vm._v("#")]), _vm._v(" 注册流程")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("┌──────────┐                    ┌──────────┐\n│  前端    │                    │  服务端  │\n└──────────┘                    └──────────┘\n     │                                │\n     │ 1. POST /register/challenge   │\n     │──────────────────────────────>│\n     │    { username }               │\n     │                                │\n     │                                │ 生成 user.id\n     │                                │ 生成 challenge\n     │                                │\n     │ 2. 返回注册选项                │\n     │<──────────────────────────────│\n     │    { challenge, user, ... }   │\n     │                                │\n     │ 3. navigator.credentials.create()│\n     │    ┌──────────────────────┐   │\n     │    │  认证器设备          │   │\n     │    │  - 生成密钥对        │   │\n     │    │  - 存储私钥          │   │\n     │    │  - 存储 user.id      │   │\n     │    │  - 存储 rpId         │   │\n     │    └──────────────────────┘   │\n     │                                │\n     │ 4. POST /register/verify      │\n     │──────────────────────────────>│\n     │    { credential }             │\n     │                                │\n     │                                │ 验证签名\n     │                                │ 保存公钥到数据库\n     │                                │\n     │ 5. 返回验证结果                │\n     │<──────────────────────────────│\n     │    { verified: true }         │\n     │                                │\n")])])]), _c('h3', {
    attrs: {
      "id": "登录流程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#登录流程"
    }
  }, [_vm._v("#")]), _vm._v(" 登录流程")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("┌──────────┐                    ┌──────────┐\n│  前端    │                    │  服务端  │\n└──────────┘                    └──────────┘\n     │                                │\n     │ 1. POST /challenge             │\n     │──────────────────────────────>│\n     │    { username: undefined }    │\n     │                                │\n     │                                │ 生成 challenge\n     │                                │ 不提供 allowCredentials\n     │                                │\n     │ 2. 返回挑战                    │\n     │<──────────────────────────────│\n     │    { challenge }               │\n     │                                │\n     │ 3. navigator.credentials.get() │\n     │    ┌──────────────────────┐   │\n     │    │  浏览器              │   │\n     │    │  - 枚举所有凭证      │   │\n     │    │  - 显示列表          │   │\n     │    │  - 用户选择          │   │\n     │    └──────────────────────┘   │\n     │           │                    │\n     │           ▼                    │\n     │    ┌──────────────────────┐   │\n     │    │  认证器设备          │   │\n     │    │  - 使用私钥签名      │   │\n     │    │  - 返回 userHandle   │   │\n     │    └──────────────────────┘   │\n     │                                │\n     │ 4. POST /verify                │\n     │──────────────────────────────>│\n     │    { credential }             │\n     │    { userHandle }             │\n     │                                │\n     │                                │ 从 userHandle 获取用户ID\n     │                                │ 查找公钥\n     │                                │ 验证签名\n     │                                │ 更新 counter\n     │                                │\n     │ 5. 返回 token                  │\n     │<──────────────────────────────│\n     │    { access_token }           │\n     │                                │\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔒-安全机制"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔒-安全机制"
    }
  }, [_vm._v("#")]), _vm._v(" 🔒 安全机制")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-防重放攻击"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-防重放攻击"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 防重放攻击")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("Challenge")]), _vm._v("：每次请求生成新的随机 challenge")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Counter")]), _vm._v("：每次使用后递增，防止重复使用")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-域名验证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-域名验证"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 域名验证")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("Origin")]), _vm._v("：验证请求来源")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("RP ID")]), _vm._v("：验证依赖方ID（域名）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-用户验证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-用户验证"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 用户验证")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("User Verification")]), _vm._v("：要求用户验证（指纹/人脸/PIN）")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("防止")]), _vm._v("：设备被盗用")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-签名验证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-签名验证"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 签名验证")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("私钥")]), _vm._v("：永远不离开设备")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("公钥")]), _vm._v("：存储在服务端，用于验证签名")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📝-总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📝-总结"
    }
  }, [_vm._v("#")]), _vm._v(" 📝 总结")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("注册流程：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("获取注册挑战（包含 user.id）")]), _vm._v(" "), _c('li', [_vm._v("浏览器创建凭证（存储 user.id 到设备）")]), _vm._v(" "), _c('li', [_vm._v("验证并保存公钥到数据库")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("登录流程：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("获取登录挑战（不提供 allowCredentials）")]), _vm._v(" "), _c('li', [_vm._v("浏览器枚举凭证，用户选择")]), _vm._v(" "), _c('li', [_vm._v("认证器返回签名和 userHandle")]), _vm._v(" "), _c('li', [_vm._v("服务端从 userHandle 识别用户，验证签名")]), _vm._v(" "), _c('li', [_vm._v("返回 token 完成登录")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("关键点：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("可发现凭证将用户信息存储在设备本地")]), _vm._v(" "), _c('li', [_vm._v("登录时从 "), _c('code', [_vm._v("userHandle")]), _vm._v(" 获取用户ID")]), _vm._v(" "), _c('li', [_vm._v("无需输入用户名即可登录")])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/passkey.md?vue&type=template&id=4612b45b

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/passkey.md

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

/* harmony default export */ var passkey = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);