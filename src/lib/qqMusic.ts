export function qqPlayPage(songMid: string) {
  return `https://i.y.qq.com/v8/playsong.html?songmid=${encodeURIComponent(songMid)}`
}

export function qqAppScheme(songMid: string) {
  const payload = encodeURIComponent(JSON.stringify({ song: [{ songmid: songMid }] }))
  return `qqmusic://qq.com/media/playSonglist?p=${payload}`
}

export function isAndroidLike() {
  const ua = navigator.userAgent
  return /Android|HarmonyOS|OpenHarmony|HUAWEI|HONOR|Harmony/i.test(ua)
}

export function isWeChat() {
  return /MicroMessenger/i.test(navigator.userAgent)
}

export function openQQMusic(songMid: string | undefined, fallbackUrl: string) {
  const webUrl = songMid ? qqPlayPage(songMid) : fallbackUrl

  if (!songMid || !isAndroidLike()) {
    window.open(webUrl, '_blank', 'noopener,noreferrer')
    return
  }

  // 微信里自定义 scheme 常被拦，官方单曲页自己会尝试拉起 App。
  if (isWeChat()) {
    window.location.href = webUrl
    return
  }

  const started = Date.now()
  window.location.href = qqAppScheme(songMid)

  window.setTimeout(() => {
    if (document.hidden || document.visibilityState === 'hidden') return
    if (Date.now() - started < 800) return
    window.location.href = webUrl
  }, 1400)
}
