import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { site } from '@/lib/site'

const withBase = (href: string) => href

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href={withBase('/')} className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink group-hover:text-teal">
            {site.name}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-soft sm:inline">
            notes
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-ink-soft">
          <Link href="/" className="hover:text-teal">
            首页
          </Link>
          <Link href="/notes/" className="hover:text-teal">
            全部笔记
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal"
          >
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-ink-soft md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-teal">
            GitHub
          </a>
          <a href={site.juejin} target="_blank" rel="noreferrer" className="hover:text-teal">
            掘金
          </a>
        </div>
      </div>
    </footer>
  )
}
