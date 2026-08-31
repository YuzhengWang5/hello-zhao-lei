import { ListenButton } from './ListenButton'
import type { Album, Song } from '../data/albums'
import { renderMarkedText } from '../lib/richText'

type SongNavProps = {
  album: Album
  songId?: string | null
  onSelectSong: (songId: string) => void
}

export function SongNav({ album, songId, onSelectSong }: SongNavProps) {
  return (
    <nav className="song-nav" aria-label={`${album.title}想介绍的歌`}>
      <p className="song-nav-kicker">这一张里想先听的</p>
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
              {song.relatedNote ? <span className="song-nav-tag">09年创作</span> : null}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

type AlbumViewProps = {
  album: Album
  onSelectSong: (songId: string) => void
}

export function AlbumView({ album, onSelectSong }: AlbumViewProps) {
  return (
    <article className="album-view">
      <header className="album-head">
        <p className="album-head-meta">
          {album.releasedLabel} · 第一张专辑
        </p>
        <h1 className="album-head-title">《{album.title}》</h1>
        <p className="album-head-intro">{album.intro}</p>
      </header>

      <section className="essay-col">
        <h2 className="col-title">专辑导语</h2>
        {album.background
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean)
          .map((paragraph, index) => (
            <p key={index} className="essay-body">
              {paragraph}
            </p>
          ))}
      </section>

      <SongNav album={album} onSelectSong={onSelectSong} />
    </article>
  )
}

type SongViewProps = {
  album: Album
  song: Song
  onSelectSong: (songId: string) => void
}

export function SongPanel({
  album,
  song,
  onSelectSong,
}: SongViewProps) {
  return (
    <article className="song-view" key={`${album.id}-${song.id}`}>
      <SongNav album={album} songId={song.id} onSelectSong={onSelectSong} />

      <header className="song-head">
        <p className="song-head-meta">
          {song.originAlbum
            ? `${song.originYear} · 《${song.originAlbum}》`
            : `${album.year} · 《${album.title}》`}
          {song.track ? ` · ${String(song.track).padStart(2, '0')}` : ''}
        </p>
        <h1 className="song-head-title">《{song.title}》</h1>
        {song.relatedNote ? <p className="song-related">{song.relatedNote}</p> : null}
      </header>

      <section className="essay-col">
        <h2 className="col-title">歌词</h2>
        <p className="lyric-full">{song.lyrics}</p>
      </section>

      <section className="essay-col">
        <h2 className="col-title">赏析</h2>
        {song.essay
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean)
          .map((paragraph, index) => (
            <p key={index} className="essay-body">
              {renderMarkedText(paragraph)}
            </p>
          ))}
        {song.lyricExcerpt ? (
          <p className="lyric-text">「{song.lyricExcerpt}」</p>
        ) : null}
        <div className="listen-wrap">
          <ListenButton songMid={song.qqSongMid} fallbackUrl={song.listenUrl} />
        </div>
      </section>
    </article>
  )
}
