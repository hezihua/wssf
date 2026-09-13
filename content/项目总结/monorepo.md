---
title: monorepo 总结
author: jimmy
date: '2024-8-24'
---

# Monorepo 项目总结

## 项目结构

### 1. 目录组织

- Root
  - library
    - common
      - File A1.1
      - File A1.2
    - request
      - File A2.1
  - packages
    - comnponents
      - File B1.1
      - File B1.2
    - utils
      - File B2.1
  - websites
    - website1
      - File B1.1
      - File B1.2
    - website2
      - File B2.1

### 2. 技术选型
1.pnpm workspaces + babel-plugin-module-resolver + nx (这个方案可以在packages 中引用websites 的内容)

2.pnpm workspaces + tsconfig-paths + nx

### 3. 优点
```
1.多个项目复用packages 代码
2.业务代码和公共代码分离
3.统一配置
```