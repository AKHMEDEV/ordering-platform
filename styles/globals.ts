import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
background-color: rgb(248, 249, 250)  }

  .container {
    width: 80%;
    max-width: 1428px;
    margin: 0 auto;
    padding: 15px 30px;
  }

`;
