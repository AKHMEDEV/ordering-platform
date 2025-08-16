import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background-color: #EEEEEE40;
  }

  .container {
    width: 100%;
    max-width: 1428px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;