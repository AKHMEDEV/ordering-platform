import styled from "styled-components";

export const AuthModalWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
`;

export const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  ${({ $active }) =>
    $active &&
    `
      border-bottom: 2px solid #ff4d4f;
      font-weight: bold;
      color: #ff4d4f;
    `}
`;

export const TabContent = styled.div`
  padding-top: 10px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
  }

  input:focus {
    border-color: #ff9b00;
    box-shadow: 0 0 6px rgba(255, 155, 0, 0.4);
  }

  button {
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: #ff9b00;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #ff7a78;
  }
`;
