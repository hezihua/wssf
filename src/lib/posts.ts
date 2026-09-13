import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { categories, titleOverrides } from './site'

const contentRoot = path.join(process.cwd(), 'content')

export type PostMeta = {
  slug: string
  category: string
  title: string
  author?: string
  date?: string
  excerpt: string
}

export type Post = PostMeta & {
  content: string
}

function walkMarkdown(dir: string, base = ''): string[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'public' || entry.name.startsWith('.')) continue
      files.push(...walkMarkdown(abs, rel))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(rel)
    }
  }
  return files
}

function toSlug(fileRel: string) {
  return fileRel.replace(/\.md$/, '').replace(/\\/g, '/')
}

function readPost(fileRel: string): Post {
  const abs = path.join(contentRoot, fileRel)
  const raw = fs.readFileSync(abs, 'utf8')
  const { data, content } = matter(raw)
  const slug = toSlug(fileRel)
  const category = slug.includes('/') ? slug.split('/')[0] : ''
  const title =
    titleOverrides[slug] ||
    (typeof data.title === 'string' ? data.title : slug.split('/').pop() || slug)

  const excerpt =
    content
      .replace(/^#.+$/gm, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`>#-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120) || '暂无摘要'

  return {
    slug,
    category,
    title,
    author: typeof data.author === 'string' ? data.author : undefined,
    date: typeof data.date === 'string' ? data.date : undefined,
    excerpt,
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  return walkMarkdown(contentRoot)
    .map((file) => {
      const { content: _c, ...meta } = readPost(file)
      return meta
    })
    .filter((p) => p.slug !== 'index')
    .sort((a, b) => {
      const da = a.date || ''
      const db = b.date || ''
      if (da !== db) return db.localeCompare(da)
      return a.slug.localeCompare(b.slug, 'zh-CN')
    })
}

export function getPost(slugParts: string[]): Post | null {
  const slug = slugParts.join('/')
  const fileRel = `${slug}.md`
  const abs = path.join(contentRoot, fileRel)
  if (!fs.existsSync(abs)) return null
  return readPost(fileRel)
}

export function getPostsByCategory(category: string): PostMeta[] {
  const group = categories.find((c) => c.slug === category)
  const sources = group?.sources ?? [category]
  return getAllPosts().filter((p) => sources.includes(p.category))
}

export function getCategoryNav() {
  const posts = getAllPosts()
  return categories.map((cat) => ({
    ...cat,
    posts: posts.filter((p) => cat.sources.includes(p.category)),
  }))
}

export function getIndexIntro(): string {
  const abs = path.join(contentRoot, 'index.md')
  if (!fs.existsSync(abs)) return '记录学习的点点滴滴'
  const { content } = matter(fs.readFileSync(abs, 'utf8'))
  return content.trim()
}
