import { useCallback, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'

type MobileLyricEssaySplitProps = {
  lyrics: string
  essay: ReactNode
}

export function MobileLyricEssaySplit({ lyrics, essay }: MobileLyricEssaySplitProps) {
  const [pos, setPos] = useState(50)
  const frameRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    if (rect.width <= 0) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(90, Math.max(10, next)))
  }, [])

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    updateFromClientX(event.clientX)
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
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
        aria-valuemin={10}
        aria-valuemax={90}
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
            setPos((current) => Math.max(10, current - 5))
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            setPos((current) => Math.min(90, current + 5))
          }
        }}
      >
        <span className="mobile-split-line" aria-hidden="true" />
        <span className="mobile-split-thumb" aria-hidden="true" />
      </div>
    </div>
  )
}
