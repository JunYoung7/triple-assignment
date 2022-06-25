import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './globalStyle'
import SectionPage from './pages/SectionPage/SectionPage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <SectionPage />
  </React.StrictMode>,
)
