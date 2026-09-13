'use client'

import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'

const SYMBOLS = [
  { proName: 'FOREXCOM:XAUUSD', title: '黄金' },
  { proName: 'TVC:DXY', title: '美元指数' },
  { proName: 'BINANCE:BTCUSDT', title: 'BTC' },
  { proName: 'FOREXCOM:SPXUSD', title: '标普500' },
  { proName: 'NASDAQ:IXIC', title: '纳斯达克' },
]

function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** 页头下方轻量行情条：黄金 / 美元 / BTC / 标普 / 纳斯达克 */
export function MarketStrip() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(readTheme())
    const obs = new MutationObserver(() => setTheme(readTheme()))
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    host.innerHTML = ''
    const widget = document.createElement('div')
    widget.className = 'tradingview-widget-container__widget'
    host.appendChild(widget)

    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.type = 'text/javascript'
    script.text = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: false,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: theme,
      locale: 'zh_CN',
    })
    host.appendChild(script)

    return () => {
      host.innerHTML = ''
    }
  }, [theme])

  return (
    <div className="market-strip w-full border-b border-line/70">
      <div ref={hostRef} className="tradingview-widget-container w-full" />
    </div>
  )
}
