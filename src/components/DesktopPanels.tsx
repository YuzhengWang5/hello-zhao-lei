import { useState } from 'react'
import { FoldItem } from './FoldItem'
import { MobileLyricEssaySplit } from './MobileLyricEssaySplit'
import { PlayButton } from './PlayButton'
import type { Album, Song } from '../data/albums'
import { renderMarkedText } from '../lib/richText'

const RELATED_TAG = '09年创作'

function useFolds(initial: string[]) {
  const [openIds, setOpenIds] = useState<string[]>(initial)

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return { toggle, isOpen: (id: string) => openIds.includes(id) }
}

type SongNavProps = {
  album: Album
  songId?: string | null
  onSelectSong: (songId: string) => void
}

export function SongNav({ album, songId, onSelectSong }: SongNavProps) {
  return (
    <nav className="song-nav" aria-label={`${album.title}歌曲`}>
      <p className="col-kicker">选歌</p>
      <ol className="song-nav-list">
        {album.songs.map((song, index) => (
          <li key={song.id}>
            <button
              type="button"
              className={`song-nav-item${song.id === songId ? ' is-current' : ''}`}
              onClick={() => onSelectSong(song.id)}
              aria-current={song.id === songId ? 'true' : undefined}
            >
              <span className="song-nav-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="song-nav-title">{song.title}</span>
              {song.relatedNote ? <span className="song-nav-tag">{RELATED_TAG}</span> : null}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function paragraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)
}

function SongEssay({ song }: { song: Song }) {
  return (
    <>
      {song.relatedNote ? <p className="song-related">{song.relatedNote}</p> : null}
      {paragraphs(song.essay).map((paragraph, index) => (
        <p key={index} className="essay-body">
          {renderMarkedText(paragraph)}
        </p>
      ))}
    </>
  )
}

export function AlbumIntro({ album }: { album: Album }) {
  return (
    <article className="detail-panel">
      <p className="detail-meta">{album.releasedLabel} · 第一张专辑</p>
      <h1 className="detail-title">《{album.title}》</h1>
      <p className="detail-lead">{album.intro}</p>
      <p className="detail-hint">从中间栏点一首歌，右边会出现播放、摘句和赏析。</p>
      <h2 className="col-title">专辑导语</h2>
      {paragraphs(album.background).map((paragraph, index) => (
        <p key={index} className="essay-body">
          {paragraph}
        </p>
      ))}
    </article>
  )
}

export function SongDetail({ album, song }: { album: Album; song: Song }) {
  return (
    <article className="detail-panel" key={song.id}>
      <p className="detail-meta">
        {song.originAlbum
          ? `${song.originYear} · 《${song.originAlbum}》`
          : `${album.year} · 《${album.title}》`}
      </p>
      <h1 className="detail-title">《{song.title}》</h1>

      <div className="now-playing">
        <PlayButton songMid={song.qqSongMid} fallbackUrl={song.listenUrl} />
        <div className="lyric-side">
          <p className="lyric-label">摘句</p>
          {song.lyricExcerpt ? (
            <p className="lyric-text">「{song.lyricExcerpt}」</p>
          ) : (
            <p className="lyric-text lyric-empty">这一首尚未收录摘句。</p>
          )}
          <p className="lyric-note">点左侧大图标，会尽量打开 App 播放。</p>
        </div>
      </div>

      <div className="lyric-essay-row">
        <section className="lyric-essay-col">
          <h2 className="col-title">歌词</h2>
          <p className="lyric-full">{song.lyrics}</p>
        </section>
        <section className="lyric-essay-col">
          <h2 className="col-title">赏析</h2>
          <SongEssay song={song} />
        </section>
      </div>
    </article>
  )
}

export function MobileStack({ album }: { album: Album }) {
  const folds = useFolds(['album'])

  return (
    <div className="mobile-stack">
      <p className="mobile-album-name">《{album.title}》</p>
      <p className="mobile-album-time">{album.releasedLabel}</p>

      <FoldItem
        id="album"
        title="专辑介绍"
        meta="导语"
        open={folds.isOpen('album')}
        onToggle={folds.toggle}
      >
        <p className="detail-lead">{album.intro}</p>
        {paragraphs(album.background).map((paragraph, index) => (
          <p key={index} className="essay-body">
            {paragraph}
          </p>
        ))}
      </FoldItem>

      {album.songs.map((song) => (
        <FoldItem
          key={song.id}
          id={song.id}
          title={song.title}
          meta={song.relatedNote ? RELATED_TAG : undefined}
          open={folds.isOpen(song.id)}
          onToggle={folds.toggle}
        >
          <div className="mobile-song-head">
            <PlayButton songMid={song.qqSongMid} fallbackUrl={song.listenUrl} />
            <div className="mobile-song-excerpt">
              <p className="lyric-label">摘句</p>
              {song.lyricExcerpt ? (
                <p className="lyric-text">「{song.lyricExcerpt}」</p>
              ) : (
                <p className="lyric-text lyric-empty">这一首尚未收录摘句。</p>
              )}
            </div>
          </div>
          <MobileLyricEssaySplit
            lyrics={song.lyrics}
            essay={<SongEssay song={song} />}
          />
        </FoldItem>
      ))}
    </div>
  )
}
