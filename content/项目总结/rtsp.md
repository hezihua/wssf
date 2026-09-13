---
title: rtsp项目总结
author: jimmy
date: '2024-7-18'
---

# RTSP 项目总结

## 项目概述

### 1. 总体架构

![rtst架构.png](https://s2.loli.net/2024/07/18/iZBowxqrGQ89dzK.png 'https://smms.app/image/iZBowxqrGQ89dzK')

### 2. 项目依赖
```
const http = require('http');
const rtsp = require('ws-rtsp');
```

### 3. 客户端播放器
```
new JSMpeg.Player
```

### 4. npm 地址
https://www.npmjs.com/package/ws-rtsp