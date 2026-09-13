---
title: request
author: jimmy
date: '2024-9-5'
---

# Request 请求库

## 项目文档

项目文档截图
![image.png](https://s2.loli.net/2024/09/05/ZHU2njrITVtwSOd.png 'https://sm.ms/image/ZHU2njrITVtwSOd')

## 项目介绍

### 1. 项目目标
统一公司前端请求库

### 2. 项目详情介绍
属性： axiosCanceler (请求取消)  axiosInstance(请求实例) cacheManager(缓存管理) createOptions(实例参数)

方法： allRequestCanceler  request  get post delete put upload

3.特点： 
1) request 请求库主要围绕请求实例做请求方法的封装，并且做了基础的拦截，后续业务层可以追加业务相关的拦截
2) 基于typescript 进行开发，request 请求支持泛型
3) 支持横向可扩展，如果需要更多的功能，可以无需大改源代码的基础上实现能力加强
4) 支持基于代码中的注释自动生成文档，基于jsdoc,上图所示截图是自动生成的文档




