import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const renderApplication = (Component: React.ComponentType) => {
  const container = document.getElementById('content')
  if (!container) {
    throw new Error('Could not find element with id "content"')
  }
  const root = createRoot(container)
  root.render(<Component />)
}

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  ;(module as any).hot.accept('./App.tsx', () =>
    renderApplication(require('./App').default),
  )
}

renderApplication(App) 