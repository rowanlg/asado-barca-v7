import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Dker';
    font-style: normal;
    src: local('Dker-Poster'),
    url('../fonts/Dker-Poster.ttf') format('ttf')
  }
  @font-face {
      font-family: 'Asado-Body';
      font-style: normal;
      src: local('Asado-Body'),
      url('../fonts/asado-body-text.ttf') format('ttf')
  }
  body {
    font-family: Dker;
    color: #fafafa;
    background-color: black;
    p {
      font-family: "Asado-Body";
    }
  }
`

export default GlobalStyles
