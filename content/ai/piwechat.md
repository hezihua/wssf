---
title: Pi 微信机器人搭建与排障
author: jimmy
date: '2026-8-24'
---

# Pi 微信机器人搭建与排障记录

> 在 WSL 环境下，基于 OpenClaw Pi 搭建微信机器人，实现微信消息与 Pi AI 的对接。

## 一、任务目标

在 WSL（Windows Subsystem for Linux）环境下，基于 OpenClaw Pi 搭建一个微信机器人，实现微信消息与 Pi AI 的对接。

## 二、环境信息

| 项目 | 说明 |
| --- | --- |
| 操作系统 | WSL (Windows Subsystem for Linux) |
| 用户名 | `hezihua@DESKTOP-I55FMHJ` |
| Node.js 版本 | v22.22.0 |
| Pi 初始版本 | 0.84.2 |
| Pi 最终版本 | 0.84.3 |
| 工作目录 | `~/workspace/piwechatbot` |

## 三、遇到的问题与解决方案

**问题 1：Pi 进入 Agent 对话模式而非执行命令**

- **现象：** 输入 `pi gateway` 后，系统没有启动网关服务，而是进入了 AI 思考/对话模式，开始搜索文件。
- **原因：** Pi 的默认行为被设置为 Agent 交互模式，而非命令行工具模式。
- **解决方案：**
  - 通过 `Ctrl + C` 强制退出对话模式，回到命令行提示符
  - 使用 `npx @earendil-works/pi@latest gateway start` 强制启动后台服务

**问题 2：Pi 版本过旧存在连接 Bug**

- **现象：** 终端显示黄色警告，提示版本 0.84.2 存在已知问题。
- **解决方案：** 执行 `pi update` 将 Pi 从 0.84.2 升级至 0.84.3。
- **更新结果：**
  - 成功升级 `@earendil-works/pi-coding-agent` 从 0.84.2 到 0.84.3
  - 过程中出现 11 个 deprecated subdependencies 警告，属于 npm/pnpm 常见警告，完全无害，可忽略

**问题 3：微信已连接但消息处理崩溃**

- **现象：** 微信机器人启动成功（显示 `Bot started successfully!` 和 `WeChat connected!`），但发送消息后终端疯狂报错：

```text
Extension "<runtime>" error: Agent is already processing.
```

- **原因：** Pi 的 Agent 默认是单线程处理的，当多条消息同时到达或初始化时触发多次调用，导致并发冲突。
- **解决方案：** 在消息处理逻辑中添加 `isProcessing` 标志位（锁机制），确保上一条消息处理完再处理下一条：

```javascript
let isProcessing = false;

bot.on('message', async (msg) => {
    if (isProcessing) {
        console.log('正在处理上一条消息，忽略本次输入...');
        return;
    }
    isProcessing = true;
    try {
        // 处理消息逻辑
    } catch (error) {
        console.error('处理出错:', error);
    } finally {
        isProcessing = false;
    }
});
```

**问题 4：ReferenceError: bot is not defined**

- **现象：** 运行 `node pi-wechat.js` 时报错 `ReferenceError: bot is not defined`。
- **原因：** 代码中使用了 `bot` 变量，但未进行初始化定义。
- **解决方案：** 在文件顶部添加 Wechaty 的引用和实例化代码：

```javascript
import { WechatyBuilder } from 'wechaty'

const bot = WechatyBuilder.build({
  name: 'my-wechat-bot',
  puppet: 'wechaty-puppet-wechat4u',
})
```

**问题 5：ERR_MODULE_NOT_FOUND - Cannot find package 'wechaty'**

- **现象：** 运行时报错找不到 wechaty 包。
- **原因：** 项目中未安装 wechaty 及其协议端（Puppet）依赖。
- **解决方案：** 执行安装命令：

```bash
npm install wechaty
npm install wechaty-puppet-wechat4u
```

如安装速度慢，可使用淘宝镜像源：

```bash
npm install wechaty wechaty-puppet-wechat4u --registry=https://registry.npmmirror.com
```

**问题 6：程序静默退出（无报错无输出）**

- **现象：** 运行 `node pi-wechat.js` 后程序直接退出，没有任何报错信息。
- **原因：** 代码中缺少 `bot.start()` 启动指令，程序运行完定义部分后自然结束。
- **解决方案：** 在代码末尾添加启动逻辑：

```javascript
bot.start()
  .then(() => console.log('机器人已启动，等待扫码登录...'))
  .catch(e => console.error('启动失败:', e));
```

**问题 7：二维码无法正常显示**

- **现象：** 程序启动后卡在等待扫码阶段，但终端中没有显示二维码。
- **原因：** 当前终端环境不支持图形化二维码显示。
- **解决方案：** 添加 `scan` 事件监听器，打印二维码的在线链接地址，在浏览器中打开即可扫码：

```javascript
bot.on('scan', (qrcode, status) => {
    const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode)
    ].join('')
    console.log(`[${status}] 请扫描下方的二维码登录微信：`)
    console.log(qrcodeImageUrl)
})
```

## 四、最终完整代码

以下是修复所有问题后的完整 `pi-wechat.js` 文件内容：

```javascript
import { WechatyBuilder } from 'wechaty'

console.log('正在初始化微信机器人...')

// 1. 初始化 bot 实例
const bot = WechatyBuilder.build({
  name: 'my-wechat-bot',
  puppet: 'wechaty-puppet-wechat4u',
})

// 2. 监听扫码事件，打印二维码链接
bot.on('scan', (qrcode, status) => {
    const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode)
    ].join('')
    console.log(`[${status}] 请扫描下方的二维码登录微信：`)
    console.log(qrcodeImageUrl)
})

// 3. 定义忙闲标志位
let isProcessing = false;

// 4. 监听消息
bot.on('message', async (msg) => {
    // 忽略自己发的消息，避免死循环
    if (msg.self()) return;

    // 如果正在处理上一条消息，直接忽略
    if (isProcessing) {
        console.log('正在处理上一条消息，忽略本次输入...');
        return;
    }

    // 锁定
    isProcessing = true;

    try {
        const text = msg.text();
        const contact = msg.talker();
        console.log(`收到来自 ${contact.name()} 的消息: ${text}`);

        // 调用 Pi API 的逻辑（待接入）
        // const response = await bot.pi.ask(text);

        // 暂时先回复收到的内容，测试连通性
        const response = `我收到了你的消息：${text}`;

        await msg.say(response);

    } catch (error) {
        console.error('处理出错:', error);
        await msg.say('出错了：' + error.message);
    } finally {
        // 解锁
        isProcessing = false;
    }
});

// 5. 启动机器人
bot.start()
  .then(() => console.log('机器人已启动，等待扫码登录...'))
  .catch(e => console.error('启动失败:', e));
```

## 五、最终运行方式

在 Pi 终端中执行 `/wechat` 即可启动微信机器人。

## 六、经验总结

| 序号 | 经验教训 |
| --- | --- |
| 1 | 使用 Pi 时注意区分 Agent 对话模式和命令行模式，必要时用 `npx` 强制调用 |
| 2 | 保持 Pi 为最新版本，旧版本可能存在已知连接 Bug |
| 3 | Wechaty 机器人必须完成三步：初始化 bot → 注册事件监听 → 调用 `bot.start()` |
| 4 | 依赖包必须通过 `npm install` 安装，不能仅写 `import` 语句 |
| 5 | 消息处理必须加并发锁（`isProcessing`），防止 Agent 同时处理多条消息导致崩溃 |
| 6 | 在无图形界面的终端环境中，需通过 `scan` 事件获取二维码链接，而非依赖自动显示 |
| 7 | Node.js 版本兼容性需注意，Wechaty 在 v16/v18 下最稳定，v22 可能出现兼容问题 |
