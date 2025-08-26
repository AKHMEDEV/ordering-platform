import styled from "styled-components";

export const StyledCard = styled.div`
  width: 220px;
  min-height: 250px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column; /* elementlarni ustma-ust qo'yadi */
    height: 100%;
    color: inherit;
    flex: 1; /* kartani to'ldiradi */
  }

  .restaurant-image {
    width: 100%;
    height: 75%;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid #ccc;
    transition: transform 0.3s ease;
  }

  &:hover .restaurant-image {
    transform: scale(1.01);
  }

  .restaurant-name {
    margin-top: auto; /* pastga yopishtiradi */
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    background-color: #ff9b00;
  }
`;
