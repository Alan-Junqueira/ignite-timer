import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello Code</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}
