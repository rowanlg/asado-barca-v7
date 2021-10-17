import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Dker";
    src: url("../assets/fonts/Dker-Poster.ttf");
  }
  body {
    font-family: Dker;
    color: #fafafa;
    background-color: black;
    p {
      font-family: Abel;
      font-size: 1.2rem;
    }
  }
`

export default GlobalStyles
