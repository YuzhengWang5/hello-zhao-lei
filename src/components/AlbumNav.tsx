import type { Album } from '../data/albums'

type AlbumNavProps = {
  albums: Album[]
  albumId: string
  onSelectAlbum: (albumId: string) => void
}

export function AlbumNav({ albums, albumId, onSelectAlbum }: AlbumNavProps) {
  return (
    <nav className="album-nav" aria-label="专辑">
      <p className="nav-kicker">专辑</p>
      {albums.map((album) => {
        const current = album.id === albumId
        return (
          <button
            key={album.id}
            type="button"
            className={`nav-album-card${current ? ' is-current' : ''}`}
            onClick={() => onSelectAlbum(album.id)}
            aria-current={current ? 'true' : undefined}
          >
            <img
              className="nav-cover"
              src={album.cover}
              alt={`专辑《${album.title}》封面`}
              width={800}
              height={800}
            />
            <span className="nav-album-name">《{album.title}》</span>
            <time className="nav-album-time" dateTime={album.releasedOn}>
              {album.releasedLabel}
            </time>
          </button>
        )
      })}
    </nav>
  )
}
