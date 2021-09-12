import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  * {
    padding: none;
    margin: none;
  }

  html,
  body {
    align-items: center;
    justify-content: center;
    padding: none;
    margin: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0000;
  }

  .rootChild{
    margin-top: 5rem;
  }

`;

export default AppStyle;
