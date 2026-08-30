import { useEffect } from 'react'
import { TimelineItem } from './components/TimelineItem'
import { songs } from './data/songs'
import './styles.css'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-anim')
  }, [])

  return (
    <div className="page">
      <header className="hero">
        <p className="hero-mark">赵雷</p>
        <h1 className="hero-title">三首歌，几个不同的时间。</h1>
        <p className="hero-hint">向下看看</p>
      </header>

      <main className="timeline" aria-label="赵雷三首歌时间线">
        {songs.map((song, index) => (
          <TimelineItem
            key={song.id}
            song={song}
            isLast={index === songs.length - 1}
          />
        ))}
      </main>

      <footer className="footer">
        <p>赵雷 · 三首歌</p>
      </footer>
    </div>
  )
}
