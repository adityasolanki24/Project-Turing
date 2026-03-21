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
    <Analytics />
  </React.StrictMode>,
)
