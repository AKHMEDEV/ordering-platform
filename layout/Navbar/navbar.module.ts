import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledNavbar = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;
    font-family: "Quicksand", sans-serif;
    width: 85%;
    max-width: 1428px;
    padding: 15px 30px;
    background-color: #ffff;
    backdrop-filter: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 61px;
    border-radius: 16px;
    animation: ${fadeIn} 0.8s ease forwards;
  }

  .logo {
    font-size: 28px;
    font-weight: 700;
    color: #2c3e50;
    display: flex;
    align-items: center;
  }

  .logoHighlight {
    color: #e67e22;
    margin-left: 5px;
  }

  .navLinks {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .navItem {
    margin-left: 30px;
  }

  .navLink {
    text-decoration: none;
    color: #34495e;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 20px;
    transition: all 0.3s ease, transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navLink:hover {
    color: #e67e22;
    transform: scale(1.05);
  }

  .navLink.active {
    background-color: #e67e22;
    color: #ffffff;
  }

  .navButton {
    text-decoration: none;
    color: #ffffff;
    background-color: #2c3e50;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.3s ease, transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navButton:hover {
    background-color: #34495e;
    transform: translateY(-2px) scale(1.05);
  }

  .basketLink {
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .basketIcon {
    width: 24px;
    height: 24px;
    filter: invert(28%) sepia(20%) saturate(1000%) hue-rotate(190deg)
      brightness(90%) contrast(85%);
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.2s ease, filter 0.3s ease;
  }

  .basketLink:hover {
    transform: scale(1.05);
  }

  .basketIcon:hover {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(8deg)
      brightness(94%) contrast(94%);
    transform: scale(1.1);
  }

  .activeBasket {
    background-color: #e67e22;
  }

  .activeBasket .basketIcon {
    filter: brightness(0) invert(1);
  }
`;
