---
title: windows 中注册自定义协议
author: jimmy
date: '2024-12-4'
---

# Windows 自定义协议注册

## 简介

在 Windows 中注册自定义协议

Windows 使用注册表 (Registry) 来管理自定义协议的注册。

## 注册步骤

### 1. 编辑注册表手动注册
按下 Win + R，输入 regedit 打开注册表编辑器。

### 2. 导航到路径
HKEY_CLASSES_ROOT

### 3. 创建新键
创建一个新的键，名称为自定义协议名称，例如 myapp。

### 4. 配置协议
在 myapp 下：
- 设置 (默认) 的值为描述字符串，例如 MyApp Protocol。
- 新建一个字符串值 URL Protocol（值留空）。

### 5. 创建子键结构
创建一个子键 shell，在其中再创建子键 open，然后再创建子键 command。

### 6. 设置执行路径
设置 command 下 (默认) 的值为调用的客户端路径，例如：

```
"C:\Path\to\your-client.exe" "%1"

```
### 7. 在浏览器中调用
<a href="myapp://example" > 打开app </a>

![764D88B7-1D10-4537-B117-DD8ADA396A65.png](https://s2.loli.net/2024/12/04/zYmZaRTNsbyi1rX.png)