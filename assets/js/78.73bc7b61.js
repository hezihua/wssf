(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/问题解决/openclaw.md?vue&type=template&id=4b70a600
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('p', [_vm._v("连接飞书并让机器人真正“活”过来，主要分为 "), _c('strong', [_vm._v("后台配置")]), _vm._v("、"), _c('strong', [_vm._v("版本发布")]), _vm._v(" 和 "), _c('strong', [_vm._v("设备授权")]), _vm._v(" 三大阶段。以下是为你总结的全流程：")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "一、-飞书开放平台后台配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、-飞书开放平台后台配置"
    }
  }, [_vm._v("#")]), _vm._v(" 一、 飞书开放平台后台配置")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("开通机器人能力")]), _vm._v("：在“应用能力”中启用机器人，并确保勾选了 "), _c('strong', [_vm._v("“启用单聊”")]), _vm._v("，否则客户端不会显示输入框。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("配置权限范围")]), _vm._v("：在“权限管理”中，必须开通以下核心权限：\n"), _c('ul', [_c('li', [_c('strong', [_vm._v("以应用身份发送消息")]), _vm._v(" ("), _c('code', [_vm._v("im:message:send_as_bot")]), _vm._v(")。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("读取用户发给机器人的单聊消息")]), _vm._v(" ("), _c('code', [_vm._v("im:message.p2p_msg:readonly")]), _vm._v(")。")])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("设置事件订阅（长连接模式）")]), _vm._v("：\n"), _c('ul', [_c('li', [_vm._v("在“事件与回调”中，将订阅方式切换为 "), _c('strong', [_vm._v("“使用长连接接收事件”")]), _vm._v("。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("添加事件")]), _vm._v("：必须添加 "), _c('strong', [_vm._v("“接收消息 v2.0”")]), _vm._v(" ("), _c('code', [_vm._v("im.message.receive_v1")]), _vm._v(")，机器人才能接收到你的对话内容。")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "二、-应用发布与环境重启"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、-应用发布与环境重启"
    }
  }, [_vm._v("#")]), _vm._v(" 二、 应用发布与环境重启")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("版本管理与发布")]), _vm._v("：飞书的任何配置更改（权限、事件、开关）都必须通过 "), _c('strong', [_vm._v("“创建版本”")]), _vm._v(" 并 "), _c('strong', [_vm._v("“申请发布”")]), _vm._v(" 才能生效。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("重启 OpenClaw 容器")]), _vm._v("：发布成功后，在 WSL 中重启 Gateway 容器以强制重新建立 WebSocket 握手：\n"), _c('code', [_vm._v("docker restart openclaw-openclaw-gateway-1")]), _vm._v("。")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "三、-设备配对授权-最后一步"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、-设备配对授权-最后一步"
    }
  }, [_vm._v("#")]), _vm._v(" 三、 设备配对授权（最后一步）")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("获取配对码")]), _vm._v("：在飞书对话框发送消息（如“你好”），机器人会返回一个包含 "), _c('strong', [_vm._v("Pairing code")]), _vm._v(" 的卡片。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("执行批准指令")]), _vm._v("：由于网页端可能因未授权报错，建议直接在 "), _c('strong', [_vm._v("WSL 终端")]), _vm._v(" 执行以下 Docker 指令完成最终绑定：\n"), _c('code', [_vm._v("docker exec -it openclaw-openclaw-gateway-1 openclaw pairing approve feishu [你的8位配对码]")]), _vm._v("。")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "四、-故障排查-checklist"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、-故障排查-checklist"
    }
  }, [_vm._v("#")]), _vm._v(" 四、 故障排查 checklist")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("没输入框")]), _vm._v("：检查是否开启了“启用单聊”，并确认你本人在应用的“可用范围”内。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("没反应/没日志")]), _vm._v("：检查“事件订阅”里是否漏掉了“接收消息 v2.0”，或忘记发布新版本。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("报错 No session found")]), _vm._v("：这通常是因为配对码尚未在终端成功执行 "), _c('code', [_vm._v("approve")]), _vm._v("。")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("现在配对码授权成功了吗？你可以发一句“Rust 异步编程怎么入门”来测试 AI 的响应。")])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/问题解决/openclaw.md?vue&type=template&id=4b70a600

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/问题解决/openclaw.md

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

/* harmony default export */ var openclaw = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);