# 前端小小栈

个人学习笔记站点，记录 AI、工程化、运维与项目实践。

**在线访问：** https://hezihua.github.io/wssf/

- GitHub：https://github.com/hezihua
- 掘金：https://juejin.cn/user/1081575170131006

## 技术栈

- Next.js（App Router）静态导出
- Tailwind CSS
- Markdown（remark / rehype / Shiki）

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 构建与部署

```bash
npm run deploy
```

一次会做两件事：

1. **源码** → 提交并推送到 `hezihua/wssf` 的 `master`
2. **站点** → 构建后强制推送到 `gh-pages`（https://hezihua.github.io/wssf/）

也可分开执行：

```bash
npm run build    # 仅构建到 out/
```

> GitHub Pages 会忽略 `_` 开头目录；部署脚本会把 `_next` 重命名为 `next`。

## 目录结构

```
content/          Markdown 文章
public/           静态资源（含 .nojekyll）
src/app/          页面路由
src/components/   页头、侧栏、主题切换等
src/lib/          文章扫描、栏目合并、Markdown 渲染
src/styles/       全局样式与 light/dark 主题
```

## 写文章

在 `content/<目录>/` 下新增 `.md` 文件即可。栏目在 `src/lib/site.ts` 中配置，多个目录可合并为一个展示栏目。

当前栏目：

| 栏目 | 来源目录 |
|------|----------|
| AI | `ai` |
| 工程化 | `基础建设`、`代码` |
| 运维 | `linux`、`docker`、`nginx` |
| 工具与排障 | `有用的工具`、`问题解决` |
| 项目与副业 | `项目总结`、`关于副业` |
| 面试 | `面试` |

文章标题可在 `src/lib/site.ts` 的 `titleOverrides` 中覆盖。

## 主题

支持 light / dark 切换，偏好保存在 `localStorage`；首次访问跟随系统。
