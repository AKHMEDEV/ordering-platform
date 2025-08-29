import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 88.8vh;
  padding: 24px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
      1200px 600px at 10% -10%,
      #2b3e5c 0%,
      #1a2a44 40%,
      transparent 70%
    ),
    radial-gradient(
      900px 500px at 120% 20%,
      #ffb74d 0%,
      #ff9b00 35%,
      transparent 65%
    ),
    linear-gradient(35deg, #0f172a, #1f2937);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 992px) {
    min-height: 70vh;
    padding: 20px 16px 24px;
    flex-direction: column;
    align-items: center;
  }
`;

export const VideoBg = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(0.8);
`;

export const TextSection = styled.div`
  flex: 1;
  margin-left: 40px;
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

  @media (max-width: 992px) {
    margin-left: 0;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.1rem;
    }
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
    width: 320px;
    height: 320px;
    object-fit: cover;
    margin-right: 0;
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

  @media (max-width: 992px) {
    img {
      margin: 20px 0 0 0;
      width: 240px;
      height: 240px;
    }
  }
`;

export const VideoSection = styled.section`
  /* margin-top: 24px; */
  /* border-radius: 24px; */
  overflow: hidden;
  position: relative;
  height: 100vh;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent 40%);
    pointer-events: none;
  }

  @media (max-width: 992px) {
    height: 38vh;
  }
`;
