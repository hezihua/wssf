export type CategoryMeta = {
  /** 展示用栏目 id */
  slug: string
  title: string
  blurb: string
  /** 合并进来的 content 目录名 */
  sources: string[]
}

/** 侧栏 / 首页栏目（多目录可归入同一栏目） */
export const categories: CategoryMeta[] = [
  {
    slug: 'ai',
    title: 'AI',
    blurb: 'Agent、本地模型与机器人实践',
    sources: ['ai'],
  },
  {
    slug: '工程化',
    title: '工程化',
    blurb: '工程基建、调试与代码片段',
    sources: ['基础建设', '代码'],
  },
  {
    slug: '运维',
    title: '运维',
    blurb: 'Linux、Docker 与 Nginx',
    sources: ['linux', 'docker', 'nginx'],
  },
  {
    slug: '工具与排障',
    title: '工具与排障',
    blurb: '常用工具与环境疑难排查',
    sources: ['有用的工具', '问题解决'],
  },
  {
    slug: '项目与副业',
    title: '项目与副业',
    blurb: '项目回顾与变现实践',
    sources: ['项目总结', '关于副业'],
  },
  {
    slug: '面试',
    title: '面试',
    blurb: '面试资料与题库整理',
    sources: ['面试'],
  },
]

export function resolveCategoryTitle(folder: string): string {
  return categories.find((c) => c.sources.includes(folder))?.title || folder
}

export const site = {
  name: '前端小小栈',
  tagline: '记录学习与实践',
  description: 'TypeScript · AI · 工程化 · 运维笔记',
  author: 'hezihua',
  github: 'https://github.com/hezihua',
  juejin: 'https://juejin.cn/user/1081575170131006',
}

/** 文章展示标题覆盖（文件名 → 中文标题）；无则用 frontmatter.title */
export const titleOverrides: Record<string, string> = {
  'ai/taskmaster': 'taskmaster',
  'ai/ollama_qwen_deploy_guide': 'Ollama + Qwen 部署',
  'ai/piwechat': 'Pi 微信机器人',
  '关于副业/stripe-supabase-key': 'Stripe / Supabase',
  '基础建设/1': 'verdaccio 私有仓库',
  '基础建设/2': 'vue + vscode 断点调试',
  '基础建设/3': 'gitflow',
  'linux/1': '常用命令 1',
  'linux/2': '常用命令 2',
  'linux/3': '常用命令 3',
  'linux/4': 'systemd',
  'linux/5': '软件包管理',
  'linux/6': 'pm2 常用命令',
  'linux/7': 'fnm 离线安装',
  'docker/1': '镜像 / 容器',
  'docker/2': '数据卷 / 网络',
  'docker/3': 'Dockerfile',
  'docker/4': '镜像源配置',
  'nginx/1': '一次编译',
  'nginx/2': '上传文件',
  'nginx/3': '作用',
  'nginx/4': '应用场景',
  'nginx/5': '自签名证书',
  'nginx/6': 'Windows 脚本',
  '有用的工具/1': '常用链接',
  '代码/crypt': 'RSA 加密',
  '代码/signature': '数字签名',
  '问题解决/1': 'GitHub 连接问题',
  '问题解决/go': 'WSL 安装 Go',
  '问题解决/openclaw': 'openclaw 连飞书',
  '问题解决/pr': '从 Fork 向上游开 PR',
  '问题解决/v2rayN': 'v2rayN 指南',
  '面试/1': '面试资料',
  '项目总结/list': '项目汇总',
  '项目总结/llama-factory': 'llama-factory 部署',
  '项目总结/nextjs': 'Next.js 项目',
  '项目总结/regist': 'Windows 自定义协议',
}
