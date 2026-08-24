(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/问题解决/pr.md?vue&type=template&id=54c20214
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('p', [_vm._v("以 "), _c('a', {
    attrs: {
      "href": "https://github.com/huangruiteng/loopx/pull/2763",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("LoopX #2763"), _c('OutboundLink')], 1), _vm._v(" 为例，说明没有上游写权限时，如何把本地改动合进原项目。")]), _vm._v(" "), _c('p', [_vm._v("对应 issue："), _c('a', {
    attrs: {
      "href": "https://github.com/huangruiteng/loopx/issues/2761",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("#2761"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、原理"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、原理"
    }
  }, [_vm._v("#")]), _vm._v(" 一、原理")]), _vm._v(" "), _c('p', [_vm._v("贡献者通常不能直接 "), _c('code', [_vm._v("push")]), _vm._v(" 到原仓库（上游）。协作靠三份拷贝：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("上游（upstream）\n  huangruiteng/loopx     ← 原项目主干\n        ▲\n        │  Pull Request（申请合并）\n        │\n你的 fork\n  hezihua/loopx          ← 你有写权限的 GitHub 副本\n        ▲\n        │  git push\n        │\n本地工作区\n  改文件、commit 的地方\n")])])]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("位置")]), _vm._v(" "), _c('th', [_vm._v("作用")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("本地")]), _vm._v(" "), _c('td', [_vm._v("编辑、验证、commit")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Fork")]), _vm._v(" "), _c('td', [_vm._v("你能 push 的远程")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("上游")]), _vm._v(" "), _c('td', [_vm._v("真正要合入的目标；通过 PR 申请")])])])]), _vm._v(" "), _c('p', [_vm._v("直接推上游若出现 "), _c('code', [_vm._v("Permission denied")]), _vm._v("，属于正常情况，应改为推 fork 再开 PR。")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("开 PR ≠ 已合并。")]), _vm._v(" PR 是审查申请；合并由有权限的 maintainer 完成。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、本次实际做了什么-2763"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、本次实际做了什么-2763"
    }
  }, [_vm._v("#")]), _vm._v(" 二、本次实际做了什么（#2763）")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("选切口")]), _vm._v("：修架构文档与代码不一致（七层 / 六动词词表 vs 真实 Turn 枚举），纯文档、范围小。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("干净分支")]), _vm._v("：从 "), _c('code', [_vm._v("origin/main")]), _vm._v(" 建 worktree 与分支"), _c('br'), _vm._v(" "), _c('code', [_vm._v("codex/align-architecture-docs-inventory-2761")]), _vm._v("。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("改文件")]), _vm._v("：\n"), _c('ul', [_c('li', [_c('code', [_vm._v("docs/architecture.md")]), _vm._v("：六层 durable surface；"), _c('code', [_vm._v("next_probe")]), _vm._v("/pre-tick 标为 optional；补充 Turn Decision Vocabulary（"), _c('code', [_vm._v("LoopXTurnRoute")]), _vm._v(" / "), _c('code', [_vm._v("LoopXTurnResultKind")]), _vm._v("）。")]), _vm._v(" "), _c('li', [_vm._v("若干 control-plane course 入口：避免把六动词写成唯一协议词表。")])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("验证")]), _vm._v("："), _c('code', [_vm._v("loopx check")]), _vm._v("（public boundary）+ "), _c('code', [_vm._v("git diff --check")]), _vm._v("。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Commit")]), _vm._v("：说明 why，并用 "), _c('code', [_vm._v("Fixes #2761")]), _vm._v(" / "), _c('code', [_vm._v("Closes #2761")]), _vm._v(" 关联 issue。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Push fork")]), _vm._v("："), _c('code', [_vm._v("git push -u fork HEAD")]), _vm._v("（推上游会 403）。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("开 PR")]), _vm._v("：head = "), _c('code', [_vm._v("hezihua:codex/...")]), _vm._v("，base = "), _c('code', [_vm._v("huangruiteng:main")]), _vm._v(" → "), _c('a', {
    attrs: {
      "href": "https://github.com/huangruiteng/loopx/pull/2763",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("#2763"), _c('OutboundLink')], 1), _vm._v("。")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、怎么开-pr"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、怎么开-pr"
    }
  }, [_vm._v("#")]), _vm._v(" 三、怎么开 PR")]), _vm._v(" "), _c('p', [_vm._v("网页和 "), _c('code', [_vm._v("gh")]), _vm._v(" "), _c('strong', [_vm._v("二选一")]), _vm._v("即可，效果相同：都是向上游开一条 PR。任选一种完成即可，不必两种都做。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-1-网页"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-1-网页"
    }
  }, [_vm._v("#")]), _vm._v(" 3.1 网页")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("本地 commit 后推到 fork："), _c('div', {
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
  }, [_vm._v("git")]), _vm._v(" remote "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" fork https://github.com/"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("用户名"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v("/loopx.git   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 仅首次")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" push "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" fork HEAD\n")])])])]), _vm._v(" "), _c('li', [_vm._v("打开 compare 链接（或 fork 页的 "), _c('strong', [_vm._v("Compare & pull request")]), _vm._v("）："), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("https://github.com/huangruiteng/loopx/compare/main...&lt;用户名>:loopx:&lt;分支名>?expand=1\n")])])])]), _vm._v(" "), _c('li', [_vm._v("确认：\n"), _c('ul', [_c('li', [_c('strong', [_vm._v("base")]), _vm._v("："), _c('code', [_vm._v("huangruiteng/loopx")]), _vm._v(" 的 "), _c('code', [_vm._v("main")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("compare")]), _vm._v("：你的 fork 分支")])])]), _vm._v(" "), _c('li', [_vm._v("填写标题与正文后点 "), _c('strong', [_vm._v("Create pull request")]), _vm._v("。")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-2-命令行"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-2-命令行"
    }
  }, [_vm._v("#")]), _vm._v(" 3.2 命令行")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("gh "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("pr")]), _vm._v(" create "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--repo")]), _vm._v(" huangruiteng/loopx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--head")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("用户名"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(":"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("分支名"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--base")]), _vm._v(" main "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--title")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"简短标题\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--body")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
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
      "class": "token function"
    }
  }, [_vm._v("cat")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<<")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'EOF'\n## Summary\n- 改了什么、为什么\n\nFixes #<issue号>\n\n## Test plan\n- [ ] 跑了哪些检查\n\nEOF")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v(")")])]), _vm._v("\"")]), _vm._v("\n")])])]), _c('p', [_vm._v("需要先 "), _c('code', [_vm._v("gh auth login")]), _vm._v("（或可用 token）。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-3-pr-正文建议包含"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-3-pr-正文建议包含"
    }
  }, [_vm._v("#")]), _vm._v(" 3.3 PR 正文建议包含")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("Summary")]), _vm._v("：改了什么、对应哪个 issue")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Test plan")]), _vm._v("：验证命令与结果")]), _vm._v(" "), _c('li', [_vm._v("用 "), _c('code', [_vm._v("Fixes #N")]), _vm._v(" 便于合并后自动关 issue")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、开完之后"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、开完之后"
    }
  }, [_vm._v("#")]), _vm._v(" 四、开完之后")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("PR Open → CI / Review →（同分支继续改并 push）→ Maintainer Merge → 进入上游 main\n")])])]), _c('ul', [_c('li', [_vm._v("Review 要改代码：在"), _c('strong', [_vm._v("同一分支")]), _vm._v("继续 commit，再 "), _c('code', [_vm._v("git push fork HEAD")]), _vm._v("；PR 会自动更新。")]), _vm._v(" "), _c('li', [_vm._v("合并后可选同步自己的 fork "), _c('code', [_vm._v("main")]), _vm._v("："), _c('div', {
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
  }, [_vm._v("git")]), _vm._v(" fetch origin\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" checkout main\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" merge origin/main\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" push fork main\n")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、可复用命令"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、可复用命令"
    }
  }, [_vm._v("#")]), _vm._v(" 五、可复用命令")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 从最新 main 开主题分支（示例）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" fetch origin\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" worktree "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-b")]), _vm._v(" codex/your-topic "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v("/loopx-wt/your-topic origin/main\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 提交（按路径 stage，避免 git add .）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("明确路径"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" commit "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-m")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\""), _c('span', {
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
      "class": "token function"
    }
  }, [_vm._v("cat")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<<")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'EOF'\ndocs: your concise why\n\nEOF")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v(")")])]), _vm._v("\"")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 推到 fork")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" push "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" fork HEAD\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 开向上游的 PR（见上文 gh pr create）")]), _vm._v("\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "六、注意"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、注意"
    }
  }, [_vm._v("#")]), _vm._v(" 六、注意")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("PR 必须开向"), _c('strong', [_vm._v("上游仓库")]), _vm._v("，不是只在 fork 里合到自己的 "), _c('code', [_vm._v("main")]), _vm._v("。")]), _vm._v(" "), _c('li', [_vm._v("一个 PR 一个主题；文档 / 行为 / 大重构尽量拆开。")]), _vm._v(" "), _c('li', [_vm._v("不要提交私有状态、本机绝对路径、credentials；LoopX 可用 "), _c('code', [_vm._v("loopx check")]), _vm._v(" 扫边界。")]), _vm._v(" "), _c('li', [_vm._v("没有上游写权限时，合并只能等 maintainer。")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "七、参考"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、参考"
    }
  }, [_vm._v("#")]), _vm._v(" 七、参考")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("本次 PR：https://github.com/huangruiteng/loopx/pull/2763")]), _vm._v(" "), _c('li', [_vm._v("对应 issue：https://github.com/huangruiteng/loopx/issues/2761")]), _vm._v(" "), _c('li', [_vm._v("上游仓库：https://github.com/huangruiteng/loopx")])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/问题解决/pr.md?vue&type=template&id=54c20214

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/问题解决/pr.md

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

/* harmony default export */ var pr = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);