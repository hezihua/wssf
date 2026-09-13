'use client'

import { useState, type MouseEvent } from 'react'

type Active = 'none' | 'neck' | 'feet' | 'handR' | 'handL' | 'belly'

/**
 * 固定右下角。一次只能拉长一个部位，全部一步到位，再点收回。
 */
export function CornerNika() {
  const [active, setActive] = useState<Active>('none')

  function toggle(part: Exclude<Active, 'none'>, e: MouseEvent) {
    e.stopPropagation()
    setActive((prev) => (prev === part ? 'none' : part))
  }

  const neckOn = active === 'neck'
  const feetOn = active === 'feet'
  const handROn = active === 'handR'
  const handLOn = active === 'handL'
  const bellyOn = active === 'belly'

  const tall = neckOn || feetOn || handROn || bellyOn
  const wide = handLOn

  const TALL_H = 920
  const WIDE_W = 920
  const vbW = wide ? WIDE_W : bellyOn ? 520 : 280
  const vbH = tall ? TALL_H : bellyOn ? 560 : wide ? 320 : 280

  // 宽画布时身体靠右，便于左手拉满
  const cx = wide ? vbW - 140 : vbW / 2
  const ground = vbH - 20
  const headR = 40
  const topPad = 28

  const bellyRy = bellyOn ? Math.min(200, vbH * 0.38) : 32
  const bellyRx = bellyOn ? Math.min(200, vbW * 0.38) : 38

  let headCy: number
  let neckLen: number
  let shoulderY: number
  let hipY: number
  let bellyCy: number
  let footLenL: number
  let footLenR: number

  if (neckOn) {
    const shortFoot = 36
    hipY = ground - shortFoot
    bellyCy = hipY - 32 * 0.15
    shoulderY = bellyCy - 32 * 0.55
    neckLen = Math.max(24, shoulderY - (topPad + headR))
    headCy = shoulderY - neckLen
    footLenL = shortFoot
    footLenR = shortFoot
  } else if (feetOn) {
    headCy = topPad + headR
    neckLen = 16
    shoulderY = headCy + neckLen
    bellyCy = shoulderY + 32 * 0.85
    hipY = bellyCy + 32 * 0.55
    const footRoom = Math.max(24, ground - hipY)
    footLenL = footRoom
    footLenR = footRoom
  } else if (handROn) {
    // 身体偏下，右手一步举到顶（长度对齐满配脖子）
    const shortFoot = 36
    hipY = ground - shortFoot
    bellyCy = hipY - 32 * 0.15
    shoulderY = bellyCy - 32 * 0.55
    neckLen = 16
    headCy = shoulderY - neckLen
    footLenL = shortFoot
    footLenR = shortFoot
  } else if (handLOn) {
    // 身体靠右，左手一步拉到左边缘
    headCy = 96
    neckLen = 16
    shoulderY = headCy + neckLen
    bellyCy = 168
    hipY = 196
    footLenL = 36
    footLenR = 36
  } else if (bellyOn) {
    // 肚子撑大，头贴上沿；脚露在肚子下方
    footLenL = 40
    footLenR = 40
    hipY = ground - footLenL
    bellyCy = hipY - bellyRy - 8
    const overlap = 18
    headCy = bellyCy - bellyRy - headR + overlap
    neckLen = 14
    shoulderY = bellyCy - bellyRy + 12
  } else {
    headCy = 96
    neckLen = 16
    shoulderY = headCy + neckLen
    bellyCy = 168
    hipY = 196
    footLenL = 36
    footLenR = 36
  }

  // 手：一步到位
  const armREndX = handROn ? cx + 36 : cx + 24 + 70
  const armREndY = handROn ? topPad + 24 : shoulderY + 6
  const armLEndX = handLOn ? 36 : cx - 24 - 52
  const armLEndY = handLOn ? shoulderY + 8 : shoulderY + 20

  const stageClass = [
    'nika-stage',
    tall ? 'nika-stage-tall' : '',
    wide ? 'nika-stage-wide' : '',
    bellyOn ? 'nika-stage-belly' : '',
    !tall && !wide && !bellyOn ? 'nika-stage-corner' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={stageClass} role="presentation">
      <div className="nika-panel">
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="nika-figure"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          preserveAspectRatio={wide ? 'xMaxYMid meet' : 'xMidYMax meet'}
        >
          <title>一次只拉一个部位，全部一步到位</title>
          <defs>
            <radialGradient id="nikaBattleGlow" cx="50%" cy="78%" r="55%">
              <stop offset="0%" stopColor="#fff7c2" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#fbbf24" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="nikaBattleSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe0bd" />
              <stop offset="100%" stopColor="#f0b27a" />
            </linearGradient>
          </defs>

          <ellipse cx={cx} cy={bellyCy} rx="110" ry="120" fill="url(#nikaBattleGlow)" />

          <g className="nika-hit" onClick={(e) => toggle('belly', e)}>
            <ellipse cx={cx} cy={bellyCy} rx={bellyRx} ry={bellyRy} fill="#ef4444" />
            <path
              d={`M${cx - bellyRx * 0.9} ${bellyCy + 2} c ${bellyRx * 0.4} ${bellyRy * 0.35} ${bellyRx * 1.4} ${bellyRy * 0.35} ${bellyRx * 1.8} 0`}
              stroke="#fbbf24"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* 脚画在肚子之后，露在肚子下方 */}
          <g className="nika-hit" onClick={(e) => toggle('feet', e)}>
            <path
              d={`M${cx - 28} ${hipY} L${cx - 32} ${hipY + footLenL} L${cx - 14} ${hipY + footLenL} L${cx - 18} ${hipY} Z`}
              fill="#1d4ed8"
            />
            <ellipse cx={cx - 23} cy={hipY + footLenL + 2} rx="14" ry="6" fill="#111827" />
          </g>
          <g className="nika-hit" onClick={(e) => toggle('feet', e)}>
            <path
              d={`M${cx + 18} ${hipY} L${cx + 14} ${hipY + footLenR} L${cx + 32} ${hipY + footLenR} L${cx + 28} ${hipY} Z`}
              fill="#1d4ed8"
            />
            <ellipse cx={cx + 23} cy={hipY + footLenR + 2} rx="14" ry="6" fill="#111827" />
          </g>

          <g className="nika-hit" onClick={(e) => toggle('handR', e)}>
            <path
              d={`M${cx + 28} ${shoulderY + 4} Q ${(cx + 28 + armREndX) / 2} ${(shoulderY + armREndY) / 2} ${armREndX} ${armREndY}`}
              fill="none"
              stroke="#f0b27a"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <circle cx={armREndX} cy={armREndY} r="16" fill="#f0b27a" stroke="#d97706" strokeWidth="1.3" />
          </g>

          <g className="nika-hit" onClick={(e) => toggle('handL', e)}>
            <path
              d={`M${cx - 28} ${shoulderY + 4} Q ${(cx - 28 + armLEndX) / 2} ${(shoulderY + armLEndY) / 2} ${armLEndX} ${armLEndY}`}
              fill="none"
              stroke="#f0b27a"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <circle cx={armLEndX} cy={armLEndY} r="14" fill="#f0b27a" stroke="#d97706" strokeWidth="1.3" />
          </g>

          <g className="nika-hit" onClick={(e) => toggle('neck', e)}>
            <rect
              x={cx - 12}
              y={headCy + headR * 0.35}
              width="24"
              height={Math.max(8, neckLen - headR * 0.2)}
              rx="10"
              fill="url(#nikaBattleSkin)"
            />
          </g>

          <g className="nika-hit" onClick={(e) => toggle('neck', e)}>
            <circle cx={cx} cy={headCy} r={headR} fill="url(#nikaBattleSkin)" stroke="#d97706" strokeWidth="1.5" />
            <g fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1">
              <ellipse cx={cx - 38} cy={headCy - 20} rx="15" ry="19" transform={`rotate(-16 ${cx - 38} ${headCy - 20})`} />
              <ellipse cx={cx - 22} cy={headCy - 38} rx="17" ry="20" transform={`rotate(-6 ${cx - 22} ${headCy - 38})`} />
              <ellipse cx={cx} cy={headCy - 46} rx="21" ry="18" />
              <ellipse cx={cx + 22} cy={headCy - 38} rx="17" ry="20" transform={`rotate(8 ${cx + 22} ${headCy - 38})`} />
              <ellipse cx={cx + 38} cy={headCy - 18} rx="15" ry="19" transform={`rotate(18 ${cx + 38} ${headCy - 18})`} />
              <ellipse cx={cx - 44} cy={headCy + 6} rx="11" ry="15" transform={`rotate(-28 ${cx - 44} ${headCy + 6})`} />
              <ellipse cx={cx + 44} cy={headCy + 6} rx="11" ry="15" transform={`rotate(28 ${cx + 44} ${headCy + 6})`} />
            </g>
            <path
              d={`M${cx - 22} ${headCy - 2}c4-9 14-9 18 0`}
              fill="none"
              stroke="#111827"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d={`M${cx + 4} ${headCy - 2}c4-9 14-9 18 0`}
              fill="none"
              stroke="#111827"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path d={`M${cx + 10} ${headCy + 6}v13`} stroke="#b45309" strokeWidth="2.1" strokeLinecap="round" />
            <path d={`M${cx + 6} ${headCy + 10}h8M${cx + 6} ${headCy + 15}h8`} stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d={`M${cx - 28} ${headCy + 18}c8 18 48 18 56 0c-10 8-46 8-56 0z`}
              fill="#111827"
            />
            <path d={`M${cx - 22} ${headCy + 20}c7 10 37 10 44 0`} fill="#fff" />
            <circle cx={cx - 30} cy={headCy + 12} r="5.5" fill="#fb7185" opacity="0.45" />
            <circle cx={cx + 30} cy={headCy + 12} r="5.5" fill="#fb7185" opacity="0.45" />
          </g>
        </svg>
      </div>
    </div>
  )
}
