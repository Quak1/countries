import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";

import { ligthTheme, darkTheme } from "../styles/themes";
import useDarkMode from "../hooks/useDarkMode";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { darkModeActive, toggleTheme } = useDarkMode();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={darkModeActive ? darkTheme : ligthTheme}>
      <GlobalStyle />
      {isMounted && (
        <>
          <Header darkModeActive={darkModeActive} toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}
