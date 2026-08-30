import { useEffect, useMemo, useState } from 'react'
import { AlbumNav } from './components/AlbumNav'
import { SongView } from './components/SongView'
import { albums, findSong, firstSong } from './data/albums'
import './styles.css'

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '')
  const [albumId, songId] = raw.split('/')
  if (!albumId || !songId) return firstSong()
  return findSong(albumId, songId) ?? firstSong()
}

export default function App() {
  const initial = useMemo(() => parseHash(), [])
  const [albumId, setAlbumId] = useState(initial.album.id)
  const [songId, setSongId] = useState(initial.song.id)
  const [navOpen, setNavOpen] = useState(false)

  const selected = findSong(albumId, songId) ?? firstSong()

  useEffect(() => {
    document.documentElement.classList.add('js-anim')
  }, [])

  useEffect(() => {
    const next = `#${selected.album.id}/${selected.song.id}`
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next)
    }
    document.title = `《${selected.song.title}》 · ${selected.album.title}`
  }, [selected])

  function selectSong(nextAlbumId: string, nextSongId: string) {
    setAlbumId(nextAlbumId)
    setSongId(nextSongId)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-brand">
          <p className="brand-name">赵雷</p>
          <p className="brand-sub">两张专辑，一条时间。</p>
        </div>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={navOpen}
          aria-controls="album-nav-panel"
        >
          {navOpen ? '收起曲目' : '曲目'}
        </button>
      </header>

      <div className="layout">
        <aside
          id="album-nav-panel"
          className={`sidebar${navOpen ? ' is-open' : ''}`}
        >
          <AlbumNav
            albums={albums}
            albumId={selected.album.id}
            songId={selected.song.id}
            onSelect={selectSong}
          />
        </aside>

        <main className="main">
          <SongView album={selected.album} song={selected.song} />
        </main>
      </div>
    </div>
  )
}
