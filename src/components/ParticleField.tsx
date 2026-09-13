'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  base: number
  tint: 0 | 1
}

function readThemeColor(varName: string, fallback: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  return raw || fallback
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace('#', '')
  if (h.length !== 6) return `rgba(34, 211, 238, ${alpha})`
  const n = Number.parseInt(h, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const maybeCtx = el.getContext('2d', { alpha: true })
    if (!maybeCtx) return
    const ctx: CanvasRenderingContext2D = maybeCtx

    const mouse = { x: -9999, y: -9999, active: false }
    let particles: Particle[] = []
    let raf = 0
    let running = true
    let width = 0
    let height = 0
    let dpr = 1

    const attractRadius = 160
    const attractStrength = 0.085

    function countForSize(w: number, h: number) {
      return Math.min(140, Math.max(48, Math.floor((w * h) / 14000)))
    }

    function spawn(w: number, h: number) {
      const n = countForSize(w, h)
      particles = Array.from({ length: n }, () => {
        const r = 1 + Math.random() * 1.8
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r,
          base: 0.25 + Math.random() * 0.55,
          tint: (Math.random() > 0.72 ? 1 : 0) as 0 | 1,
        }
      })
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      el.width = Math.floor(width * dpr)
      el.height = Math.floor(height * dpr)
      el.style.width = `${width}px`
      el.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn(width, height)
    }

    function onMove(e: PointerEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    function onLeave() {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    function onVisibility() {
      running = document.visibilityState === 'visible'
      if (running) raf = requestAnimationFrame(frame)
    }

    function frame() {
      if (!running) return

      const isDark = document.documentElement.classList.contains('dark')
      const teal = readThemeColor('--teal-bright', isDark ? '#67e8f9' : '#22d3ee')
      const accent = readThemeColor('--accent', isDark ? '#60a5fa' : '#2563eb')
      const ink = readThemeColor('--ink', isDark ? '#e8eef4' : '#0b1220')

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy) || 1
          if (dist < attractRadius) {
            const force = (1 - dist / attractRadius) * attractStrength
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.vx *= 0.96
        p.vy *= 0.96
        p.x += p.vx + Math.sin((p.y + performance.now() * 0.001) * 0.01) * 0.08
        p.y += p.vy + Math.cos((p.x + performance.now() * 0.001) * 0.01) * 0.08

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      // soft links near cursor / neighbors
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > 110) continue
          const alpha = (1 - dist / 110) * (isDark ? 0.16 : 0.1)
          ctx.strokeStyle = hexToRgba(teal, alpha)
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      for (const p of particles) {
        const near =
          mouse.active && Math.hypot(mouse.x - p.x, mouse.y - p.y) < attractRadius
        const fill = near ? teal : p.tint ? accent : ink
        ctx.beginPath()
        ctx.fillStyle = hexToRgba(fill, near ? 0.85 : p.base * (isDark ? 0.55 : 0.35))
        ctx.arc(p.x, p.y, near ? p.r * 1.35 : p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, attractRadius)
        glow.addColorStop(0, hexToRgba(teal, isDark ? 0.08 : 0.05))
        glow.addColorStop(1, hexToRgba(teal, 0))
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, attractRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(frame)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  )
}
