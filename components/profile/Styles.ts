import styled from "styled-components";

export const ProfileWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: ${({ active }) => (active ? "#4caf50" : "#f0f0f0")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${({ active }) => (active ? "#45a049" : "#e0e0e0")};
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Badge = styled.span<{ status?: string }>`
  padding: 3px 8px;
  border-radius: 5px;
  background-color: ${({ status }) =>
    status === "DELIVERED"
      ? "#4caf50"
      : status === "PENDING"
      ? "#ff9800"
      : "#ccc"};
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;
