import Link from 'next/link'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import { getAllPosts, getCategoryNav } from '@/lib/posts'
import { resolveCategoryTitle } from '@/lib/site'

export const metadata: Metadata = {
  title: '全部笔记',
}

export default function NotesIndexPage() {
  const posts = getAllPosts()
  const nav = getCategoryNav()
    .filter((c) => c.posts.length > 0)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      posts: c.posts.map((p) => ({ slug: p.slug, title: p.title })),
    }))

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[240px_1fr]">
      <Sidebar items={nav} />
      <div>
        <h1 className="font-display text-5xl tracking-tight text-ink">全部笔记</h1>
        <ul className="mt-10 divide-y divide-line">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link href={`/notes/${post.slug}/`} className="group block">
                <h2 className="text-xl font-medium text-ink group-hover:text-teal">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {resolveCategoryTitle(post.category)}
                  {post.date ? ` · ${post.date}` : ''}
                  {post.author ? ` · ${post.author}` : ''}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
