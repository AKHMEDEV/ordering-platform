import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background-color: rgb(248, 249, 250);
  }

  .container {
    width: 80%;
    max-width: 1428px;
    margin: 0 auto;
    /* padding: 15px 30px; */
  }

  /* Tablet styles */
  @media (max-width: 992px) {
    .container {
      width: 92%;
      padding: 12px 16px;
    }
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .container {
      width: 95%;
      padding: 10px 12px;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .container {
      width: 98%;
      padding: 8px 10px;
    }
  }

  /* Extra small mobile styles */
  @media (max-width: 360px) {
    .container {
      width: 100%;
      padding: 6px 8px;
    }
  }
`;
