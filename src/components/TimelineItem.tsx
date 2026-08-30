import { useEffect, useRef, useState } from 'react'
import type { Song } from '../data/songs'

type TimelineItemProps = {
  song: Song
  isLast: boolean
}

export function TimelineItem({ song, isLast }: TimelineItemProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`timeline-item${visible ? ' is-visible' : ''}${isLast ? ' is-last' : ''}`}
    >
      <time className="timeline-year" dateTime={String(song.year)}>
        {song.year}
      </time>

      <div className="timeline-axis" aria-hidden="true">
        <span className="timeline-dot" />
        {!isLast ? <span className="timeline-stem" /> : null}
      </div>

      <div className="timeline-body">
        <h2 className="song-title">《{song.title}》</h2>
        <p className="song-meta">
          {song.year} · {song.album}
        </p>
        <p className="song-intro">{song.intro}</p>
        <p className="song-desc">{song.description}</p>

        <blockquote className="lyric">
          <p className="lyric-label">歌词摘句</p>
          <p className="lyric-text">「{song.lyricExcerpt}」</p>
        </blockquote>

        <a
          className="listen-btn"
          href={song.listenUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          去 QQ 音乐听
        </a>
      </div>
    </article>
  )
}
