import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
