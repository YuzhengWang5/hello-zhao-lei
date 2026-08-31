import type { ReactNode } from 'react'

type FoldItemProps = {
  id: string
  title: string
  meta?: string
  open: boolean
  onToggle: (id: string) => void
  children: ReactNode
}

export function FoldItem({ id, title, meta, open, onToggle, children }: FoldItemProps) {
  return (
    <section className={`fold${open ? ' is-open' : ''}`}>
      <h2 className="fold-head">
        <button
          type="button"
          className="fold-toggle"
          aria-expanded={open}
          aria-label={`${open ? '收起' : '展开'}「${title}」`}
          onClick={() => onToggle(id)}
        >
          <span className="fold-title">{title}</span>
          {meta ? <span className="fold-meta">{meta}</span> : null}
          <span className="fold-mark" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </h2>
      {open ? <div className="fold-body">{children}</div> : null}
    </section>
  )
}
