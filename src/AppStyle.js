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
    background: rgb(236,38,116);
background: linear-gradient(90deg, rgba(236,38,116,1) 0%, rgba(238,160,51,1) 100%);
  }

  .rootChild{
    margin-top: 5rem;
  }

 .opacity{
    opacity:0.1;
  }
`;

export default AppStyle;
