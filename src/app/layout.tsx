import type { Metadata } from 'next'
import { CornerNika } from '@/components/CornerNika'
import { MarketStrip } from '@/components/MarketStrip'
import { ParticleField } from '@/components/ParticleField'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { site } from '@/lib/site'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
}

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <ParticleField />
        <div className="grain" aria-hidden />
        <div className="relative z-10">
          <SiteHeader />
          <MarketStrip />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <CornerNika />
      </body>
    </html>
  )
}
