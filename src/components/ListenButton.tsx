import { openQQMusic } from '../lib/qqMusic'

type ListenButtonProps = {
  songMid?: string
  fallbackUrl: string
}

export function ListenButton({ songMid, fallbackUrl }: ListenButtonProps) {
  return (
    <button
      type="button"
      className="listen-btn"
      onClick={() => openQQMusic(songMid, fallbackUrl)}
    >
      用 QQ 音乐听
    </button>
  )
}
