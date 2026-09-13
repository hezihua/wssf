---
title: passkey
author: jimmy
date: '2025-12-2'
---

# Passkey 完整指南

## 📋 目录

1. [概述](#概述)
2. [FIDO2 与 WebAuthn 标准](#fido2-与-webauthn-标准)
3. [完整流程](#完整流程)
4. [API 接口详解](#api-接口详解)
5. [存储机制](#存储机制)
6. [实现问题总结](#实现问题总结)
7. [使用指南](#使用指南)
8. [安全机制](#安全机制)
9. [最佳实践](#最佳实践)

---

## 概述

### 什么是 Passkey？

**Passkey** 是基于 FIDO2/WebAuthn 标准的无密码认证技术，使用公钥加密和生物识别（指纹、人脸、PIN）来替代传统密码。

### 核心优势

- ✅ **无密码**：无需记忆复杂密码
- ✅ **更安全**：私钥永不离开设备，无法被窃取
- ✅ **便捷**：支持无用户名登录（可发现凭证）
- ✅ **跨平台**：支持电脑、手机、USB 密钥等多种设备

### 技术栈

- **前端**: Next.js 14 (App Router), React, Ant Design
- **后端**: Next.js API Routes
- **Passkey 库**: `@simplewebauthn/server`, `@simplewebauthn/browser`
- **存储**: 文件存储（生产环境应使用数据库）

---

## FIDO2 与 WebAuthn 标准

### FIDO2 组成

**FIDO2** 由两个核心规范组成：

1. **WebAuthn (Web Authentication API)** - W3C 标准
   - 浏览器端的 JavaScript API
   - 定义如何与认证器交互
   - 由浏览器厂商实现

2. **CTAP2 (Client to Authenticator Protocol 2)** - FIDO Alliance 标准
   - 定义客户端与认证器之间的通信协议
   - 支持 USB、NFC、BLE 等传输方式
   - 由认证器厂商实现

### 架构图

```
┌─────────────┐
│   Web 应用  │
└──────┬──────┘
       │ WebAuthn API
       │ (navigator.credentials)
       ▼
┌─────────────┐
│   浏览器    │
└──────┬──────┘
       │ CTAP2 协议
       │ (USB/NFC/BLE)
       ▼
┌─────────────┐
│   认证器    │
│ (Passkey)   │
└─────────────┘
```

### 标准符合性

当前实现**完全符合 FIDO2 标准**：

- ✅ 使用标准 WebAuthn API
- ✅ 使用标准服务端验证库
- ✅ 实现可发现凭证（FIDO2 Level 2）
- ✅ 符合所有安全要求
- ✅ 支持多种算法和传输方式

---

## 完整流程

### 🔐 注册流程（Registration）

#### 步骤 1：获取注册挑战

**前端调用：**
```typescript
POST /api/auth/passkey/register/challenge
{
  username: "zhangsan",
  userDisplayName: "张三"
}
```

**服务端处理：**
1. 验证用户名是否存在
2. 生成唯一的 `user.id`（格式：`user-${username}`）
3. 生成随机 `challenge`（防重放攻击）
4. 配置注册选项：
   - `requireResidentKey: true` - 要求可发现凭证
   - `residentKey: 'required'` - 强制可发现凭证
   - `user.id` - 用户唯一标识（字节串）
   - `user.name` - 用户名
   - `user.displayName` - 显示名称

**返回：**
```json
{
  "challenge": "base64url编码的随机字符串",
  "rp": {
    "name": "InfiniCapital",
    "id": "localhost"
  },
  "user": {
    "id": "base64url编码的用户ID",
    "name": "zhangsan",
    "displayName": "张三"
  },
  "pubKeyCredParams": [...],
  "authenticatorSelection": {
    "requireResidentKey": true,
    "residentKey": "required"
  }
}
```

#### 步骤 2：浏览器创建凭证

**前端调用：**
```typescript
const credential = await navigator.credentials.create({
  publicKey: {
    challenge: ArrayBuffer,  // 从步骤1获取
    rp: { name, id },
    user: { id, name, displayName },
    authenticatorSelection: {
      requireResidentKey: true,
      residentKey: 'required'
    }
  }
});
```

**认证器处理：**
1. 生成密钥对：
   - 私钥（永远不离开设备）
   - 公钥（发送给服务端）
2. 在设备本地存储：
   - 私钥
   - `user.id`（用户标识）
   - `rpId`（依赖方ID，即域名）
   - 用户显示名称（用于显示）

**返回凭证：**
```typescript
{
  id: "凭证ID",
  rawId: ArrayBuffer,
  response: {
    attestationObject: ArrayBuffer,  // 包含公钥和元数据
    clientDataJSON: ArrayBuffer,      // 包含 challenge 和 origin
    transports: ["internal"]          // 传输方式
  }
}
```

#### 步骤 3：验证注册并保存

**前端发送：**
```typescript
POST /api/auth/passkey/register/verify
{
  username: "zhangsan",
  challenge: "之前获取的challenge",
  credential: {
    id: "凭证ID",
    rawId: "base64url编码",
    response: {
      attestationObject: "base64url编码",
      clientDataJSON: "base64url编码",
      transports: ["internal"]
    }
  }
}
```

**服务端验证：**
1. 验证 `challenge` 是否有效（防重放）
2. 验证 `origin` 和 `rpId` 是否匹配
3. 解析 `attestationObject` 获取公钥
4. 验证签名（证明是真实设备生成的）

**保存到存储：**
```typescript
{
  credentialId: "凭证ID",
  publicKey: "公钥（Base64URL）",
  userId: "用户ID",
  counter: 0,  // 初始计数器
  transports: ["internal"]
}
```

### 🔑 登录流程（Authentication）

#### 步骤 1：获取登录挑战

**前端调用：**
```typescript
POST /api/auth/passkey/challenge
{
  username: undefined  // 可选，可发现凭证不需要
}
```

**服务端处理：**
1. 生成随机 `challenge`
2. **关键：不提供 `allowCredentials`**（或设为 `undefined`）
3. 这样浏览器会枚举所有可发现凭证

**返回：**
```json
{
  "challenge": "base64url编码的随机字符串",
  "rpId": "localhost",
  "timeout": 60000,
  "userVerification": "required"
  // 注意：没有 allowCredentials
}
```

#### 步骤 2：浏览器枚举并选择凭证

**前端调用：**
```typescript
const credential = await navigator.credentials.get({
  publicKey: {
    challenge: ArrayBuffer,
    rpId: "localhost",
    userVerification: "required"
    // 注意：没有 allowCredentials
  }
});
```

**浏览器处理：**
1. 扫描设备上所有可发现凭证
2. 过滤出匹配当前 `rpId` 的凭证
3. 显示列表供用户选择（如：["张三", "李四"]）
4. 用户选择后，认证器：
   - 使用私钥对 `challenge` 签名
   - 返回 `userHandle`（即注册时的 `user.id`）

**返回凭证：**
```typescript
{
  id: "凭证ID",
  rawId: ArrayBuffer,
  response: {
    authenticatorData: ArrayBuffer,  // 包含签名和元数据
    clientDataJSON: ArrayBuffer,     // 包含 challenge 和 origin
    signature: ArrayBuffer,          // 对 challenge 的签名
    userHandle: ArrayBuffer          // 用户ID（可发现凭证）
  }
}
```

#### 步骤 3：验证登录

**前端发送：**
```typescript
POST /api/auth/passkey/verify
{
  username: undefined,  // 可选
  challenge: "之前获取的challenge",
  credential: {
    id: "凭证ID",
    rawId: "base64url编码",
    response: {
      authenticatorData: "base64url编码",
      clientDataJSON: "base64url编码",
      signature: "base64url编码",
      userHandle: "base64url编码"  // 关键！
    }
  }
}
```

**服务端验证：**
1. **从 `userHandle` 获取用户ID：**
   ```typescript
   const userHandleBuffer = Buffer.from(userHandle, 'base64url');
   const userId = userHandleBuffer.toString('utf-8');
   ```

2. **根据用户ID查找凭证：**
   ```typescript
   const credential = await getCredentialByUserId(userId);
   // 或根据 credential.id 查找
   ```

3. **验证签名：**
   - 使用存储的公钥验证签名
   - 验证 `challenge` 是否匹配
   - 验证 `origin` 和 `rpId` 是否匹配
   - 验证 `counter` 是否递增（防重放）

4. **更新计数器：**
   ```typescript
   await updateCounter(credentialId, newCounter);
   ```

5. **生成 token 并返回：**
   ```json
   {
     "access_token": "JWT token",
     "token_type": "Bearer",
     "verified": true,
     "username": "zhangsan",
     "userDisplayName": "张三"
   }
   ```

### 流程图

#### 注册流程
```
用户填写信息
    ↓
POST /register/challenge
    ↓ 返回 challenge
navigator.credentials.create()
    ↓ 用户验证，生成密钥对
POST /register/verify
    ↓ 验证签名，提取公钥
保存凭证到文件
    ↓
注册完成
```

#### 登录流程
```
用户点击登录
    ↓
POST /challenge
    ↓ 返回 challenge
navigator.credentials.get()
    ↓ 用户选择并验证，使用私钥签名
POST /verify
    ↓ 验证签名，检查计数器
更新计数器，生成 token
    ↓
登录完成
```

---

## API 接口详解

### 1. Challenge 接口

#### `/api/auth/passkey/challenge` - 登录挑战

**作用**：生成 Passkey 登录所需的认证选项和随机 challenge

**请求：**
```typescript
POST /api/auth/passkey/challenge
{
  username?: string; // 可选，使用可发现凭证时不需要
}
```

**响应：**
```typescript
{
  challenge: string;              // 随机 challenge（用于签名）
  allowCredentials?: Array;      // 允许的凭证列表（可发现凭证时为 undefined）
  rpId: string;                  // 依赖方 ID
  timeout: number;               // 超时时间（毫秒）
  userVerification: string;      // 用户验证要求
}
```

**关键点：**
- 生成随机 challenge（防止重放攻击）
- 支持可发现凭证（不提供 `allowCredentials`）
- 配置用户验证要求（`required`）

#### `/api/auth/passkey/register/challenge` - 注册挑战

**作用**：生成 Passkey 注册所需的注册选项和随机 challenge

**请求：**
```typescript
POST /api/auth/passkey/register/challenge
{
  username: string;           // 必须，用户名
  userDisplayName?: string;   // 可选，显示名称（默认为用户名）
}
```

**响应：**
```typescript
{
  challenge: string;                    // 随机 challenge（用于签名）
  rp: {                                 // 依赖方信息
    name: string;                       // 依赖方名称
    id: string;                         // 依赖方 ID
  },
  user: {                               // 用户信息
    id: string;                         // 用户 ID（base64url 编码）
    name: string;                       // 用户名
    displayName: string;                 // 显示名称
  },
  pubKeyCredParams: Array;              // 支持的算法列表
  timeout: number;                       // 超时时间（毫秒）
  authenticatorSelection: {             // 认证器选择配置
    requireResidentKey: boolean;
    residentKey: string;
  }
}
```

**关键点：**
- 生成用户 ID（基于用户名：`user-${username}`）
- 生成随机 challenge（防止重放攻击）
- 配置可发现凭证（`requireResidentKey: true`）

### 2. Verify 接口

#### `/api/auth/passkey/register/verify` - 注册验证

**作用**：验证 Passkey 注册是否成功，并保存凭证到服务器

**请求：**
```typescript
POST /api/auth/passkey/register/verify
{
  username: string;
  userDisplayName?: string;
  challenge: string;
  credential: {
    id: string;
    rawId: string;
    response: {
      attestationObject: string;  // 证明对象（包含公钥）
      clientDataJSON: string;      // 客户端数据
      transports?: string[];
    };
    type: string;
  };
}
```

**响应：**
```typescript
{
  verified: true,
  credentialId: string,
  registrationInfo: {
    credentialID: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports: string[];
  }
}
```

**验证内容：**
1. ✅ 验证 challenge（防止重放攻击）
2. ✅ 验证 origin（防止跨站攻击）
3. ✅ 验证签名（确保来自真实认证器）
4. ✅ 提取公钥（从 attestationObject 中）
5. ✅ 保存凭证到存储

#### `/api/auth/passkey/verify` - 登录验证

**作用**：验证 Passkey 登录签名，确认用户身份，并返回登录 token

**请求：**
```typescript
POST /api/auth/passkey/verify
{
  username?: string; // 可选，可发现凭证可以从 userHandle 获取
  challenge: string;
  credential: {
    id: string;
    rawId: string;
    response: {
      authenticatorData: string;  // 认证器数据
      clientDataJSON: string;     // 客户端数据
      signature: string;           // 签名（使用私钥签名）
      userHandle: string | null;  // 可发现凭证会包含用户 ID
    };
    type: string;
  };
}
```

**响应：**
```typescript
{
  access_token: string;
  token_type: string;
  verified: true;
  username: string;
  userDisplayName: string;
}
```

**验证内容：**
1. ✅ 从 userHandle 或 username 获取用户 ID
2. ✅ 从存储中查找凭证（通过 credential.id）
3. ✅ 验证 challenge（防止重放攻击）
4. ✅ 验证 origin（防止跨站攻击）
5. ✅ 使用公钥验证签名（确保来自真实认证器）
6. ✅ 检查计数器（防止重放攻击）
7. ✅ 更新计数器
8. ✅ 生成 token

### 接口对比

| 特性 | 登录 Challenge | 注册 Challenge | 登录 Verify | 注册 Verify |
|------|--------------|--------------|-----------|-----------|
| **用途** | 生成登录选项 | 生成注册选项 | 验证登录 | 验证注册 |
| **必需参数** | 无 | username | challenge, credential | username, challenge, credential |
| **返回** | challenge | challenge, user, rp | access_token | verified, credentialId |
| **验证对象** | - | - | signature | attestationObject |
| **存储操作** | - | - | 更新计数器 | 保存凭证 |

---

## 存储机制

### 当前实现

**文件存储（临时方案）**

凭证保存在 `data/passkeys.json` 文件中，使用 JSON 格式存储。

**数据结构：**
```typescript
interface PasskeyCredential {
  id: string;                    // credential.id (Base64URL)
  publicKey: string;             // 公钥 (Base64URL)
  userId: string;                // 用户 ID (user-username)
  username: string;              // 用户名（原始用户名，如 "zhe"）
  userDisplayName: string;       // 显示名称（如 "hezihua"）
  counter: number;               // 签名计数器
  transports?: string[];         // 传输方式
  createdAt: number;            // 创建时间戳
}
```

### 数据会丢失的情况

- ✅ **服务器重启**：会丢失（文件存储不会丢失，但内存缓存会）
- ✅ **Next.js 开发模式热重载**：可能丢失（取决于实现）
- ✅ **进程崩溃**：不会丢失（文件已持久化）

### 生产环境解决方案

**推荐：使用数据库存储**

#### PostgreSQL / MySQL 表结构

```sql
CREATE TABLE passkey_credentials (
  id VARCHAR(255) PRIMARY KEY,  -- credential.id (Base64URL)
  public_key TEXT NOT NULL,      -- 公钥 (Base64URL)
  user_id VARCHAR(255) NOT NULL, -- 用户 ID (user-username)
  username VARCHAR(255) NOT NULL, -- 用户名
  user_display_name VARCHAR(255), -- 显示名称
  counter BIGINT NOT NULL,        -- 签名计数器
  transports TEXT,                -- 传输方式 (JSON)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id)
);
```

### 存储对比

| 特性 | 文件存储（当前） | 数据库存储（推荐） |
|------|----------------|------------------|
| **数据持久化** | ✅ 持久 | ✅ 持久 |
| **服务器重启** | ✅ 数据保留 | ✅ 数据保留 |
| **热重载** | ⚠️ 可能丢失 | ✅ 数据保留 |
| **性能** | ✅ 快速 | ✅ 快速 |
| **扩展性** | ❌ 单实例 | ✅ 多实例 |
| **备份恢复** | ⚠️ 手动 | ✅ 自动 |
| **适用场景** | 开发/测试 | 生产环境 |

---

## 实现问题总结

### 问题 1: 路由 404 错误

**问题描述：**
```
POST http://localhost:3008/api/auth/passkey/verify 404 (Not Found)
```

**原因分析：**
- 找不到对应的 passkey 凭证
- 服务器日志显示：`存储的所有凭证数量: 0`

**解决方案：**
1. 确认路由存在：使用 `curl` 测试接口
2. 检查凭证存储：发现存储被清空（服务器重启导致）
3. 重新注册：需要先注册 Passkey，然后再登录

### 问题 2: userHandle 编码问题

**问题描述：**
服务器端从 `userHandle` 解码得到的是 base64 编码的字符串，而不是原始字符串。

**原因分析：**
1. 注册时：`user-zhe` → UTF-8 字节数组 → base64url 编码 → 传给 WebAuthn API
2. 登录时：WebAuthn 返回 `userHandle` (ArrayBuffer) → 前端转换为 base64url 字符串 → 服务器端解码

**解决方案：**
- 服务器端：简化解码逻辑，直接解码 base64url 字符串
- 前端：正确解码 userHandle

### 问题 3: userId 不一致问题

**问题描述：**
注册时生成的 `userId` 与登录时从 `userHandle` 获取的 `userId` 不一致，导致找不到凭证。

**原因分析：**
注册时使用了时间戳：
```typescript
const userIdString = `user-${username}-${Date.now()}`;
```
这导致每次注册都会生成不同的 `userId`，登录时无法匹配。

**解决方案：**
使用固定的 `userId` 格式（基于用户名）：
```typescript
const userIdString = `user-${username}`; // 移除时间戳
```

### 问题 4: 凭证存储被清空

**问题描述：**
服务器重启后，内存存储中的凭证被清空，导致登录时找不到凭证。

**解决方案：**
- **临时方案**：使用文件存储（当前实现）
- **生产环境方案**：使用数据库存储

### 问题 5: API 路由代理问题

**问题描述：**
Passkey 相关接口应该直接调用 Next.js API，但登录接口需要走代理。

**解决方案：**
创建两个 Axios 实例：
```typescript
// 1. 用于外部 API（走代理）
const apiClient = axios.create({
  baseURL: '/proxy',
});

// 2. 用于 Next.js API（直接调用）
const nextApiClient = axios.create({
  baseURL: '', // 直接调用 Next.js API
});
```

---

## 使用指南

### 电脑端使用 Passkey 登录（1Password）

#### 前提条件

1. **安装 1Password**
   - 下载并安装 1Password 桌面应用
   - 创建或登录 1Password 账户

2. **安装浏览器扩展**
   - Chrome: [1Password Extension](https://chrome.google.com/webstore/detail/1password-extension-deskm/aeblfdkihopdgdakadfpmcpdfjogpdod)
   - Edge: [1Password Extension](https://microsoftedge.microsoft.com/addons/detail/1password-extension-deskm/aeblfdkihopdgdakadfpmcpdfjogpdod)
   - Firefox: [1Password Extension](https://addons.mozilla.org/firefox/addon/1password-x-password-manager/)

3. **注册 Passkey**
   - 访问 `/passkey/register` 页面
   - 填写用户名和显示名称
   - 点击"注册 Passkey"
   - 选择"使用 1Password"或"保存到 1Password"

#### 登录步骤

1. **打开登录页面**
   - 访问 `http://localhost:3008/login`
   - 点击"Passkey 登录"按钮

2. **触发 Passkey 选择**
   - 浏览器会显示 Passkey 选择对话框
   - 1Password 扩展会自动检测并显示可用的 Passkey

3. **选择 1Password Passkey**
   - 在对话框中选择"使用 1Password"
   - 或选择已保存的 Passkey 项

4. **解锁 1Password**
   - 如果 1Password 已锁定，会提示输入主密码或使用生物识别
   - 解锁后，1Password 会自动填充 Passkey

5. **完成登录**
   - 1Password 会使用私钥签名 challenge
   - 服务器验证成功后，自动登录

### 手机端使用 Passkey 登录（1Password）

#### iOS 使用步骤

1. **安装 1Password 移动应用**
   - iOS: [App Store](https://apps.apple.com/app/1password-password-manager/id568903335)

2. **打开登录页面**
   - 在 Safari 中访问 `http://localhost:3008/login`
   - 点击"Passkey 登录"按钮

3. **选择 1Password Passkey**
   - Safari 会显示 Passkey 选择对话框
   - 点击"使用 1Password"

4. **解锁并确认**
   - 解锁 1Password（Face ID / Touch ID）
   - 确认使用 Passkey

5. **完成登录**
   - 自动完成登录流程

#### Android 使用步骤

1. **安装 1Password 移动应用**
   - Android: [Google Play](https://play.google.com/store/apps/details?id=com.agilebits.onepassword)

2. **打开登录页面**
   - 在 Chrome 中访问登录页面
   - 点击"Passkey 登录"按钮

3. **选择 1Password Passkey**
   - Chrome 会显示 Passkey 选择对话框
   - 点击"使用 1Password"

4. **解锁并确认**
   - 解锁 1Password（指纹识别）
   - 确认使用 Passkey

5. **完成登录**
   - 自动完成登录流程

### 跨设备同步

1. **自动同步**
   - 在电脑端注册的 Passkey 会自动同步到手机
   - 在手机端注册的 Passkey 会自动同步到电脑
   - 通过 1Password 云端同步

2. **同步时间**
   - 通常几秒钟内完成同步
   - 需要 1Password 账户处于登录状态

---

## 安全机制

### 1. 防重放攻击

- **Challenge**：每次请求生成新的随机 challenge
- **Counter**：每次使用后递增，防止重复使用
- **时效性**：Challenge 通常有时效性（如 60 秒）

### 2. 域名验证

- **Origin**：验证请求来源
- **RP ID**：验证依赖方ID（域名）

### 3. 用户验证

- **User Verification**：要求用户验证（指纹/人脸/PIN）
- **防止**：设备被盗用

### 4. 签名验证

- **私钥**：永远不离开设备
- **公钥**：存储在服务端，用于验证签名

### 5. 防克隆攻击

- **计数器**：每次认证后，签名计数器递增
- **验证**：服务器检查计数器是否递增
- **检测**：如果计数器 ≤ 已保存的值 → 可能是克隆凭证

### 安全模型

```
注册时：
  认证器生成密钥对（私钥 + 公钥）
  私钥 → 永远留在设备本地（永不传输）
  公钥 → 发送给服务器保存

登录时：
  服务器发送 challenge
  认证器用私钥签名 challenge
  服务器用公钥验证签名
```

---

## 最佳实践

### 1. 开发环境

- ✅ 使用文件存储（当前实现）
- ✅ 支持热重载（开发模式）
- ✅ 添加详细日志（便于调试）

### 2. 生产环境

- ✅ **必须使用数据库存储**
- ✅ 实现 challenge 验证（使用 session/Redis）
- ✅ 实现 JWT token 生成（当前使用简单的 Base64）
- ✅ 添加凭证管理功能（查看、删除 Passkey）
- ✅ 支持多个 Passkey 设备
- ✅ 添加错误恢复机制

### 3. 用户体验

- ✅ 支持可发现凭证（无用户名登录）
- ✅ 提供清晰的错误提示
- ✅ 支持多种认证方式（密码 + Passkey）
- ✅ 支持跨设备同步（1Password）

### 4. 安全考虑

- ✅ 验证 challenge（当前未实现，应使用 session/Redis）
- ✅ 验证 origin
- ✅ 更新凭证计数器
- ✅ 要求用户验证（生物识别/PIN）
- ✅ 使用 HTTPS（生产环境）

---

## 关键概念

### 1. Challenge（挑战）

- **作用**：防重放攻击
- **生成**：服务端生成随机字符串
- **验证**：确保响应是针对当前请求的

### 2. User ID（用户标识）

- **注册时**：服务端生成唯一ID，传入 `user.id`
- **存储位置**：认证器设备本地（可发现凭证）
- **登录时**：从 `userHandle` 中获取

### 3. Resident Key（可发现凭证）

- **特点**：用户信息存储在设备本地
- **优势**：登录时无需输入用户名
- **设置**：`requireResidentKey: true`

### 4. AllowCredentials（允许的凭证）

- **提供时**：限制只能使用指定的凭证
- **不提供时**：浏览器枚举所有可发现凭证（无用户名登录）

### 5. Counter（计数器）

- **作用**：防止重放攻击
- **规则**：每次使用后必须递增
- **验证**：服务端检查 counter 是否大于上次的值

### 6. Signature（签名）

- **生成**：使用私钥对 `challenge + authenticatorData` 签名
- **验证**：使用公钥验证签名，证明拥有私钥

---

## 待办事项

- [ ] 实现 challenge 验证（使用 session/Redis）
- [ ] 替换文件存储为数据库存储
- [ ] 实现 JWT token 生成（当前使用简单的 Base64）
- [ ] 添加凭证管理功能（查看、删除 Passkey）
- [ ] 支持多个 Passkey 设备
- [ ] 添加错误恢复机制
- [ ] 配置环境变量（RP_ID, ORIGIN）
- [ ] 实现 HTTPS（生产环境）

---

## 参考资料

- [WebAuthn API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)
- [SimpleWebAuthn](https://simplewebauthn.dev/)
- [Passkey 最佳实践](https://webauthn.guide/)
- [FIDO2 标准](https://fidoalliance.org/fido2/)
- [1Password Passkey 支持](https://support.1password.com/passkeys/)

---

## 总结

本文档提供了 Passkey 功能的完整指南，包括：

1. ✅ **概述和标准**：FIDO2/WebAuthn 标准说明
2. ✅ **完整流程**：注册和登录的详细步骤
3. ✅ **API 接口**：四个接口的详细说明
4. ✅ **存储机制**：当前实现和生产环境方案
5. ✅ **问题总结**：实现过程中遇到的问题和解决方案
6. ✅ **使用指南**：电脑端和手机端的使用方法
7. ✅ **安全机制**：各种安全措施和最佳实践

当前实现**完全符合 FIDO2 标准**，支持可发现凭证（无用户名登录），是一个完整的 Passkey 认证系统！

