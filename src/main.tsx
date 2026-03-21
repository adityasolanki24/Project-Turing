import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App'

const rootEl = document.getElementById('root')!
const root = ReactDOM.createRoot(rootEl)

root.render(
  <React.StrictMode>
    <ErrorBoundary fullScreen>
      <App />
    </ErrorBoundary>
    {/* production = sends to Vercel dashboard; development = console only (localhost never shows in dashboard) */}
    <Analytics mode={import.meta.env.PROD ? 'production' : 'development'} debug={import.meta.env.DEV} />
  </React.StrictMode>,
)
