import type { ReactNode } from 'react'

/** 把 `**加粗**` 转成 <strong>，其余按普通文本输出。 */
export function renderMarkedText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}
