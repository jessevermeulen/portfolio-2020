import { createGlobalStyle } from "styled-components"
import InterRomanVar from "../assets/fonts/Inter-roman.var.woff2"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url(${InterRomanVar}) format("woff2");
  }

  :root {
    --variable-font-size: 6rem;
    --variable-font-margin: 3rem;

    @media (max-width: 48rem) {
      --variable-font-size: 3rem;
      --variable-font-margin: 2.25rem;
    }
  }

  html,
  body,
  #___gatsby,
  #___gatsby div,
  main {
    height: 100%;
  }

  html {
    font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }
  
  h1,
  p {
    margin: 0;
  }
`

export default GlobalStyle
