(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??ref--1-1!./node_modules/.pnpm/@vuepress+markdown-loader@1.9.10/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/ai/ollama_qwen_deploy_guide.md?vue&type=template&id=4f16814b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "ollama-qwen-本地部署指南-docker-gpu-加速"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ollama-qwen-本地部署指南-docker-gpu-加速"
    }
  }, [_vm._v("#")]), _vm._v(" Ollama + Qwen 本地部署指南（Docker + GPU 加速）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("适用环境：Windows 11 + WSL2 + Docker Desktop + NVIDIA RTX 4060 Ti（16GB）")]), _vm._v(" "), _c('p', [_vm._v("部署时间：约 10~15 分钟（不含模型下载）")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、前置准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、前置准备"
    }
  }, [_vm._v("#")]), _vm._v(" 一、前置准备")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-1-确认已安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-1-确认已安装"
    }
  }, [_vm._v("#")]), _vm._v(" 1.1 确认已安装")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("组件")]), _vm._v(" "), _c('th', [_vm._v("检查命令")]), _vm._v(" "), _c('th', [_vm._v("说明")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Docker Desktop")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker --version")])]), _vm._v(" "), _c('td', [_vm._v("需开启 WSL2 后端")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("WSL2")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("wsl -l -v")])]), _vm._v(" "), _c('td', [_vm._v("确保有 Linux 发行版在运行")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("NVIDIA 驱动")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("nvidia-smi")])]), _vm._v(" "), _c('td', [_vm._v("宿主机需能识别显卡")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("NVIDIA Container Toolkit")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi")])]), _vm._v(" "), _c('td', [_vm._v("让 Docker 容器调用 GPU")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-2-显存确认"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-2-显存确认"
    }
  }, [_vm._v("#")]), _vm._v(" 1.2 显存确认")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("nvidia-smi\n")])])]), _c('p', [_vm._v("确认显存容量：")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("8GB 版：")]), _vm._v(" 建议运行 "), _c('code', [_vm._v("qwen3:8b")]), _vm._v(" 或 "), _c('code', [_vm._v("qwen3.5:9b")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("16GB 版：")]), _vm._v(" 可运行 "), _c('code', [_vm._v("qwen3:14b")]), _vm._v("、"), _c('code', [_vm._v("qwen3.5:9b")]), _vm._v("，甚至尝试 "), _c('code', [_vm._v("qwen3:30b-a3b")]), _vm._v("（MoE）")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、部署-ollama-服务"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、部署-ollama-服务"
    }
  }, [_vm._v("#")]), _vm._v(" 二、部署 Ollama 服务")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-1-拉取官方镜像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-拉取官方镜像"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1 拉取官方镜像")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" pull ollama/ollama\n")])])]), _c('p', [_vm._v("镜像大小约 "), _c('strong', [_vm._v("8~9GB")]), _vm._v("。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-2-启动容器-gpu-模式"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-启动容器-gpu-模式"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2 启动容器（GPU 模式）")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" run "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--name")]), _vm._v(" ollama "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--gpus")]), _vm._v(" all "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("11434")]), _vm._v(":11434 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" ollama-data:/root/.ollama ollama/ollama\n")])])]), _c('p', [_vm._v("参数说明：")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("含义")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("-d")])]), _vm._v(" "), _c('td', [_vm._v("后台运行")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("--name ollama")])]), _vm._v(" "), _c('td', [_vm._v("容器名称")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("--gpus all")])]), _vm._v(" "), _c('td', [_vm._v("允许容器使用所有 GPU")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("-p 11434:11434")])]), _vm._v(" "), _c('td', [_vm._v("映射 API 端口")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("-v ollama-data:/root/.ollama")])]), _vm._v(" "), _c('td', [_vm._v("命名卷持久化模型数据")])])])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("注意：")]), _vm._v(" 如果报错 "), _c('code', [_vm._v("could not select device driver")]), _vm._v("，说明 NVIDIA Container Toolkit 未安装，需先安装或去掉 "), _c('code', [_vm._v("--gpus all")]), _vm._v(" 用 CPU 模式运行。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-3-验证容器状态"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-3-验证容器状态"
    }
  }, [_vm._v("#")]), _vm._v(" 2.3 验证容器状态")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ps")]), _vm._v("\n")])])]), _c('p', [_vm._v("应看到 "), _c('code', [_vm._v("ollama")]), _vm._v(" 容器在运行。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、拉取千问-qwen-模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、拉取千问-qwen-模型"
    }
  }, [_vm._v("#")]), _vm._v(" 三、拉取千问（Qwen）模型")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-1-选择适合显存的模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-1-选择适合显存的模型"
    }
  }, [_vm._v("#")]), _vm._v(" 3.1 选择适合显存的模型")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("模型")]), _vm._v(" "), _c('th', [_vm._v("参数量")]), _vm._v(" "), _c('th', [_vm._v("推荐显存")]), _vm._v(" "), _c('th', [_vm._v("用途")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("qwen3:8b")])]), _vm._v(" "), _c('td', [_vm._v("80 亿")]), _vm._v(" "), _c('td', [_vm._v("8GB+")]), _vm._v(" "), _c('td', [_vm._v("日常对话、通用任务")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("qwen3.5:9b")])]), _vm._v(" "), _c('td', [_vm._v("90 亿")]), _vm._v(" "), _c('td', [_vm._v("8GB+")]), _vm._v(" "), _c('td', [_vm._v("更强的推理能力")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("qwen3:14b")])]), _vm._v(" "), _c('td', [_vm._v("140 亿")]), _vm._v(" "), _c('td', [_vm._v("12GB+")]), _vm._v(" "), _c('td', [_vm._v("更精准的回答")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("qwen3-coder:14b")])]), _vm._v(" "), _c('td', [_vm._v("140 亿")]), _vm._v(" "), _c('td', [_vm._v("12GB+")]), _vm._v(" "), _c('td', [_vm._v("代码生成专用")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("qwen3:30b-a3b")])]), _vm._v(" "), _c('td', [_vm._v("300 亿（MoE）")]), _vm._v(" "), _c('td', [_vm._v("16GB+")]), _vm._v(" "), _c('td', [_vm._v("大参数，每 token 只激活 3B")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-2-执行拉取"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-2-执行拉取"
    }
  }, [_vm._v("#")]), _vm._v(" 3.2 执行拉取")]), _vm._v(" "), _c('p', [_vm._v("以 "), _c('strong', [_vm._v("Qwen3.5 9B")]), _vm._v(" 为例：")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("exec")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-it")]), _vm._v(" ollama ollama pull qwen3.5:9b\n")])])]), _c('p', [_vm._v("模型大小约 "), _c('strong', [_vm._v("6~7GB")]), _vm._v("，下载时间取决于网络速度。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-3-查看已下载模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-3-查看已下载模型"
    }
  }, [_vm._v("#")]), _vm._v(" 3.3 查看已下载模型")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("exec")]), _vm._v(" ollama ollama list\n")])])]), _c('h2', {
    attrs: {
      "id": "四、验证-gpu-加速"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、验证-gpu-加速"
    }
  }, [_vm._v("#")]), _vm._v(" 四、验证 GPU 加速")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-1-检查显存占用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-1-检查显存占用"
    }
  }, [_vm._v("#")]), _vm._v(" 4.1 检查显存占用")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("exec")]), _vm._v(" ollama nvidia-smi\n")])])]), _c('p', [_vm._v("期望输出：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 560.35.02              Driver Version: 560.94       CUDA Version: 12.6     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                  Memory-Usage | GPU-Util  Compute M. |\n|   0  NVIDIA GeForce RTX 4060 Ti      7657MiB / 16380MiB      0%   Default            |\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|    0   N/A  N/A       168      C   /llama-server                                N/A    |\n+---------------------------------------------------------------------------------------+\n")])])]), _c('p', [_vm._v("关键指标：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("Memory-Usage")]), _vm._v(" 有数值（模型已加载进显存）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("Process name")]), _vm._v(" 中出现 "), _c('code', [_vm._v("/llama-server")])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_4-2-命令行对话测试"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-2-命令行对话测试"
    }
  }, [_vm._v("#")]), _vm._v(" 4.2 命令行对话测试")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("exec")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-it")]), _vm._v(" ollama ollama run qwen3.5:9b\n")])])]), _c('p', [_vm._v("出现 "), _c('code', [_vm._v(">>>")]), _vm._v(" 提示符后输入：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v(">>> 你好\n")])])]), _c('p', [_c('strong', [_vm._v("正常响应")]), _vm._v(" = 模型加载成功且 GPU 生效。")]), _vm._v(" "), _c('p', [_vm._v("速度参考（4060 Ti）：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("GPU 模式：20~50 tokens/秒")]), _vm._v(" "), _c('li', [_vm._v("CPU 模式：2~5 tokens/秒（明显卡顿）")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、部署-open-webui-可选"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、部署-open-webui-可选"
    }
  }, [_vm._v("#")]), _vm._v(" 五、部署 Open WebUI（可选）")]), _vm._v(" "), _c('p', [_vm._v("命令行交互不够方便，可部署网页版界面。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-1-启动-open-webui-容器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-1-启动-open-webui-容器"
    }
  }, [_vm._v("#")]), _vm._v(" 5.1 启动 Open WebUI 容器")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" run "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3000")]), _vm._v(":8080 --add-host"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("host.docker.internal:host-gateway "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" open-webui:/app/backend/data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--name")]), _vm._v(" open-webui "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--restart")]), _vm._v(" always ghcr.io/open-webui/open-webui:main\n")])])]), _c('p', [_vm._v("镜像大小约 "), _c('strong', [_vm._v("3~4GB")]), _vm._v("。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-2-访问界面"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-2-访问界面"
    }
  }, [_vm._v("#")]), _vm._v(" 5.2 访问界面")]), _vm._v(" "), _c('p', [_vm._v("浏览器打开：")]), _vm._v(" "), _c('div', {
    staticClass: "language-text extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("http://localhost:3000\n")])])]), _c('p', [_vm._v("首次使用需注册账号，然后即可在网页中选择模型、进行对话、上传文件等。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_5-3-open-webui-功能"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-3-open-webui-功能"
    }
  }, [_vm._v("#")]), _vm._v(" 5.3 Open WebUI 功能")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("类似 ChatGPT 的聊天界面")]), _vm._v(" "), _c('li', [_vm._v("一键切换本地模型")]), _vm._v(" "), _c('li', [_vm._v("对话历史保存")]), _vm._v(" "), _c('li', [_vm._v("文件上传与知识库（RAG）")]), _vm._v(" "), _c('li', [_vm._v("多用户支持")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "六、docker-compose-一键编排-推荐"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、docker-compose-一键编排-推荐"
    }
  }, [_vm._v("#")]), _vm._v(" 六、Docker Compose 一键编排（推荐）")]), _vm._v(" "), _c('p', [_vm._v("将 Ollama + Open WebUI 写为 "), _c('code', [_vm._v("docker-compose.yml")]), _vm._v("：")]), _vm._v(" "), _c('div', {
    staticClass: "language-yaml extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-yaml"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("version")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'3.8'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("services")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("ollama")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("image")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" ollama/ollama\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("container_name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" ollama\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("ports")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"11434:11434\"")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("volumes")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" ollama"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("/root/.ollama\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 有 NVIDIA GPU 时启用：")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("runtime")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" nvidia\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("deploy")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("resources")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("reservations")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n          "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("devices")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("driver")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" nvidia\n              "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("count")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" all\n              "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("capabilities")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("gpu"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("open-webui")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("image")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" ghcr.io/open"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("webui/open"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("webui"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("main\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("container_name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" open"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("webui\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("ports")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"3000:8080\"")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("environment")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" OLLAMA_BASE_URL=http"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("//ollama"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("11434")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("volumes")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" open"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("webui"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v("data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("/app/backend/data\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("depends_on")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("-")]), _vm._v(" ollama\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("restart")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" always\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("volumes")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("ollama-data")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token key atrule"
    }
  }, [_vm._v("open-webui-data")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n")])])]), _c('p', [_vm._v("启动：")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("docker")]), _vm._v(" compose up "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "七、常用命令速查"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、常用命令速查"
    }
  }, [_vm._v("#")]), _vm._v(" 七、常用命令速查")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("操作")]), _vm._v(" "), _c('th', [_vm._v("命令")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("查看运行中的容器")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker ps")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("查看 Ollama 日志")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker logs ollama")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("查看已下载模型")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker exec ollama ollama list")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("删除某个模型")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker exec ollama ollama rm qwen3.5:9b")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("停止 Ollama")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker stop ollama")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("启动 Ollama")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker start ollama")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("删除容器（保留数据卷）")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker rm ollama")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("进入容器内部")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker exec -it ollama /bin/bash")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("查看 GPU 状态")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("docker exec ollama nvidia-smi")])])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "八、常见问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#八、常见问题"
    }
  }, [_vm._v("#")]), _vm._v(" 八、常见问题")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Q1：模型下载很慢怎么办？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("检查网络连接")]), _vm._v(" "), _c('li', [_vm._v("或配置 Docker 镜像加速器（如阿里云、中科大镜像源）")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Q2：容器重启后模型不见了？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("确认启动时使用了 "), _c('code', [_vm._v("-v ollama-data:/root/.ollama")]), _vm._v(" 数据卷挂载")]), _vm._v(" "), _c('li', [_vm._v("如果没用卷，模型只存在于容器内部，删除容器即丢失")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Q3：GPU 没生效，模型在 CPU 上跑？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("宿主机 "), _c('code', [_vm._v("nvidia-smi")]), _vm._v(" 是否正常输出")]), _vm._v(" "), _c('li', [_vm._v("NVIDIA Container Toolkit 是否安装")]), _vm._v(" "), _c('li', [_vm._v("Docker Desktop 设置中是否启用了 WSL2 集成")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Q4：想让局域网其他设备访问？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("将端口映射改为 "), _c('code', [_vm._v("-p 0.0.0.0:11434:11434")])]), _vm._v(" "), _c('li', [_vm._v("并确保防火墙放行")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Q5：Qwen3.5 输出很长的 Thinking Process 怎么关？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("在对话中输入 "), _c('code', [_vm._v("/set parameter no_think true")])]), _vm._v(" "), _c('li', [_vm._v("或重启容器时加环境变量 "), _c('code', [_vm._v("-e OLLAMA_NO_THINK=true")])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "九、总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#九、总结"
    }
  }, [_vm._v("#")]), _vm._v(" 九、总结")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("步骤")]), _vm._v(" "), _c('th', [_vm._v("耗时")]), _vm._v(" "), _c('th', [_vm._v("状态")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("拉取 Ollama 镜像")]), _vm._v(" "), _c('td', [_vm._v("~5 分钟")]), _vm._v(" "), _c('td', [_vm._v("✅ 必需")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("启动 Ollama 容器")]), _vm._v(" "), _c('td', [_vm._v("< 1 分钟")]), _vm._v(" "), _c('td', [_vm._v("✅ 必需")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("拉取 Qwen 模型")]), _vm._v(" "), _c('td', [_vm._v("~5-10 分钟")]), _vm._v(" "), _c('td', [_vm._v("✅ 必需")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("验证 GPU 加速")]), _vm._v(" "), _c('td', [_vm._v("< 1 分钟")]), _vm._v(" "), _c('td', [_vm._v("✅ 推荐")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("部署 Open WebUI")]), _vm._v(" "), _c('td', [_vm._v("~10 分钟")]), _vm._v(" "), _c('td', [_vm._v("⚪ 可选")])])])]), _vm._v(" "), _c('p', [_vm._v("至此，你已在本地拥有一套完整的 "), _c('strong', [_vm._v("大模型推理环境")]), _vm._v("，所有数据保存在本地，无需联网即可对话。")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/ai/ollama_qwen_deploy_guide.md?vue&type=template&id=4f16814b

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./docs/ai/ollama_qwen_deploy_guide.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ollama_qwen_deploy_guide = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);