import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
      <h1 className="font-display text-5xl text-ink">404</h1>
      <p className="mt-4 text-ink-soft">没有找到这篇文章。</p>
      <Link href="/" className="mt-8 inline-block text-teal hover:underline">
        返回首页
      </Link>
    </div>
  )
}
