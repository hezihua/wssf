(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/编程新架构.md?vue&type=template&id=3775af04
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('p', [_c('strong', [_vm._v("前提：")]), _c('br'), _vm._v("\nai已经具备在提供完整 清晰的prompt 的前提下，完成复杂架构项目的开发执行，并且错误很少")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("核心结论：")]), _c('br'), _vm._v("\n先立业务架子，用 AI 铺开设计/业务/技术；"), _c('strong', [_vm._v("人的位置在提升")]), _vm._v("（取舍与创造性），"), _c('strong', [_vm._v("价值低的工作交给 AI")]), _vm._v("；技术是底座，不是唯一身份。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、总览"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、总览"
    }
  }, [_vm._v("#")]), _vm._v(" 一、总览")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("图")]), _vm._v(" "), _c('th', [_vm._v("主题")]), _vm._v(" "), _c('th', [_vm._v("一句话")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("图 1")]), _vm._v(" "), _c('td', [_vm._v("传统业务系统架构")]), _vm._v(" "), _c('td', [_vm._v("Client / 前端 → 业务 → Data → 中间件与存储")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("图 2")]), _vm._v(" "), _c('td', [_vm._v("先定业务架子")]), _vm._v(" "), _c('td', [_vm._v("先理解业务与工期，再做技术选型")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("图 3")]), _vm._v(" "), _c('td', [_vm._v("AI 辅助落地")]), _vm._v(" "), _c('td', [_vm._v("Prompt ↔ 模型 + 文档 / 知识库 / Skills")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("图 4")]), _vm._v(" "), _c('td', [_vm._v("角色演进")]), _vm._v(" "), _c('td', [_vm._v("人向产品 / PM / 前后端 + Agent 扩展")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("图 5")]), _vm._v(" "), _c('td', [_vm._v("AI 与人的分工")]), _vm._v(" "), _c('td', [_vm._v("AI 参与各环节；人往上提；低价值工作交给 AI")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、图-1-传统业务系统架构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、图-1-传统业务系统架构"
    }
  }, [_vm._v("#")]), _vm._v(" 二、图 1：传统业务系统架构")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("                    ┌─────────┐\n                    │  前端    │\n                    └────┬────┘\n                         │\n   client ───────────► 【业务】\n                         │\n                         ▼\n   三方 ─────────────► 【Data】\n                         │\n              ┌──────────┼──────────┐\n              ▼          ▼          ▼\n           接近/接入    处理       engine\n              │          │          │\n              └──────────┴────┬─────┘\n                              ▼\n                    ┌─────────────────┐\n                    │  存储与中间件     │\n                    │  · Kafka（多个）  │\n                    │  · Redis 热点    │\n                    │  · MySQL / CK    │\n                    │  · ES（工作+双写）│\n                    └─────────────────┘\n\n左侧可补充能力：\n  · 小功能    · 任务     · 可配置\n  · 任务细化  · Pool\n")])])]), _c('p', [_vm._v("请求从 Client / 前端进入业务层，业务读写 Data；经接入、处理、engine 后，落到 Kafka / Redis / MySQL·ClickHouse / ES 等。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、图-2-做项目时先定「业务架子」"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、图-2-做项目时先定「业务架子」"
    }
  }, [_vm._v("#")]), _vm._v(" 三、图 2：做项目时先定「业务架子」")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("  AI 100%  ──►  理解业务\n  工期     ──►  时间约束 ──► 排期\n\n  技术选型（✓）\n  ┌─────────────────────────────────────────┐\n  │  gdk · MySQL · CK · Redis               │\n  │  Data · QPS                              │\n  │  client / Data / 分阶段推进  ✓           │\n  └─────────────────────────────────────────┘\n                    │\n                    ▼\n              【架子】业务\n")])])]), _c('p', [_vm._v("先尽量把业务和工期搞清楚，再按 Data、QPS 等约束做中间件选型，先立"), _c('strong', [_vm._v("业务架子")]), _vm._v("，而不是先堆技术名词。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "业务架子是什么"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#业务架子是什么"
    }
  }, [_vm._v("#")]), _vm._v(" 业务架子是什么？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("业务架子")]), _vm._v(" = 在写具体代码、堆中间件细节之前，先立起来的那套「业务骨架」。"), _c('br'), _vm._v("\n它回答的是："), _c('strong', [_vm._v("系统要办什么事、边界在哪、按什么节奏推进")]), _vm._v("——技术选型要挂在这副骨架上，而不是反过来用技术名词硬套业务。")]), _vm._v(" "), _c('p', [_vm._v("可以拆成三块：")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("块")]), _vm._v(" "), _c('th', [_vm._v("要定清楚的内容")]), _vm._v(" "), _c('th', [_vm._v("例子")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v("业务理解")])]), _vm._v(" "), _c('td', [_vm._v("核心对象、关键路径、约束与边界")]), _vm._v(" "), _c('td', [_vm._v("谁在用？主流程是什么？哪些不做？")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("工期与排期")])]), _vm._v(" "), _c('td', [_vm._v("时间约束下能做到哪一步、如何分阶段")]), _vm._v(" "), _c('td', [_vm._v("1 个月出什么；MVP vs 后续")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("选型服从业务")])]), _vm._v(" "), _c('td', [_vm._v("按 Data、QPS、读写形态选底座")]), _vm._v(" "), _c('td', [_vm._v("要不要 CK、Redis、Kafka，因业务负载而定")])])])]), _vm._v(" "), _c('p', [_vm._v("和「技术底座」的分工：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("技术底座：gdk · MySQL · CK · Redis · Kafka · ES …\n              │  （能跑、能存、能扛量）\n              ▼\n业务架子：对象 / 流程 / 边界 / 分阶段目标\n              │  （做什么、做到哪）\n              ▼\n再用 AI 铺开：设计 · 细节 · 实现\n")])])]), _c('ul', [_c('li', [_c('strong', [_vm._v("不是")]), _vm._v("：一上来列一堆中间件名词，再找业务去填")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("而是")]), _vm._v("：先立架子（业务 + 工期），再选底座，再用 AI / Prompt 往里填设计和代码")])]), _vm._v(" "), _c('p', [_vm._v("架子立稳之后，才进入下一节的 Prompt 闭环。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、图-3-ai-辅助落地-prompt-闭环"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、图-3-ai-辅助落地-prompt-闭环"
    }
  }, [_vm._v("#")]), _vm._v(" 四、图 3：AI 辅助落地（Prompt 闭环）")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("  技术底座（已选型）\n  gdk · MySQL · CK · Redis · Data · QPS\n                    │\n                    ▼\n              【架子】业务\n                    │\n                    ▼\n              ┌─ prompt ─┐\n              │    ↓     │\n              │   AI     │──► 理解流程（步骤 7、8…）\n              │    ↓     │\n              │  prompt  │◄─────────────┐\n              └──────────┘              │\n                    │                   │\n        ┌───────────┼───────────┐       │\n        ▼           ▼           ▼       │\n     工作.md     知识库       Skills     │\n        │           │           │       │\n        └───────────┴───────────┴───────┘\n")])])]), _c('p', [_vm._v("业务架子定好后，用 "), _c('strong', [_vm._v("prompt ↔ AI")]), _vm._v(" 循环理解流程；配合工作文档、知识库、Skills 产出实现，再落地到具体算法或代码。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、图-4-分工演进"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、图-4-分工演进"
    }
  }, [_vm._v("#")]), _vm._v(" 五、图 4：分工演进")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\n② 当前路径\n────────────────────────────────────────\n  产品 ──► 想 ──► PM / QA\n\n  一线 ──► PM + 前后端\n\n\n② 未来路径\n────────────────────────────────────────\n\n  AI-Agent ──► AI ──► 具体落地\n       ↑\n     （能力/经验积累）\n\n右侧仍需碰的能力：\n  · 前后端\n  · Data\n  · 计算相关\n────────────────────────────────────────\n")])])]), _c('p', [_vm._v("协作上用 AI 优化并提取问题；职业上从纯实现扩展到 "), _c('strong', [_vm._v("产品理解 + PM/前后端 + Agent")]), _vm._v("，同时仍要具备前后端与 Data 的基础。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "六、图-5-ai-参与各个环节-人的位置在提升-价值低的工作交给-ai"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、图-5-ai-参与各个环节-人的位置在提升-价值低的工作交给-ai"
    }
  }, [_vm._v("#")]), _vm._v(" 六、图 5：AI 参与各个环节，人的位置在提升，价值低的工作交给 AI")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("         AI\n          │\n          ▼\n  ┌─────────────────────┐\n  │  设计 · 业务 · 技术   │\n  │       取 舍          │\n  └──────────┬──────────┘\n             │\n             ▼\n        创 造 性  ←── 人\n\n\n  闭环：  AI ──► 人 ──► AI\n  前提：  人要有能力（判断 / 整合）\n\n\n  结构示意：\n       ┌────┐\n       │    │\n       ├────┤\n       │ 人 │ ──► ┌───┐\n       ├────┤     │ × │  ← 可替代环节拿掉\n       │    │     └───┘\n       └────┘\n")])])]), _c('h2', {
    attrs: {
      "id": "七、一张图串起来-端到端"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、一张图串起来-端到端"
    }
  }, [_vm._v("#")]), _vm._v(" 七、一张图串起来（端到端）")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("┌──────────────────────────────────────────────────────────┐\n│ 1. 理解业务 + 工期                                        │\n│ 2. 技术选型：MySQL / CK / Redis / Kafka / ES · Data·QPS   │\n│ 3. 立【业务架子】                                         │\n└────────────────────────────┬─────────────────────────────┘\n                             ▼\n┌──────────────────────────────────────────────────────────┐\n│ 4. Prompt ↔ AI + 工作文档 / 知识库 / Skills               │\n│                           \n└────────────────────────────┬─────────────────────────────┘\n                             ▼\n┌──────────────────────────────────────────────────────────┐\n│ 5. AI 参与各个环节（设计 · 业务 · 技术）                    │\n│ 6. 人的位置提升：【取舍】──►【创造性】                      │\n│ 7. 闭环：AI → 人 → AI；价值低的工作交给 AI / 拿掉           │\n└──────────────────────────────────────────────────────────┘\n                             ▼\n              角色：产品 / PM / 前后端 + Agent\n              （技术是底座，不是唯一身份）\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/编程新架构.md?vue&type=template&id=3775af04

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/编程新架构.md

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

/* harmony default export */ var _ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);