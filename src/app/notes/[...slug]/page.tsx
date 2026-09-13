import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import { renderMarkdown } from '@/lib/markdown'
import { getAllPosts, getCategoryNav, getPost } from '@/lib/posts'
import { resolveCategoryTitle } from '@/lib/site'

type Props = {
  params: Promise<{ slug: string[] }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug.split('/'),
  }))
}

function normalizeSlug(slug: string[]) {
  return slug.map((part) => {
    try {
      return decodeURIComponent(part)
    } catch {
      return part
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(normalizeSlug(slug))
  if (!post) return { title: '未找到' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  const post = getPost(normalizeSlug(slug))
  if (!post) notFound()

  const html = await renderMarkdown(post.content)
  const nav = getCategoryNav()
    .filter((c) => c.posts.length > 0)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      posts: c.posts.map((p) => ({ slug: p.slug, title: p.title })),
    }))

  const siblings = getAllPosts().filter((p) => p.category === post.category)
  const idx = siblings.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? siblings[idx - 1] : null
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[240px_1fr]">
      <Sidebar items={nav} />
      <article>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          {resolveCategoryTitle(post.category) || '笔记'}
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          {post.author ? `${post.author}` : 'hezihua'}
          {post.date ? ` · ${post.date}` : ''}
        </p>

        <div
          className="prose-note mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link href={`/notes/${prev.slug}/`} className="group block">
              <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">上一篇</span>
              <p className="mt-1 font-medium text-ink group-hover:text-teal">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/notes/${next.slug}/`} className="group block text-right sm:justify-self-end">
              <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">下一篇</span>
              <p className="mt-1 font-medium text-ink group-hover:text-teal">{next.title}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </div>
  )
}
