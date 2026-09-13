---
title: llama-factory 部署笔记
author: jimmy
date: '2024-11-11'
---

# LLaMA-Factory 部署笔记

## 参考资料

### 1. 相关文档

```
https://zhuanlan.zhihu.com/p/695287607

https://github.com/hiyouga/LLaMA-Factory/blob/main/README_zh.md

```

## 部署流程

### 2. 环境搭建

```
git clone depth 1 https://github.com/hiyouga/LLaMA-Factory.git

conda create -n llama_factory python=3.10

conda activate llama_factory

cd LLaMA-Factory

# 使用镜像安装
pip install -e '.[torch,metrics]' https://mirrors.aliyun.com/pypi/simple/

```

# 安装conda

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh

bash ~/miniconda.sh


```

# 下载大模型

```

from modelscope import snapshot_download
model_dir = snapshot_download('LLM-Research/Llama3-8B-Chinese-Chat')

```

# 启动

```
CUDA_VISIBLE_DEVICES=0 llamafactory-cli webchat     --model_name_or_path /home/hezihua/.cache/modelscope/hub/LLM-Research/Llama3-8B-Chinese-Chat     --template llama3

```