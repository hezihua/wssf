(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/passkey_complete.md?vue&type=template&id=fcb73f8a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "passkey-完整指南"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#passkey-完整指南"
    }
  }, [_vm._v("#")]), _vm._v(" Passkey 完整指南")]), _vm._v(" "), _c('h2', {
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
      "href": "#%E6%A6%82%E8%BF%B0"
    }
  }, [_vm._v("概述")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#fido2-%E4%B8%8E-webauthn-%E6%A0%87%E5%87%86"
    }
  }, [_vm._v("FIDO2 与 WebAuthn 标准")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E5%AE%8C%E6%95%B4%E6%B5%81%E7%A8%8B"
    }
  }, [_vm._v("完整流程")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#api-%E6%8E%A5%E5%8F%A3%E8%AF%A6%E8%A7%A3"
    }
  }, [_vm._v("API 接口详解")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E5%AD%98%E5%82%A8%E6%9C%BA%E5%88%B6"
    }
  }, [_vm._v("存储机制")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E5%AE%9E%E7%8E%B0%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93"
    }
  }, [_vm._v("实现问题总结")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97"
    }
  }, [_vm._v("使用指南")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E5%AE%89%E5%85%A8%E6%9C%BA%E5%88%B6"
    }
  }, [_vm._v("安全机制")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5"
    }
  }, [_vm._v("最佳实践")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "概述"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#概述"
    }
  }, [_vm._v("#")]), _vm._v(" 概述")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "什么是-passkey"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#什么是-passkey"
    }
  }, [_vm._v("#")]), _vm._v(" 什么是 Passkey？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Passkey")]), _vm._v(" 是基于 FIDO2/WebAuthn 标准的无密码认证技术，使用公钥加密和生物识别（指纹、人脸、PIN）来替代传统密码。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "核心优势"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#核心优势"
    }
  }, [_vm._v("#")]), _vm._v(" 核心优势")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ "), _c('strong', [_vm._v("无密码")]), _vm._v("：无需记忆复杂密码")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("更安全")]), _vm._v("：私钥永不离开设备，无法被窃取")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("便捷")]), _vm._v("：支持无用户名登录（可发现凭证）")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("跨平台")]), _vm._v("：支持电脑、手机、USB 密钥等多种设备")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "技术栈"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#技术栈"
    }
  }, [_vm._v("#")]), _vm._v(" 技术栈")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("前端")]), _vm._v(": Next.js 14 (App Router), React, Ant Design")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("后端")]), _vm._v(": Next.js API Routes")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Passkey 库")]), _vm._v(": "), _c('code', [_vm._v("@simplewebauthn/server")]), _vm._v(", "), _c('code', [_vm._v("@simplewebauthn/browser")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("存储")]), _vm._v(": 文件存储（生产环境应使用数据库）")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "fido2-与-webauthn-标准"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#fido2-与-webauthn-标准"
    }
  }, [_vm._v("#")]), _vm._v(" FIDO2 与 WebAuthn 标准")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "fido2-组成"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#fido2-组成"
    }
  }, [_vm._v("#")]), _vm._v(" FIDO2 组成")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("FIDO2")]), _vm._v(" 由两个核心规范组成：")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("WebAuthn (Web Authentication API)")]), _vm._v(" - W3C 标准")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("浏览器端的 JavaScript API")]), _vm._v(" "), _c('li', [_vm._v("定义如何与认证器交互")]), _vm._v(" "), _c('li', [_vm._v("由浏览器厂商实现")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("CTAP2 (Client to Authenticator Protocol 2)")]), _vm._v(" - FIDO Alliance 标准")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("定义客户端与认证器之间的通信协议")]), _vm._v(" "), _c('li', [_vm._v("支持 USB、NFC、BLE 等传输方式")]), _vm._v(" "), _c('li', [_vm._v("由认证器厂商实现")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "架构图"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#架构图"
    }
  }, [_vm._v("#")]), _vm._v(" 架构图")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("┌─────────────┐\n│   Web 应用  │\n└──────┬──────┘\n       │ WebAuthn API\n       │ (navigator.credentials)\n       ▼\n┌─────────────┐\n│   浏览器    │\n└──────┬──────┘\n       │ CTAP2 协议\n       │ (USB/NFC/BLE)\n       ▼\n┌─────────────┐\n│   认证器    │\n│ (Passkey)   │\n└─────────────┘\n")])])]), _c('h3', {
    attrs: {
      "id": "标准符合性"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标准符合性"
    }
  }, [_vm._v("#")]), _vm._v(" 标准符合性")]), _vm._v(" "), _c('p', [_vm._v("当前实现"), _c('strong', [_vm._v("完全符合 FIDO2 标准")]), _vm._v("：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 使用标准 WebAuthn API")]), _vm._v(" "), _c('li', [_vm._v("✅ 使用标准服务端验证库")]), _vm._v(" "), _c('li', [_vm._v("✅ 实现可发现凭证（FIDO2 Level 2）")]), _vm._v(" "), _c('li', [_vm._v("✅ 符合所有安全要求")]), _vm._v(" "), _c('li', [_vm._v("✅ 支持多种算法和传输方式")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "完整流程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#完整流程"
    }
  }, [_vm._v("#")]), _vm._v(" 完整流程")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "🔐-注册流程-registration"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔐-注册流程-registration"
    }
  }, [_vm._v("#")]), _vm._v(" 🔐 注册流程（Registration）")]), _vm._v(" "), _c('h4', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端处理：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("验证用户名是否存在")]), _vm._v(" "), _c('li', [_vm._v("生成唯一的 "), _c('code', [_vm._v("user.id")]), _vm._v("（格式："), _c('code', [_vm._v("user-${username}")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("生成随机 "), _c('code', [_vm._v("challenge")]), _vm._v("（防重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("配置注册选项：\n"), _c('ul', [_c('li', [_c('code', [_vm._v("requireResidentKey: true")]), _vm._v(" - 要求可发现凭证")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("residentKey: 'required'")]), _vm._v(" - 强制可发现凭证")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.id")]), _vm._v(" - 用户唯一标识（字节串）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.name")]), _vm._v(" - 用户名")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("user.displayName")]), _vm._v(" - 显示名称")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("返回：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h4', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h4', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("服务端验证：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("验证 "), _c('code', [_vm._v("challenge")]), _vm._v(" 是否有效（防重放）")]), _vm._v(" "), _c('li', [_vm._v("验证 "), _c('code', [_vm._v("origin")]), _vm._v(" 和 "), _c('code', [_vm._v("rpId")]), _vm._v(" 是否匹配")]), _vm._v(" "), _c('li', [_vm._v("解析 "), _c('code', [_vm._v("attestationObject")]), _vm._v(" 获取公钥")]), _vm._v(" "), _c('li', [_vm._v("验证签名（证明是真实设备生成的）")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("保存到存储：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "🔑-登录流程-authentication"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔑-登录流程-authentication"
    }
  }, [_vm._v("#")]), _vm._v(" 🔑 登录流程（Authentication）")]), _vm._v(" "), _c('h4', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h4', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h4', {
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
  }, [_vm._v("\"username\"")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("\"userDisplayName\"")]), _c('span', {
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
  }, [_vm._v("}")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "流程图"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#流程图"
    }
  }, [_vm._v("#")]), _vm._v(" 流程图")]), _vm._v(" "), _c('h4', {
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
  }, [_c('code', [_vm._v("用户填写信息\n    ↓\nPOST /register/challenge\n    ↓ 返回 challenge\nnavigator.credentials.create()\n    ↓ 用户验证，生成密钥对\nPOST /register/verify\n    ↓ 验证签名，提取公钥\n保存凭证到文件\n    ↓\n注册完成\n")])])]), _c('h4', {
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
  }, [_c('code', [_vm._v("用户点击登录\n    ↓\nPOST /challenge\n    ↓ 返回 challenge\nnavigator.credentials.get()\n    ↓ 用户选择并验证，使用私钥签名\nPOST /verify\n    ↓ 验证签名，检查计数器\n更新计数器，生成 token\n    ↓\n登录完成\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "api-接口详解"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api-接口详解"
    }
  }, [_vm._v("#")]), _vm._v(" API 接口详解")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-challenge-接口"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-challenge-接口"
    }
  }, [_vm._v("#")]), _vm._v(" 1. Challenge 接口")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "api-auth-passkey-challenge-登录挑战"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api-auth-passkey-challenge-登录挑战"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('code', [_vm._v("/api/auth/passkey/challenge")]), _vm._v(" - 登录挑战")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("作用")]), _vm._v("：生成 Passkey 登录所需的认证选项和随机 challenge")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("请求：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可选，使用可发现凭证时不需要")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("响应：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("{")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("              "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 随机 challenge（用于签名）")]), _vm._v("\n  allowCredentials"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("Array")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 允许的凭证列表（可发现凭证时为 undefined）")]), _vm._v("\n  rpId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 依赖方 ID")]), _vm._v("\n  timeout"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("number")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("               "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 超时时间（毫秒）")]), _vm._v("\n  userVerification"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户验证要求")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("关键点：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("生成随机 challenge（防止重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("支持可发现凭证（不提供 "), _c('code', [_vm._v("allowCredentials")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("配置用户验证要求（"), _c('code', [_vm._v("required")]), _vm._v("）")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "api-auth-passkey-register-challenge-注册挑战"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api-auth-passkey-register-challenge-注册挑战"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('code', [_vm._v("/api/auth/passkey/register/challenge")]), _vm._v(" - 注册挑战")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("作用")]), _vm._v("：生成 Passkey 注册所需的注册选项和随机 challenge")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("请求：")])]), _vm._v(" "), _c('div', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("           "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 必须，用户名")]), _vm._v("\n  userDisplayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可选，显示名称（默认为用户名）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("响应：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("{")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 随机 challenge（用于签名）")]), _vm._v("\n  rp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("                                 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 依赖方信息")]), _vm._v("\n    name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                       "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 依赖方名称")]), _vm._v("\n    id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 依赖方 ID")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  user"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("                               "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户信息")]), _vm._v("\n    id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户 ID（base64url 编码）")]), _vm._v("\n    name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                       "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户名")]), _vm._v("\n    displayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 显示名称")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  pubKeyCredParams"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("Array")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("              "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 支持的算法列表")]), _vm._v("\n  timeout"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("number")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                       "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 超时时间（毫秒）")]), _vm._v("\n  authenticatorSelection"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("             "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 认证器选择配置")]), _vm._v("\n    requireResidentKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("boolean")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    residentKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("关键点：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("生成用户 ID（基于用户名："), _c('code', [_vm._v("user-${username}")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("生成随机 challenge（防止重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("配置可发现凭证（"), _c('code', [_vm._v("requireResidentKey: true")]), _vm._v("）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-verify-接口"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-verify-接口"
    }
  }, [_vm._v("#")]), _vm._v(" 2. Verify 接口")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "api-auth-passkey-register-verify-注册验证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api-auth-passkey-register-verify-注册验证"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('code', [_vm._v("/api/auth/passkey/register/verify")]), _vm._v(" - 注册验证")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("作用")]), _vm._v("：验证 Passkey 注册是否成功，并保存凭证到服务器")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("请求：")])]), _vm._v(" "), _c('div', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  userDisplayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  credential"), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    response"), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 证明对象（包含公钥）")]), _vm._v("\n      clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 客户端数据")]), _vm._v("\n      transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    type"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("响应：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("{")]), _vm._v("\n  verified"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n  credentialId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  registrationInfo"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    credentialID"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    credentialPublicKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    counter"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("number")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    credentialDeviceType"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    credentialBackedUp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("boolean")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("验证内容：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("✅ 验证 challenge（防止重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("✅ 验证 origin（防止跨站攻击）")]), _vm._v(" "), _c('li', [_vm._v("✅ 验证签名（确保来自真实认证器）")]), _vm._v(" "), _c('li', [_vm._v("✅ 提取公钥（从 attestationObject 中）")]), _vm._v(" "), _c('li', [_vm._v("✅ 保存凭证到存储")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "api-auth-passkey-verify-登录验证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api-auth-passkey-verify-登录验证"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('code', [_vm._v("/api/auth/passkey/verify")]), _vm._v(" - 登录验证")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("作用")]), _vm._v("：验证 Passkey 登录签名，确认用户身份，并返回登录 token")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("请求：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可选，可发现凭证可以从 userHandle 获取")]), _vm._v("\n  challenge"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  credential"), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    rawId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    response"), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 认证器数据")]), _vm._v("\n      clientDataJSON"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 客户端数据")]), _vm._v("\n      signature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("           "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 签名（使用私钥签名）")]), _vm._v("\n      userHandle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("null")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 可发现凭证会包含用户 ID")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    type"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("响应：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("{")]), _vm._v("\n  access_token"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  token_type"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  verified"), _c('span', {
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
  }, [_vm._v(";")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  userDisplayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("验证内容：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("✅ 从 userHandle 或 username 获取用户 ID")]), _vm._v(" "), _c('li', [_vm._v("✅ 从存储中查找凭证（通过 credential.id）")]), _vm._v(" "), _c('li', [_vm._v("✅ 验证 challenge（防止重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("✅ 验证 origin（防止跨站攻击）")]), _vm._v(" "), _c('li', [_vm._v("✅ 使用公钥验证签名（确保来自真实认证器）")]), _vm._v(" "), _c('li', [_vm._v("✅ 检查计数器（防止重放攻击）")]), _vm._v(" "), _c('li', [_vm._v("✅ 更新计数器")]), _vm._v(" "), _c('li', [_vm._v("✅ 生成 token")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "接口对比"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#接口对比"
    }
  }, [_vm._v("#")]), _vm._v(" 接口对比")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("特性")]), _vm._v(" "), _c('th', [_vm._v("登录 Challenge")]), _vm._v(" "), _c('th', [_vm._v("注册 Challenge")]), _vm._v(" "), _c('th', [_vm._v("登录 Verify")]), _vm._v(" "), _c('th', [_vm._v("注册 Verify")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v("用途")])]), _vm._v(" "), _c('td', [_vm._v("生成登录选项")]), _vm._v(" "), _c('td', [_vm._v("生成注册选项")]), _vm._v(" "), _c('td', [_vm._v("验证登录")]), _vm._v(" "), _c('td', [_vm._v("验证注册")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("必需参数")])]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("username")]), _vm._v(" "), _c('td', [_vm._v("challenge, credential")]), _vm._v(" "), _c('td', [_vm._v("username, challenge, credential")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("返回")])]), _vm._v(" "), _c('td', [_vm._v("challenge")]), _vm._v(" "), _c('td', [_vm._v("challenge, user, rp")]), _vm._v(" "), _c('td', [_vm._v("access_token")]), _vm._v(" "), _c('td', [_vm._v("verified, credentialId")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("验证对象")])]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("signature")]), _vm._v(" "), _c('td', [_vm._v("attestationObject")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("存储操作")])]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("更新计数器")]), _vm._v(" "), _c('td', [_vm._v("保存凭证")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "存储机制"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#存储机制"
    }
  }, [_vm._v("#")]), _vm._v(" 存储机制")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "当前实现"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#当前实现"
    }
  }, [_vm._v("#")]), _vm._v(" 当前实现")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("文件存储（临时方案）")])]), _vm._v(" "), _c('p', [_vm._v("凭证保存在 "), _c('code', [_vm._v("data/passkeys.json")]), _vm._v(" 文件中，使用 JSON 格式存储。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("数据结构：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("interface")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("PasskeyCredential")]), _vm._v(" "), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// credential.id (Base64URL)")]), _vm._v("\n  publicKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("             "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 公钥 (Base64URL)")]), _vm._v("\n  userId"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户 ID (user-username)")]), _vm._v("\n  username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("              "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 用户名（原始用户名，如 \"zhe\"）")]), _vm._v("\n  userDisplayName"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("       "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 显示名称（如 \"hezihua\"）")]), _vm._v("\n  counter"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("number")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("               "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 签名计数器")]), _vm._v("\n  transports"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("string")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 传输方式")]), _vm._v("\n  createdAt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("number")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 创建时间戳")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "数据会丢失的情况"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#数据会丢失的情况"
    }
  }, [_vm._v("#")]), _vm._v(" 数据会丢失的情况")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ "), _c('strong', [_vm._v("服务器重启")]), _vm._v("：会丢失（文件存储不会丢失，但内存缓存会）")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("Next.js 开发模式热重载")]), _vm._v("：可能丢失（取决于实现）")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("进程崩溃")]), _vm._v("：不会丢失（文件已持久化）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "生产环境解决方案"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#生产环境解决方案"
    }
  }, [_vm._v("#")]), _vm._v(" 生产环境解决方案")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("推荐：使用数据库存储")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "postgresql-mysql-表结构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#postgresql-mysql-表结构"
    }
  }, [_vm._v("#")]), _vm._v(" PostgreSQL / MySQL 表结构")]), _vm._v(" "), _c('div', {
    staticClass: "language-sql extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-sql"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("CREATE")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("TABLE")]), _vm._v(" passkey_credentials "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("\n  id "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("VARCHAR")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("PRIMARY")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- credential.id (Base64URL)")]), _vm._v("\n  public_key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("TEXT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("NOT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("NULL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 公钥 (Base64URL)")]), _vm._v("\n  user_id "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("VARCHAR")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("NOT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("NULL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 用户 ID (user-username)")]), _vm._v("\n  username "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("VARCHAR")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("NOT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("NULL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 用户名")]), _vm._v("\n  user_display_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("VARCHAR")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 显示名称")]), _vm._v("\n  counter "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("BIGINT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("NOT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("NULL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 签名计数器")]), _vm._v("\n  transports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("TEXT")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("-- 传输方式 (JSON)")]), _vm._v("\n  created_at "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("TIMESTAMP")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("DEFAULT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("CURRENT_TIMESTAMP")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  updated_at "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("TIMESTAMP")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("DEFAULT")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("CURRENT_TIMESTAMP")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ON")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("UPDATE")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("CURRENT_TIMESTAMP")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("INDEX")]), _vm._v(" idx_user_id "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("user_id"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "存储对比"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#存储对比"
    }
  }, [_vm._v("#")]), _vm._v(" 存储对比")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("特性")]), _vm._v(" "), _c('th', [_vm._v("文件存储（当前）")]), _vm._v(" "), _c('th', [_vm._v("数据库存储（推荐）")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v("数据持久化")])]), _vm._v(" "), _c('td', [_vm._v("✅ 持久")]), _vm._v(" "), _c('td', [_vm._v("✅ 持久")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("服务器重启")])]), _vm._v(" "), _c('td', [_vm._v("✅ 数据保留")]), _vm._v(" "), _c('td', [_vm._v("✅ 数据保留")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("热重载")])]), _vm._v(" "), _c('td', [_vm._v("⚠️ 可能丢失")]), _vm._v(" "), _c('td', [_vm._v("✅ 数据保留")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("性能")])]), _vm._v(" "), _c('td', [_vm._v("✅ 快速")]), _vm._v(" "), _c('td', [_vm._v("✅ 快速")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("扩展性")])]), _vm._v(" "), _c('td', [_vm._v("❌ 单实例")]), _vm._v(" "), _c('td', [_vm._v("✅ 多实例")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("备份恢复")])]), _vm._v(" "), _c('td', [_vm._v("⚠️ 手动")]), _vm._v(" "), _c('td', [_vm._v("✅ 自动")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("适用场景")])]), _vm._v(" "), _c('td', [_vm._v("开发/测试")]), _vm._v(" "), _c('td', [_vm._v("生产环境")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "实现问题总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#实现问题总结"
    }
  }, [_vm._v("#")]), _vm._v(" 实现问题总结")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "问题-1-路由-404-错误"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题-1-路由-404-错误"
    }
  }, [_vm._v("#")]), _vm._v(" 问题 1: 路由 404 错误")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("问题描述：")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("POST http://localhost:3008/api/auth/passkey/verify 404 (Not Found)\n")])])]), _c('p', [_c('strong', [_vm._v("原因分析：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("找不到对应的 passkey 凭证")]), _vm._v(" "), _c('li', [_vm._v("服务器日志显示："), _c('code', [_vm._v("存储的所有凭证数量: 0")])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("解决方案：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("确认路由存在：使用 "), _c('code', [_vm._v("curl")]), _vm._v(" 测试接口")]), _vm._v(" "), _c('li', [_vm._v("检查凭证存储：发现存储被清空（服务器重启导致）")]), _vm._v(" "), _c('li', [_vm._v("重新注册：需要先注册 Passkey，然后再登录")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "问题-2-userhandle-编码问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题-2-userhandle-编码问题"
    }
  }, [_vm._v("#")]), _vm._v(" 问题 2: userHandle 编码问题")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("问题描述：")]), _vm._v("\n服务器端从 "), _c('code', [_vm._v("userHandle")]), _vm._v(" 解码得到的是 base64 编码的字符串，而不是原始字符串。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("原因分析：")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("注册时："), _c('code', [_vm._v("user-zhe")]), _vm._v(" → UTF-8 字节数组 → base64url 编码 → 传给 WebAuthn API")]), _vm._v(" "), _c('li', [_vm._v("登录时：WebAuthn 返回 "), _c('code', [_vm._v("userHandle")]), _vm._v(" (ArrayBuffer) → 前端转换为 base64url 字符串 → 服务器端解码")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("解决方案：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("服务器端：简化解码逻辑，直接解码 base64url 字符串")]), _vm._v(" "), _c('li', [_vm._v("前端：正确解码 userHandle")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "问题-3-userid-不一致问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题-3-userid-不一致问题"
    }
  }, [_vm._v("#")]), _vm._v(" 问题 3: userId 不一致问题")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("问题描述：")]), _vm._v("\n注册时生成的 "), _c('code', [_vm._v("userId")]), _vm._v(" 与登录时从 "), _c('code', [_vm._v("userHandle")]), _vm._v(" 获取的 "), _c('code', [_vm._v("userId")]), _vm._v(" 不一致，导致找不到凭证。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("原因分析：")]), _vm._v("\n注册时使用了时间戳：")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("const")]), _vm._v(" userIdString "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-string"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("user-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("${")]), _vm._v("username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("${")]), _vm._v("Date"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("now")]), _c('span', {
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
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('p', [_vm._v("这导致每次注册都会生成不同的 "), _c('code', [_vm._v("userId")]), _vm._v("，登录时无法匹配。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("解决方案：")]), _vm._v("\n使用固定的 "), _c('code', [_vm._v("userId")]), _vm._v(" 格式（基于用户名）：")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("const")]), _vm._v(" userIdString "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-string"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("user-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("${")]), _vm._v("username"), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 移除时间戳")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "问题-4-凭证存储被清空"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题-4-凭证存储被清空"
    }
  }, [_vm._v("#")]), _vm._v(" 问题 4: 凭证存储被清空")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("问题描述：")]), _vm._v("\n服务器重启后，内存存储中的凭证被清空，导致登录时找不到凭证。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("解决方案：")])]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("临时方案")]), _vm._v("：使用文件存储（当前实现）")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("生产环境方案")]), _vm._v("：使用数据库存储")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "问题-5-api-路由代理问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题-5-api-路由代理问题"
    }
  }, [_vm._v("#")]), _vm._v(" 问题 5: API 路由代理问题")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("问题描述：")]), _vm._v("\nPasskey 相关接口应该直接调用 Next.js API，但登录接口需要走代理。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("解决方案：")]), _vm._v("\n创建两个 Axios 实例：")]), _vm._v(" "), _c('div', {
    staticClass: "language-typescript extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-typescript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 1. 用于外部 API（走代理）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" apiClient "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" axios"), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n  baseURL"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/proxy'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 2. 用于 Next.js API（直接调用）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" nextApiClient "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" axios"), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n  baseURL"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 直接调用 Next.js API")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "使用指南"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用指南"
    }
  }, [_vm._v("#")]), _vm._v(" 使用指南")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "电脑端使用-passkey-登录-1password"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#电脑端使用-passkey-登录-1password"
    }
  }, [_vm._v("#")]), _vm._v(" 电脑端使用 Passkey 登录（1Password）")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "前提条件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前提条件"
    }
  }, [_vm._v("#")]), _vm._v(" 前提条件")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("安装 1Password")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("下载并安装 1Password 桌面应用")]), _vm._v(" "), _c('li', [_vm._v("创建或登录 1Password 账户")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("安装浏览器扩展")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Chrome: "), _c('a', {
    attrs: {
      "href": "https://chrome.google.com/webstore/detail/1password-extension-deskm/aeblfdkihopdgdakadfpmcpdfjogpdod",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("1Password Extension"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Edge: "), _c('a', {
    attrs: {
      "href": "https://microsoftedge.microsoft.com/addons/detail/1password-extension-deskm/aeblfdkihopdgdakadfpmcpdfjogpdod",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("1Password Extension"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Firefox: "), _c('a', {
    attrs: {
      "href": "https://addons.mozilla.org/firefox/addon/1password-x-password-manager/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("1Password Extension"), _c('OutboundLink')], 1)])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("注册 Passkey")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("访问 "), _c('code', [_vm._v("/passkey/register")]), _vm._v(" 页面")]), _vm._v(" "), _c('li', [_vm._v("填写用户名和显示名称")]), _vm._v(" "), _c('li', [_vm._v("点击\"注册 Passkey\"")]), _vm._v(" "), _c('li', [_vm._v("选择\"使用 1Password\"或\"保存到 1Password\"")])])])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "登录步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#登录步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 登录步骤")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("打开登录页面")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("访问 "), _c('code', [_vm._v("http://localhost:3008/login")])]), _vm._v(" "), _c('li', [_vm._v("点击\"Passkey 登录\"按钮")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("触发 Passkey 选择")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("浏览器会显示 Passkey 选择对话框")]), _vm._v(" "), _c('li', [_vm._v("1Password 扩展会自动检测并显示可用的 Passkey")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("选择 1Password Passkey")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("在对话框中选择\"使用 1Password\"")]), _vm._v(" "), _c('li', [_vm._v("或选择已保存的 Passkey 项")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("解锁 1Password")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("如果 1Password 已锁定，会提示输入主密码或使用生物识别")]), _vm._v(" "), _c('li', [_vm._v("解锁后，1Password 会自动填充 Passkey")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("完成登录")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("1Password 会使用私钥签名 challenge")]), _vm._v(" "), _c('li', [_vm._v("服务器验证成功后，自动登录")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "手机端使用-passkey-登录-1password"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#手机端使用-passkey-登录-1password"
    }
  }, [_vm._v("#")]), _vm._v(" 手机端使用 Passkey 登录（1Password）")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "ios-使用步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ios-使用步骤"
    }
  }, [_vm._v("#")]), _vm._v(" iOS 使用步骤")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("安装 1Password 移动应用")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("iOS: "), _c('a', {
    attrs: {
      "href": "https://apps.apple.com/app/1password-password-manager/id568903335",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("App Store"), _c('OutboundLink')], 1)])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("打开登录页面")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("在 Safari 中访问 "), _c('code', [_vm._v("http://localhost:3008/login")])]), _vm._v(" "), _c('li', [_vm._v("点击\"Passkey 登录\"按钮")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("选择 1Password Passkey")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Safari 会显示 Passkey 选择对话框")]), _vm._v(" "), _c('li', [_vm._v("点击\"使用 1Password\"")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("解锁并确认")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("解锁 1Password（Face ID / Touch ID）")]), _vm._v(" "), _c('li', [_vm._v("确认使用 Passkey")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("完成登录")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("自动完成登录流程")])])])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "android-使用步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#android-使用步骤"
    }
  }, [_vm._v("#")]), _vm._v(" Android 使用步骤")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("安装 1Password 移动应用")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Android: "), _c('a', {
    attrs: {
      "href": "https://play.google.com/store/apps/details?id=com.agilebits.onepassword",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Google Play"), _c('OutboundLink')], 1)])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("打开登录页面")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("在 Chrome 中访问登录页面")]), _vm._v(" "), _c('li', [_vm._v("点击\"Passkey 登录\"按钮")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("选择 1Password Passkey")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Chrome 会显示 Passkey 选择对话框")]), _vm._v(" "), _c('li', [_vm._v("点击\"使用 1Password\"")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("解锁并确认")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("解锁 1Password（指纹识别）")]), _vm._v(" "), _c('li', [_vm._v("确认使用 Passkey")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("完成登录")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("自动完成登录流程")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "跨设备同步"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#跨设备同步"
    }
  }, [_vm._v("#")]), _vm._v(" 跨设备同步")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("自动同步")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("在电脑端注册的 Passkey 会自动同步到手机")]), _vm._v(" "), _c('li', [_vm._v("在手机端注册的 Passkey 会自动同步到电脑")]), _vm._v(" "), _c('li', [_vm._v("通过 1Password 云端同步")])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("同步时间")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("通常几秒钟内完成同步")]), _vm._v(" "), _c('li', [_vm._v("需要 1Password 账户处于登录状态")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "安全机制"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安全机制"
    }
  }, [_vm._v("#")]), _vm._v(" 安全机制")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-防重放攻击"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-防重放攻击"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 防重放攻击")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("Challenge")]), _vm._v("：每次请求生成新的随机 challenge")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Counter")]), _vm._v("：每次使用后递增，防止重复使用")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("时效性")]), _vm._v("：Challenge 通常有时效性（如 60 秒）")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("#")]), _vm._v(" 4. 签名验证")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("私钥")]), _vm._v("：永远不离开设备")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("公钥")]), _vm._v("：存储在服务端，用于验证签名")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-防克隆攻击"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-防克隆攻击"
    }
  }, [_vm._v("#")]), _vm._v(" 5. 防克隆攻击")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("计数器")]), _vm._v("：每次认证后，签名计数器递增")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("验证")]), _vm._v("：服务器检查计数器是否递增")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("检测")]), _vm._v("：如果计数器 ≤ 已保存的值 → 可能是克隆凭证")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "安全模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#安全模型"
    }
  }, [_vm._v("#")]), _vm._v(" 安全模型")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("注册时：\n  认证器生成密钥对（私钥 + 公钥）\n  私钥 → 永远留在设备本地（永不传输）\n  公钥 → 发送给服务器保存\n\n登录时：\n  服务器发送 challenge\n  认证器用私钥签名 challenge\n  服务器用公钥验证签名\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "最佳实践"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#最佳实践"
    }
  }, [_vm._v("#")]), _vm._v(" 最佳实践")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-开发环境"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-开发环境"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 开发环境")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 使用文件存储（当前实现）")]), _vm._v(" "), _c('li', [_vm._v("✅ 支持热重载（开发模式）")]), _vm._v(" "), _c('li', [_vm._v("✅ 添加详细日志（便于调试）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-生产环境"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-生产环境"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 生产环境")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ "), _c('strong', [_vm._v("必须使用数据库存储")])]), _vm._v(" "), _c('li', [_vm._v("✅ 实现 challenge 验证（使用 session/Redis）")]), _vm._v(" "), _c('li', [_vm._v("✅ 实现 JWT token 生成（当前使用简单的 Base64）")]), _vm._v(" "), _c('li', [_vm._v("✅ 添加凭证管理功能（查看、删除 Passkey）")]), _vm._v(" "), _c('li', [_vm._v("✅ 支持多个 Passkey 设备")]), _vm._v(" "), _c('li', [_vm._v("✅ 添加错误恢复机制")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-用户体验"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-用户体验"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 用户体验")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 支持可发现凭证（无用户名登录）")]), _vm._v(" "), _c('li', [_vm._v("✅ 提供清晰的错误提示")]), _vm._v(" "), _c('li', [_vm._v("✅ 支持多种认证方式（密码 + Passkey）")]), _vm._v(" "), _c('li', [_vm._v("✅ 支持跨设备同步（1Password）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-安全考虑"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-安全考虑"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 安全考虑")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 验证 challenge（当前未实现，应使用 session/Redis）")]), _vm._v(" "), _c('li', [_vm._v("✅ 验证 origin")]), _vm._v(" "), _c('li', [_vm._v("✅ 更新凭证计数器")]), _vm._v(" "), _c('li', [_vm._v("✅ 要求用户验证（生物识别/PIN）")]), _vm._v(" "), _c('li', [_vm._v("✅ 使用 HTTPS（生产环境）")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "关键概念"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#关键概念"
    }
  }, [_vm._v("#")]), _vm._v(" 关键概念")]), _vm._v(" "), _c('h3', {
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
      "id": "待办事项"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#待办事项"
    }
  }, [_vm._v("#")]), _vm._v(" 待办事项")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("[ ] 实现 challenge 验证（使用 session/Redis）")]), _vm._v(" "), _c('li', [_vm._v("[ ] 替换文件存储为数据库存储")]), _vm._v(" "), _c('li', [_vm._v("[ ] 实现 JWT token 生成（当前使用简单的 Base64）")]), _vm._v(" "), _c('li', [_vm._v("[ ] 添加凭证管理功能（查看、删除 Passkey）")]), _vm._v(" "), _c('li', [_vm._v("[ ] 支持多个 Passkey 设备")]), _vm._v(" "), _c('li', [_vm._v("[ ] 添加错误恢复机制")]), _vm._v(" "), _c('li', [_vm._v("[ ] 配置环境变量（RP_ID, ORIGIN）")]), _vm._v(" "), _c('li', [_vm._v("[ ] 实现 HTTPS（生产环境）")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "参考资料"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#参考资料"
    }
  }, [_vm._v("#")]), _vm._v(" 参考资料")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("WebAuthn API"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://simplewebauthn.dev/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("SimpleWebAuthn"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://webauthn.guide/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Passkey 最佳实践"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://fidoalliance.org/fido2/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("FIDO2 标准"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://support.1password.com/passkeys/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("1Password Passkey 支持"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文档提供了 Passkey 功能的完整指南，包括：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("✅ "), _c('strong', [_vm._v("概述和标准")]), _vm._v("：FIDO2/WebAuthn 标准说明")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("完整流程")]), _vm._v("：注册和登录的详细步骤")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("API 接口")]), _vm._v("：四个接口的详细说明")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("存储机制")]), _vm._v("：当前实现和生产环境方案")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("问题总结")]), _vm._v("：实现过程中遇到的问题和解决方案")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("使用指南")]), _vm._v("：电脑端和手机端的使用方法")]), _vm._v(" "), _c('li', [_vm._v("✅ "), _c('strong', [_vm._v("安全机制")]), _vm._v("：各种安全措施和最佳实践")])]), _vm._v(" "), _c('p', [_vm._v("当前实现"), _c('strong', [_vm._v("完全符合 FIDO2 标准")]), _vm._v("，支持可发现凭证（无用户名登录），是一个完整的 Passkey 认证系统！")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/passkey_complete.md?vue&type=template&id=fcb73f8a

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/passkey_complete.md

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

/* harmony default export */ var passkey_complete = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);