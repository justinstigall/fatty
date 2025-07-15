import type { ReactNode } from 'react'

export function Body({ children }: { children: ReactNode }) {
  return (
    <div style={{ paddingTop: '3.5rem', paddingLeft: '1rem', paddingRight: '1rem', width: '100%', boxSizing: 'border-box' }}>
      {children}
    </div>
  )
}