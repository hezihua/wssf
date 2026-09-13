import Link from 'next/link'
import { getAllPosts, getCategoryNav, getIndexIntro } from '@/lib/posts'
import { resolveCategoryTitle, site } from '@/lib/site'

export default function HomePage() {
  const intro = getIndexIntro()
  const categories = getCategoryNav().filter((c) => c.posts.length > 0)
  const latest = getAllPosts().slice(0, 6)

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(120deg, transparent 0%, transparent 42%, color-mix(in oklab, var(--color-teal) 8%, transparent) 42%, transparent 70%), repeating-linear-gradient(-18deg, transparent, transparent 28px, color-mix(in oklab, var(--color-ink) 4%, transparent) 28px, color-mix(in oklab, var(--color-ink) 4%, transparent) 29px)',
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-teal">
            {site.tagline}
          </p>
          <h1 className="reveal reveal-delay mt-4 max-w-3xl font-display text-6xl leading-[0.95] tracking-tight text-ink md:text-8xl">
            {site.name}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-8 text-ink-soft md:text-xl">
            {site.description}
            <br />
            <span className="text-base">{intro.replace(/^#.*$/gm, '').trim() || '记录学习的点点滴滴'}</span>
          </p>
          <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-3">
            <Link
              href="/notes/"
              className="inline-flex items-center bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-teal"
            >
              浏览笔记
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-ink/20 bg-transparent px-5 py-3 text-sm font-medium text-ink hover:border-teal hover:text-teal"
            >
              GitHub 主页
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl tracking-tight text-ink">栏目</h2>
          </div>
        </div>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/notes/${cat.posts[0].slug}/`}
              className="group border-t border-line pt-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink group-hover:text-teal">
                  {cat.title}
                </h3>
                <span className="text-xs tabular-nums text-ink-soft">{cat.posts.length}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{cat.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/35">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-4xl tracking-tight text-ink">最近更新</h2>
          <p className="mt-2 text-ink-soft">按日期排序的最新笔记。</p>
          <ul className="mt-8 divide-y divide-line">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/notes/${post.slug}/`}
                  className="flex flex-col gap-1 py-5 hover:text-teal md:flex-row md:items-baseline md:justify-between"
                >
                  <span className="font-medium text-ink hover:text-teal">{post.title}</span>
                  <span className="text-sm text-ink-soft">
                    {resolveCategoryTitle(post.category)}
                    {post.date ? ` · ${post.date}` : ''}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
