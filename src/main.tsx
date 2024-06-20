import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import './index.css'

import Home from './pages/Home'
import ExtraPage from './pages/ExtraPage'
import EntryDashboard from './pages/EntryDashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <EntryDashboard />
    </ThemeProvider>
  </React.StrictMode>,
)
