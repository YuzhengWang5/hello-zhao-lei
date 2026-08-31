import { useEffect, useMemo, useState } from 'react'
import { AlbumNav } from './components/AlbumNav'
import { AlbumView, SongPanel } from './components/AlbumView'
import { albums, findAlbum, findSong, firstAlbum } from './data/albums'
import './styles.css'

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '')
  const [albumId, songId] = raw.split('/')
  const album = albumId ? findAlbum(albumId) : firstAlbum()
  if (!songId) return { album, song: null }
  const found = findSong(album.id, songId)
  return found ? { album: found.album, song: found.song } : { album, song: null }
}

export default function App() {
  const initial = useMemo(() => parseHash(), [])
  const [albumId, setAlbumId] = useState(initial.album.id)
  const [songId, setSongId] = useState<string | null>(initial.song?.id ?? null)
  const [navOpen, setNavOpen] = useState(false)

  const album = findAlbum(albumId)
  const song = songId ? (findSong(album.id, songId)?.song ?? null) : null

  useEffect(() => {
    document.documentElement.classList.add('js-anim')
  }, [])

  useEffect(() => {
    const next = song ? `#${album.id}/${song.id}` : `#${album.id}`
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next)
    }
    document.title = song
      ? `《${song.title}》 · ${album.title}`
      : `《${album.title}》 · 赵雷`
  }, [album, song])

  function selectAlbum(nextAlbumId: string) {
    setAlbumId(nextAlbumId)
    setSongId(null)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function selectSong(nextSongId: string) {
    setSongId(nextSongId)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-brand">
          <p className="brand-name">赵雷</p>
          <p className="brand-sub">先听《赵小雷》。</p>
        </div>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={navOpen}
          aria-controls="album-nav-panel"
        >
          {navOpen ? '收起专辑' : '专辑'}
        </button>
      </header>

      <div className="layout">
        <aside
          id="album-nav-panel"
          className={`sidebar${navOpen ? ' is-open' : ''}`}
        >
          <AlbumNav
            albums={albums}
            albumId={album.id}
            onSelectAlbum={selectAlbum}
          />
        </aside>

        <main className="main">
          {song ? (
            <SongPanel album={album} song={song} onSelectSong={selectSong} />
          ) : (
            <AlbumView album={album} onSelectSong={selectSong} />
          )}
        </main>
      </div>
    </div>
  )
}
