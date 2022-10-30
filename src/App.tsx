import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/themes/default'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
