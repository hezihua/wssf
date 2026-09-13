---
title: nextjs项目总结
author: jimmy
date: '2024-9-14'
---

# Next.js 项目总结

## 技术选型

### 1. 核心技术栈
- **NEXTJS**：React框架，用于构建服务器端渲染（SSR）和静态网站
- **React**：用于构建用户界面的JavaScript库
- **TypeScript**：用于编写JavaScript的静态类型语言
- **zustand**：用于状态管理的轻量级库
- **docker**：容器化部署解决需要特殊node环境的问题

## 使用的技术

### 2. 技术实现细节
  1）录音功能实现 （依赖recorder-core）

  2）音频播放功能实现 

    1.playWithAudioBufferSource 播放音频buffer
    
    2.AudioPlayer 播放音频文件播放类 基于Audio

  3）api 开发，把key 存放在服务端

  4）middleware 中间件根据所在客户端渲染对应的组件

  5）自定义Image loader

