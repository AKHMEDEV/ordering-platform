import styled from "styled-components";

export const StyledRestaurantsList = styled.div`
  h2 {
    font-size: 30px;
    font-family: sans-serif;
    margin: 20px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 10px;
  }

  .cardWrapper {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 25px;
      margin: 15px 0;
    }

    .grid {
      grid-template-columns: repeat(
        auto-fill,
        minmax(200px, 1fr)
      );
      gap: 12px;
    }
  }
`;
