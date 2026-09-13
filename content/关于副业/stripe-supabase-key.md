---
title: stripe  supabase key
author: jimmy
date: '2025-11-30'
---

# 出海项目环境变量配置指南

## 📋 环境变量清单

本项目需要配置以下环境变量：

### 必需变量

| 变量名 | 用途 | 环境 |
|--------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 项目 URL | 所有 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 匿名公钥 | 所有 |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase 服务端密钥 | 所有 |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe 公钥 | 所有 |
| `STRIPE_SECRET_KEY` | Stripe 密钥 | 所有 |
| `NEXT_PUBLIC_SITE_URL` | 网站地址 | 所有 |

### 可选变量

| 变量名 | 用途 | 环境 |
|--------|------|------|
| `NEXT_PUBLIC_PADDLE_VENDOR_ID` | Paddle 商户 ID | 所有 |
| `NEXT_PUBLIC_PADDLE_SANDBOX` | Paddle 沙箱模式 | 所有 |
| `NEXT_PUBLIC_SANDBOX` | 应用沙箱模式 | 所有 |

---

## 🔑 密钥获取方法

### 1. Supabase 密钥

#### 步骤 1：登录 Supabase Dashboard
访问：https://supabase.com/dashboard

#### 步骤 2：选择项目
选择你的项目或创建新项目

#### 步骤 3：获取 API 密钥

1. 点击左侧菜单 **Settings**（设置）
2. 选择 **API key** 子菜单
3. 在 **Publishable and secret API keys** 部分找到以下信息：
**获取的密钥：**

```bash
# anon public (公开密钥)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# service_role (服务端密钥) ⚠️ 敏感信息
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
1. 点击左侧菜单 **Settings**（设置）
2. 选择 **data API** 子菜单
3. 在 **Project URL** 部分找到以下信息：
**获取的密钥：**
```bash

# Project URL
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
```

**注意事项：**
- ⚠️ `SUPABASE_SERVICE_ROLE_KEY` 拥有超级管理员权限，绕过所有 RLS 策略
- ⚠️ 永远不要在客户端代码中使用 `SERVICE_ROLE_KEY`
- ⚠️ 不要提交到 Git 仓库

#### 步骤 4：配置 OAuth 重定向 URL（如果使用 OAuth 登录）
1. 左侧菜单：**Authentication** → **URL Configuration**
2. 在 **Redirect URLs** 中添加：
   ```
   http://localhost:3000/**
   https://your-domain.com/**
   https://*.vercel.app/**
   ```
3. 设置 **Site URL**：
   ```
   https://your-domain.com
   ```
4. 点击 **Save**

---

### 2. Stripe 密钥

#### 步骤 1：登录 Stripe Dashboard
访问：https://dashboard.stripe.com

#### 步骤 2：创建账户
如果没有账户，先注册并完成账户设置

#### 步骤 3：获取 API 密钥
1. 点击左侧菜单 **Developers**（开发者）
2. 选择 **API keys**（API 密钥）

#### 步骤 4：选择环境
Stripe 提供两种环境：

**测试环境（Test mode）：**
- 用于开发和测试
- 不会产生真实交易
- 密钥以 `pk_test_` 和 `sk_test_` 开头

**生产环境（Live mode）：**
- 用于正式上线
- 会产生真实交易
- 密钥以 `pk_live_` 和 `sk_live_` 开头
- 需要完成账户激活流程

#### 步骤 5：复制密钥

```bash
# Publishable key (公开密钥)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxx...
# 或生产环境
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51xxx...

# Secret key (密钥) ⚠️ 敏感信息
STRIPE_SECRET_KEY=sk_test_51xxx...
# 或生产环境
STRIPE_SECRET_KEY=sk_live_51xxx...
```

**注意事项：**
- ✅ 开发阶段使用测试密钥（`test`）
- ✅ 生产环境使用生产密钥（`live`）
- ⚠️ `Secret key` 只能在服务端使用
- ⚠️ 切换到生产环境前需要激活 Stripe 账户

---

### 3. Paddle 密钥（可选）

#### 步骤 1：登录 Paddle Dashboard
访问：https://vendors.paddle.com/

#### 步骤 2：注册账户
如果是新用户，完成注册流程

#### 步骤 3：获取 Vendor ID
1. 登录后，点击左侧 **Developer Tools**（开发者工具）
2. 选择 **Authentication**（认证）
3. 找到 **Vendor ID**

```bash
NEXT_PUBLIC_PADDLE_VENDOR_ID=12345
```

#### 步骤 4：配置沙箱模式

**开发/测试环境：**
```bash
NEXT_PUBLIC_PADDLE_SANDBOX=true
```

**生产环境：**
```bash
NEXT_PUBLIC_PADDLE_SANDBOX=false
```

---

## 📝 环境变量配置示例

### 本地开发环境（`.env.local`）

```bash
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe 配置（使用测试密钥）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxx...
STRIPE_SECRET_KEY=sk_test_51xxx...

# Paddle 配置（可选）
NEXT_PUBLIC_PADDLE_VENDOR_ID=12345
NEXT_PUBLIC_PADDLE_SANDBOX=true

# 网站配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANDBOX=true
```

### 生产环境（Vercel）

```bash
# Supabase 配置（与本地相同）
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe 配置（使用生产密钥）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51xxx...
STRIPE_SECRET_KEY=sk_live_51xxx...

# Paddle 配置（可选）
NEXT_PUBLIC_PADDLE_VENDOR_ID=12345
NEXT_PUBLIC_PADDLE_SANDBOX=false

# 网站配置（⚠️ 改为实际域名）
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SANDBOX=false
```

---

## 🚀 Vercel 部署配置

### 方法 1：通过 Dashboard 配置

1. 访问 Vercel 项目：https://vercel.com/dashboard
2. 选择项目 → **Settings** → **Environment Variables**
3. 逐个添加上述环境变量
4. 选择环境：**Production**
5. 点击 **Save**
6. 重新部署项目

### 方法 2：通过 Vercel CLI 配置

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 添加环境变量
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# ... 继续添加其他变量

# 部署
vercel --prod
```

---

## 🔒 安全最佳实践

### 1. 保护敏感信息

**永远不要提交到 Git：**
- `.env.local` - 已在 `.gitignore` 中
- 任何包含真实密钥的文件

**可以提交的文件：**
- `.env.example` - 只包含占位符
- `.env.production` - 只包含占位符

### 2. 密钥权限分级

| 密钥类型 | 使用位置 | 权限级别 |
|----------|----------|----------|
| `NEXT_PUBLIC_*` | 客户端 + 服务端 | 公开 |
| `SUPABASE_SERVICE_ROLE_KEY` | 仅服务端 | 超级管理员 ⚠️ |
| `STRIPE_SECRET_KEY` | 仅服务端 | 管理员 ⚠️ |

### 3. 定期轮换密钥

- ✅ 定期更新生产环境密钥
- ✅ 如果怀疑密钥泄露，立即重新生成
- ✅ 使用环境变量而不是硬编码

### 4. 测试与生产隔离

- ✅ 本地开发使用测试密钥
- ✅ 生产环境使用生产密钥
- ✅ 不要在生产环境使用测试密钥

---

## 📚 相关链接

### 官方文档

- [Supabase 文档](https://supabase.com/docs)
- [Stripe 文档](https://stripe.com/docs)
- [Paddle 文档](https://developer.paddle.com/)
- [Vercel 环境变量文档](https://vercel.com/docs/environment-variables)
- [Next.js 环境变量文档](https://nextjs.org/docs/basic-features/environment-variables)

### 快速链接

- [Supabase Dashboard](https://supabase.com/dashboard)
- [Stripe Dashboard](https://dashboard.stripe.com)
- [Paddle Dashboard](https://vendors.paddle.com/)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

## ❓ 常见问题

### Q: 本地可以登录，部署后不行？
**A:** 检查 Supabase 的 OAuth 重定向 URL 配置，需要添加生产域名。

### Q: Stripe 支付失败？
**A:** 确认使用了正确环境的密钥（测试/生产），检查密钥是否有效。

### Q: 环境变量修改后没有生效？
**A:** Vercel 需要重新部署才能应用新的环境变量，点击 Redeploy。

### Q: 如何区分测试和生产环境？
**A:** 使用 `NEXT_PUBLIC_SANDBOX` 变量，本地设为 `true`，生产设为 `false`。

---

## 🎉 完成检查清单

部署前确认：

- [ ] 所有必需的环境变量都已配置
- [ ] Supabase OAuth 重定向 URL 已添加
- [ ] Stripe 使用了正确环境的密钥
- [ ] 生产环境的 `NEXT_PUBLIC_SITE_URL` 是实际域名
- [ ] 生产环境的 `NEXT_PUBLIC_SANDBOX` 设为 `false`
- [ ] `.env.local` 没有提交到 Git
- [ ] Vercel 环境变量已保存并重新部署

祝部署顺利！🚀

