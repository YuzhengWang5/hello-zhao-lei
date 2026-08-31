import { useEffect, useMemo, useState } from 'react'
import { AlbumNav } from './components/AlbumNav'
import { AlbumIntro, MobileStack, SongDetail, SongNav } from './components/DesktopPanels'
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
  const [albumPickerOpen, setAlbumPickerOpen] = useState(false)

  const album = findAlbum(albumId)
  const song = songId ? (findSong(album.id, songId)?.song ?? null) : null

  useEffect(() => {
    document.documentElement.classList.add('js-anim')
  }, [])

  useEffect(() => {
    function onHashChange() {
      const next = parseHash()
      setAlbumId(next.album.id)
      setSongId(next.song?.id ?? null)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
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

  useEffect(() => {
    if (!albumPickerOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setAlbumPickerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [albumPickerOpen])

  function selectAlbum(nextAlbumId: string) {
    setAlbumId(nextAlbumId)
    setSongId(null)
    setAlbumPickerOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function selectSong(nextSongId: string) {
    setSongId(nextSongId)
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
          onClick={() => setAlbumPickerOpen((open) => !open)}
          aria-expanded={albumPickerOpen}
          aria-controls="album-picker"
        >
          {albumPickerOpen ? '关闭' : '选择专辑'}
        </button>
      </header>

      <div
        id="album-picker"
        className={`album-curtain${albumPickerOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="picker-title"
        aria-hidden={!albumPickerOpen}
        inert={!albumPickerOpen}
      >
        <p id="picker-title" className="curtain-kicker">
          选择一张专辑
        </p>
        <AlbumNav
          albums={albums}
          albumId={album.id}
          onSelectAlbum={selectAlbum}
        />
      </div>

      <div className="desktop-layout">
        <aside className="col-album">
          <AlbumNav
            albums={albums}
            albumId={album.id}
            onSelectAlbum={selectAlbum}
          />
        </aside>
        <aside className="col-songs">
          <SongNav album={album} songId={song?.id} onSelectSong={selectSong} />
        </aside>
        <main className="col-detail">
          {song ? (
            <SongDetail album={album} song={song} />
          ) : (
            <AlbumIntro album={album} />
          )}
        </main>
      </div>

      <main className="mobile-main">
        <MobileStack key={album.id} album={album} />
      </main>
    </div>
  )
}
