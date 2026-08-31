import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'

type MobileLyricEssaySplitProps = {
  lyrics: string
  essay: ReactNode
}

/** 滑轨离左右边缘的最小距离（px） */
const EDGE_PX = 8
/** 判定为横向拖动的位移阈值（px） */
const AXIS_LOCK_PX = 6

export function MobileLyricEssaySplit({ lyrics, essay }: MobileLyricEssaySplitProps) {
  const [pos, setPos] = useState(50)
  const frameRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<{
    pointerId: number | null
    startX: number
    startY: number
    locked: 'x' | 'y' | null
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    locked: null,
  })

  const clampPos = useCallback((clientX: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    if (rect.width <= 0) return
    const minPct = (EDGE_PX / rect.width) * 100
    const maxPct = 100 - minPct
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(maxPct, Math.max(minPct, next)))
  }, [])

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      locked: null,
    }
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const state = dragState.current
    if (state.pointerId !== event.pointerId) return

    const dx = event.clientX - state.startX
    const dy = event.clientY - state.startY

    if (!state.locked) {
      if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return
      if (Math.abs(dy) > Math.abs(dx)) {
        // 纵向滑动：交给页面滚动，不锁定滑轨
        state.locked = 'y'
        return
      }
      state.locked = 'x'
      event.currentTarget.setPointerCapture(event.pointerId)
    }

    if (state.locked !== 'x') return
    event.preventDefault()
    clampPos(event.clientX)
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const state = dragState.current
    if (state.pointerId !== event.pointerId) return
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragState.current = {
      pointerId: null,
      startX: 0,
      startY: 0,
      locked: null,
    }
  }

  function nudge(delta: number) {
    const frame = frameRef.current
    if (!frame) return
    const width = frame.getBoundingClientRect().width
    const minPct = (EDGE_PX / width) * 100
    const maxPct = 100 - minPct
    setPos((current) => Math.min(maxPct, Math.max(minPct, current + delta)))
  }

  return (
    <div
      ref={frameRef}
      className="mobile-split"
      style={{ '--split': `${pos}%` } as CSSProperties}
    >
      <section className="mobile-split-panel is-lyrics" aria-label="歌词">
        <p className="mobile-split-label">歌词</p>
        <p className="lyric-full">{lyrics}</p>
      </section>

      <section className="mobile-split-panel is-essay" aria-label="赏析">
        <p className="mobile-split-label">赏析</p>
        {essay}
      </section>

      <div
        className="mobile-split-rail"
        role="slider"
        aria-label="左右滑动切换歌词与赏析"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`左侧歌词 ${Math.round(pos)}%，右侧赏析 ${Math.round(100 - pos)}%`}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            nudge(-4)
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            nudge(4)
          }
        }}
      >
        <span className="mobile-split-line" aria-hidden="true" />
        <span className="mobile-split-thumb" aria-hidden="true" />
      </div>
    </div>
  )
}
