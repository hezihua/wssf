---
title: ruoyi项目总结
author: jimmy
date: '2024-9-30'
---

# RuoYi 项目总结

## 技术难点

### 1. 技术难点总结

1） 使用特定 https://doc.dataarche.com/#/，只能在https 环境下使用，自生成https证书

2） 地图引擎需要配置nginx

```
add_header 'Cross-Origin-Embedder-Policy' 'require-corp';

作用: 这是 跨源嵌入策略（Cross-Origin Embedder Policy，简称 COEP）的一个配置项，用于确保站点只能加载那些明确允许被跨域加载的资源。

如果外部资源没有设置 Cross-Origin-Resource-Policy 头，且该资源与当前页面来自不同域，资源将不会被加载。

add_header 'Cross-Origin-Opener-Policy' 'same-origin';

作用: 这是 跨源打开策略（Cross-Origin Opener Policy，简称 COOP）的一个配置项，用于控制页面是否与其打开的页面或被打开的页面共享相同的浏览器上下文（如同一窗口或 iframe）。

same-origin 意味着页面只能与同源（即相同协议、域名和端口）的页面共享同一浏览器上下文。这种隔离可以防止跨域攻击，比如 Spectre 攻击等。
```

3）基于第二点，文件资源只能使用files 代理进行访问

4）搭建rtsp 服务，实现浏览器播放实时视频流，rtsp 服务是一个websocket服务，在https 环境下需要代理 /wss 才能实现访问rtsp 服务

5）地图在一个tab 下只能打开实例化一次，通过事件总线机制全局共享同一个地图弹框


