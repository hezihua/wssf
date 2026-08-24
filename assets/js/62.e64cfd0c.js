(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/关于副业/stripe  supabase key.md?vue&type=template&id=e79215ba
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "出海项目环境变量配置指南"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#出海项目环境变量配置指南"
    }
  }, [_vm._v("#")]), _vm._v(" 出海项目环境变量配置指南")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📋-环境变量清单"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📋-环境变量清单"
    }
  }, [_vm._v("#")]), _vm._v(" 📋 环境变量清单")]), _vm._v(" "), _c('p', [_vm._v("本项目需要配置以下环境变量：")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "必需变量"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#必需变量"
    }
  }, [_vm._v("#")]), _vm._v(" 必需变量")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("变量名")]), _vm._v(" "), _c('th', [_vm._v("用途")]), _vm._v(" "), _c('th', [_vm._v("环境")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_SUPABASE_URL")])]), _vm._v(" "), _c('td', [_vm._v("Supabase 项目 URL")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_SUPABASE_ANON_KEY")])]), _vm._v(" "), _c('td', [_vm._v("Supabase 匿名公钥")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("SUPABASE_SERVICE_ROLE_KEY")])]), _vm._v(" "), _c('td', [_vm._v("Supabase 服务端密钥")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY")])]), _vm._v(" "), _c('td', [_vm._v("Stripe 公钥")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("STRIPE_SECRET_KEY")])]), _vm._v(" "), _c('td', [_vm._v("Stripe 密钥")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_SITE_URL")])]), _vm._v(" "), _c('td', [_vm._v("网站地址")]), _vm._v(" "), _c('td', [_vm._v("所有")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "可选变量"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#可选变量"
    }
  }, [_vm._v("#")]), _vm._v(" 可选变量")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("变量名")]), _vm._v(" "), _c('th', [_vm._v("用途")]), _vm._v(" "), _c('th', [_vm._v("环境")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_PADDLE_VENDOR_ID")])]), _vm._v(" "), _c('td', [_vm._v("Paddle 商户 ID")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_PADDLE_SANDBOX")])]), _vm._v(" "), _c('td', [_vm._v("Paddle 沙箱模式")]), _vm._v(" "), _c('td', [_vm._v("所有")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_SANDBOX")])]), _vm._v(" "), _c('td', [_vm._v("应用沙箱模式")]), _vm._v(" "), _c('td', [_vm._v("所有")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔑-密钥获取方法"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔑-密钥获取方法"
    }
  }, [_vm._v("#")]), _vm._v(" 🔑 密钥获取方法")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-supabase-密钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-supabase-密钥"
    }
  }, [_vm._v("#")]), _vm._v(" 1. Supabase 密钥")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-1-登录-supabase-dashboard"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-登录-supabase-dashboard"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：登录 Supabase Dashboard")]), _vm._v(" "), _c('p', [_vm._v("访问：https://supabase.com/dashboard")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-2-选择项目"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-选择项目"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：选择项目")]), _vm._v(" "), _c('p', [_vm._v("选择你的项目或创建新项目")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-3-获取-api-密钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-获取-api-密钥"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：获取 API 密钥")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("点击左侧菜单 "), _c('strong', [_vm._v("Settings")]), _vm._v("（设置）")]), _vm._v(" "), _c('li', [_vm._v("选择 "), _c('strong', [_vm._v("API key")]), _vm._v(" 子菜单")]), _vm._v(" "), _c('li', [_vm._v("在 "), _c('strong', [_vm._v("Publishable and secret API keys")]), _vm._v(" 部分找到以下信息：\n"), _c('strong', [_vm._v("获取的密钥：")])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# anon public (公开密钥)")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_ANON_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# service_role (服务端密钥) ⚠️ 敏感信息")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("SUPABASE_SERVICE_ROLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n")])])]), _c('ol', [_c('li', [_vm._v("点击左侧菜单 "), _c('strong', [_vm._v("Settings")]), _vm._v("（设置）")]), _vm._v(" "), _c('li', [_vm._v("选择 "), _c('strong', [_vm._v("data API")]), _vm._v(" 子菜单")]), _vm._v(" "), _c('li', [_vm._v("在 "), _c('strong', [_vm._v("Project URL")]), _vm._v(" 部分找到以下信息：\n"), _c('strong', [_vm._v("获取的密钥：")])])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Project URL")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_URL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("https://your-project.supabase.co\n")])])]), _c('p', [_c('strong', [_vm._v("注意事项：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("⚠️ "), _c('code', [_vm._v("SUPABASE_SERVICE_ROLE_KEY")]), _vm._v(" 拥有超级管理员权限，绕过所有 RLS 策略")]), _vm._v(" "), _c('li', [_vm._v("⚠️ 永远不要在客户端代码中使用 "), _c('code', [_vm._v("SERVICE_ROLE_KEY")])]), _vm._v(" "), _c('li', [_vm._v("⚠️ 不要提交到 Git 仓库")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-4-配置-oauth-重定向-url-如果使用-oauth-登录"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-4-配置-oauth-重定向-url-如果使用-oauth-登录"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 4：配置 OAuth 重定向 URL（如果使用 OAuth 登录）")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("左侧菜单："), _c('strong', [_vm._v("Authentication")]), _vm._v(" → "), _c('strong', [_vm._v("URL Configuration")])]), _vm._v(" "), _c('li', [_vm._v("在 "), _c('strong', [_vm._v("Redirect URLs")]), _vm._v(" 中添加："), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("http://localhost:3000/**\nhttps://your-domain.com/**\nhttps://*.vercel.app/**\n")])])])]), _vm._v(" "), _c('li', [_vm._v("设置 "), _c('strong', [_vm._v("Site URL")]), _vm._v("："), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("https://your-domain.com\n")])])])]), _vm._v(" "), _c('li', [_vm._v("点击 "), _c('strong', [_vm._v("Save")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-stripe-密钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-stripe-密钥"
    }
  }, [_vm._v("#")]), _vm._v(" 2. Stripe 密钥")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-1-登录-stripe-dashboard"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-登录-stripe-dashboard"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：登录 Stripe Dashboard")]), _vm._v(" "), _c('p', [_vm._v("访问：https://dashboard.stripe.com")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-2-创建账户"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-创建账户"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：创建账户")]), _vm._v(" "), _c('p', [_vm._v("如果没有账户，先注册并完成账户设置")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-3-获取-api-密钥-2"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-获取-api-密钥-2"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：获取 API 密钥")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("点击左侧菜单 "), _c('strong', [_vm._v("Developers")]), _vm._v("（开发者）")]), _vm._v(" "), _c('li', [_vm._v("选择 "), _c('strong', [_vm._v("API keys")]), _vm._v("（API 密钥）")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-4-选择环境"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-4-选择环境"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 4：选择环境")]), _vm._v(" "), _c('p', [_vm._v("Stripe 提供两种环境：")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("测试环境（Test mode）：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("用于开发和测试")]), _vm._v(" "), _c('li', [_vm._v("不会产生真实交易")]), _vm._v(" "), _c('li', [_vm._v("密钥以 "), _c('code', [_vm._v("pk_test_")]), _vm._v(" 和 "), _c('code', [_vm._v("sk_test_")]), _vm._v(" 开头")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("生产环境（Live mode）：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("用于正式上线")]), _vm._v(" "), _c('li', [_vm._v("会产生真实交易")]), _vm._v(" "), _c('li', [_vm._v("密钥以 "), _c('code', [_vm._v("pk_live_")]), _vm._v(" 和 "), _c('code', [_vm._v("sk_live_")]), _vm._v(" 开头")]), _vm._v(" "), _c('li', [_vm._v("需要完成账户激活流程")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-5-复制密钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-5-复制密钥"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 5：复制密钥")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# Publishable key (公开密钥)")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("pk_test_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 或生产环境")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("pk_live_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Secret key (密钥) ⚠️ 敏感信息")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("STRIPE_SECRET_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("sk_test_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 或生产环境")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("STRIPE_SECRET_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("sk_live_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n")])])]), _c('p', [_c('strong', [_vm._v("注意事项：")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 开发阶段使用测试密钥（"), _c('code', [_vm._v("test")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("✅ 生产环境使用生产密钥（"), _c('code', [_vm._v("live")]), _vm._v("）")]), _vm._v(" "), _c('li', [_vm._v("⚠️ "), _c('code', [_vm._v("Secret key")]), _vm._v(" 只能在服务端使用")]), _vm._v(" "), _c('li', [_vm._v("⚠️ 切换到生产环境前需要激活 Stripe 账户")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-paddle-密钥-可选"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-paddle-密钥-可选"
    }
  }, [_vm._v("#")]), _vm._v(" 3. Paddle 密钥（可选）")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-1-登录-paddle-dashboard"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-1-登录-paddle-dashboard"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 1：登录 Paddle Dashboard")]), _vm._v(" "), _c('p', [_vm._v("访问：https://vendors.paddle.com/")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-2-注册账户"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-2-注册账户"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 2：注册账户")]), _vm._v(" "), _c('p', [_vm._v("如果是新用户，完成注册流程")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "步骤-3-获取-vendor-id"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-3-获取-vendor-id"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 3：获取 Vendor ID")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("登录后，点击左侧 "), _c('strong', [_vm._v("Developer Tools")]), _vm._v("（开发者工具）")]), _vm._v(" "), _c('li', [_vm._v("选择 "), _c('strong', [_vm._v("Authentication")]), _vm._v("（认证）")]), _vm._v(" "), _c('li', [_vm._v("找到 "), _c('strong', [_vm._v("Vendor ID")])])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_VENDOR_ID")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12345")]), _vm._v("\n")])])]), _c('h4', {
    attrs: {
      "id": "步骤-4-配置沙箱模式"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#步骤-4-配置沙箱模式"
    }
  }, [_vm._v("#")]), _vm._v(" 步骤 4：配置沙箱模式")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("开发/测试环境：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("true\n")])])]), _c('p', [_c('strong', [_vm._v("生产环境：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("false\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📝-环境变量配置示例"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📝-环境变量配置示例"
    }
  }, [_vm._v("#")]), _vm._v(" 📝 环境变量配置示例")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "本地开发环境-env-local"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#本地开发环境-env-local"
    }
  }, [_vm._v("#")]), _vm._v(" 本地开发环境（"), _c('code', [_vm._v(".env.local")]), _vm._v("）")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# Supabase 配置")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_URL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("https://your-project.supabase.co\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_ANON_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("SUPABASE_SERVICE_ROLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Stripe 配置（使用测试密钥）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("pk_test_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("STRIPE_SECRET_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("sk_test_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Paddle 配置（可选）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_VENDOR_ID")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12345")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("true\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 网站配置")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SITE_URL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("http://localhost:3000\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("true\n")])])]), _c('h3', {
    attrs: {
      "id": "生产环境-vercel"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#生产环境-vercel"
    }
  }, [_vm._v("#")]), _vm._v(" 生产环境（Vercel）")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# Supabase 配置（与本地相同）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_URL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("https://your-project.supabase.co\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SUPABASE_ANON_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("SUPABASE_SERVICE_ROLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Stripe 配置（使用生产密钥）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("pk_live_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("STRIPE_SECRET_KEY")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("sk_live_51xxx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("..")]), _vm._v(".\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Paddle 配置（可选）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_VENDOR_ID")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12345")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_PADDLE_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("false\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 网站配置（⚠️ 改为实际域名）")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SITE_URL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("https://your-domain.com\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("NEXT_PUBLIC_SANDBOX")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("false\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🚀-vercel-部署配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🚀-vercel-部署配置"
    }
  }, [_vm._v("#")]), _vm._v(" 🚀 Vercel 部署配置")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "方法-1-通过-dashboard-配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#方法-1-通过-dashboard-配置"
    }
  }, [_vm._v("#")]), _vm._v(" 方法 1：通过 Dashboard 配置")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("访问 Vercel 项目：https://vercel.com/dashboard")]), _vm._v(" "), _c('li', [_vm._v("选择项目 → "), _c('strong', [_vm._v("Settings")]), _vm._v(" → "), _c('strong', [_vm._v("Environment Variables")])]), _vm._v(" "), _c('li', [_vm._v("逐个添加上述环境变量")]), _vm._v(" "), _c('li', [_vm._v("选择环境："), _c('strong', [_vm._v("Production")])]), _vm._v(" "), _c('li', [_vm._v("点击 "), _c('strong', [_vm._v("Save")])]), _vm._v(" "), _c('li', [_vm._v("重新部署项目")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "方法-2-通过-vercel-cli-配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#方法-2-通过-vercel-cli-配置"
    }
  }, [_vm._v("#")]), _vm._v(" 方法 2：通过 Vercel CLI 配置")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 安装 Vercel CLI")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" i "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-g")]), _vm._v(" vercel\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 登录")]), _vm._v("\nvercel login\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 添加环境变量")]), _vm._v("\nvercel "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("env")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" NEXT_PUBLIC_SUPABASE_URL production\nvercel "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("env")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" NEXT_PUBLIC_SUPABASE_ANON_KEY production\nvercel "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("env")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" SUPABASE_SERVICE_ROLE_KEY production\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# ... 继续添加其他变量")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 部署")]), _vm._v("\nvercel "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--prod")]), _vm._v("\n")])])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🔒-安全最佳实践"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🔒-安全最佳实践"
    }
  }, [_vm._v("#")]), _vm._v(" 🔒 安全最佳实践")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-保护敏感信息"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-保护敏感信息"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 保护敏感信息")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("永远不要提交到 Git：")])]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v(".env.local")]), _vm._v(" - 已在 "), _c('code', [_vm._v(".gitignore")]), _vm._v(" 中")]), _vm._v(" "), _c('li', [_vm._v("任何包含真实密钥的文件")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("可以提交的文件：")])]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v(".env.example")]), _vm._v(" - 只包含占位符")]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".env.production")]), _vm._v(" - 只包含占位符")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-密钥权限分级"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-密钥权限分级"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 密钥权限分级")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("密钥类型")]), _vm._v(" "), _c('th', [_vm._v("使用位置")]), _vm._v(" "), _c('th', [_vm._v("权限级别")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("NEXT_PUBLIC_*")])]), _vm._v(" "), _c('td', [_vm._v("客户端 + 服务端")]), _vm._v(" "), _c('td', [_vm._v("公开")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("SUPABASE_SERVICE_ROLE_KEY")])]), _vm._v(" "), _c('td', [_vm._v("仅服务端")]), _vm._v(" "), _c('td', [_vm._v("超级管理员 ⚠️")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("STRIPE_SECRET_KEY")])]), _vm._v(" "), _c('td', [_vm._v("仅服务端")]), _vm._v(" "), _c('td', [_vm._v("管理员 ⚠️")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-定期轮换密钥"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-定期轮换密钥"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 定期轮换密钥")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 定期更新生产环境密钥")]), _vm._v(" "), _c('li', [_vm._v("✅ 如果怀疑密钥泄露，立即重新生成")]), _vm._v(" "), _c('li', [_vm._v("✅ 使用环境变量而不是硬编码")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-测试与生产隔离"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-测试与生产隔离"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 测试与生产隔离")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("✅ 本地开发使用测试密钥")]), _vm._v(" "), _c('li', [_vm._v("✅ 生产环境使用生产密钥")]), _vm._v(" "), _c('li', [_vm._v("✅ 不要在生产环境使用测试密钥")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "📚-相关链接"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#📚-相关链接"
    }
  }, [_vm._v("#")]), _vm._v(" 📚 相关链接")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "官方文档"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#官方文档"
    }
  }, [_vm._v("#")]), _vm._v(" 官方文档")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://supabase.com/docs",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Supabase 文档"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://stripe.com/docs",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Stripe 文档"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://developer.paddle.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Paddle 文档"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://vercel.com/docs/environment-variables",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Vercel 环境变量文档"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://nextjs.org/docs/basic-features/environment-variables",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Next.js 环境变量文档"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "快速链接"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#快速链接"
    }
  }, [_vm._v("#")]), _vm._v(" 快速链接")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://supabase.com/dashboard",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Supabase Dashboard"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://dashboard.stripe.com",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Stripe Dashboard"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://vendors.paddle.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Paddle Dashboard"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://vercel.com/dashboard",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Vercel Dashboard"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "❓-常见问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#❓-常见问题"
    }
  }, [_vm._v("#")]), _vm._v(" ❓ 常见问题")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "q-本地可以登录-部署后不行"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#q-本地可以登录-部署后不行"
    }
  }, [_vm._v("#")]), _vm._v(" Q: 本地可以登录，部署后不行？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("A:")]), _vm._v(" 检查 Supabase 的 OAuth 重定向 URL 配置，需要添加生产域名。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "q-stripe-支付失败"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#q-stripe-支付失败"
    }
  }, [_vm._v("#")]), _vm._v(" Q: Stripe 支付失败？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("A:")]), _vm._v(" 确认使用了正确环境的密钥（测试/生产），检查密钥是否有效。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "q-环境变量修改后没有生效"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#q-环境变量修改后没有生效"
    }
  }, [_vm._v("#")]), _vm._v(" Q: 环境变量修改后没有生效？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("A:")]), _vm._v(" Vercel 需要重新部署才能应用新的环境变量，点击 Redeploy。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "q-如何区分测试和生产环境"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#q-如何区分测试和生产环境"
    }
  }, [_vm._v("#")]), _vm._v(" Q: 如何区分测试和生产环境？")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("A:")]), _vm._v(" 使用 "), _c('code', [_vm._v("NEXT_PUBLIC_SANDBOX")]), _vm._v(" 变量，本地设为 "), _c('code', [_vm._v("true")]), _vm._v("，生产设为 "), _c('code', [_vm._v("false")]), _vm._v("。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "🎉-完成检查清单"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#🎉-完成检查清单"
    }
  }, [_vm._v("#")]), _vm._v(" 🎉 完成检查清单")]), _vm._v(" "), _c('p', [_vm._v("部署前确认：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("[ ] 所有必需的环境变量都已配置")]), _vm._v(" "), _c('li', [_vm._v("[ ] Supabase OAuth 重定向 URL 已添加")]), _vm._v(" "), _c('li', [_vm._v("[ ] Stripe 使用了正确环境的密钥")]), _vm._v(" "), _c('li', [_vm._v("[ ] 生产环境的 "), _c('code', [_vm._v("NEXT_PUBLIC_SITE_URL")]), _vm._v(" 是实际域名")]), _vm._v(" "), _c('li', [_vm._v("[ ] 生产环境的 "), _c('code', [_vm._v("NEXT_PUBLIC_SANDBOX")]), _vm._v(" 设为 "), _c('code', [_vm._v("false")])]), _vm._v(" "), _c('li', [_vm._v("[ ] "), _c('code', [_vm._v(".env.local")]), _vm._v(" 没有提交到 Git")]), _vm._v(" "), _c('li', [_vm._v("[ ] Vercel 环境变量已保存并重新部署")])]), _vm._v(" "), _c('p', [_vm._v("祝部署顺利！🚀")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/关于副业/stripe  supabase key.md?vue&type=template&id=e79215ba

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/关于副业/stripe  supabase key.md

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

/* harmony default export */ var stripe_supabase_key = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);