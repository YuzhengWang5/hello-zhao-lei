import type { Album } from '../data/albums'

type AlbumNavProps = {
  albums: Album[]
  albumId: string
  songId: string
  onSelect: (albumId: string, songId: string) => void
}

export function AlbumNav({ albums, albumId, songId, onSelect }: AlbumNavProps) {
  return (
    <nav className="album-nav" aria-label="专辑与曲目">
      <p className="nav-kicker">按时间</p>
      {albums.map((album) => (
        <section key={album.id} className="nav-album">
          <p className="nav-album-year">{album.year}</p>
          <h2 className="nav-album-title">《{album.title}》</h2>
          <ol className="nav-songs">
            {album.songs.map((song) => {
              const current = album.id === albumId && song.id === songId
              return (
                <li key={song.id}>
                  <button
                    type="button"
                    className={`nav-song${current ? ' is-current' : ''}`}
                    onClick={() => onSelect(album.id, song.id)}
                    aria-current={current ? 'true' : undefined}
                  >
                    <span className="nav-track">{String(song.track).padStart(2, '0')}</span>
                    {song.title}
                  </button>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </nav>
  )
}
