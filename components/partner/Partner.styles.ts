import styled from "styled-components";

export const CardContainer = styled.div<{ $bg: string }>`
  position: relative;
  width: 590px;
  height: 340px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  border-radius: 14px;  
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  z-index: 1;
`;

export const Badge = styled.div`
  position: absolute;
  left: 35px;
  background: #fff;
  color: #000;
  cursor: pointer;
  padding: 10px 18px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 16px;
  font-weight: 600;
  z-index: 2;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #fff;
  max-width: 400px;
  z-index: 2;
`;

export const SmallText = styled.div`
  color: #fd7e14;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ff9b00;
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #e68a00;
  }
`;
