import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: none;
    margin: none;
  }

  html,
  body {
    padding: none;
    margin: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0000;
  }


`;

export default GlobalStyle;
