import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // 仅 build/部署时静态导出；dev 开启 export 会导致动态路由报 generateStaticParams 错
  ...(isProd ? { output: 'export' as const } : {}),
  basePath: isProd ? '/wssf' : '',
  assetPrefix: isProd ? '/wssf/' : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
