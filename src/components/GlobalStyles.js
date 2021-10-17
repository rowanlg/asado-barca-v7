import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Dker';
    font-style: normal;
    src: local('Dker-Poster'),
    url('../assets/fonts/Dker-Poster.ttf') format('ttf')
  }
  @font-face {
      font-family: 'Asado-Body';
      font-style: normal;
      src: local('Asado-Body'),
      url('../assets/fonts/asado-body-text.ttf') format('ttf')
  }
  body {
    font-family: Dker;
    color: #fafafa;
    background-color: black;
    p {
      font-family: "Asado-Body";
      font-size: 1.2rem;
    }
  }
`

export default GlobalStyles
