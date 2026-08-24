(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/基础建设/aip.md?vue&type=template&id=cbbd78ae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('p', [_vm._v("本文整理自项目讨论，说明开源版 AIP（Artificial Intelligence Platform）闭环在做什么、和传统系统差在哪、以及当前实现如何把 Agent 的读写面收束到 Ontology / Action。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、核心闭环"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、核心闭环"
    }
  }, [_vm._v("#")]), _vm._v(" 一、核心闭环")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("Raw Data → Ontology（业务对象）→ Agent（编排）→ Action（受控写回）\n")])])]), _c('p', [_vm._v("目标不是复刻绚丽界面，而是让「死表」变成「活的业务对象」：大模型能读、能写，但必须走平台规则与安全边界。")]), _vm._v(" "), _c('p', [_vm._v("当前仓库大致对应：")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("层")]), _vm._v(" "), _c('th', [_vm._v("作用")]), _vm._v(" "), _c('th', [_vm._v("状态")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Ontology")]), _vm._v(" "), _c('td', [_vm._v("ObjectType / LinkType / ActionType 注册与校验")]), _vm._v(" "), _c('td', [_vm._v("✅")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Data")]), _vm._v(" "), _c('td', [_vm._v("对象实例与 Action 记录存储")]), _vm._v(" "), _c('td', [_vm._v("✅（轻量）")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Agent")]), _vm._v(" "), _c('td', [_vm._v("LangGraph / heuristic，只调 Ontology 工具")]), _vm._v(" "), _c('td', [_vm._v("✅")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Action + HITL")]), _vm._v(" "), _c('td', [_vm._v("pending → 人工批准 → 写回")]), _vm._v(" "), _c('td', [_vm._v("✅")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Casbin")]), _vm._v(" "), _c('td', [_vm._v("对象读过滤、Action submit/approve")]), _vm._v(" "), _c('td', [_vm._v("✅")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("前端")]), _vm._v(" "), _c('td', [_vm._v("Next.js 控制台（"), _c('code', [_vm._v("frontend/")]), _vm._v("，端口 3010）")]), _vm._v(" "), _c('td', [_vm._v("✅")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MCP")]), _vm._v(" "), _c('td', [_vm._v("给外部客户端插线")]), _vm._v(" "), _c('td', [_vm._v("❌ 已跳过（自研 Agent）")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、和「传统写回按钮」的差别"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、和「传统写回按钮」的差别"
    }
  }, [_vm._v("#")]), _vm._v(" 二、和「传统写回按钮」的差别")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "传统"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#传统"
    }
  }, [_vm._v("#")]), _vm._v(" 传统")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("用户改表单 → 点保存 → API 直接 UPDATE → 完成\n")])])]), _c('p', [_vm._v("写操作绑在 UI 上，一次请求里改库。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "infini-aip"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#infini-aip"
    }
  }, [_vm._v("#")]), _vm._v(" Infini / AIP")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("Agent 理解意图\n  → 生成 Action（pending，尚未改业务对象）\n  → Casbin：谁能提、谁能批\n  → Human-in-the-loop（如 carol 批准）\n  → 真正写回 Object\n")])])]), _c('table', [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _c('th', [_vm._v("传统写回按钮")]), _vm._v(" "), _c('th', [_vm._v("Action + HITL")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("改库时机")]), _vm._v(" "), _c('td', [_vm._v("点击即写")]), _vm._v(" "), _c('td', [_vm._v("批准后才写")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("AI 角色")]), _vm._v(" "), _c('td', [_vm._v("容易变成「代你点保存」")]), _vm._v(" "), _c('td', [_vm._v("只能提交受控 Action")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("审计")]), _vm._v(" "), _c('td', [_vm._v("多为日志")]), _vm._v(" "), _c('td', [_vm._v("有独立 Action 记录")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、「传统也能审批」-那-aip-还多什么"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、「传统也能审批」-那-aip-还多什么"
    }
  }, [_vm._v("#")]), _vm._v(" 三、「传统也能审批」——那 AIP 还多什么？")]), _vm._v(" "), _c('p', [_vm._v("传统审批流里同样可以：alice 提交 → admin/carol 批准 → 再写库。"), _c('br'), _vm._v(" "), _c('strong', [_vm._v("有没有 HITL，不是 AIP 的独家发明。")])]), _vm._v(" "), _c('p', [_vm._v("真正多出来的是约束面，尤其是对 AI：")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _c('th', [_vm._v("传统审批")]), _vm._v(" "), _c('th', [_vm._v("AIP / Infini")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("提交物")]), _vm._v(" "), _c('td', [_vm._v("表单 / 流程实例")]), _vm._v(" "), _c('td', [_vm._v("本体上声明的 "), _c('strong', [_vm._v("ActionType")]), _vm._v("（强类型参数）")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("写库")]), _vm._v(" "), _c('td', [_vm._v("流程节点里跑业务代码 / SQL")]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("只能")]), _vm._v("执行已注册 Action")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("AI 通道")]), _vm._v(" "), _c('td', [_vm._v("常另开接口直写，与人走两套路")]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("人和 Agent 写库都走 Action")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("读侧")]), _vm._v(" "), _c('td', [_vm._v("多在提交后卡权限")]), _vm._v(" "), _c('td', [_vm._v("提交前 Agent 只能看见授权 Objects")])])])]), _vm._v(" "), _c('p', [_vm._v("一句话：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("传统也能做人审。")]), _vm._v(" "), _c('li', [_vm._v("AIP 把「可写什么」收成 Ontology 上的 Action；LLM "), _c('strong', [_vm._v("只能提议这些 Action")]), _vm._v("；读写落在同一套对象语义和权限里。")])]), _vm._v(" "), _c('p', [_vm._v("若去掉 Agent、只留人工「提议 Action → 批准」，外表会像传统审批；"), _c('strong', [_vm._v("对 AI 的统一写网关与机读能力目录")]), _vm._v("才是差异点。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、点击「运行-agent」打了哪些接口"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、点击「运行-agent」打了哪些接口"
    }
  }, [_vm._v("#")]), _vm._v(" 四、点击「运行 Agent」打了哪些接口？")]), _vm._v(" "), _c('p', [_vm._v("前端会连续调用：")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_c('code', [_vm._v("POST /agent/run")])]), _c('br'), _vm._v("\n真正跑 Agent：读对象、提议 Action（写入 pending）。")])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_c('code', [_vm._v("GET /actions?status=pending")])]), _c('br'), _vm._v("\n刷新右侧 HITL 列表。")])])]), _vm._v(" "), _c('p', [_vm._v("批准写回是另一次操作：")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_c('code', [_vm._v("POST /actions/{id}/approve")])])])]), _vm._v(" "), _c('p', [_vm._v("不是「运行 Agent」本身自动改库。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、「读对象、提议-action、pending」分别是什么"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、「读对象、提议-action、pending」分别是什么"
    }
  }, [_vm._v("#")]), _vm._v(" 五、「读对象、提议 Action、pending」分别是什么？")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "读哪个对象"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#读哪个对象"
    }
  }, [_vm._v("#")]), _vm._v(" 读哪个对象？")]), _vm._v(" "), _c('p', [_vm._v("以「将工单 t_100 标记为已解决」为例（heuristic）：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("读 Ontology schema（有哪些 Object / Action）")]), _vm._v(" "), _c('li', [_vm._v("读业务对象 "), _c('strong', [_c('code', [_vm._v("Ticket")]), _vm._v(" / "), _c('code', [_vm._v("t_100")])])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("submit_action(update_ticket_status, …)")])])]), _vm._v(" "), _c('p', [_vm._v("受 Casbin 约束：例如 alice 只能看到 "), _c('code', [_vm._v("c_001")]), _vm._v(" 相关对象。"), _c('br'), _vm._v("\nDemo 里 ObjectType 目前主要是 "), _c('code', [_vm._v("Ticket")]), _vm._v("、"), _c('code', [_vm._v("Customer")]), _vm._v("。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "提议是临时的吗"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#提议是临时的吗"
    }
  }, [_vm._v("#")]), _vm._v(" 提议是临时的吗？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("不是纯内存临时变量")]), _vm._v("，而是落库的 Action 记录（表 "), _c('code', [_vm._v("ontology_actions")]), _vm._v("）：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("状态先为 "), _c('code', [_vm._v("pending")])]), _vm._v(" "), _c('li', [_vm._v("有稳定 "), _c('code', [_vm._v("id")]), _vm._v("（UUID）")]), _vm._v(" "), _c('li', [_vm._v("批准后才改业务 Object；拒绝则对象不变")])]), _vm._v(" "), _c('p', [_vm._v("「临时」指的是 "), _c('strong', [_vm._v("还没写业务对象")]), _vm._v("，不是请求结束就丢。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "入职入库-离职出库可以吗"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#入职入库-离职出库可以吗"
    }
  }, [_vm._v("#")]), _vm._v(" 入职入库 / 离职出库可以吗？")]), _vm._v(" "), _c('p', [_vm._v("可以，同一套模式。工单只是 demo，换成人事即：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("ObjectType: Employee\nActionType: onboard_employee   → 入库\nActionType: offboard_employee  → 出库\n")])])]), _c('p', [_vm._v("闭环不变：读对象 → 提议 Action（pending）→ 人批 → 写回。"), _c('br'), _vm._v("\n前提：先在本体登记 ActionType、定好参数与权限，并实现 approve 后的执行器。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "六、和「以前一个功能写一个-api」的差别"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、和「以前一个功能写一个-api」的差别"
    }
  }, [_vm._v("#")]), _vm._v(" 六、和「以前一个功能写一个 API」的差别")]), _vm._v(" "), _c('p', [_vm._v("不完全是「以前给人，现在给 Agent」。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "以前"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#以前"
    }
  }, [_vm._v("#")]), _vm._v(" 以前")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("POST /tickets/{id}/resolve\nPOST /employees/onboard\n…\n")])])]), _c('p', [_vm._v("每个接口各自校验、权限、写库；前端 / 脚本 / Agent 各自对接不同 URL。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "现在"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#现在"
    }
  }, [_vm._v("#")]), _vm._v(" 现在")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("Ontology 登记 Object / Action\n统一写入口：POST /actions（或工具 submit_action）\n能力目录：GET /ontology/agent-context\n")])])]), _c('table', [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _c('th', [_vm._v("散装 API")]), _vm._v(" "), _c('th', [_vm._v("Ontology / Action")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("能力发现")]), _vm._v(" "), _c('td', [_vm._v("靠文档 / Prompt")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("agent-context")]), _vm._v(" 机读")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("写入口")]), _vm._v(" "), _c('td', [_vm._v("每功能一个 endpoint")]), _vm._v(" "), _c('td', [_vm._v("统一 Action 网关")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务对象")]), _vm._v(" "), _c('td', [_vm._v("人、Agent 常两套")]), _vm._v(" "), _c('td', [_vm._v("人与 Agent 共用语义")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("本质")]), _vm._v("：给业务能力建「机读目录 + 统一写网关」，而不是简单把 API 的调用方从人换成 Agent。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "七、传统-api-仍适用的场景-ontology-action-不是银弹"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、传统-api-仍适用的场景-ontology-action-不是银弹"
    }
  }, [_vm._v("#")]), _vm._v(" 七、传统 API 仍适用的场景（Ontology / Action 不是银弹）")]), _vm._v(" "), _c('p', [_vm._v("Ontology + Action 适合「业务语义强、要给 Agent 安全动手、要统一审计/审批」的路径。"), _c('br'), _vm._v("\n它"), _c('strong', [_vm._v("不能、也不该")]), _vm._v("取代所有接口。下面这些场景，继续用（或优先用）普通 API 更合适：")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "更适合散装-专用-api-的情况"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#更适合散装-专用-api-的情况"
    }
  }, [_vm._v("#")]), _vm._v(" 更适合散装 / 专用 API 的情况")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("场景")]), _vm._v(" "), _c('th', [_vm._v("原因")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("高 QPS、低延迟读写")]), _vm._v(" "), _c('td', [_vm._v("列表分页、搜索、实时推送；走 Action + HITL 过重")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("简单 CRUD / 管理后台")]), _vm._v(" "), _c('td', [_vm._v("字段编辑、配置页；人为主、无 Agent 参与时，直接 API 更清晰")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("文件上传、流式、WebSocket")]), _vm._v(" "), _c('td', [_vm._v("传输形态特殊，不适合塞进 Action payload")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("登录、OAuth、Webhook 回调")]), _vm._v(" "), _c('td', [_vm._v("协议型接口，不是「业务对象动作」")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("批量 ETL / 数仓管道")]), _vm._v(" "), _c('td', [_vm._v("Airbyte、dbt、作业调度；属于数据层，不是 Agent 写回")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("跨系统集成（对方只认固定 REST）")]), _vm._v(" "), _c('td', [_vm._v("对外契约已定；可对内再接到 Action execute")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("健康检查、指标、内部运维")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("/health")]), _vm._v("、metrics；与业务 Ontology 无关")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "更适合-ontology-action-的情况"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#更适合-ontology-action-的情况"
    }
  }, [_vm._v("#")]), _vm._v(" 更适合 Ontology / Action 的情况")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("场景")]), _vm._v(" "), _c('th', [_vm._v("原因")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Agent 要读懂业务并提议变更")]), _vm._v(" "), _c('td', [_vm._v("需要机读的 Object / Action 目录")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("写操作风险高、要人审")]), _vm._v(" "), _c('td', [_vm._v("入职、调岗、关停资源、改关键状态等")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("多端（人 + Agent + 将来其它客户端）共用写语义")]), _vm._v(" "), _c('td', [_vm._v("避免每人一套写接口")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("要按对象做细粒度授权")]), _vm._v(" "), _c('td', [_vm._v("Casbin 挂在 Object / Action 上更自然")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "共存方式-推荐心智"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#共存方式-推荐心智"
    }
  }, [_vm._v("#")]), _vm._v(" 共存方式（推荐心智）")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("对外 / 专用 API          Ontology 读 + Action 写\n（集成、CRUD、上传…）  →  （Agent、高风险业务变更）\n         ↘                    ↙\n           同一套 domain service\n")])])]), _c('ul', [_c('li', [_c('strong', [_vm._v("不是")]), _vm._v("「所有功能都登记成 Action」")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("而是")]), _vm._v("「Agent 能动的手、以及要统一治理的写，走 Action；其余该 API 还 API」")]), _vm._v(" "), _c('li', [_vm._v("Action 的 "), _c('code', [_vm._v("execute")]), _vm._v(" 往往 "), _c('strong', [_vm._v("调用")]), _vm._v(" 已有业务服务，而不是把业务逻辑重写一遍")])]), _vm._v(" "), _c('p', [_vm._v("若强行把分页查询、文件上传也做成 Action，只会增加延迟和复杂度，收益很小——"), _c('strong', [_vm._v("银弹不存在，边界比口号重要")]), _vm._v("。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "八、-ontology-agent-context-是什么"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#八、-ontology-agent-context-是什么"
    }
  }, [_vm._v("#")]), _vm._v(" 八、"), _c('code', [_vm._v("/ontology/agent-context")]), _vm._v(" 是什么？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("不是文件，是 HTTP 接口。")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("地址："), _c('code', [_vm._v("GET http://127.0.0.1:8000/ontology/agent-context")])]), _vm._v(" "), _c('li', [_vm._v("路由："), _c('code', [_vm._v("src/infini_ontology/api.py")]), _vm._v(" → "), _c('code', [_vm._v("get_agent_context")])]), _vm._v(" "), _c('li', [_vm._v("数据："), _c('code', [_vm._v("registry.agent_context()")]), _vm._v("（"), _c('code', [_vm._v("ontology/registry.py")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("作用：把已注册的 Object / Link / Action（并按 Casbin 过滤可 submit 的 Action）收成 JSON，供 Agent 规划")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("curl")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-s")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-H")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'X-User-Id: alice'")]), _vm._v(" http://127.0.0.1:8000/ontology/agent-context "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" jq "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v(".")]), _vm._v("\n")])])]), _c('p', [_vm._v("也可在 http://127.0.0.1:8000/docs 中调试。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "九、「读写面收束到-ontology-action」怎么实现"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#九、「读写面收束到-ontology-action」怎么实现"
    }
  }, [_vm._v("#")]), _vm._v(" 九、「读写面收束到 Ontology/Action」怎么实现？")]), _vm._v(" "), _c('p', [_vm._v("不是靠 Agent 自觉，而是多层硬约束：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("Agent（LLM / heuristic）\n   │ 只能调白名单工具\n   ▼\nget_ontology_schema / list_objects / get_object / follow_link / submit_action\n   │\n   ▼\nRegistry 校验 + ObjectStore + ActionService + Casbin\n   │\n   ▼\n真正改库只在 Action approve → execute\n")])])]), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("工具白名单")]), _vm._v("（"), _c('code', [_vm._v("agent/tools.py")]), _vm._v("）"), _c('br'), _vm._v("\n无 SQL、无任意 PATCH；LLM 只能 "), _c('code', [_vm._v("bind_tools")]), _vm._v(" 上述工具。")])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("读路径")]), _c('br'), _vm._v("\n必须是已注册 ObjectType；实例再过 Casbin 过滤。")])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("写路径")]), _c('br'), _vm._v("\n只能 "), _c('code', [_vm._v("submit_action")]), _vm._v(" → "), _c('code', [_vm._v("registry.get_action")]), _vm._v("（未登记即失败）→ 参数校验 → Casbin submit → 通常只写 pending；改库要 approve。")])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("Prompt")]), _vm._v("（软约束）"), _c('br'), _vm._v("\n强调写必须走 "), _c('code', [_vm._v("submit_action")]), _vm._v("；硬约束仍是工具层 + 服务层。")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "十、还要不要写业务接口给-ontology-用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#十、还要不要写业务接口给-ontology-用"
    }
  }, [_vm._v("#")]), _vm._v(" 十、还要不要写业务接口给 Ontology 用？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("要有业务逻辑，但不一定再给人/Agent 各暴露一套 REST。")])]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("业务逻辑（建员工、关账号、改状态…）\n        ↑\nOntology / Action（登记 + 校验 + 权限 + HITL）\n        ↑\nAgent / 前端（读 Object + submit_action）\n")])])]), _c('ul', [_c('li', [_vm._v("Ontology：契约与入口")]), _vm._v(" "), _c('li', [_vm._v("业务实现：Action "), _c('code', [_vm._v("execute")]), _vm._v(" 时调用的 domain service / 内部 API")])]), _vm._v(" "), _c('p', [_vm._v("当前 demo 的业务写在 "), _c('code', [_vm._v("ActionService._dispatch")]), _vm._v(" 内；生产中更常见是 execute 转调已有服务。")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("要准备")]), _vm._v(" "), _c('th', [_vm._v("不必重复")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("ObjectType / ActionType 登记")]), _vm._v(" "), _c('td', [_vm._v("给 Agent 一人一个平行业务 URL")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Action 参数、权限、HITL")]), _vm._v(" "), _c('td', [_vm._v("Agent 直连旧 CRUD")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("execute 里的真实业务逻辑")]), _vm._v(" "), _c('td', [_vm._v("两套完全不同的写路径")])])])]), _vm._v(" "), _c('p', [_vm._v("新功能推荐顺序："), _c('strong', [_vm._v("登记 Action → 实现 executor →（按需）HITL")]), _vm._v("，而不是先给 Agent 再开平行 API。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "十一、本地怎么跑"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#十一、本地怎么跑"
    }
  }, [_vm._v("#")]), _vm._v(" 十一、本地怎么跑")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# API")]), _vm._v("\nuv "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sync")]), _vm._v("\nuv run uvicorn infini_ontology.main:app "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--reload")]), _vm._v(" --app-dir src\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# UI（默认 3010，避免占 3000）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" frontend "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" run dev\n")])])]), _c('ul', [_c('li', [_vm._v("API 文档：http://127.0.0.1:8000/docs")]), _vm._v(" "), _c('li', [_vm._v("控制台：http://localhost:3010")])]), _vm._v(" "), _c('p', [_vm._v("演示用户（"), _c('code', [_vm._v("X-User-Id")]), _vm._v("）：")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("用户")]), _vm._v(" "), _c('th', [_vm._v("能力")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("alice")]), _vm._v(" "), _c('td', [_vm._v("仅 Acme（c_001）相关对象；可提议 Action；不能批准")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("bob")]), _vm._v(" "), _c('td', [_vm._v("仅 Beta（c_002）；只读")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("carol")]), _vm._v(" "), _c('td', [_vm._v("可 approve / reject")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("admin")]), _vm._v(" "), _c('td', [_vm._v("全权限")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "十二、一句话收束"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#十二、一句话收束"
    }
  }, [_vm._v("#")]), _vm._v(" 十二、一句话收束")]), _vm._v(" "), _c('p', [_vm._v("Infini 这套东西的关键，不是「多一个审批按钮」或「API 改给 Agent 用」，也不是取代所有接口，而是：")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("用 Ontology 定义业务对象与可执行动作；对 Agent 和高风险写，用统一 Action 网关 + 权限 + HITL 收束；其余高流量 CRUD、协议型、管道型接口继续用普通 API，两者共用底层业务服务。")])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/基础建设/aip.md?vue&type=template&id=cbbd78ae

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/基础建设/aip.md

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

/* harmony default export */ var aip = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);