import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/global.css'
import App from './App.tsx'
import { getSeason, PORTRAIT_PATH } from './utils/season'

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

if (favicon) {
    favicon.href = `${PORTRAIT_PATH}/${getSeason().name}.png`
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
