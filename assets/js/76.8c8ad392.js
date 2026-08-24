(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/问题解决/1.md?vue&type=template&id=bbcbd0f4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "github-克隆连接问题解决方案"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#github-克隆连接问题解决方案"
    }
  }, [_vm._v("#")]), _vm._v(" GitHub 克隆连接问题解决方案")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "问题描述"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题描述"
    }
  }, [_vm._v("#")]), _vm._v(" 问题描述")]), _vm._v(" "), _c('p', [_vm._v("在 WSL2 环境中尝试克隆 GitHub 仓库时遇到连接失败：")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("git")]), _vm._v(" clone https://github.com/example-org/example-repository.git\nCloning into "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'example-repository'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\nfatal: unable to access "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'https://github.com/example-org/example-repository.git/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v(":")]), _vm._v(" Failed to connect to github.com port "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("443")]), _vm._v(" after "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("21124")]), _vm._v(" ms: Could not connect to server\n")])])]), _c('h2', {
    attrs: {
      "id": "问题诊断过程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#问题诊断过程"
    }
  }, [_vm._v("#")]), _vm._v(" 问题诊断过程")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-网络连接基础检查"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-网络连接基础检查"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 网络连接基础检查")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 测试 GitHub 连接")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ping")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _vm._v(" github.com\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 结果：100% packet loss")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 测试基础网络连接")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ping")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("8.8")]), _vm._v(".8.8\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 结果：成功，说明基础网络正常")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("分析：")]), _vm._v(" 能够连接到外网，但无法访问 GitHub，可能是 DNS 解析或网络访问限制问题。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-dns-配置检查"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-dns-配置检查"
    }
  }, [_vm._v("#")]), _vm._v(" 2. DNS 配置检查")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 检查当前 DNS 配置")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("cat")]), _vm._v(" /etc/resolv.conf\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 显示：nameserver 10.255.255.254 (WSL2 默认 DNS)")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("问题发现：")]), _vm._v(" WSL2 的默认 DNS 服务器可能无法正确解析 GitHub 域名。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "解决步骤"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#解决步骤"
    }
  }, [_vm._v("#")]), _vm._v(" 解决步骤")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "步骤-1-更换-dns-服务器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-更换-dns-服务器"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：更换 DNS 服务器")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 备份原配置并更换为 Google DNS")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"nameserver 8.8.8.8\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("tee")]), _vm._v(" /etc/resolv.conf.backup\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("cp")]), _vm._v(" /etc/resolv.conf.backup /etc/resolv.conf\n")])])]), _c('p', [_c('strong', [_vm._v("原理：")]), _vm._v(" 使用更稳定的公共 DNS 服务器（Google DNS 8.8.8.8）来改善域名解析。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "步骤-2-添加-github-ip-映射"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-添加-github-ip-映射"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：添加 GitHub IP 映射")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 添加 GitHub 主站 IP")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"140.82.112.3 github.com\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("tee")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-a")]), _vm._v(" /etc/hosts\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 添加 GitHub API IP")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"140.82.114.3 api.github.com\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("tee")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-a")]), _vm._v(" /etc/hosts\n")])])]), _c('p', [_c('strong', [_vm._v("原理：")]), _vm._v(" 直接在 hosts 文件中指定 GitHub 的 IP 地址，绕过 DNS 解析过程，避免域名解析失败。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "步骤-3-验证连接"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-验证连接"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：验证连接")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 测试新配置")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ping")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v(" github.com\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 结果：成功连接到 140.82.112.3")]), _vm._v("\n")])])]), _c('h3', {
    attrs: {
      "id": "步骤-4-优化-git-配置并克隆"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-4-优化-git-配置并克隆"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 4：优化 Git 配置并克隆")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 配置 Git 超时设置（避免慢网络下的超时）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" config "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--global")]), _vm._v(" http.lowSpeedLimit "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" config "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--global")]), _vm._v(" http.lowSpeedTime "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("999999")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 使用浅克隆减少数据传输量")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" clone "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--depth")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v(" https://github.com/example-org/example-repository.git\n")])])]), _c('p', [_c('strong', [_vm._v("结果：")]), _vm._v(" 克隆成功！")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "关键解决方案"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#关键解决方案"
    }
  }, [_vm._v("#")]), _vm._v(" 关键解决方案")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "主要解决方法"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#主要解决方法"
    }
  }, [_vm._v("#")]), _vm._v(" 主要解决方法")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("DNS 服务器更换")]), _vm._v(" - 解决域名解析问题")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Hosts 文件映射")]), _vm._v(" - 绕过 DNS 解析直接指定 IP")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("浅克隆")]), _vm._v(" - 减少网络传输量，提高成功率")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "浅克隆-vs-完整克隆"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#浅克隆-vs-完整克隆"
    }
  }, [_vm._v("#")]), _vm._v(" 浅克隆 vs 完整克隆")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("特性")]), _vm._v(" "), _c('th', [_vm._v("浅克隆 ("), _c('code', [_vm._v("--depth 1")]), _vm._v(")")]), _vm._v(" "), _c('th', [_vm._v("完整克隆")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v("下载速度")])]), _vm._v(" "), _c('td', [_vm._v("快速")]), _vm._v(" "), _c('td', [_vm._v("较慢")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("磁盘空间")])]), _vm._v(" "), _c('td', [_vm._v("占用少")]), _vm._v(" "), _c('td', [_vm._v("占用多")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("历史记录")])]), _vm._v(" "), _c('td', [_vm._v("只有最新提交")]), _vm._v(" "), _c('td', [_vm._v("完整历史")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("分支信息")])]), _vm._v(" "), _c('td', [_vm._v("有限")]), _vm._v(" "), _c('td', [_vm._v("完整")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("网络要求")])]), _vm._v(" "), _c('td', [_vm._v("低")]), _vm._v(" "), _c('td', [_vm._v("高")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("适用场景")])]), _vm._v(" "), _c('td', [_vm._v("快速获取最新代码")]), _vm._v(" "), _c('td', [_vm._v("需要完整历史")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "浅克隆的限制"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#浅克隆的限制"
    }
  }, [_vm._v("#")]), _vm._v(" 浅克隆的限制")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 浅克隆后查看历史")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" log "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--oneline")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 只显示：3a66a00 (grafted, HEAD -> main, origin/main, origin/HEAD) print pid for debugging")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 如需完整历史，可以后续获取")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" fetch "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--unshallow")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 转换为完整仓库")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "根本原因分析"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#根本原因分析"
    }
  }, [_vm._v("#")]), _vm._v(" 根本原因分析")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "wsl2-网络问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#wsl2-网络问题"
    }
  }, [_vm._v("#")]), _vm._v(" WSL2 网络问题")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("DNS 解析问题")]), _vm._v(" - WSL2 默认 DNS 可能不稳定")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("网络代理/防火墙")]), _vm._v(" - 某些网络环境可能限制 GitHub 访问")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("IPv6/IPv4 配置")]), _vm._v(" - 可能存在 IP 协议版本兼容问题")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "为什么浅克隆成功了"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#为什么浅克隆成功了"
    }
  }, [_vm._v("#")]), _vm._v(" 为什么浅克隆成功了？")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("数据量小")]), _vm._v(" - 只下载最新快照，减少网络传输时间")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("连接时间短")]), _vm._v(" - 降低了连接中断的概率")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("重试机制")]), _vm._v(" - Git 对小文件传输有更好的重试处理")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "预防措施"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#预防措施"
    }
  }, [_vm._v("#")]), _vm._v(" 预防措施")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "长期解决方案"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#长期解决方案"
    }
  }, [_vm._v("#")]), _vm._v(" 长期解决方案")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_c('strong', [_vm._v("配置稳定的 DNS")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 在 /etc/wsl.conf 中禁用自动 DNS 生成")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("network"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\ngenerateResolvConf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("false")]), _vm._v("\n")])])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("使用 SSH 替代 HTTPS")]), _vm._v("（如果有 SSH 密钥）")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("git")]), _vm._v(" clone git@github.com:用户名/仓库名.git\n")])])])]), _vm._v(" "), _c('li', [_c('p', [_c('strong', [_vm._v("配置 Git 代理")]), _vm._v("（如果在代理环境中）")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("git")]), _vm._v(" config "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--global")]), _vm._v(" http.proxy http://代理地址:端口\n")])])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("通过组合使用 DNS 更换、hosts 映射和浅克隆技术，成功解决了 WSL2 环境下的 GitHub 连接问题。关键在于：")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("诊断准确")]), _vm._v(" - 确定是 DNS 解析而非网络连通性问题")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("分步解决")]), _vm._v(" - 逐步排除障碍（DNS → IP映射 → 传输优化）")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("适应性方案")]), _vm._v(" - 浅克隆作为网络受限环境下的有效替代方案")])]), _vm._v(" "), _c('p', [_vm._v("这个解决方案适用于大多数 WSL2 环境下的 GitHub 访问问题。")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/问题解决/1.md?vue&type=template&id=bbcbd0f4

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/问题解决/1.md

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