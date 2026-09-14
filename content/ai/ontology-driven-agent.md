---
title: 从人月聊IT到 Ontology-driven Agent：可落地的本体平台路线
author: jimmy
date: '2026-9-14'
---

> 人月聊IT讲的「本体」，不是传统 Semantic Web / OWL 课程里的 Ontology，而是借鉴 **Palantir Ontology** 的思想：先建一层描述「企业世界」的业务语义模型，再让 AI 基于它理解、推理、决策与执行。  
> 本文汇总其核心判断、M1～M7 + ME 体系，以及如何落到一个可开发的 **Ontology-driven Agent Platform**。

---

## 一、先说结论

一句话：

> **不要让 AI 直接从数据库和代码理解企业，而是先建立一层描述「企业世界」的本体模型，再让 AI 基于这个模型进行理解、推理、决策和执行。**

核心链路：

```text
真实业务世界
      ↓
业务需求
      ↓
Ontology 本体模型（M1～M7 + ME）
      ↓
本体运行平台 / Harness
      ↓
Skills / Tools
      ↓
Agent
      ↓
AI 原生应用 → 分析 / 决策 / 执行
```

这和传统 `数据库 → CRUD → 业务代码 → 页面` 完全不同。

相关视频如《本体论和本体建模-具体应用场景究竟是什么？》强调的也是：本体适合创新探索、分析推理、多目标权衡；规则清晰的问题应走精确代码。详见同栏目笔记：[本体论和本体建模：具体应用场景究竟是什么？](/wssf/notes/ai/本体论应用场景/)。

---

## 二、别踩错路线：他讲的不是 OWL 入门课

直接搜「Ontology 教程」，容易掉进：

```text
哲学 → 形式逻辑 → RDF → RDFS → OWL → Description Logic → Semantic Web
```

这是正统 Ontology Engineering，但**不是人月聊IT当前主线**。

他实际更接近：

```text
Enterprise Ontology
+ Palantir Ontology
+ DDD / Domain Modeling
+ Enterprise Architecture
+ Knowledge Graph
+ AI Agent
+ AI Native Application
```

想真正吃透这套视频：**不要一上来啃 OWL**。

三个常见误区：

| 不要等同 | 各自在干什么 |
|----------|--------------|
| Ontology ≠ 数据库表设计 | 描述「世界应如何被理解」 |
| Ontology ≠ Knowledge Graph | KG 描述「当前有哪些事实」 |
| Ontology ≠ RDF + OWL | OWL 是形式语义语言；工程上可借鉴，但不是他的主讲内容 |

层次可以记成：

```text
Ontology   → 世界如何被理解
KG         → 世界里当前事实
Database   → 存储事实
Rule       → 什么情况下该怎样
Workflow   → 事情怎么流转
Agent      → 基于以上决策并行动
```

---

## 三、体系总览：What / How / Why

```text
真实业务世界
      ↓
Ontology 本体
      │
 ┌────┼────┐
 ↓    ↓    ↓
What How  Why
对象 行为  规则
 ↓    ↓    ↓
Event / Scene → Process / Actor → Query / Analytics
      ↓
Skills / Tools → Agent → 分析 / 执行（改真实世界）
```

这也是他近期视频越来越集中到 **Ontology → Harness → Agent → AI Native** 的原因。

---

## 四、M1～M7 + ME（程序员版）

截图与相关文章里的建模规范，可翻译成：

### M1 Object：企业里有什么

业务世界对象，而非仅表结构。电商例：Customer / Product / Order / Payment / Warehouse / Supplier。

每个对象：属性、关联、生命周期。类似 Class / Struct / Table / DDD Entity，但语义锚定在**业务世界**。

### M2 Behavior：能做什么（关键）

只有名词不够，Agent 需要动词：

```text
Order → create / pay / cancel / refund / ship
```

从「AI 回答问题」变成「AI 操作业务世界」。Palantir 也强调 Ontology 除 objects/properties/links 外，还要有 actions/functions。

### M3 Rule：什么情况下允许做什么

```text
金额 > 10000 → 需经理审批
status == PAID → 允许 Ship
status == CANCELLED → 禁止 Ship
```

这是 Decision Intelligence 入口，也是「Agent 决策平台」该重点啃的一层。

### ME Event：什么时候发生了什么

OrderCreated / PaymentCompleted / InventoryChanged …  
链路：`Object → Event → Behavior → Rule → Action`，非常接近 Agent Runtime。

### M4 Scenario：面对某类问题怎么办

不是「有 Order 对象」，而是「客户投诉订单延迟时怎么办」——Actors、Objects、Events、Rules、Behaviors、Actions 组成**任务上下文**。

### M5 Actor：谁可以对什么做什么

Customer / Employee / Manager / Supplier / AI Agent / System，天然带上权限、角色、责任边界。

### M6 Flow：事情怎么流转

贷款审批、退款流程等；Agent 理解当前步骤、判断下一步、调 Skill 推进——Ontology → Workflow → Agent。

### M7 Query / Analytics：查、比、析、再决策

Agent 不只执行动作，还要回答「过去 30 天销售额」「为何华东退货升高」「降价 5% 会怎样」——语义查询层隔离底层 SQL。

---

## 五、为什么像 Palantir

Palantir 把 Ontology 放在企业数据与应用之间，并视为企业 **digital twin**：既有语义元素，也有动能元素；目标不是单纯描述数据，而是支撑复杂、互联的**决策**。

> 值得研究的是 **「Palantir Ontology 思想 + AI Agent」**，而不只是传统 Ontology。

视频学习可按五阶段：① 为什么需要本体 → ② Palantir（规则与行为核心）→ ③ M1～M7 + ME 精读 → ④ Ontology → AI Native → ⑤ Ontology + Harness + Agent。

---

## 六、项目定位：OpenOntology Agent

不做一上来复刻 Palantir，先做：

> **用本体描述业务世界，用 Runtime 执行本体，用 Agent 消费本体。**

目标形态：

```text
自然语言 → 本体模型 → 对象/行为/规则/事件 → Agent → Tool/API → 真实业务系统
```

用户例：

> 帮我分析最近销售额下降的原因；若华东库存不足，生成补货建议。

Agent 不自由发挥，而是：读 Ontology → 找 Sales / Region / Inventory → Query → Rule → Decision → Action。

### 六层架构

```text
AI Application（Chat / Copilot / Dashboard）
        ↓
Agent（Planner / Reasoner / Executor）
        ↓
Harness（Tool / Skill / Workflow / Event）
        ↓
Ontology Runtime（Object / Behavior / Rule / Query）
        ↓
Ontology Model（M1～M7 + ME）
        ↓
Data Layer（PostgreSQL / Redis / Vector / MQ）
```

**核心约束：Agent 不直连数据库，只走 Ontology Runtime。**

### Object 不能停在 ORM

```text
Order
├── Properties / Links
├── Behaviors / Rules
├── Events / Actions
```

Behavior 形态：`Preconditions → Action → Effects → Event`。  
Rule 第一版可用简单表达式；MVP 不要上 Drools / DMN。  
Event + Trigger → Event-driven Agent。  
Actor + Permission → LLM 想做也得过本体权限。  
Query 提供语义能力名（如 `sales_by_region`），隔离 SQL。

### Harness / Skill / Tool

- **Ontology**：Agent 对业务世界的认知模型  
- **Harness**：Agent 执行环境（Tool、Skill、Workflow、Memory、Permission、Event、Context）  
- **Tool**：技术能力（如 `GET /orders/{id}`）  
- **Skill**：业务能力（如 `refund_order`，可组合多个 Tool）

```text
API → Tool → Skill → Behavior → Agent
```

### 竞争力不在「又一个 Agent」

卖点不是聊天机器人，而是：

> **把企业业务世界建模成 AI 可理解、推理、执行的数字语义层。**

从 AI 应用升级为 AI Infrastructure / Platform。

---

## 七、MVP：只做一个订单退款系统

模型：`Customer → Order → Payment → Refund`  

Behavior：`Order.cancel` / `Refund.create|approve|execute`  

Rule：已支付 + 金额小于 1000 + 未退款 → 允许自动退款  

对话：

```text
「订单 10086 可以退款吗？」→ 查对象 → 评规则 → Decision
「帮我退款。」→ 权限 → 规则 → create refund → Event
```

做到这里，就有一个真正的 Ontology + Agent MVP。

### 建议技术栈（刻意克制）

| 层 | 选型 |
|----|------|
| 前端 | Vue 3 + TS + Vite + Vue Flow + Element Plus（Ontology Studio） |
| 后端 | Go + Gin + GORM |
| 存储 | PostgreSQL（自管关系，第一版不上 Neo4j） |
| 规则 | CEL |
| Agent | OpenAI-compatible API |
| 向量 | pgvector |
| 本体定义 | YAML / JSON |
| 部署 | Docker Compose |

**不上：** K8s、微服务、复杂工作流引擎。

### 开发阶段

| Phase | 内容 | 约略工期 |
|-------|------|----------|
| 1 Ontology Core | Object/Property/Link/Behavior/Rule/Event + Runtime | 3～5 天 |
| 2 Ontology Studio | 拖拽建模、校验、发布 | 5～7 天 |
| 3 Harness | Tool/Skill/Permission/Workflow | 5～7 天 |
| 4 Agent | 发现本体与 Skill → 调 Runtime | 3～5 天 |
| 5 Decision | Evidence / Confidence / Approval / Audit | 5～10 天 |

仓库骨架示意：

```text
openontology/
├── frontend/          # ontology-studio + agent-console
├── backend/           # ontology / runtime / rule / event / skill / harness / agent
├── examples/ecommerce/ontology.yaml
├── docker-compose.yml
└── README.md
```

---

## 八、学习路线（对齐「要做平台」而非「学知识图谱」）

若目标只是知识图谱：`RDF / OWL / SPARQL / Neo4j / GraphRAG` 够用。

若目标是 **Agent 决策平台 / AI 原生应用平台**，建议：

```text
企业架构 / 业务建模
  → Ontology（Object + Behavior + Rule + Event）
  → Scenario + Actor + Flow + Query
  → Decision Model
  → Skills → Harness → Agent → AI Native App
```

分 Level：业务建模（DDD、业务对象、流程、规则、事件）→ OWL 基础浅补 → Protégé 做电商本体 → KG + Neo4j/GraphRAG → Palantir 官方 Ontology 文档 → Ontology + Agent。

资源优先：

1. 人月聊IT：本体论 / Palantir / AI 原生 / Harness / Agent  
2. [Palantir Ontology Overview](https://www.palantir.com/docs/foundry/ontology/overview/) · [Core Concepts](https://www.palantir.com/docs/foundry/ontology/core-concepts)  
3. [OWL 2 Primer](https://www.w3.org/TR/owl-primer/)（浅学即可）  
4. [Protégé](https://protege.stanford.edu/)

---

## 九、收束

| 问题 | 答案 |
|------|------|
| 他在讲什么？ | Palantir 式企业本体 + Agent，不是 OWL 课 |
| 最该精读什么？ | M1～M7 + ME，尤其 Behavior / Rule / Scenario |
| 下一步做什么？ | 最小 Ontology Runtime + 订单退款 MVP，而不是继续堆 Agent 框架 |

下一步可继续拆：**Ontology YAML Schema → PG 表结构 → Go Struct → Runtime 接口 → CEL → Skill/Tool 协议 → Agent Tool Calling → Vue Flow 建模器**，从「研究思想」进入「做开源版」。
