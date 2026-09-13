'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type NavItem = {
  slug: string
  title: string
  posts: { slug: string; title: string }[]
}

export function Sidebar({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="mb-4 inline-flex items-center gap-2 border border-line bg-paper-deep/50 px-3 py-2 text-sm text-ink lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? '收起目录' : '展开目录'}
      </button>

      <aside
        className={`${open ? 'block' : 'hidden'} lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto`}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          栏目
        </p>
        <ul className="space-y-4 text-sm">
          {items.map((cat) => (
            <li key={cat.slug}>
              <p className="mb-1.5 font-medium text-ink">{cat.title}</p>
              <ul className="space-y-1 border-l border-line pl-3">
                {cat.posts.map((post) => {
                  const href = `/notes/${post.slug}/`
                  const active =
                    pathname === href ||
                    pathname === `/notes/${post.slug}` ||
                    pathname?.endsWith(`/notes/${post.slug}/`)
                  return (
                    <li key={post.slug}>
                      <Link
                        href={href}
                        className={
                          active
                            ? 'text-teal'
                            : 'text-ink-soft hover:text-teal'
                        }
                        onClick={() => setOpen(false)}
                      >
                        {post.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
