import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";

import { ligthTheme } from "../styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
