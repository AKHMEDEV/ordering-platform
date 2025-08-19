import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 650px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background: linear-gradient(to right, #1a2a44 0% 65%, #ff9b00 65% 100%);

    -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><path d='M0,0 Q20,35 40,25 T80,25 Q90,35 100,20 L100,0 L100,100 L0,100 Z' fill='%23ffffff'/></svg>");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;

    mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><path d='M0,0 Q20,35 40,25 T80,25 Q90,35 100,20 L100,0 L100,100 L0,100 Z' fill='%23ffffff'/></svg>");
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  margin-left: 100px;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;

  h1 {
    font-size: 3em;
    margin: 0;
    font-family: "Quicksand", sans-serif;
  }

  h2 {
    font-size: 3.5em;
    margin: 10px 0;
  }

  p {
    font-size: 1.4em;
    margin: 10px 0;
    color: #ff9b00;
  }
`;


export const Button = styled.button`
  background-color: #1a2a44;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  padding: 10px 20px;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #ffffff;
    color: #1a2a44;
  }
`;


export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 350px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    animation: float 4s ease-in-out infinite;
  }

  img:hover {
    transform: scale(1.08);
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
