---
title: passkey 登录
author: jimmy
date: '2025-11-13'
---

# Passkey 验证完整流程说明

## 📋 目录
1. [注册流程（Registration）](#注册流程)
2. [登录流程（Authentication）](#登录流程)
3. [关键概念说明](#关键概念说明)
4. [数据流向图](#数据流向图)

---

## 🔐 注册流程（Registration）

### 步骤 1：获取注册挑战

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
2. 生成唯一的 `user.id`（如果用户不存在，先创建用户）
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

### 步骤 2：浏览器创建凭证

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

### 步骤 3：验证注册并保存

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

**保存到数据库：**
```typescript
{
  credentialId: "凭证ID",
  publicKey: "公钥（Base64URL）",
  userId: "用户ID",
  counter: 0,  // 初始计数器
  transports: ["internal"]
}
```

---

## 🔑 登录流程（Authentication）

### 步骤 1：获取登录挑战

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

### 步骤 2：浏览器枚举并选择凭证

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

### 步骤 3：验证登录

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
     "userId": "从userHandle获取的用户ID"
   }
   ```

---

## 🔑 关键概念说明

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

## 📊 数据流向图

### 注册流程
```
┌──────────┐                    ┌──────────┐
│  前端    │                    │  服务端  │
└──────────┘                    └──────────┘
     │                                │
     │ 1. POST /register/challenge   │
     │──────────────────────────────>│
     │    { username }               │
     │                                │
     │                                │ 生成 user.id
     │                                │ 生成 challenge
     │                                │
     │ 2. 返回注册选项                │
     │<──────────────────────────────│
     │    { challenge, user, ... }   │
     │                                │
     │ 3. navigator.credentials.create()│
     │    ┌──────────────────────┐   │
     │    │  认证器设备          │   │
     │    │  - 生成密钥对        │   │
     │    │  - 存储私钥          │   │
     │    │  - 存储 user.id      │   │
     │    │  - 存储 rpId         │   │
     │    └──────────────────────┘   │
     │                                │
     │ 4. POST /register/verify      │
     │──────────────────────────────>│
     │    { credential }             │
     │                                │
     │                                │ 验证签名
     │                                │ 保存公钥到数据库
     │                                │
     │ 5. 返回验证结果                │
     │<──────────────────────────────│
     │    { verified: true }         │
     │                                │
```

### 登录流程
```
┌──────────┐                    ┌──────────┐
│  前端    │                    │  服务端  │
└──────────┘                    └──────────┘
     │                                │
     │ 1. POST /challenge             │
     │──────────────────────────────>│
     │    { username: undefined }    │
     │                                │
     │                                │ 生成 challenge
     │                                │ 不提供 allowCredentials
     │                                │
     │ 2. 返回挑战                    │
     │<──────────────────────────────│
     │    { challenge }               │
     │                                │
     │ 3. navigator.credentials.get() │
     │    ┌──────────────────────┐   │
     │    │  浏览器              │   │
     │    │  - 枚举所有凭证      │   │
     │    │  - 显示列表          │   │
     │    │  - 用户选择          │   │
     │    └──────────────────────┘   │
     │           │                    │
     │           ▼                    │
     │    ┌──────────────────────┐   │
     │    │  认证器设备          │   │
     │    │  - 使用私钥签名      │   │
     │    │  - 返回 userHandle   │   │
     │    └──────────────────────┘   │
     │                                │
     │ 4. POST /verify                │
     │──────────────────────────────>│
     │    { credential }             │
     │    { userHandle }             │
     │                                │
     │                                │ 从 userHandle 获取用户ID
     │                                │ 查找公钥
     │                                │ 验证签名
     │                                │ 更新 counter
     │                                │
     │ 5. 返回 token                  │
     │<──────────────────────────────│
     │    { access_token }           │
     │                                │
```

---

## 🔒 安全机制

### 1. 防重放攻击
- **Challenge**：每次请求生成新的随机 challenge
- **Counter**：每次使用后递增，防止重复使用

### 2. 域名验证
- **Origin**：验证请求来源
- **RP ID**：验证依赖方ID（域名）

### 3. 用户验证
- **User Verification**：要求用户验证（指纹/人脸/PIN）
- **防止**：设备被盗用

### 4. 签名验证
- **私钥**：永远不离开设备
- **公钥**：存储在服务端，用于验证签名

---

## 📝 总结

**注册流程：**
1. 获取注册挑战（包含 user.id）
2. 浏览器创建凭证（存储 user.id 到设备）
3. 验证并保存公钥到数据库

**登录流程：**
1. 获取登录挑战（不提供 allowCredentials）
2. 浏览器枚举凭证，用户选择
3. 认证器返回签名和 userHandle
4. 服务端从 userHandle 识别用户，验证签名
5. 返回 token 完成登录

**关键点：**
- 可发现凭证将用户信息存储在设备本地
- 登录时从 `userHandle` 获取用户ID
- 无需输入用户名即可登录
