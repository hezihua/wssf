---
title: wsl 安装go 环境
author: jimmy
date: '2026-5-6'
---


### 1. 安装
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
    ```
*   **解压到系统目录：**
    ```bash
    sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
    ```

---

### 2. 配置环境变量
为了让系统随时随地识别 `go` 命令，需要修改你的 shell 配置文件（通常是 `~/.bashrc` 或 `~/.zshrc`）。

1.  **打开配置文件：**
    ```bash
    nano ~/.bashrc
    ```
2.  **在文件末尾添加以下三行：**
    ```bash
    export GOROOT=/usr/local/go
    export GOPATH=$HOME/go
    export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
    ```
3.  **保存并退出：** 按 `Ctrl + O` 保存，再按 `Ctrl + X` 退出。
4.  **刷新配置：**
    ```bash
    source ~/.bashrc
    ```

---

### 3. 验证安装
输入以下命令，如果看到版本号，说明你已经成功了：
```bash
go version