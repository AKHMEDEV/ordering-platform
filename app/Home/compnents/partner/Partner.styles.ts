import styled from "styled-components";

export const StyledPartners = styled.div`
  .header {
    margin: 20px 0;

    h2 {
      font-size: 30px;
      font-family: sans-serif;
      margin: 20px 0;
    }
  }

  .cardsWrapper {
    margin-top: 5vh;
    display: flex;
    gap: 25px;
    margin-bottom: 5vh;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 992px) {
    .header h2 {
      font-size: 24px;
      text-align: center;
    }

    .cardsWrapper {
      gap: 16px;
      margin: 15px;
    }
  }
`;
