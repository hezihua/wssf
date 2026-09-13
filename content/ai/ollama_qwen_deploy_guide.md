---
title: Ollama + Qwen 本地部署指南
author: jimmy
date: '2026-8-21'
---

# Ollama + Qwen 本地部署指南（Docker + GPU 加速）

> 适用环境：Windows 11 + WSL2 + Docker Desktop + NVIDIA RTX 4060 Ti（16GB）
>
> 部署时间：约 10~15 分钟（不含模型下载）

## 一、前置准备

### 1.1 确认已安装

| 组件 | 检查命令 | 说明 |
| --- | --- | --- |
| Docker Desktop | `docker --version` | 需开启 WSL2 后端 |
| WSL2 | `wsl -l -v` | 确保有 Linux 发行版在运行 |
| NVIDIA 驱动 | `nvidia-smi` | 宿主机需能识别显卡 |
| NVIDIA Container Toolkit | `docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi` | 让 Docker 容器调用 GPU |

### 1.2 显存确认

```bash
nvidia-smi
```

确认显存容量：

- **8GB 版：** 建议运行 `qwen3:8b` 或 `qwen3.5:9b`
- **16GB 版：** 可运行 `qwen3:14b`、`qwen3.5:9b`，甚至尝试 `qwen3:30b-a3b`（MoE）

## 二、部署 Ollama 服务

### 2.1 拉取官方镜像

```bash
docker pull ollama/ollama
```

镜像大小约 **8~9GB**。

### 2.2 启动容器（GPU 模式）

```bash
docker run -d --name ollama --gpus all -p 11434:11434 -v ollama-data:/root/.ollama ollama/ollama
```

参数说明：

| 参数 | 含义 |
| --- | --- |
| `-d` | 后台运行 |
| `--name ollama` | 容器名称 |
| `--gpus all` | 允许容器使用所有 GPU |
| `-p 11434:11434` | 映射 API 端口 |
| `-v ollama-data:/root/.ollama` | 命名卷持久化模型数据 |

**注意：** 如果报错 `could not select device driver`，说明 NVIDIA Container Toolkit 未安装，需先安装或去掉 `--gpus all` 用 CPU 模式运行。

### 2.3 验证容器状态

```bash
docker ps
```

应看到 `ollama` 容器在运行。

## 三、拉取千问（Qwen）模型

### 3.1 选择适合显存的模型

| 模型 | 参数量 | 推荐显存 | 用途 |
| --- | --- | --- | --- |
| `qwen3:8b` | 80 亿 | 8GB+ | 日常对话、通用任务 |
| `qwen3.5:9b` | 90 亿 | 8GB+ | 更强的推理能力 |
| `qwen3:14b` | 140 亿 | 12GB+ | 更精准的回答 |
| `qwen3-coder:14b` | 140 亿 | 12GB+ | 代码生成专用 |
| `qwen3:30b-a3b` | 300 亿（MoE） | 16GB+ | 大参数，每 token 只激活 3B |

### 3.2 执行拉取

以 **Qwen3.5 9B** 为例：

```bash
docker exec -it ollama ollama pull qwen3.5:9b
```

模型大小约 **6~7GB**，下载时间取决于网络速度。

### 3.3 查看已下载模型

```bash
docker exec ollama ollama list
```

## 四、验证 GPU 加速

### 4.1 检查显存占用

```bash
docker exec ollama nvidia-smi
```

期望输出：

```text
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 560.35.02              Driver Version: 560.94       CUDA Version: 12.6     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                  Memory-Usage | GPU-Util  Compute M. |
|   0  NVIDIA GeForce RTX 4060 Ti      7657MiB / 16380MiB      0%   Default            |
+---------------------------------------------------------------------------------------+
| Processes:                                                                            |
|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |
|        ID   ID                                                             Usage      |
|=======================================================================================|
|    0   N/A  N/A       168      C   /llama-server                                N/A    |
+---------------------------------------------------------------------------------------+
```

关键指标：

- `Memory-Usage` 有数值（模型已加载进显存）
- `Process name` 中出现 `/llama-server`

### 4.2 命令行对话测试

```bash
docker exec -it ollama ollama run qwen3.5:9b
```

出现 `>>>` 提示符后输入：

```text
>>> 你好
```

**正常响应** = 模型加载成功且 GPU 生效。

速度参考（4060 Ti）：

- GPU 模式：20~50 tokens/秒
- CPU 模式：2~5 tokens/秒（明显卡顿）

## 五、部署 Open WebUI（可选）

命令行交互不够方便，可部署网页版界面。

### 5.1 启动 Open WebUI 容器

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

镜像大小约 **3~4GB**。

### 5.2 访问界面

浏览器打开：

```text
http://localhost:3000
```

首次使用需注册账号，然后即可在网页中选择模型、进行对话、上传文件等。

### 5.3 Open WebUI 功能

- 类似 ChatGPT 的聊天界面
- 一键切换本地模型
- 对话历史保存
- 文件上传与知识库（RAG）
- 多用户支持

## 六、Docker Compose 一键编排（推荐）

将 Ollama + Open WebUI 写为 `docker-compose.yml`：

```yaml
version: '3.8'

services:
  ollama:
    image: ollama/ollama
    container_name: ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama-data:/root/.ollama
    # 有 NVIDIA GPU 时启用：
    runtime: nvidia
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    ports:
      - "3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    volumes:
      - open-webui-data:/app/backend/data
    depends_on:
      - ollama
    restart: always

volumes:
  ollama-data:
  open-webui-data:
```

启动：

```bash
docker compose up -d
```

## 七、常用命令速查

| 操作 | 命令 |
| --- | --- |
| 查看运行中的容器 | `docker ps` |
| 查看 Ollama 日志 | `docker logs ollama` |
| 查看已下载模型 | `docker exec ollama ollama list` |
| 删除某个模型 | `docker exec ollama ollama rm qwen3.5:9b` |
| 停止 Ollama | `docker stop ollama` |
| 启动 Ollama | `docker start ollama` |
| 删除容器（保留数据卷） | `docker rm ollama` |
| 进入容器内部 | `docker exec -it ollama /bin/bash` |
| 查看 GPU 状态 | `docker exec ollama nvidia-smi` |

## 八、常见问题

**Q1：模型下载很慢怎么办？**

- 检查网络连接
- 或配置 Docker 镜像加速器（如阿里云、中科大镜像源）

**Q2：容器重启后模型不见了？**

- 确认启动时使用了 `-v ollama-data:/root/.ollama` 数据卷挂载
- 如果没用卷，模型只存在于容器内部，删除容器即丢失

**Q3：GPU 没生效，模型在 CPU 上跑？**

- 宿主机 `nvidia-smi` 是否正常输出
- NVIDIA Container Toolkit 是否安装
- Docker Desktop 设置中是否启用了 WSL2 集成

**Q4：想让局域网其他设备访问？**

- 将端口映射改为 `-p 0.0.0.0:11434:11434`
- 并确保防火墙放行

**Q5：Qwen3.5 输出很长的 Thinking Process 怎么关？**

- 在对话中输入 `/set parameter no_think true`
- 或重启容器时加环境变量 `-e OLLAMA_NO_THINK=true`

## 九、总结

| 步骤 | 耗时 | 状态 |
| --- | --- | --- |
| 拉取 Ollama 镜像 | ~5 分钟 | ✅ 必需 |
| 启动 Ollama 容器 | < 1 分钟 | ✅ 必需 |
| 拉取 Qwen 模型 | ~5-10 分钟 | ✅ 必需 |
| 验证 GPU 加速 | < 1 分钟 | ✅ 推荐 |
| 部署 Open WebUI | ~10 分钟 | ⚪ 可选 |

至此，你已在本地拥有一套完整的 **大模型推理环境**，所有数据保存在本地，无需联网即可对话。
