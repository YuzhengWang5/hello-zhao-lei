import { ListenButton } from './ListenButton'
import type { Album, Song } from '../data/albums'

type SongViewProps = {
  album: Album
  song: Song
}

export function SongView({ album, song }: SongViewProps) {
  return (
    <article className="song-view" key={`${album.id}-${song.id}`}>
      <header className="song-head">
        <p className="song-head-meta">
          {album.year} · 《{album.title}》 · {String(song.track).padStart(2, '0')}
        </p>
        <h1 className="song-head-title">《{song.title}》</h1>
        <p className="song-head-album">{album.intro}</p>
      </header>

      <div className="song-columns">
        <section className="lyric-col" aria-labelledby="lyric-heading">
          <h2 id="lyric-heading" className="col-title">
            歌词
          </h2>
          {song.lyricExcerpt ? (
            <blockquote className="lyric-card">
              <p className="lyric-label">摘句</p>
              <p className="lyric-text">「{song.lyricExcerpt}」</p>
            </blockquote>
          ) : (
            <p className="lyric-empty">这首暂时只保留听歌入口，不摘句。</p>
          )}
          <p className="lyric-note">
            完整歌词受版权保护，本站不收录、不按行展示全词。安卓 / 鸿蒙会尽量直接打开
            QQ 音乐 App 播放；没装 App 时再打开官方单曲页。
          </p>
          <ListenButton songMid={song.qqSongMid} fallbackUrl={song.listenUrl} />
        </section>

        <section className="essay-col" aria-labelledby="essay-heading">
          <h2 id="essay-heading" className="col-title">
            背景与赏析
          </h2>
          <h3 className="essay-label">创作背景</h3>
          <p className="essay-body">{song.background}</p>
          <h3 className="essay-label">作词赏析</h3>
          <p className="essay-body">{song.analysis}</p>
        </section>
      </div>
    </article>
  )
}
