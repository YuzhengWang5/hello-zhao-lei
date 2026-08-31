import { openQQMusic } from '../lib/qqMusic'

type PlayButtonProps = {
  songMid?: string
  fallbackUrl: string
  label?: string
}

export function PlayButton({
  songMid,
  fallbackUrl,
  label = '播放',
}: PlayButtonProps) {
  return (
    <button
      type="button"
      className="play-disc"
      onClick={() => openQQMusic(songMid, fallbackUrl)}
      aria-label={`用 QQ 音乐${label}`}
    >
      <svg className="play-disc-icon" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="34" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M29 22.5v27L51 36Z" fill="currentColor" />
      </svg>
    </button>
  )
}
