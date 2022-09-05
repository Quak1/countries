import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../styles/themes";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        background-color: ${({ theme }) => theme.colors.background};
    }
    * {
    box-sizing: border-box;
    }

    // @media (prefers-color-scheme: dark) {
    //   html {
    //     color-scheme: dark;
    //   }
    //   body {
    //     color: white;
    //     background: black;
    //   }
    // }
`;

export default GlobalStyle;
